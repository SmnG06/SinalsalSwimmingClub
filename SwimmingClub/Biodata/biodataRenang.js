const biodataRenangI18n = {
  id: {
    nav_back: "← Beranda",
    nav_home: "Beranda",
    nav_renang: "Private Renang",
    nav_binsik: "Binsik",
    nav_bimbel: "Mata Pelajaran",

    pill_profile: "Profil",
    pill_bio: "Biodata",
    pill_schedule: "Jadwal & Lokasi",
    pill_register: "Pendaftaran",

    hero_badge: "🏅 COACH PROFILE",
    hero_title: "BIODATA INSTRUKTUR",
    hero_sub: "Mengenal Lebih Dekat Pelatih Profesional Sinalsal Swimming Club",
    btn_daftar: "Daftar Sekarang →",
    btn_explore_bio: "Lihat Biodata ↓",

    section_bio_badge: "CURRICULUM VITAE",
    section_bio_title: "Informasi Data Pribadi & Profesi",
    section_bio_sub: "Kredensial dan rekam jejak instruktur kepelatihan renang.",
    coach_role_sub: "Head Swimming Instructor & Coach",
    stat_degree: "Sarjana Olahraga",
    stat_license: "Lisensi Pelatih",

    field_name: "Nama Lengkap",
    field_profession: "Profesi",
    val_profession: "Coach/Instruktur Renang",
    field_qualification: "Kualifikasi Akademik",
    field_license: "Lisensi Resmi",
    field_domain: "Bidang Kepelatihan",
    val_domain: "Pembelajaran & Pelatihan Renang (Dasar hingga Mahir)",
    field_program: "Program Utama",
    val_program: "Les Renang/Privat Renang Terarah",
    field_club: "Klub Naungan",

    section_principle_badge: "OUR CORE VALUES",
    section_principle_title: "Prinsip Pelatihan",
    section_principle_sub: "5 pondasi utama dalam setiap sesi latihan bersama Sinalsal Swimming Club.",
    principle_1_title: "Aman",
    principle_1_desc: "Keselamatan dan keamanan peserta adalah prioritas utama dengan pengawasan ketat dan prosedur standar.",
    principle_2_title: "Disiplin",
    principle_2_desc: "Membangun komitmen waktu, fokus gerakan, dan konsistensi latihan untuk hasil yang maksimal.",
    principle_3_title: "Bertahap",
    principle_3_desc: "Kurikulum disusun step-by-step sesuai kurva adaptasi dan tingkat kemampuan masing-masing peserta.",
    principle_4_title: "Profesional",
    principle_4_desc: "Dipandu langsung oleh pelatih berlisensi dan berlatar belakang Sarjana Olahraga (S.Or., Gr.).",
    principle_5_title: "Menyenangkan",
    principle_5_desc: "Suasana belajar yang suportif, ramah, dan bebas dari rasa tertekan agar peserta nyaman berenang.",

    mkt_tag: "YUK, BELAJAR RENANG BERSAMA!",
    mkt_quote: "“Belajar dengan Aman, Berlatih dengan Disiplin, Berenang dengan Percaya Diri.”",
    mkt_btn: "Daftar Sekarang →",

    footer_copy: "© 2026 Sinalsal Swimming & Academy. All Rights Reserved.",

    modal_title: "Segera Diluncurkan!",
    modal_desc: "Program ini akan segera diluncurkan! Untuk detail lebih lanjut hubungi kontak yang tersedia.",
    modal_btn_wa: "Hubungi WhatsApp",
    modal_btn_close: "Tutup"
  },
  en: {
    nav_back: "← Home",
    nav_home: "Home",
    nav_renang: "Private Swimming",
    nav_binsik: "Fitness (Binsik)",
    nav_bimbel: "Academic Tutoring",

    pill_profile: "Profile",
    pill_bio: "Bio",
    pill_schedule: "Schedule & Pool",
    pill_register: "Registration",

    hero_badge: "🏅 COACH PROFILE",
    hero_title: "INSTRUCTOR BIODATA",
    hero_sub: "Get to Know the Professional Coach of Sinalsal Swimming Club",
    btn_daftar: "Register Now →",
    btn_explore_bio: "View Bio Details ↓",

    section_bio_badge: "CURRICULUM VITAE",
    section_bio_title: "Personal & Professional Credentials",
    section_bio_sub: "Certified qualifications and swimming coaching track record.",
    coach_role_sub: "Head Swimming Instructor & Coach",
    stat_degree: "Bachelor of Sports",
    stat_license: "Coach License",

    field_name: "Full Name",
    field_profession: "Profession",
    val_profession: "Swimming Coach/Certified Instructor",
    field_qualification: "Academic Qualification",
    field_license: "Official License",
    field_domain: "Coaching Field",
    val_domain: "Swimming Pedagogy & Training (Basic to Advanced)",
    field_program: "Core Program",
    val_program: "Private/Semi-Private Swimming Lessons",
    field_club: "Affiliated Club",

    section_principle_badge: "OUR CORE VALUES",
    section_principle_title: "Coaching Principles",
    section_principle_sub: "5 core foundations embedded in every Sinalsal Swimming Club session.",
    principle_1_title: "Safe",
    principle_1_desc: "Student safety is our utmost priority with vigilant supervision and safety guidelines.",
    principle_2_title: "Disciplined",
    principle_2_desc: "Instilling time commitment, stroke precision, and consistent practice habits.",
    principle_3_title: "Progressive",
    principle_3_desc: "Step-by-step curriculum carefully matched to individual learning curves and skill levels.",
    principle_4_title: "Professional",
    principle_4_desc: "Directly led by a certified coach holding an official Bachelor of Sports degree (S.Or., Gr.).",
    principle_5_title: "Enjoyable",
    principle_5_desc: "A supportive, friendly, and stress-free environment encouraging confident swimming.",

    mkt_tag: "COME LEARN SWIMMING WITH US!",
    mkt_quote: "“Learn Safely, Train with Discipline, Swim with Confidence.”",
    mkt_btn: "Register Now →",

    footer_copy: "© 2026 Sinalsal Swimming & Academy. All Rights Reserved.",

    modal_title: "Coming Soon!",
    modal_desc: "This program will be launched soon! For more details, please reach out via our contact channels.",
    modal_btn_wa: "Contact WhatsApp",
    modal_btn_close: "Close"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('sinalSwimLangSwitcher');
  const langBtns = document.querySelectorAll('.sinalSwim-lang-btn');

  function applyLanguage(lang) {
    const dict = biodataRenangI18n[lang] || biodataRenangI18n.id;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    if (langSwitcher) langSwitcher.setAttribute('data-selected', lang);
    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('sinalswim_lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }

  const initialLang = localStorage.getItem('sinalswim_lang') || 'id';
  applyLanguage(initialLang);

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  const slides = document.querySelectorAll('.sinalSwim-carousel-slide');
  const dotsContainer = document.getElementById('bioCarouselDots');
  let currentSlide = 0;
  let carouselInterval = null;

  if (dotsContainer && slides.length > 0) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `sinalSwim-carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('.sinalSwim-carousel-dot');

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }

  function startAutoplay() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 5000);
  }

  if (slides.length > 0) {
    goToSlide(0);
    startAutoplay();
  }

  const modalBackdrop = document.getElementById('sinalSwimModalBackdrop');
  const modalCloseBtn = document.getElementById('sinalSwimModalCloseBtn');
  const comingSoonElements = document.querySelectorAll('.sinalSwim-coming-soon');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  comingSoonElements.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }
});