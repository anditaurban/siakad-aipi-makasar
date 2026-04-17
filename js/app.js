document.addEventListener('alpine:init', () => {
    Alpine.data('siakadApp', () => ({
        currentModule: 'dashboard',
        userRole: localStorage.getItem('siakad_user_role') || 'mahasiswa', // Load from storage
        isLoading: false,
        isMobileMenuOpen: false,
        userData: AppData,
        menuItems: [
            { id: 'dashboard', name: 'Dashboard', icon: 'layout-grid' },
            { id: 'krs', name: 'KRS Online', icon: 'clipboard-list' },
            { id: 'khs', name: 'Nilai KHS', icon: 'file-text' },
            { id: 'jadwal', name: 'Jadwal Kuliah', icon: 'calendar' },
            { id: 'profil', name: 'Profil Saya', icon: 'user' },
        ],

        init() {
            // Apply initial menu items
            this.updateMenuItems(this.userRole);

            // Watch for role changes to refresh data
            this.$watch('userRole', (value) => {
                this.refreshContent();
                this.updateMenuItems(value);
            });

            this.$watch('currentModule', () => {
                this.refreshContent();
            });
        },

        updateMenuItems(role) {
            if (role === 'admin') {
                this.menuItems = [
                    { id: 'dashboard', name: 'Dashboard', icon: 'layout-grid' },
                    { id: 'manage_students', name: 'Data Mahasiswa', icon: 'users' },
                    { id: 'manage_lecturers', name: 'Data Dosen', icon: 'user-check' },
                    { id: 'manage_courses', name: 'Mata Kuliah', icon: 'book-open' },
                    { id: 'profil', name: 'Profil', icon: 'user' },
                ];
            } else if (role === 'dosen') {
                this.menuItems = [
                    { id: 'dashboard', name: 'Dashboard', icon: 'layout-grid' },
                    { id: 'krs', name: 'Validasi KRS', icon: 'check-circle' },
                    { id: 'khs', name: 'Input Nilai', icon: 'edit-3' },
                    { id: 'jadwal', name: 'Jadwal Kuliah', icon: 'calendar' },
                    { id: 'profil', name: 'Profil Saya', icon: 'user' },
                ];
            } else {
                this.menuItems = [
                    { id: 'dashboard', name: 'Dashboard', icon: 'layout-grid' },
                    { id: 'krs', name: 'KRS Online', icon: 'clipboard-list' },
                    { id: 'khs', name: 'Nilai KHS', icon: 'file-text' },
                    { id: 'jadwal', name: 'Jadwal Kuliah', icon: 'calendar' },
                    { id: 'profil', name: 'Profil Saya', icon: 'user' },
                ];
            }
        },

        // Admin Actions (Mock)
        addCourse(course) {
            this.userData.courses.unshift(course);
            this.userData.admin.stats.totalCourses++;
            this.refreshContent();
        },

        deleteCourse(code) {
            this.userData.courses = this.userData.courses.filter(c => c.code !== code);
            this.userData.admin.stats.totalCourses--;
            this.refreshContent();
        },

        refreshContent() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.$nextTick(() => {
                    window.dispatchEvent(new CustomEvent('content-updated'));
                });
            }, 400); // Simulate network delay for "Gen-Z" feel transitions
        },

        getPageTitle() {
            const item = this.menuItems.find(i => i.id === this.currentModule);
            return item ? item.name : 'Dashboard';
        },

        renderCurrentModule() {
            const role = this.userRole;
            const module = this.currentModule;
            const key = (module === 'dashboard') ? `${role}_dashboard` : module;
            
            if (DashboardModules[key]) {
                return DashboardModules[key](this.userData[role]);
            }
            
            return `
                <div class="flex flex-col items-center justify-center py-20 text-slate-500">
                    <i data-lucide="construction" class="w-16 h-16 mb-4 opacity-20"></i>
                    <p class="text-xl font-bold">Module ${module.toUpperCase()} Sedang Dikembangkan</p>
                    <p class="text-sm">Fitur ini akan segera hadir untuk Anda.</p>
                </div>
            `;
        },

        logout() {
            localStorage.removeItem('siakad_auth');
            localStorage.removeItem('siakad_user_role');
            localStorage.removeItem('siakad_user_id');
            window.location.href = 'login.html';
        }
    }));
});
