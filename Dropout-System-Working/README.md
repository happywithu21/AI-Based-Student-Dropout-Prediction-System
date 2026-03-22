# 🤖 AI-Based Student Dropout Prediction System

**Complete Integration of ML Pipeline with Web Interface for Smart India Hackathon (SIH) 2025**

## 🏗️ Architecture Overview

```
📁 AI-Dropout-Prediction/
├── 🧠 ml/                     # ML Pipeline (14k+ students)
│   ├── param_ml_pipeline.py   # DropoutPredictor & EarlyWarningSystem
│   ├── final_clean_students_14k.csv  # Processed dataset
│   └── param_ml_notebook.ipynb       # Development notebook
├── 🔧 backend/                # Flask API Server
│   ├── app.py                 # Main API endpoints
│   ├── requirements.txt       # Python dependencies
├── 🌐 frontend/               # React Dashboard
│   ├── src/components/        # UI components
│   ├── src/services/          # API integration
└── 📋 setup.py               # Automated setup script
```

## 🚀 Quick Start

### Option 1: Automated Setup
```bash
python setup.py
start.bat
```

### Option 2: Manual Setup

#### 1. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python app.py
```

#### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### 3. Environment Configuration
Create `frontend/.env`:
```
REACT_APP_USE_ML_BACKEND=true
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

## 🔗 API Endpoints

### 🎯 Core Endpoints
- `GET /api/health` - Backend health check
- `GET /api/students` - Get all students with ML predictions
- `GET /api/student/{id}/predict` - Detailed prediction for specific student
- `GET /api/priority-students` - High-risk students needing attention
- `GET /api/analytics/dashboard` - Dashboard statistics
- `POST /api/upload-data` - Process CSV data uploads

## 🧠 ML Features Integrated

### ✅ **Dropout Prediction Model**
- **Algorithms:** Random Forest + Logistic Regression ensemble
- **Accuracy:** 85%+ on 14k student dataset
- **Risk Levels:** Low (0), Medium (1), High (2)
- **Features:** 20+ engineered features from attendance, academic, financial data

### ✅ **Early Warning System**
- **Priority Detection:** Identifies students needing immediate intervention
- **Risk Flag Aggregation:** Multi-factor risk assessment
- **Trending Analysis:** Tracks risk evolution over time

### ✅ **Recommendation Engine**
- **Personalized Actions:** Academic, attendance, financial interventions
- **Priority Levels:** High, Medium, Low urgency
- **Mentor Guidance:** Actionable steps for counselors

### ✅ **Explainable AI**
- **Feature Importance:** Shows which factors drive predictions
- **Risk Explanations:** Clear reasoning for each prediction
- **What-if Analysis:** Scenario modeling capabilities

## 📊 Data Pipeline

### Input Data Sources:
- **Attendance:** `attendance_14k_90days.csv` (90-day tracking)
- **Academic:** `tests_14k_4tests.csv` (test scores & assignments)
- **Financial:** `fees_14k.csv` (payment status & dues)
- **Consolidated:** `final_clean_students_14k.csv` (processed dataset)

## 🌐 Frontend Integration

### Dashboard Components:
- **📊 Risk Distribution Charts:** Visual risk breakdown by department
- **🎯 Priority Student List:** High-risk students requiring attention
- **📈 Trend Analysis:** Risk evolution over time
- **🔔 Notification Center:** Automated alerts for mentors
- **📤 Data Upload:** CSV file processing with ML predictions

## 🔧 Configuration Options

### Environment Variables:
```env
# Frontend (.env)
REACT_APP_USE_ML_BACKEND=true|false
REACT_APP_API_BASE_URL=http://localhost:5000/api

# Backend
FLASK_ENV=development|production
ML_MODEL_PATH=../ml/dropout_prediction_model.pkl
DATA_PATH=../ml/final_clean_students_14k.csv
```

## 📈 Performance Metrics
- **Training Accuracy:** 87.2%
- **Test Accuracy:** 85.6%
- **Single Prediction Latency:** <100ms
- **Batch Processing:** <2s for 100 students

## 👥 Team Contributions (SIH 2025)

- **🧠 Param (AI/ML):** ML pipeline, prediction models, recommendation engine
- **📊 Harshita & Shweta (Data Science):** Data processing, feature engineering
- **🌐 Diwaker (Full Stack):** Frontend development, UI/UX design
- **☁️ Aksh (Cloud):** Deployment, infrastructure, scalability
- **🔒 Tanishq (Cybersecurity):** Security implementation, data protection

---

**🏆 SIH 2025 - Smart India Hackathon**  
**Team: AI-Powered Dropout Prediction & Counseling System**  
**Status: Production Ready** ✅
