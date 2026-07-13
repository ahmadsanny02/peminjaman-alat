# Peminjaman Alat - Backend API

Sisi server (backend) dari sistem peminjaman alat. Aplikasi backend ini dikembangkan menggunakan **Node.js, Express, dan Sequelize ORM** dengan database **MySQL**.

## Struktur Proyek

```text
server/
├── src/
│   ├── config/             # Konfigurasi DB (Sequelize)
│   │   └── db.js
│   ├── controllers/        # Logika request/response (Controller)
│   │   ├── activity.controller.js
│   │   ├── auth.controller.js
│   │   ├── category.controller.js
│   │   ├── loan.controller.js
│   │   ├── tool.controller.js
│   │   └── user.controller.js
│   ├── middleware/         # Interceptor request (Middleware)
│   │   ├── authMiddleware.js   # Verifikasi token JWT
│   │   └── roleMiddleware.js   # Validasi otorisasi Role (Admin/Petugas/Peminjam)
│   ├── models/             # Definisi model Sequelize (MySQL)
│   │   ├── index.js            # Asosiasi relasi antar tabel
│   │   ├── activity.model.js
│   │   ├── category.model.js
│   │   ├── loan.model.js
│   │   ├── tool.model.js
│   │   └── user.model.js
│   ├── routes/             # Definisi endpoint API
│   │   └── api.js              # Endpoint router utama
│   └── utils/              # Helper dan logger utility
│       └── logger.js           # Pencatatan log aktivitas ke database
├── .env                    # Variabel sensitif (JWT_SECRET, DB_NAME, dll.)
├── package.json            # Daftar dependensi dan script Node.js
└── server.js               # Main entry point server
```

## Teknologi Utama

- **Runtime**: Node.js
- **Framework**: Express (v5)
- **Database ORM**: Sequelize dengan driver `mysql2`
- **Autentikasi**: JSON Web Token (JWT) & bcryptjs (Hashing Password)
- **File Upload**: Multer (menyimpan bukti pengembalian dan gambar alat ke `/uploads`)

## Cara Menjalankan Server

1. Pastikan database MySQL aktif dan buat database bernama `peminjaman_alat` (atau sesuai konfigurasi di `.env`).
2. Masuk ke direktori server:
   ```bash
   cd server
   ```
3. Install dependensi:
   ```bash
   npm install
   ```
4. Setup variabel lingkungan di file `.env`. Contoh:
   ```env
   PORT=5000
   JWT_SECRET=rahasia_super_aman
   DB_NAME=peminjaman_alat
   DB_USER=root
   DB_PASSWORD=password_db_anda
   DB_HOST=localhost
   ```
5. Jalankan server dalam mode development:
   ```bash
   npm start
   ```