# syntax=docker/dockerfile:1
FROM python:alpine
WORKDIR /opt
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
