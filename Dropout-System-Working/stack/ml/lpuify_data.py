import pandas as pd
import random

def lpuify(filepath="final_clean_students_14k.csv"):
    df = pd.read_csv(filepath)
    
    # Department-wise subject pools
    subject_pools = {
        "B.Tech CSE": [
            "CSE101 :: COMPUTER PROGRAMMING", "CSE111 :: ORIENTATION TO COMPUTING-I", 
            "CSE121 :: ORIENTATION TO COMPUTING-II", "CSE202 :: OBJECT ORIENTED PROGRAMMING",
            "CSE205 :: DATA STRUCTURES AND ALGORITHMS", "CSE310 :: DATABASE MANAGEMENT SYSTEMS",
            "INT108 :: PYTHON PROGRAMMING", "INT306 :: DATABASE MANAGEMENT SYSTEMS",
            "INT213 :: PYTHON PROGRAMMING", "CSE320 :: SOFTWARE ENGINEERING", 
            "CSE316 :: OPERATING SYSTEMS", "CSE326 :: INTERNET PROGRAMMING LABORATORY"
        ],
        "B.Tech IT": [
            "INT108 :: PYTHON PROGRAMMING", "INT306 :: DATABASE MANAGEMENT SYSTEMS",
            "CSE205 :: DATA STRUCTURES AND ALGORITHMS", "CSE101 :: COMPUTER PROGRAMMING",
            "CSE111 :: ORIENTATION TO COMPUTING-I", "CSE320 :: SOFTWARE ENGINEERING",
            "INT213 :: PYTHON PROGRAMMING", "MTH401 :: DISCRETE MATHEMATICS"
        ],
        "B.Tech ECE": [
            "ECE249 :: BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
            "ECE279 :: BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY",
            "PHY110 :: ENGINEERING PHYSICS", "CSE101 :: COMPUTER PROGRAMMING",
            "MTH174 :: ENGINEERING MATHEMATICS", "MTH212 :: DISCRETE MATHEMATICS"
        ],
        "MBA": [
            "MGM101 :: PRINCIPLES OF MANAGEMENT", "MGM121 :: MARKETING MANAGEMENT",
            "ACC101 :: FINANCIAL ACCOUNTING", "HRM201 :: HUMAN RESOURCE MANAGEMENT",
            "ECO101 :: MANAGERIAL ECONOMICS", "BUS301 :: BUSINESS ETHICS",
            "PES318 :: SOFT SKILLS-I", "PEL130 :: ADVANCED COMMUNICATION SKILLS-I"
        ],
        "B.Pharmacy": [
            "PHR101 :: PHARMACEUTICS-I", "PHR102 :: PHARMACEUTICAL CHEMISTRY",
            "PHR201 :: PHARMACOLOGY", "PHR105 :: ANATOMY AND PHYSIOLOGY",
            "CHE110 :: ENVIRONMENTAL STUDIES", "PHY110 :: ENGINEERING PHYSICS"
        ],
        "B.Arch": [
            "ARC101 :: ARCHITECTURAL DESIGN-I", "ARC102 :: BUILDING CONSTRUCTION",
            "ARC201 :: HISTORY OF ARCHITECTURE", "ARC301 :: STRUCTURAL DESIGN",
            "MEC136 :: ENGINEERING GRAPHICS AND DIGITAL FABRICATION"
        ]
    }
    
    common_subjects = ["CHE110 :: ENVIRONMENTAL STUDIES", "PES318 :: SOFT SKILLS-I", "PEL130 :: ADVANCED COMMUNICATION SKILLS-I"]

    lpu_names = ["Ankita Mishra", "Siddharth Banerjee", "Yash Chopra", "Priya Sharma", "Rahul Kumar", 
                 "Neha Patel", "Aryan Singh", "Ishita Verma", "Rohan Gupta", "Ananya Das", "Vikram Malhotra", 
                 "Sneha Kapoor", "Kartik Iyer", "Meera Reddy", "Arjun Saxena", "Kiara Advani", "Shaurya Singh", 
                 "Vihaan Jain", "Niyati Roy", "Aditya Roy", "Kriti Sanon", "Varun Dhawan", "Alia Bhatt", "Ranbir Kapoor"]
    
    lpu_depts = list(subject_pools.keys())

    df = df.head(1000).copy()
    
    for i in range(len(df)):
        df.at[i, 'Name'] = random.choice(lpu_names)
        dept = random.choice(lpu_depts)
        df.at[i, 'Department'] = dept
        
        # Pick 3 dept-specific + 1 common
        pool = subject_pools.get(dept, common_subjects)
        subjects = random.sample(pool, min(len(pool), 3)) + [random.choice(common_subjects)]
        df.at[i, 'Recent_Subjects'] = "|".join(list(set(subjects))) # remove duplicates
        
        df.at[i, 'Roll_No'] = f"R{i+1:06d}"
        df.at[i, 'Student_ID'] = f"S{i+1:06d}"

    df.to_csv(filepath, index=False)
    print(f"LPU-ified {len(df)} records with dept-specific subjects.")

if __name__ == "__main__":
    lpuify()
