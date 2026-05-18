@echo off
setlocal

cd /d "%~dp0"

echo [TICMI] Menghentikan proses Node.js frontend yang masih berjalan...
for /f "tokens=2" %%p in ('tasklist ^| findstr /i node.exe') do (
  taskkill /PID %%p /F >nul 2>&1
)

echo [TICMI] Membersihkan cache build frontend (.next)...
if exist "frontend\.next" (
  rmdir /s /q "frontend\.next"
)

echo [TICMI] Restart frontend dev server...
start "TICMI Frontend" cmd /k "%~dp0dev-frontend.bat"

echo [TICMI] Selesai. Jika backend juga perlu jalan, gunakan dev-all.bat

