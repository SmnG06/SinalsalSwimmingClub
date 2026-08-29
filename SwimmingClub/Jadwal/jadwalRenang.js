const jadwalRenangI18n = {
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

    hero_badge: "📍 SCHEDULE & VENUE",
    hero_title: "JADWAL & LOKASI LATIHAN",
    hero_sub: "Informasi jadwal sesi latihan renang rutin dan lokasi kolam resmi.",
    btn_daftar: "Daftar Sekarang →",
    btn_explore_schedule: "Lihat Jadwal ↓",

    section_sched_badge: "SENIN - JUMAT",
    sch_table_title: "Tabel Jadwal Les Renang",
    sch_table_sub: "Peserta dapat memilih jadwal latihan sesuai ketersediaan slot yang ada.",
    th_day: "Hari",
    th_session_1: "Sesi I (15.00 - 16.30 WIB)",
    th_session_2: "Sesi II (16.30 - 18.00 WIB)",

    session_1_desc: "Sesi sore awal, sangat baik untuk latihan fokus dengan sinar matahari sore yang bersahabat.",
    session_2_desc: "Sesi sore lanjutan selepas waktu sekolah atau jam aktivitas harian, suasana lebih sejuk.",

    section_loc_badge: "VENUE & LOCATION",
    loc_title: "Lokasi Latihan",
    loc_sub: "Pusat pelatihan resmi dan layanan konsultasi lokasi latihan khusus.",
    loc_main_name: "Kolam Berenang Prima Jaya Hotel",
    loc_main_sub: "Pasar 1, Perdagangan",
    loc_main_desc: "Tempat latihan resmi Sinalsal Swimming Club dengan kondisi kolam renang yang bersih, aman, dan nyaman untuk semua tingkatan usia.",
    btn_open_maps: "Buka Google Maps",

    req_title: "Punya Rekomendasi Tempat Lain?",
    req_sub: "Konsultasi Lokasi Kolam Pilihan Anda",
    req_desc: "Diskusikan dengan Coach mengenai tempat latihan yang Anda inginkan sebagai bahan pertimbangan dan kesepakatan bersama.",
    btn_req_wa: "Diskusikan dengan Coach",

    banner_title: "Sudah Menentukan Hari & Sesi Latihan?",
    banner_sub: "Slot latihan terbatas di setiap sesinya. Daftarkan diri Anda sekarang sebelum kuota penuh.",
    btn_daftar_now: "Daftar Sekarang →",

    footer_copy: "© 2026 Sinalsal Swimming. All Rights Reserved.",
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

    hero_badge: "📍 SCHEDULE & VENUE",
    hero_title: "TRAINING SCHEDULE & VENUE",
    hero_sub: "Official training routine schedules and certified pool venue information.",
    btn_daftar: "Register Now →",
    btn_explore_schedule: "View Schedule ↓",

    section_sched_badge: "MONDAY - FRIDAY",
    sch_table_title: "Swimming Schedule Table",
    sch_table_sub: "Participants can select training sessions based on available slot capacity.",
    th_day: "Day",
    th_session_1: "Session I (15.00 - 16.30 WIB)",
    th_session_2: "Session II (16.30 - 18.00 WIB)",

    session_1_desc: "Early afternoon session, ideal for focused drills with mild afternoon sunshine.",
    session_2_desc: "Later afternoon slot after work/school hours with cooler pool temperature.",

    section_loc_badge: "VENUE & LOCATION",
    loc_title: "Training Venue",
    loc_sub: "Official training base and customized venue consultation.",
    loc_main_name: "Prima Jaya Hotel Swimming Pool",
    loc_main_sub: "Pasar 1, Perdagangan",
    loc_main_desc: "Official base pool for Sinalsal Swimming Club with crystal clear, safe, and comfortable water conditions.",
    btn_open_maps: "Open Google Maps",

    req_title: "Have Another Location in Mind?",
    req_sub: "Custom Pool Venue Consultation",
    req_desc: "Feel free to discuss your preferred pool location with the Coach for consideration and mutual agreement.",
    btn_req_wa: "Discuss with Coach",

    banner_title: "Selected Your Day & Session?",
    banner_sub: "Training slots are strictly limited per session. Reserve your slot before it is full.",
    btn_daftar_now: "Register Now →",

    footer_copy: "© 2026 Sinalsal Swimming. All Rights Reserved.",
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
    const dict = jadwalRenangI18n[lang] || jadwalRenangI18n.id;
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
  }

  const initialLang = localStorage.getItem('sinalswim_lang') || 'id';
  applyLanguage(initialLang);

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });

  const slides = document.querySelectorAll('.sinalSwim-carousel-slide');
  const dotsContainer = document.getElementById('scheduleCarouselDots');
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