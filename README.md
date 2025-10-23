# OJT - Intern Registration System
Sistem Pengelolaan Magang

## Teknologi yang Digunakan
### Frontend
- React JS
- Bootstrap 5

### Backend
- Node JS
- Express JS
- MySQL2

### DBMS
- MySQL

## Instalasi dan Setup
### Langkah 1: Clone Repository
```bash
git clone https://github.com/megaalaelawati-star/OJT.git
cd OJT
```

### Langkah 2: Setup Database
Jalankan perintah berikut di terminal (root proyek):
```bash
npm run db:setup
npm run db:seed
```
Atau:
1. Atau buka phpMyAdmin atau MySQL client
2. Buat database baru dengan nama intern_registration lalu masuk ke dalam database tersebut
3. import file schema.sql atau schema2.sql ke dalam database

**Catatan**: jka menggunakan perintah terminal dan versi mysql nya terbaru harap ganti nama dari ../../database/schema.sql ke ../../database/schema2.sql di file backend/scripts/setupDatabase.js

### Langkah 3: Setup Backend dan Frontend
jalankan perintah berikut di terminal (root proyek):
1. Install dependencies:
```bash
npm run install:all
```
2. rename file .env.example ke .env yang ada di folder backend, lalu sesuaikan isi kodenya.
3. Jalankan server:
```bash
npm run dev
```
Server frontend akan berjalan di http://localhost:3000 dan server backend akan berjalan di http://localhost:5000
