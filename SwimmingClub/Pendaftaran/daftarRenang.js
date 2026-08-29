const daftarRenangI18n = {
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

    hero_badge: "📝 REGISTRATION",
    hero_title: "PENDAFTARAN LES RENANG",
    hero_sub: "Belajar Renang • Tingkatkan Kemampuan • Bangun Kepercayaan Diri",
    btn_daftar_header: "Daftar Sekarang via WhatsApp →",
    btn_explore_info: "Info Pendaftaran ↓",

    section_reg_badge: "PENDAFTARAN",
    reg_main_heading: "DAFTAR SEKARANG!",
    reg_main_sub: "Untuk informasi lebih lanjut dan pendaftaran les renang, langsung hubungi PC/Kontak Pribadi Coach Daniel.",
    direct_contact_label: "Kontak Pribadi Coach:",
    btn_hubungi_sekarang: "Hubungi Coach di WhatsApp",

    req_data_title: "Data yang perlu disampaikan saat mendaftar:",
    item_1_title: "Nama lengkap peserta",
    item_1_sub: "Tuliskan nama lengkap peserta yang akan mengikuti les.",
    item_2_title: "Usia peserta",
    item_2_sub: "Usia peserta saat mendaftar (anak-anak/remaja/dewasa).",
    item_3_title: "Jenis kelamin",
    item_3_sub: "Laki-laki/Perempuan.",
    item_4_title: "Tingkat kemampuan berenang",
    item_4_sub: "Contoh: Pemula total/takut air/bisa mengapung/ingin perbaikan gaya.",
    item_5_title: "Pilihan hari latihan",
    item_5_sub: "Pilihan hari antara Senin s/d Jumat (atau jadwal kesepakatan).",
    item_6_title: "Pilihan sesi latihan",
    item_6_sub: "Sesi I (15.00 - 16.30 WIB) atau Sesi II (16.30 - 18.00 WIB).",
    item_7_title: "Nomor WhatsApp orang tua/wali",
    item_7_sub: "Khusus untuk peserta anak-anak.",

    note_box_title: "Catatan",
    note_box_p1: "Pendaftaran dilakukan secara langsung melalui kontak pribadi Coach Daniel.",
    note_box_p2: "Slot latihan terbatas, sehingga peserta disarankan melakukan pendaftaran terlebih dahulu sebelum mengikuti latihan.",
    template_badge: "💡 Tips Format Chat Cepat:",
    btn_copy_chat: "Kirim Format Ini ke WhatsApp ↗",

    mkt_tag: "YUK, BELAJAR RENANG BERSAMA!",
    mkt_quote: "“Belajar dengan Aman, Berlatih dengan Disiplin, Berenang dengan Percaya Diri.”",

    section_doc_badge: "DOKUMENTASI KEGIATAN",
    section_doc_title: "Dokumentasi Latihan",

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

    hero_badge: "📝 REGISTRATION",
    hero_title: "SWIMMING REGISTRATION",
    hero_sub: "Learn to Swim • Enhance Skills • Build True Confidence",
    btn_daftar_header: "Register Now via WhatsApp →",
    btn_explore_info: "Registration Info ↓",

    section_reg_badge: "REGISTRATION",
    reg_main_heading: "REGISTER NOW!",
    reg_main_sub: "For further details and registration, please contact Coach Daniel directly.",
    direct_contact_label: "Coach Personal Contact:",
    btn_hubungi_sekarang: "Chat Coach on WhatsApp",

    req_data_title: "Information to provide when registering:",
    item_1_title: "Participant's Full Name",
    item_1_sub: "Provide the complete name of the student.",
    item_2_title: "Participant's Age",
    item_2_sub: "Current age of participant (kids/teens/adults).",
    item_3_title: "Gender",
    item_3_sub: "Male/Female.",
    item_4_title: "Swimming Skill Level",
    item_4_sub: "Example: Total beginner/fear of water/basic floating/stroke refinement.",
    item_5_title: "Preferred Training Day",
    item_5_sub: "Choice between Monday to Friday (or agreed custom schedule).",
    item_6_title: "Preferred Training Session",
    item_6_sub: "Session I (15.00 - 16.30 WIB) or Session II (16.30 - 18.00 WIB).",
    item_7_title: "Parent/Guardian WhatsApp Number",
    item_7_sub: "Required specifically for child participants.",

    note_box_title: "Notes",
    note_box_p1: "Registration is handled directly through Coach Daniel's personal contact.",
    note_box_p2: "Training slots are limited, therefore advance registration is recommended.",
    template_badge: "💡 Quick Chat Template:",
    btn_copy_chat: "Send Template to WhatsApp ↗",

    mkt_tag: "COME LEARN SWIMMING WITH US!",
    mkt_quote: "“Learn Safely, Train with Discipline, Swim with Confidence.”",

    section_doc_badge: "ACTIVITY DOCUMENTATION",
    section_doc_title: "Training Documentation",

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
    const dict = daftarRenangI18n[lang] || daftarRenangI18n.id;
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

  const headerSlides = document.querySelectorAll('#regCarouselTrack .sinalSwim-carousel-slide');
  const headerDotsContainer = document.getElementById('regCarouselDots');
  let currentHeaderSlide = 0;
  let headerInterval = null;

  if (headerDotsContainer && headerSlides.length > 0) {
    headerDotsContainer.innerHTML = '';
    headerSlides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `sinalSwim-carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToHeaderSlide(i);
        startHeaderAutoplay();
      });
      headerDotsContainer.appendChild(dot);
    });
  }

  const headerDots = document.querySelectorAll('#regCarouselDots .sinalSwim-carousel-dot');

  function goToHeaderSlide(index) {
    headerSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    headerDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentHeaderSlide = index;
  }

  function nextHeaderSlide() {
    let nextIndex = (currentHeaderSlide + 1) % headerSlides.length;
    goToHeaderSlide(nextIndex);
  }

  function startHeaderAutoplay() {
    if (headerInterval) clearInterval(headerInterval);
    headerInterval = setInterval(nextHeaderSlide, 5000);
  }

  if (headerSlides.length > 0) {
    goToHeaderSlide(0);
    startHeaderAutoplay();
  }

  const docSlides = document.querySelectorAll('.sinalSwim-doc-slide');
  const docDotsContainer = document.getElementById('docDotsContainer');
  const docPrevBtn = document.getElementById('docPrevBtn');
  const docNextBtn = document.getElementById('docNextBtn');
  let currentDocSlide = 0;
  let docInterval = null;
  const docSlideDuration = 4000; 

  if (docDotsContainer && docSlides.length > 0) {
    docDotsContainer.innerHTML = '';
    docSlides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `sinalSwim-doc-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Doc Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToDocSlide(i);
        startDocAutoplay();
      });
      docDotsContainer.appendChild(dot);
    });
  }

  const docDots = document.querySelectorAll('.sinalSwim-doc-dot');

  function goToDocSlide(index) {
    docSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);

      const video = slide.querySelector('video');
      if (video) {
        if (i === index) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });

    docDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentDocSlide = index;
  }

  function nextDocSlide() {
    let nextIndex = (currentDocSlide + 1) % docSlides.length;
    goToDocSlide(nextIndex);
  }

  function prevDocSlide() {
    let prevIndex = (currentDocSlide - 1 + docSlides.length) % docSlides.length;
    goToDocSlide(prevIndex);
  }

  function startDocAutoplay() {
    if (docInterval) clearInterval(docInterval);
    docInterval = setInterval(nextDocSlide, docSlideDuration);
  }

  if (docNextBtn && docPrevBtn) {
    docNextBtn.addEventListener('click', () => {
      nextDocSlide();
      startDocAutoplay();
    });
    docPrevBtn.addEventListener('click', () => {
      prevDocSlide();
      startDocAutoplay();
    });
  }

  if (docSlides.length > 0) {
    goToDocSlide(0);
    startDocAutoplay();
  }

  // ==========================================
  // 4. COMING SOON MODAL POPUP
  // ==========================================
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