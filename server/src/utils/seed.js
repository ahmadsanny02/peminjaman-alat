import { sequelize, User, Category, Tool, Loan, ActivityLog } from "../models/index.js";
import bcrypt from "bcryptjs";

const seedDatabase = async () => {
    try {
        console.log("Connecting to the database for seeding...");
        await sequelize.authenticate();
        console.log("Connected successfully. Clearing tables...");

        // Disable foreign key checks to force truncate tables cleanly
        await sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");
        await ActivityLog.destroy({ truncate: true, cascade: true });
        await Loan.destroy({ truncate: true, cascade: true });
        await Tool.destroy({ truncate: true, cascade: true });
        await Category.destroy({ truncate: true, cascade: true });
        await User.destroy({ truncate: true, cascade: true });
        await sequelize.query("SET FOREIGN_KEY_CHECKS = 1;");
        console.log("Tables cleared. Seeding data...");

        // 1. Seed Users (with hashed passwords)
        const salt = await bcrypt.genSalt(10);
        const passwordAdmin = await bcrypt.hash("Admin123!", salt);
        const passwordPetugas = await bcrypt.hash("Petugas123!", salt);
        const passwordPeminjam = await bcrypt.hash("Peminjam123!", salt);

        const users = await User.bulkCreate([
            {
                fullName: "Admin Utama",
                username: "admin1",
                password: passwordAdmin,
                role: "admin",
            },
            {
                fullName: "Siti Rahma",
                username: "petugas1",
                password: passwordPetugas,
                role: "petugas",
            },
            {
                fullName: "Budi Santoso",
                username: "petugas2",
                password: passwordPetugas,
                role: "petugas",
            },
            {
                fullName: "Ahmad Sani",
                username: "peminjam1",
                password: passwordPeminjam,
                role: "peminjam",
            },
            {
                fullName: "Dewi Lestari",
                username: "peminjam2",
                password: passwordPeminjam,
                role: "peminjam",
            },
            {
                fullName: "Rian Hidayat",
                username: "peminjam3",
                password: passwordPeminjam,
                role: "peminjam",
            },
        ]);

        console.log(`- Created ${users.length} users successfully.`);

        // Get key user references
        const adminUser = users.find((u) => u.username === "admin1");
        const petugas1User = users.find((u) => u.username === "petugas1");
        const petugas2User = users.find((u) => u.username === "petugas2");
        const peminjam1User = users.find((u) => u.username === "peminjam1");
        const peminjam2User = users.find((u) => u.username === "peminjam2");
        const peminjam3User = users.find((u) => u.username === "peminjam3");

        // 2. Seed Categories
        const categories = await Category.bulkCreate([
            {
                name: "Alat Ukur",
                description: "Alat untuk mengukur panjang, volume, tegangan, hambatan, dll.",
            },
            {
                name: "Alat Potong",
                description: "Gergaji, gerinda, cutter, pemotong kaca, dll.",
            },
            {
                name: "Alat Tangan",
                description: "Obeng, tang, palu, kunci pas, kunci ring, dll.",
            },
            {
                name: "Alat Keselamatan",
                description: "Helm proyek, sarung tangan safety, kacamata pelindung, rompi.",
            },
            {
                name: "Alat Elektronik",
                description: "Solder, bor listrik, blower, multimeter digital.",
            },
        ]);

        console.log(`- Created ${categories.length} categories successfully.`);

        // Get key category references
        const catUkur = categories.find((c) => c.name === "Alat Ukur");
        const catPotong = categories.find((c) => c.name === "Alat Potong");
        const catTangan = categories.find((c) => c.name === "Alat Tangan");
        const catSafety = categories.find((c) => c.name === "Alat Keselamatan");
        const catElek = categories.find((c) => c.name === "Alat Elektronik");

        // 3. Seed Tools (linking to categories)
        const tools = await Tool.bulkCreate([
            {
                name: "Multimeter Digital Fluke",
                description: "Multimeter digital presisi tinggi untuk mengukur tegangan dan hambatan.",
                condition: "Bagus",
                stock: 5,
                image: "/uploads/multimeter.png",
                categoryId: catUkur.id,
            },
            {
                name: "Bor Listrik Bosch",
                description: "Bor listrik portabel dengan baterai rechargeable dan mata bor lengkap.",
                condition: "Bagus",
                stock: 3,
                image: "/uploads/bor_bosch.png",
                categoryId: catElek.id,
            },
            {
                name: "Helm Proyek Krisbow",
                description: "Helm keselamatan standar proyek konstruksi warna kuning terang.",
                condition: "Bagus",
                stock: 10,
                image: "/uploads/helm_krisbow.png",
                categoryId: catSafety.id,
            },
            {
                name: "Set Kunci Pas Tekiro",
                description: "Satu set kunci pas berbahan Chrome Vanadium ukuran 8mm sampai 24mm.",
                condition: "Bagus",
                stock: 4,
                image: "/uploads/kunci_tekiro.png",
                categoryId: catTangan.id,
            },
            {
                name: "Gergaji Kayu Stanley",
                description: "Gergaji tangan dengan gerigi tajam untuk pemotongan kayu balok presisi.",
                condition: "Bagus",
                stock: 6,
                image: "/uploads/gergaji_stanley.png",
                categoryId: catPotong.id,
            },
        ]);

        console.log(`- Created ${tools.length} tools successfully.`);

        // Get tool references
        const toolMultimeter = tools.find((t) => t.name === "Multimeter Digital Fluke");
        const toolBor = tools.find((t) => t.name === "Bor Listrik Bosch");
        const toolHelm = tools.find((t) => t.name === "Helm Proyek Krisbow");
        const toolKunci = tools.find((t) => t.name === "Set Kunci Pas Tekiro");
        const toolGergaji = tools.find((t) => t.name === "Gergaji Kayu Stanley");

        // 4. Seed Loans (linking users and tools)
        const today = new Date();
        const futureDate = (days) => {
            const date = new Date();
            date.setDate(today.getDate() + days);
            return date;
        };

        const loans = await Loan.bulkCreate([
            {
                status: "pending",
                borrowDate: today,
                expectedReturnDate: futureDate(3),
                toolId: toolBor.id,
                borrowerId: peminjam1User.id,
            },
            {
                status: "approved",
                borrowDate: today,
                expectedReturnDate: futureDate(5),
                toolId: toolMultimeter.id,
                borrowerId: peminjam2User.id,
                officerId: petugas1User.id,
            },
            {
                status: "returned",
                borrowDate: today,
                expectedReturnDate: today,
                actualReturnDate: today,
                toolId: toolKunci.id,
                borrowerId: peminjam3User.id,
                officerId: petugas2User.id,
            },
            {
                status: "verifying",
                borrowDate: today,
                expectedReturnDate: futureDate(2),
                actualReturnDate: today,
                image: "/uploads/bukti.png",
                toolId: toolHelm.id,
                borrowerId: peminjam1User.id,
                officerId: petugas1User.id,
            },
            {
                status: "canceled",
                borrowDate: today,
                expectedReturnDate: futureDate(4),
                toolId: toolGergaji.id,
                borrowerId: peminjam2User.id,
            },
        ]);

        console.log(`- Created ${loans.length} loan records successfully.`);

        // 5. Seed Activity Logs
        const logs = await ActivityLog.bulkCreate([
            {
                userId: adminUser.id,
                action: "ADD CATEGORY",
                description: "Admin Utama just added a new category: Alat Ukur",
            },
            {
                userId: adminUser.id,
                action: "ADD TOOL",
                description: "Admin Utama added a new tool: Bor Listrik Bosch",
            },
            {
                userId: peminjam1User.id,
                action: "LOAN APPLICATION",
                description: "Ahmad Sani just requested to borrow: Bor Listrik Bosch",
            },
            {
                userId: petugas1User.id,
                action: "APPROVE LOAN",
                description: "Siti Rahma approved the loan for 'Multimeter Digital Fluke'",
            },
            {
                userId: peminjam3User.id,
                action: "RETURN LOAN",
                description: "Rian Hidayat validated the return of: Set Kunci Pas Tekiro",
            },
        ]);

        console.log(`- Created ${logs.length} activity logs successfully.`);

        console.log("\nDatabase seeded successfully! Enjoy testing the application.");
        process.exit(0);
    } catch (error) {
        console.error("Failed to seed database:", error);
        process.exit(1);
    }
};

seedDatabase();
