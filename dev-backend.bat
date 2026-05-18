@echo off
setlocal

cd /d "%~dp0backend"

if not exist "venv\Scripts\activate.bat" (
  echo [TICMI] Virtual environment belum ada. Membuat venv...
  python -m venv venv
)

call "venv\Scripts\activate.bat"

if not exist "venv\.deps_ready" (
  echo [TICMI] Install dependency backend...
  pip install -r requirements.txt
  type nul > "venv\.deps_ready"
)

echo [TICMI] Menjalankan backend di http://localhost:8000
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

