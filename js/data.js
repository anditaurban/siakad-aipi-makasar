const AppData = {
    mahasiswa: {
        name: "Andi Saputra",
        id: "2021004592",
        prodi: "Teknik Informatika",
        semester: 6,
        ipk: 3.82,
        sks: 110,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
        notifications: 3,
        schedule: [
            { day: 'Senin', time: '08:00 - 10:30', subject: 'Pemrograman Web II', room: 'Lab IT-1', lecturer: 'Dr. Ahmad Rizal', color: 'indigo' },
            { day: 'Selasa', time: '13:00 - 15:30', subject: 'Arsitektur Komputer', room: 'Ruang 302', lecturer: 'Siti Aminah, M.T', color: 'pink' },
            { day: 'Rabu', time: '10:00 - 12:30', subject: 'Basis Data Lanjut', room: 'Lab IT-2', lecturer: 'Budi Hartono, PhD', color: 'cyan' },
        ],
        grades: [
            { subject: 'Pemrograman Berorientasi Objek', sks: 3, grade: 'A', point: 4.0 },
            { subject: 'Struktur Data', sks: 3, grade: 'A-', point: 3.75 },
            { subject: 'Jaringan Komputer', sks: 3, grade: 'B+', point: 3.25 },
            { subject: 'Matematika Diskrit', sks: 3, grade: 'A', point: 4.0 },
        ]
    },
    dosen: {
        name: "Dr. Ahmad Rizal",
        id: "198504122010121003",
        jabatan: "Lektor Kepala",
        fakultas: "Teknik & Ilmu Komputer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
        classes: [
            { name: 'Pemrograman Web II', students: 42, day: 'Senin', time: '08:00 - 10:30' },
            { name: 'Algoritma & Pemrograman', students: 38, day: 'Kamis', time: '10:00 - 12:30' },
        ],
        deadlines: [
            { task: 'Upload Nilai Akhir Basis Data', date: '20 April 2026', status: 'Urgent' },
            { task: 'Verifikasi KRS Mahasiswa Bimbingan', date: '25 April 2026', status: 'Normal' },
        ]
    }
};
