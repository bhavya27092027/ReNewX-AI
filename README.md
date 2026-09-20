# ReNewX AI

### AI-Driven Industrial Asset Condition Assessment and 5R Decision Support

ReNewX AI is an AI-driven framework designed for **industrial asset condition assessment and circular economy-based decision support**.

The system combines **computer vision, YOLO-based defect detection, condition assessment, and a 5R Decision Engine** to transform industrial asset inspection into sustainability-oriented recommendations.

---

## 🚀 Project Overview

Industrial assets such as machinery, equipment, tools, and components may be discarded even when they can still be reused, repaired, repurposed, or recycled.

ReNewX AI addresses this problem by providing an integrated pipeline:

```text
Industrial Asset Image
        ↓
Image Preprocessing
        ↓
YOLO-Based Defect Detection
        ↓
Defect Class + Bounding Box + Confidence
        ↓
Asset Condition Assessment
        ↓
Very Good / Good / Moderate / Poor / Very Poor
        ↓
5R Decision Engine
        ↓
Reduce / Reuse / Repair / Repurpose / Recycle
        ↓
Decision Support Dashboard
````

---

## 🎯 Objectives

* Detect visible defects in industrial assets using computer vision.
* Localize defects using bounding boxes.
* Assess the overall condition of an industrial asset.
* Map asset condition to suitable circular economy actions.
* Support sustainable asset-management decisions.
* Reduce unnecessary disposal and improve continued asset utilization.

---

## 🧠 Core Modules

### 1. Image Preprocessing

The input industrial asset image is prepared before model inference using preprocessing operations such as:

* Image resizing
* Normalization
* Noise removal
* Contrast enhancement

### 2. YOLO-Based Defect Detection

The defect detection module identifies visible defects and provides:

* Defect class
* Bounding box
* Confidence score

### 3. Asset Condition Assessment

The detected defect information and relevant asset factors are used to classify the asset into:

| Condition | Interpretation                          |
| --------- | --------------------------------------- |
| Very Good | No significant defect                   |
| Good      | Minor defect                            |
| Moderate  | Repairable or noticeable defect         |
| Poor      | Severe or difficult-to-repair condition |
| Very Poor | Severe or non-recoverable condition     |

### 4. 5R Decision Engine

The system supports five circular economy actions:

* **Reduce** – Reduce unnecessary resource consumption.
* **Reuse** – Continue using the asset where feasible.
* **Repair** – Restore an asset with repairable defects.
* **Repurpose** – Use the asset for an alternative purpose.
* **Recycle** – Recover materials from non-recoverable assets.

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │ Industrial Asset    │
                    │       Image         │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Image Preprocessing │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ YOLO Defect         │
                    │ Detection            │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Defect Class        │
                    │ Bounding Box        │
                    │ Confidence Score    │
                    └──────────┬──────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Condition           │
                    │ Assessment          │
                    └──────────┬──────────┘
                               ↓
             ┌──────────────────────────────────┐
             │ Very Good / Good / Moderate /   │
             │ Poor / Very Poor                │
             └────────────────┬─────────────────┘
                              ↓
                    ┌─────────────────────┐
                    │ 5R Decision Engine  │
                    └──────────┬──────────┘
                               ↓
        ┌──────────────────────────────────────────┐
        │ Reduce | Reuse | Repair | Repurpose |   │
        │ Recycle                                  │
        └──────────────────────┬───────────────────┘
                               ↓
                    ┌─────────────────────┐
                    │ Decision Support    │
                    │ Dashboard           │
                    └─────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* TypeScript
* Tailwind CSS
* Lucide Icons

### AI / Machine Learning

* Python
* YOLO-based Object Detection
* Deep Learning
* Computer Vision

### Image Processing

* OpenCV
* NumPy
* Pillow

### Data & Evaluation

* Pandas
* Scikit-learn
* Matplotlib

---

## 📊 Evaluation Metrics

The defect detection module is evaluated using:

* Precision
* Recall
* F1-score
* mAP@0.5
* mAP@0.5:0.95

The condition assessment module is evaluated using:

* Accuracy
* Precision
* Recall
* F1-score

---

## 📁 Project Structure

```text
ReNewX-AI/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
├── dataset/
│   ├── images/
│   ├── labels/
│   └── data.yaml
│
├── models/
│   ├── yolo/
│   └── condition_model/
│
├── preprocessing/
│   └── image_preprocessing.py
│
├── detection/
│   └── defect_detection.py
│
├── condition/
│   └── condition_assessment.py
│
├── decision/
│   └── decision_engine.py
│
├── dashboard/
│   └── app.py
│
├── outputs/
│
├── package.json
├── requirements.txt
└── README.md
```

---

## 🖥️ Dashboard

The ReNewX AI dashboard provides interfaces for:

* Dashboard
* Asset Analysis
* Detection Results
* Condition Assessment
* 5R Decision Engine
* Model Evaluation
* Dataset Information
* Project Architecture
* About Project

The current interface includes a **prototype demonstration mode** for presenting the complete workflow before integration with the trained machine-learning models.


---

## 🔬 Research

ReNewX AI is developed as a research-oriented project in the domain of:

* Artificial Intelligence
* Deep Learning
* Computer Vision
* Industrial Asset Management
* Circular Economy
* Sustainable Manufacturing
* 5R Decision Support

### Research Title

**ReNewX AI: An AI-Driven Framework for Industrial Asset Condition Assessment and 5R Decision Support in a Circular Economy**

---

## 🔮 Future Work

Future development will focus on:

* Training and validating the YOLO defect detection model on larger industrial datasets.
* Improving condition assessment using diverse asset conditions.
* Calibrating the 5R suitability scoring function using domain knowledge.
* Integrating sensor and operational data such as vibration and SCADA signals.
* Integrating the decision-support system with industrial asset-management systems.
* Improving explainability and computational efficiency.
* Evaluating the framework across different industrial asset categories.

---

## 👩‍💻 Authors

**Bhavya Jain**
B.Tech – Computer Science and Engineering (AI & ML)
ABES Engineering College, Ghaziabad, India


---

## 📌 Project Status

🚧 **Under Development**

The current repository contains the ReNewX AI prototype and project interface. The trained AI models, dataset preparation, experimental evaluation, and complete backend integration are part of the ongoing development.

---

## 📄 License

This project is developed for academic and research purposes.
