# ================================================================
# Flask API Server for ML Model Integration (LPU VERSION)
# Connects Param's ML Pipeline to Diwaker's Frontend
# ================================================================

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import sys
import os
import pickle
from datetime import datetime

# Add ML folder to path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'ml'))

try:
    from param_ml_pipeline import DropoutPredictor, EarlyWarningSystem
    import param_ml_pipeline
    print(f"DEBUG: Importing ML module from: {param_ml_pipeline.__file__}")
    ML_AVAILABLE = True
except ImportError as e:
    print(f"WARNING: ML Pipeline not found: {e}")
    ML_AVAILABLE = False

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')
CORS(app)

# Serve Frontend
@app.route("/")
def serve():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# Initialize ML components
if ML_AVAILABLE:
    try:
        predictor = DropoutPredictor()
        model_path = os.path.join(os.path.dirname(__file__), '..', 'ml', 'dropout_prediction_model.pkl')
        csv_path = os.path.join(os.path.dirname(__file__), '..', 'ml', 'final_clean_students_14k.csv')
        
        # Always re-train for fresh LPU data
        print("INFO: Training fresh model for LPU data...")
        data = predictor.load_data(csv_path)
        labels = predictor.create_dropout_labels()
        X, y = predictor.prepare_features()
        predictor.train_model(X, y)
        predictor.save_model(model_path)
        print("OK: LPU model trained and saved")
        
        ews = EarlyWarningSystem(predictor)
        print("OK: ML Pipeline initialized successfully")
    except Exception as e:
        print(f"ERROR: ML initialization failed: {e}")
        ML_AVAILABLE = False

# ================================================================
# API Endpoints
# ================================================================

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'university': 'LPU',
        'ml_available': ML_AVAILABLE,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/students', methods=['GET'])
def get_all_students():
    try:
        if not ML_AVAILABLE: return jsonify({'error': 'ML unavailable'}), 500
        
        csv_path = os.path.join(os.path.dirname(__file__), '..', 'ml', 'final_clean_students_14k.csv')
        df = pd.read_csv(csv_path)
        
        limit = request.args.get('limit', 100, type=int)
        dept = request.args.get('department')
        if dept: df = df[df['Department'] == dept]
        
        students_list = []
        for _, student in df.head(limit).iterrows():
            try:
                pred = predictor.predict_dropout_risk(student)
                recs = predictor.generate_recommendations(student, pred)
                
                students_list.append({
                    'Student_ID': student['Student_ID'],
                    'Name': student['Name'],
                    'Roll_No': student['Roll_No'],
                    'Department': student['Department'],
                    'Semester': int(student['Semester']),
                    'Attendance_Percentage': float(student['Attendance_Percentage']),
                    'Monthly_Attendance': float(student['Monthly_Attendance']),
                    'Avg_Test_Score': float(student['Avg_Test_Score']),
                    'Last_Test_Score': float(student['Last_Test_Score']),
                    'Subjects_Failed': int(student['Subjects_Failed']),
                    'Fee_Due_Days': int(student['Fee_Due_Days']),
                    'dropout_risk': pred['risk_score'],
                    'risk_level': pred['risk_level'],
                    'confidence': pred['confidence'],
                    'recommendations': recs[:3],
                    'Recent_Subjects': student['Recent_Subjects'].split("|") if 'Recent_Subjects' in student and pd.notna(student['Recent_Subjects']) else []
                })
            except Exception as e:
                print(f"ERROR on {student['Student_ID']}: {e}")
                continue
                
        return jsonify({'data': students_list, 'total': len(students_list)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/priority-students', methods=['GET'])
def get_priority():
    try:
        csv_path = os.path.join(os.path.dirname(__file__), '..', 'ml', 'final_clean_students_14k.csv')
        df = pd.read_csv(csv_path)
        
        # Calculate urgency score in backend if ews.get_priority_students doesn't include it
        priority_df = ews.get_priority_students(df, top_n=10)
        
        # Format for frontend
        results = []
        for _, row in priority_df.iterrows():
            results.append({
                'Student_ID': row['Student_ID'],
                'Name': row['Name'],
                'Department': row['Department'],
                'urgency_score': float(row['urgency_score']),
                'Attendance_Percentage': float(row['Attendance_Percentage']),
                'Avg_Test_Score': float(row['Avg_Test_Score']),
                'Total_Risk_Flags': int(row['Total_Risk_Flags'])
            })
            
        return jsonify({'priority_students': results, 'count': len(results)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/analytics/dashboard', methods=['GET'])
def get_analytics():
    try:
        csv_path = os.path.join(os.path.dirname(__file__), '..', 'ml', 'final_clean_students_14k.csv')
        df = pd.read_csv(csv_path)
        
        return jsonify({
            'total_students': len(df),
            'department_distribution': df['Department'].value_counts().to_dict(),
            'risk_distribution': {
                'low_risk': len(df[df['Total_Risk_Flags'] == 0]),
                'medium_risk': len(df[df['Total_Risk_Flags'].between(1, 2)]),
                'high_risk': len(df[df['Total_Risk_Flags'] >= 3])
            },
            'attendance_stats': {
                'average': float(df['Attendance_Percentage'].mean()),
                'below_75': len(df[df['Attendance_Percentage'] < 75])
            },
            'academic_stats': {
                'average_score': float(df['Avg_Test_Score'].mean()),
                'failing_students': len(df[df['Subjects_Failed'] > 0])
            },
            'fee_stats': df['Fee_Status'].value_counts().to_dict()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = 5005
    print(f"Starting LPU-Edition Backend on Port {port}...")
    app.run(debug=True, host='0.0.0.0', port=port)