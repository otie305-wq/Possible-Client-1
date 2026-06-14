/* ─────────────────────────────────────────
   i18n.js — English / Arabic translations
   Usage: data-i18n="key"       → textContent
          data-i18n-html="key"  → innerHTML
───────────────────────────────────────── */
window.i18n = (() => {

  const TRANSLATIONS = {
    en: {
      /* Nav */
      nav_services:  'Services',
      nav_team:      'Team',
      nav_reviews:   'Reviews',
      nav_contact:   'Contact',
      nav_book:      'Book Now',

      /* Hero */
      hero_eyebrow:       "Al Khobar's Premier Barbershop",
      hero_title:         'The Art of<br><em>Lebanese</em><br>Craft.',
      hero_sub:           'Where precision meets tradition. Expert haircuts, sharp fades, and luxury grooming treatments crafted by hands with decades of mastery.',
      hero_cta_primary:   'Book an Appointment',
      hero_cta_secondary: 'View Services',
      hero_proof_num:     '400+',
      hero_proof_label:   'Five-star reviews across<br>Google &amp; all platforms',

      /* Stats */
      stat_reviews: 'Five-Star Reviews',
      stat_years:   'Years of Mastery',
      stat_barbers: 'Master Barbers',
      stat_rated:   'Rated Experience',

      /* Intro */
      intro_tagline: 'Service Beyond<br><em>Expectation</em> —<br>Every Single Visit.',
      intro_body:    'Ace Lebanese Barbershop brings the craft and warmth of Levantine grooming culture to the heart of Al Khobar. Our masters combine time-honoured barbering traditions with modern techniques — from precision fades and sculptured beards to rejuvenating Japanese head spas and deep facial treatments. Every client leaves looking and feeling their absolute best.',

      /* Services */
      services_eyebrow:   'Our Packages',
      services_heading:   'Crafted for the<br><em>Distinguished</em>',
      badge_signature:    'Signature',
      pkg_ace_name:       'Ace Package',
      service_haircut:    'Haircut & Beard Trim',
      service_headspa:    'Japanese Head Spa',
      service_oiltreat:   'Luxury Hair Oil Treatment',
      service_facial:     'Facial Deep Cleaning',
      book_this:          'Book This Package',
      badge_vip:          'VIP Experience',
      pkg_vip_name:       'Ace VIP Package',
      book_vip:           'Book VIP Experience',

      /* Team */
      team_eyebrow:   'Our Masters',
      team_heading:   'The Hands Behind<br>the <em>Craft</em>',
      barber1_exp:    '10 Years of Mastery',
      barber1_name:   'Mohammad Selman',
      barber1_bio:    "A master of precision cuts, flawless fades, sculpted beards, and restorative head spas. Mohammad's hands have set the benchmark for excellence in Al Khobar.",
      barber2_exp:    '7 Years of Mastery',
      barber2_name:   'Mostafa Saeed',
      barber2_bio:    "Known for creative custom looks and razor-sharp fades, Mostafa's eye for detail and instinct for personal style turn every visit into a signature expression.",
      tag_precision:  'Precision Cuts',
      tag_fades:      'Fades',
      tag_beard:      'Beard Design',
      tag_headspa:    'Head Spa',
      tag_custom:     'Custom Looks',
      tag_sharp:      'Sharp Fades',
      tag_creative:   'Creative Styles',

      /* Booking */
      booking_eyebrow: 'Reserve Your Chair',
      booking_heading: 'Book Your<br><em>Appointment</em>',
      booking_sub:     "Choose your package, select your barber, and lock in your time. We'll take care of everything else.",

      /* Reviews */
      reviews_eyebrow:  'Client Voices',
      reviews_heading:  'What Our Clients<br><em>Say</em>',
      review1_text:     '"The best barbershop I\'ve been to in Al Khobar. Mohammad\'s precision is absolutely unmatched — walked out feeling like a completely new man."',
      review1_name:     'Ahmed K.',
      review2_text:     '"The Japanese head spa experience is absolutely incredible. The atmosphere is luxurious, the attention to detail is extraordinary. Already booked my next visit."',
      review2_name:     'Omar R.',
      review3_text:     '"Mostafa gave me the sharpest fade I\'ve ever had. The VIP package is worth every riyal — genuinely felt pampered from start to finish. Won\'t go anywhere else."',
      review3_name:     'Khalid M.',
      review_platform:  'Google Review',

      /* Contact */
      contact_eyebrow:      'Visit Us',
      contact_heading:      'Find <em>Ace</em>',
      contact_loc_heading:  'Location & Contact',
      contact_address1:     'Prince Sultan Road',
      contact_address2:     'Al Jawharah, Al Khobar 31311',
      contact_hours_heading:'Hours',
      hours_sat_thu:        'Saturday – Thursday',
      hours_sat_thu_time:   '12:00 – 22:00',
      hours_fri:            'Friday',
      hours_fri_time:       '13:00 – 22:00',
      contact_book_heading: 'Book Now',
      contact_book_sub:     "Ready for a cut that speaks for itself? Reserve your chair with one of our masters today.",
      contact_book_btn:     'Book Appointment',

      /* Footer */
      footer_copy:      '© 2025 Ace Lebanese Barbershop. All rights reserved.',
      footer_instagram: 'Instagram',
      footer_book:      'Book',
      footer_contact:   'Contact',
    },

    ar: {
      /* Nav */
      nav_services:  'الخدمات',
      nav_team:      'الفريق',
      nav_reviews:   'التقييمات',
      nav_contact:   'تواصل معنا',
      nav_book:      'احجز الآن',

      /* Hero */
      hero_eyebrow:       'أفضل حلاق في الخبر',
      hero_title:         'فن الحلاقة<br><em>اللبنانية</em>',
      hero_sub:           'حيث تلتقي الدقة بالتراث. قصات احترافية، فيدات حادة، وعلاجات فاخرة على يد أيدٍ خبيرة بعقود من الإتقان.',
      hero_cta_primary:   'احجز موعدك',
      hero_cta_secondary: 'استعرض خدماتنا',
      hero_proof_num:     '+400',
      hero_proof_label:   'تقييمات خمس نجوم على<br>جوجل وجميع المنصات',

      /* Stats */
      stat_reviews: 'تقييمات خمس نجوم',
      stat_years:   'سنوات من الإتقان',
      stat_barbers: 'حلاقون محترفون',
      stat_rated:   'تجربة مُقيَّمة',

      /* Intro */
      intro_tagline: 'خدمة تفوق<br><em>التوقعات</em> —<br>في كل زيارة.',
      intro_body:    'يجلب آيس للحلاقة اللبنانية حرفة الحلاقة الشامية ودفء ثقافتها إلى قلب الخبر. يجمع أساتذتنا بين تقاليد الحلاقة العريقة والأساليب الحديثة — من الفيدات الدقيقة واللحى المنسقة إلى سبا الرأس اليابانية وعلاجات الوجه العميقة. كل عميل يغادر بمظهر أفضل وشعور أجمل.',

      /* Services */
      services_eyebrow:   'باقاتنا',
      services_heading:   'مصممة للمتميزين<br><em>فقط</em>',
      badge_signature:    'توقيعية',
      pkg_ace_name:       'باقة آيس',
      service_haircut:    'قصة شعر وتشذيب اللحية',
      service_headspa:    'سبا الرأس اليابانية',
      service_oiltreat:   'علاج الشعر بالزيت الفاخر',
      service_facial:     'تنظيف عميق للوجه',
      book_this:          'احجز هذه الباقة',
      badge_vip:          'تجربة VIP',
      pkg_vip_name:       'باقة آيس VIP',
      book_vip:           'احجز تجربة VIP',

      /* Team */
      team_eyebrow:   'أساتذتنا',
      team_heading:   'الأيدي التي<br>تصنع <em>الفرق</em>',
      barber1_exp:    '١٠ سنوات من الإتقان',
      barber1_name:   'محمد سلمان',
      barber1_bio:    'أستاذ في القصات الدقيقة، والفيدات المثالية، وتشكيل اللحى، وسبا الرأس المجددة. وضع محمد المعيار للتميز في الخبر.',
      barber2_exp:    '٧ سنوات من الإتقان',
      barber2_name:   'مصطفى سعيد',
      barber2_bio:    'معروف بلمساته الإبداعية وفيداته الحادة. عيون مصطفى الثاقبة للتفاصيل وحسه بالأسلوب الشخصي يحولان كل زيارة إلى تعبير مميز.',
      tag_precision:  'قصات دقيقة',
      tag_fades:      'فيدات',
      tag_beard:      'تصميم اللحية',
      tag_headspa:    'سبا الرأس',
      tag_custom:     'لمسات إبداعية',
      tag_sharp:      'فيدات حادة',
      tag_creative:   'أساليب مبتكرة',

      /* Booking */
      booking_eyebrow: 'احجز كرسيك',
      booking_heading: 'احجز<br><em>موعدك</em>',
      booking_sub:     'اختر باقتك، وحدد الحلاق، واحجز وقتك. نحن نتكفل بالباقي.',

      /* Reviews */
      reviews_eyebrow:  'أصوات عملائنا',
      reviews_heading:  'ماذا يقول<br><em>عملاؤنا</em>',
      review1_text:     '"أفضل حلاق زرته في الخبر. دقة محمد لا مثيل لها — خرجت وكأنني شخص جديد تماماً."',
      review1_name:     'أحمد ك.',
      review2_text:     '"تجربة سبا الرأس اليابانية رائعة للغاية. الأجواء فاخرة والاهتمام بالتفاصيل استثنائي. حجزت زيارتي القادمة فوراً."',
      review2_name:     'عمر ر.',
      review3_text:     '"أعطاني مصطفى أحد الفيدات الأكثر حدة التي رأيتها. باقة VIP تستحق كل ريال — شعرت بالدلال من البداية للنهاية."',
      review3_name:     'خالد م.',
      review_platform:  'تقييم جوجل',

      /* Contact */
      contact_eyebrow:       'زورونا',
      contact_heading:       'ابحث عن <em>آيس</em>',
      contact_loc_heading:   'الموقع والتواصل',
      contact_address1:      'طريق الأمير سلطان',
      contact_address2:      'الجوهرة، الخبر ٣١٣١١',
      contact_hours_heading: 'أوقات العمل',
      hours_sat_thu:         'السبت – الخميس',
      hours_sat_thu_time:    '١٢:٠٠ – ٢٢:٠٠',
      hours_fri:             'الجمعة',
      hours_fri_time:        '١٣:٠٠ – ٢٢:٠٠',
      contact_book_heading:  'احجز الآن',
      contact_book_sub:      'هل أنت مستعد لقصة تتحدث عن نفسها؟ احجز كرسيك مع أحد أساتذتنا اليوم.',
      contact_book_btn:      'احجز موعدك',

      /* Footer */
      footer_copy:      '© ٢٠٢٥ آيس للحلاقة اللبنانية. جميع الحقوق محفوظة.',
      footer_instagram: 'إنستغرام',
      footer_book:      'احجز',
      footer_contact:   'تواصل',
    }
  };

  function apply(lang) {
    const html  = document.documentElement;
    const t     = TRANSLATIONS[lang];
    if (!t) return;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    /* plain text nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });

    /* rich html nodes (headings with <em>, <br> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] != null) el.innerHTML = t[key];
    });

    /* language toggle button label */
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = lang === 'ar' ? 'EN' : 'عربي';
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });

    localStorage.setItem('ace-lang', lang);
  }

  function toggle() {
    const current = document.documentElement.getAttribute('lang') || 'en';
    apply(current === 'en' ? 'ar' : 'en');
  }

  /* wire toggle buttons */
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', toggle);
  });

  /* init from stored preference */
  apply(localStorage.getItem('ace-lang') || 'en');

  return { apply, toggle };
})();
