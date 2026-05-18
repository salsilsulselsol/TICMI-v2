@echo off
setlocal

cd /d "%~dp0"

echo [TICMI] Menjalankan backend dan frontend...
start "TICMI Backend" cmd /k "%~dp0dev-backend.bat"
start "TICMI Frontend" cmd /k "%~dp0dev-frontend.bat"

echo [TICMI] Dua terminal sudah dibuka.
echo - Backend:  http://localhost:8000
echo - Frontend: http://localhost:3000

