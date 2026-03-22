# Use a multi-stage build to keep the final image slim
# Stage 1: Build the React Frontend
FROM node:20 AS build-stage
WORKDIR /app/frontend

# Copy frontend source and install dependencies
COPY Dropout-System-Working/stack/frontend/package*.json ./
RUN npm install

# Copy all frontend files and build (including the .env I created)
COPY Dropout-System-Working/stack/frontend/ ./
RUN npm run build

# Stage 2: Setup the Python Backend
FROM python:3.9-slim
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Install Python backend dependencies
COPY Dropout-System-Working/stack/backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy ML pipeline and Backend files
COPY Dropout-System-Working/stack/ml ./ml
COPY Dropout-System-Working/stack/backend ./backend

# Copy the built frontend from Stage 1
COPY --from=build-stage /app/frontend/dist ./frontend/dist

# Hugging Face Spaces environment configuration
ENV PORT=7860
EXPOSE 7860

# Set the working directory to backend to match internal relative paths
WORKDIR /app/backend

# Use Gunicorn for production serving
CMD ["gunicorn", "--bind", "0.0.0.0:7860", "--timeout", "120", "app:app"]
