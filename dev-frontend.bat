@echo off
setlocal

cd /d "%~dp0frontend"

if not exist "node_modules" (
  echo [TICMI] Install dependency frontend...
  npm install
)

echo [TICMI] Menjalankan frontend di http://localhost:3000
npm run dev

