const DashboardModules = {
    // ---------------------------------------------------------
    // DASHBOARD (STUDENT)
    // ---------------------------------------------------------
    mahasiswa_dashboard: (data) => `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- GPA Card -->
            <div class="glass p-6 rounded-[2.5rem] relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    <i data-lucide="zap" class="w-20 h-20 text-indigo-400"></i>
                </div>
                <p class="text-slate-400 text-sm font-medium mb-1">IPK Terakhir</p>
                <h3 class="text-4xl font-black text-white">${data.ipk}</h3>
                <div class="mt-4 flex items-center text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full w-fit">
                    <i data-lucide="trending-up" class="w-3 h-3 mr-1"></i> +0.12 Dari Semester Lalu
                </div>
            </div>

            <!-- Credits Card -->
            <div class="glass p-6 rounded-[2.5rem] relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    <i data-lucide="book-open" class="w-20 h-20 text-pink-400"></i>
                </div>
                <p class="text-slate-400 text-sm font-medium mb-1">Total SKS</p>
                <h3 class="text-4xl font-black text-white">${data.sks} <span class="text-lg text-slate-500 font-normal">/ 144</span></h3>
                <div class="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-pink-500 to-rose-500" style="width: 76%"></div>
                </div>
            </div>

            <!-- Semester Card -->
            <div class="glass p-6 rounded-[2.5rem] relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    <i data-lucide="calendar" class="w-20 h-20 text-cyan-400"></i>
                </div>
                <p class="text-slate-400 text-sm font-medium mb-1">Semester Aktif</p>
                <h3 class="text-4xl font-black text-white">${data.semester}</h3>
                <p class="mt-4 text-xs text-slate-500 font-medium">Semester Genap 2025/2026</p>
            </div>

            <!-- Task Card -->
            <div class="glass p-6 rounded-[2.5rem] relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                    <i data-lucide="pencil" class="w-20 h-20 text-amber-400"></i>
                </div>
                <p class="text-slate-400 text-sm font-medium mb-1">Tugas Aktif</p>
                <h3 class="text-4xl font-black text-white">05</h3>
                <p class="mt-4 text-xs text-amber-400/80 font-medium underline cursor-pointer">Cek List Tugas</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Schedule Section -->
            <div class="lg:col-span-2">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-bold text-white flex items-center">
                        <i data-lucide="clock" class="w-5 h-5 mr-2 text-indigo-400"></i> Jadwal Hari Ini
                    </h3>
                    <button class="text-sm text-indigo-400 hover:text-white transition-colors">Lihat Semua</button>
                </div>
                <div class="space-y-4">
                    ${data.schedule.slice(0, 2).map(cls => `
                        <div class="glass p-5 rounded-3xl flex items-center justify-between group hover:border-indigo-500/50 transition-all cursor-pointer">
                            <div class="flex items-center space-x-5">
                                <div class="w-14 h-14 rounded-2xl bg-${cls.color}-500/10 flex flex-col items-center justify-center text-center">
                                    <span class="text-[10px] font-bold text-slate-500 uppercase">${cls.day}</span>
                                    <span class="text-sm font-black text-${cls.color}-400">${cls.time.split(' ')[0]}</span>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold group-hover:text-indigo-400 transition-colors">${cls.subject}</h4>
                                    <div class="flex items-center space-x-3 mt-1">
                                        <span class="text-xs text-slate-500 flex items-center">
                                            <i data-lucide="map-pin" class="w-3 h-3 mr-1"></i> ${cls.room}
                                        </span>
                                        <span class="text-xs text-slate-500 flex items-center">
                                            <i data-lucide="user" class="w-3 h-3 mr-1"></i> ${cls.lecturer}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden sm:block">
                                <span class="px-4 py-1.5 rounded-full bg-white/5 text-xs text-slate-300 font-medium">Hadir: 88%</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Announcements -->
            <div class="glass p-8 rounded-[2.5rem]">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i data-lucide="megaphone" class="w-5 h-5 mr-2 text-pink-400"></i> Info Kampus
                </h3>
                <div class="space-y-6">
                    <div class="relative pl-6 border-l-2 border-indigo-500/50 pb-2">
                        <div class="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-500"></div>
                        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">12 Apr 2026</p>
                        <h4 class="text-sm font-bold text-slate-200">Pembayaran UKT Semester Ganjil Diperpanjang</h4>
                    </div>
                    <div class="relative pl-6 border-l-2 border-slate-700 pb-2">
                        <div class="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-700"></div>
                        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">08 Apr 2026</p>
                        <h4 class="text-sm font-bold text-slate-200">Workshop AI & Machine Learning di Aula Utama</h4>
                    </div>
                </div>
                <button class="w-full mt-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold hover:bg-white/10 transition-all">
                    Lihat Berita Lainnya
                </button>
            </div>
        </div>
    `,

    // ---------------------------------------------------------
    // DASHBOARD (LECTURER)
    // ---------------------------------------------------------
    dosen_dashboard: (data) => `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="glass p-6 rounded-[2.5rem] bg-indigo-500/5 border-indigo-500/20">
                <p class="text-slate-400 text-sm mb-1 font-medium">Total Mahasiswa Bimbingan</p>
                <h3 class="text-4xl font-black text-white">124</h3>
            </div>
            <div class="glass p-6 rounded-[2.5rem]">
                <p class="text-slate-400 text-sm mb-1 font-medium">Jadwal Minggu Ini</p>
                <h3 class="text-4xl font-black text-white">08 <span class="text-lg text-slate-500 font-normal">Kelas</span></h3>
            </div>
            <div class="glass p-6 rounded-[2.5rem]">
                <p class="text-slate-400 text-sm mb-1 font-medium">Rerata Kehadiran</p>
                <h3 class="text-4xl font-black text-white">92.4%</h3>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div class="glass p-8 rounded-[2.5rem]">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i data-lucide="check-square" class="w-5 h-5 mr-2 text-indigo-400"></i> Deadline Tugas Anda
                </h3>
                <div class="space-y-4">
                    ${data.deadlines.map(d => `
                        <div class="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div>
                                <h4 class="text-sm font-bold text-white">${d.task}</h4>
                                <p class="text-xs text-slate-500 mt-1">Deadline: ${d.date}</p>
                            </div>
                            <span class="px-3 py-1 text-[10px] font-black uppercase rounded-full ${d.status === 'Urgent' ? 'bg-pink-500/20 text-pink-500' : 'bg-indigo-500/20 text-indigo-500'}">${d.status}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass p-8 rounded-[2.5rem]">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                    <i data-lucide="users" class="w-5 h-5 mr-2 text-cyan-400"></i> Kelas Aktif
                </h3>
                <div class="space-y-4">
                    ${data.classes.map(c => `
                        <div class="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div>
                                <h4 class="text-sm font-bold text-white">${c.name}</h4>
                                <p class="text-xs text-slate-500 mt-1">${c.day}, ${c.time}</p>
                            </div>
                            <div class="text-right">
                                <span class="text-lg font-black text-white">${c.students}</span>
                                <p class="text-[10px] text-slate-500 uppercase font-bold">Mahasiswa</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    // ---------------------------------------------------------
    // KRS SHEET
    // ---------------------------------------------------------
    krs: (data) => `
        <div class="glass p-8 rounded-[2.5rem]">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h3 class="text-2xl font-black text-white uppercase tracking-tight">Pengisian KRS</h3>
                    <p class="text-slate-400 text-sm">Pilih mata kuliah untuk Semester Ganjil 2026</p>
                </div>
                 <div class="px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                    <p class="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Sisa Kuota SKS</p>
                    <p class="text-xl font-black text-white">24 SKS</p>
                 </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="text-slate-500 text-xs font-black uppercase tracking-widest border-b border-white/5">
                            <th class="pb-4 pt-2 px-4 italic">Kode</th>
                            <th class="pb-4 pt-2 px-4">Mata Kuliah</th>
                            <th class="pb-4 pt-2 px-4">SKS</th>
                            <th class="pb-4 pt-2 px-4">Dosen</th>
                            <th class="pb-4 pt-2 px-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <tr class="hover:bg-white/5 transition-colors group">
                            <td class="py-6 px-4 font-mono text-xs text-slate-500">INF102</td>
                            <td class="py-6 px-4 font-bold text-slate-200">Pemrograman Mobile Flutter</td>
                            <td class="py-6 px-4 text-slate-300">3</td>
                            <td class="py-6 px-4 text-slate-400 text-xs italic">Aulia Rahman, M.T</td>
                            <td class="py-6 px-4">
                                <button class="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                                    <i data-lucide="plus" class="w-5 h-5"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="hover:bg-white/5 transition-colors group">
                            <td class="py-6 px-4 font-mono text-xs text-slate-500">INF305</td>
                            <td class="py-6 px-4 font-bold text-slate-200">Cyber Security & Ethic Hacking</td>
                            <td class="py-6 px-4 text-slate-300">3</td>
                            <td class="py-6 px-4 text-slate-400 text-xs italic">Irwan Bakri, PhD</td>
                            <td class="py-6 px-4">
                                <button class="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center">
                                    <i data-lucide="check" class="w-5 h-5"></i>
                                </button>
                            </td>
                        </tr>
                        <!-- More rows here -->
                    </tbody>
                </table>
            </div>
        </div>
    `,

    // ---------------------------------------------------------
    // KHS SHEET
    // ---------------------------------------------------------
    khs: (data) => `
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div class="lg:col-span-1 space-y-6">
                <div class="glass p-6 rounded-[2.5rem]">
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Pilih Semester</p>
                    <div class="space-y-2">
                        <button class="w-full py-3 px-4 rounded-2xl bg-indigo-500 text-white font-bold text-sm">Semester 6 (Ganjil)</button>
                        <button class="w-full py-3 px-4 rounded-2xl bg-white/5 text-slate-400 font-bold text-sm hover:text-white transition-colors">Semester 5 (Genap)</button>
                        <button class="w-full py-3 px-4 rounded-2xl bg-white/5 text-slate-400 font-bold text-sm hover:text-white transition-colors">Semester 4 (Ganjil)</button>
                    </div>
                </div>
            </div>
            
            <div class="lg:col-span-3">
                <div class="glass p-8 rounded-[2.5rem]">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-2xl font-black text-white uppercase italic">Kartu Hasil Studi</h3>
                        <button class="px-6 py-2.5 rounded-2xl bg-white text-slate-900 font-bold text-sm flex items-center">
                            <i data-lucide="download" class="w-4 h-4 mr-2"></i> Cetak PDF
                        </button>
                    </div>

                    <div class="space-y-4">
                        ${data.grades.map(g => `
                            <div class="flex items-center justify-between p-5 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl font-black text-indigo-400">
                                        ${g.grade}
                                    </div>
                                    <div>
                                        <h4 class="text-white font-bold">${g.subject}</h4>
                                        <p class="text-xs text-slate-500 font-medium">Point: ${g.point} | SKS: ${g.sks}</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-slate-400 font-mono text-xs">LULUS</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                         <div>
                            <p class="text-[10px] text-slate-500 font-bold uppercase">Indeks Prestasi Semester</p>
                            <p class="text-3xl font-black text-white italic">3.92</p>
                         </div>
                         <div class="text-right">
                            <p class="text-xs text-indigo-400 font-mono">Status Akademik:</p>
                            <p class="text-xl font-black text-emerald-400 uppercase tracking-tighter">Sangat Memuaskan</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // ---------------------------------------------------------
    // PROFILE
    // ---------------------------------------------------------
    profil: (data) => `
        <div class="max-w-4xl mx-auto">
            <div class="glass rounded-[3rem] overflow-hidden">
                <div class="h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative">
                    <div class="absolute inset-0 bg-black/20"></div>
                </div>
                <div class="px-10 pb-10 relative">
                    <!-- Avatar Shifted Up -->
                    <div class="relative -mt-20 mb-6 inline-block">
                        <img src="${data.avatar}" class="w-40 h-40 rounded-[3rem] p-2 bg-slate-900 border-4 border-slate-900 shadow-2xl" alt="Profile">
                        <div class="absolute bottom-4 right-4 w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center border-4 border-slate-900 cursor-pointer hover:scale-110 transition-transform">
                            <i data-lucide="camera" class="w-4 h-4 text-white"></i>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 class="text-4xl font-black text-white">${data.name}</h2>
                            <p class="text-indigo-400 font-bold mt-1">${data.id} <span class="text-slate-600 px-2">|</span> ${data.prodi || data.jabatan}</p>
                        </div>
                        <button class="px-8 py-3 rounded-2xl bg-white text-slate-900 font-bold hover:shadow-neon transition-all">Edit Personal Data</button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div class="space-y-6">
                            <h4 class="text-lg font-bold text-white flex items-center"><i data-lucide="user" class="w-5 h-5 mr-3 text-indigo-400"></i> Informasi Umum</h4>
                            <div class="space-y-4">
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-slate-500 text-sm">Email Aktif</span>
                                    <span class="text-slate-200 text-sm font-medium">andi.saputra@student.aipi.ac.id</span>
                                </div>
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-slate-500 text-sm">Nomor HP</span>
                                    <span class="text-slate-200 text-sm font-medium">+62 812 3456 7890</span>
                                </div>
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-slate-500 text-sm">Agama</span>
                                    <span class="text-slate-200 text-sm font-medium">Islam</span>
                                </div>
                            </div>
                        </div>
                         <div class="space-y-6">
                            <h4 class="text-lg font-bold text-white flex items-center"><i data-lucide="shield" class="w-5 h-5 mr-3 text-pink-400"></i> Keamanan Akun</h4>
                             <div class="p-5 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
                                <p class="text-xs text-slate-400 mb-4">Ganti password secara berkala untuk menjaga keamanan data akademik Anda.</p>
                                <button class="text-sm font-bold text-indigo-400 flex items-center hover:underline">
                                    Ubah Password Sekarang <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                                </button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
};
