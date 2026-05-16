# TICMI - Local Development Setup

Panduan development lokal tanpa Docker untuk proyek TICMI.

## Prerequisites

### Backend (Python 3.10+)
1. Install Python 3.10 atau lebih baru
2. Buat virtual environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   # atau
   venv\Scripts\activate  # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Setup database PostgreSQL secara lokal:
   ```bash
   # Ubuntu/Debian
   sudo apt install postgresql postgresql-contrib
   
   # Mac (dengan Homebrew)
   brew install postgresql
   
   # Buat database
   createdb ticmi_db
   ```
5. Jalankan backend:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend (Node.js 18+)
1. Install Node.js 18 atau lebih baru
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```

## Environment Variables

### Backend (.env di folder backend/)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/ticmi_db
GOOGLE_API_KEY=your_gemini_api_key
CHROMA_DB_PATH=./chroma_db
```

### Frontend (.env.local di folder frontend/)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
```

## Menjalankan Proyek

1. Terminal 1 - Backend:
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn app.main:app --reload
   ```

2. Terminal 2 - Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Akses aplikasi di `http://localhost:3000`

## Development Tools

- **Database GUI**: pgAdmin, DBeaver, atau TablePlus
- **API Testing**: Postman, Insomnia, atau Swagger UI di `http://localhost:8000/docs`
- **Hot Reload**: Keduanya support hot reload otomatis
