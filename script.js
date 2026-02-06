/* =========================
   CONFIGURACIÓN SWIPER
========================= */
const weddingSwiper = new Swiper(".wedding-swiper", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "slide", // slide | fade | coverflow | cards

  grabCursor: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/* =========================
   HEADER SCROLL
========================= */

let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll hacia abajo → ocultar
    header.style.transform = "translateY(-100%)";
  } else {
    // Scroll hacia arriba → mostrar
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;

  if (currentScroll <= 50) {
    header.style.transform = "translateY(0)";
  }
});


/* =========================
   HEADER MÓVIL
========================= */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

/* Cerrar menú al hacer click en un enlace */
document.querySelectorAll(".nav__menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  navMenu.classList.remove("active");
  navToggle.classList.remove("active");
});

/* =========================
   TRADUCCIONES
========================= */
const translations = {
  es: {
    menu: {
      story: "Historia",
      gallery: "Galería",
      countdown: "Cuenta atrás",
      details: "Detalles",
      location: "Ubicación",
      rsvp: "RSVP",
    },
    hero: {
      title: "NOS CASAMOS",
      subtitle: "24 de mayo de 2026 · Detroit",
    },
    story: {
      title: "Nuestra historia",
      text: "Un pequeño texto bonito contando vuestra historia o una frase especial.",
    },
    gallery: {
      title: "Momentos",
      slide1: "Nuestra historia comienza",
      slide2: "El gran día se acerca",
      slide3: "Te esperamos",
    },
    countdown: {
      title: "Cuenta atrás",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
    details: {
      title: "Detalles del evento",
      date: "24 de mayo de 2026",
      time: "17:00 h",
      place: "Detroit, Michigan",
      type: "Celebración religiosa",
    },
    schedule: {
      title: "Horario del evento",
      item1: "Ceremonia religiosa",
      item2: "Cóctel y aperitivos",
      item3: "Cena y brindis",
      item4: "Fiesta y baile",
    },
    location: {
      title: "Cómo llegar",
    },
    rsvp: {
      title: "Confirmar asistencia",
      name: "Nombre",
      email: "Email",
      button: "Confirmar",
    },
    footer: {
      text: "Con cariño · A & B · 2026",
    },
  },

  en: {
    menu: {
      story: "Story",
      gallery: "Gallery",
      countdown: "Countdown",
      details: "Details",
      location: "Location",
      rsvp: "RSVP",
    },
    hero: {
      title: "WE ARE GETTING MARRIED",
      subtitle: "May 24, 2026 · Detroit",
    },
    story: {
      title: "Our story",
      text: "A small beautiful text telling your story.",
    },
    gallery: {
      title: "Moments",
      slide1: "Our story begins",
      slide2: "The big day is coming",
      slide3: "We are waiting for you",
    },
    countdown: {
      title: "Countdown",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    details: {
      title: "Event details",
      date: "May 24, 2026",
      time: "5:00 PM",
      place: "Detroit, Michigan",
      type: "Religious ceremony",
    },
    schedule: {
      title: "Event schedule",
      item1: "Religious ceremony",
      item2: "Cocktail & appetizers",
      item3: "Dinner & toast",
      item4: "Party & dancing",
    },
    location: {
      title: "How to get there",
    },
    rsvp: {
      title: "RSVP",
      name: "Name",
      email: "Email",
      button: "Confirm",
    },
    footer: {
      text: "With love · A & B · 2026",
    },
  },

  ro: {
    menu: {
      story: "Poveste",
      gallery: "Galerie",
      countdown: "Numărătoare inversă",
      details: "Detalii",
      location: "Locație",
      rsvp: "RSVP",
    },
    hero: {
      title: "NE CĂSĂTORIM",
      subtitle: "24 mai 2026 · Detroit",
    },
    story: {
      title: "Povestea noastră",
      text: "Un mic text frumos care spune povestea voastră.",
    },
    gallery: {
      title: "Momente",
      slide1: "Povestea noastră începe",
      slide2: "Ziua cea mare se apropie",
      slide3: "Vă așteptăm",
    },
    countdown: {
      title: "Numărătoare inversă",
      days: "Zile",
      hours: "Ore",
      minutes: "Minute",
      seconds: "Secunde",
    },
    details: {
      title: "Detalii eveniment",
      date: "24 mai 2026",
      time: "17:00",
      place: "Detroit, Michigan",
      type: "Ceremonie religioasă",
    },
    schedule: {
      title: "Programul evenimentului",
      item1: "Ceremonie religioasă",
      item2: "Cocktail și aperitive",
      item3: "Cină și toast",
      item4: "Petrecere și dans",
    },
    location: {
      title: "Cum ajungi",
    },
    rsvp: {
      title: "Confirmare participare",
      name: "Nume",
      email: "Email",
      button: "Confirmă",
    },
    footer: {
      text: "Cu drag · A & B · 2026",
    },
  },
};

/* =========================
   FUNCIÓN DE CAMBIO
========================= */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach(k => value = value?.[k]);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const keys = el.dataset.i18nPlaceholder.split(".");
    let value = translations[lang];
    keys.forEach(k => value = value?.[k]);
    if (value) el.placeholder = value;
  });

  localStorage.setItem("language", lang);
}

/* =========================
   EVENTOS
========================= */
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

/* =========================
   IDIOMA URL
========================= */
function getLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang && ["es", "en", "ro"].includes(lang)) {
    return lang;
  }
  return null; // Ninguno válido
}

// Primero revisamos la URL
const urlLang = getLangFromUrl();

// Idioma guardado en localStorage
const savedLang = localStorage.getItem("language");

// Prioridad: URL > LocalStorage > Español por defecto
const defaultLang = urlLang || savedLang || "es";

setLanguage(defaultLang);

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);

    // Actualizar query param sin recargar
    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  });
});

// =========================
// COUNTDOWN
// =========================
function startCountdown(targetDate) {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      // Evento alcanzado
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Agregar cero delante si es <10
    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Fecha objetivo: 24 de mayo de 2026 a las 17:00
const weddingDate = new Date("2026-05-24T17:00:00").getTime();
startCountdown(weddingDate);



