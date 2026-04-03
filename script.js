/* ── Countdown ── */
const target = new Date('2026-09-12T17:00:00');
let prevSec = -1;

function tick() {
  const diff = target - new Date();
  if (diff <= 0) {
    ['cd-days','cd-hours','cd-min','cd-sec'].forEach(id =>
      document.getElementById(id).textContent = '00');
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);

  document.getElementById('cd-days').textContent  = String(d).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-min').textContent   = String(m).padStart(2,'0');

  const secEl = document.getElementById('cd-sec');
  secEl.textContent = String(s).padStart(2,'0');
  if (s !== prevSec) {
    secEl.classList.remove('tick');
    void secEl.offsetWidth;
    secEl.classList.add('tick');
    prevSec = s;
  }
}
tick();
setInterval(tick, 500);

/* ── RSVP ── */
const rsvpForm = document.getElementById('rsvp-form');
const rsvpName = document.getElementById('rsvp-name');
const rsvpAttendance = document.getElementsByName('rsvp-attendance');
const rsvpCompanions = document.getElementById('rsvp-companions');
const companionsGroup = document.getElementById('companions-group');
const rsvpBtn = document.getElementById('rsvp-btn');

// Show/hide companions field based on attendance selection
rsvpAttendance.forEach(radio => {
  radio.addEventListener('change', (e) => {
    companionsGroup.style.display = e.target.value === 'yes' ? 'flex' : 'none';
  });
});

// Handle form submission
rsvpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = rsvpName.value.trim();
  const attendance = Array.from(rsvpAttendance).find(r => r.checked)?.value;
  const companions = rsvpCompanions.value;
  
  // Validation
  if (!name) {
    rsvpName.style.borderColor = '#b03030';
    rsvpName.focus();
    return;
  }
  
  if (!attendance) {
    alert('Por favor, selecciona si asistirás o no');
    return;
  }
  
  // Clear any error states
  rsvpName.style.borderColor = '';
  
  // Build confirmation message
  let message = `¡Confirmado! ${name}`;
  if (attendance === 'yes') {
    message += attendance === 'yes' ? ` (${parseInt(companions) + 1} persona${parseInt(companions) > 0 ? 's' : ''})` : '';
  } else {
    message += ' (No asistirá)';
  }
  
  rsvpBtn.textContent = message + ' 🌿';
  rsvpBtn.style.background = '#2a6b54';
  rsvpBtn.disabled = true;
  rsvpForm.style.opacity = '0.7';
});

// Clear error on input
rsvpName.addEventListener('input', () => { rsvpName.style.borderColor = ''; });

/* ── Scroll reveal ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Venue blocks (Calendar & Maps) ── */
document.querySelectorAll('.venue-block').forEach(block => {
  block.addEventListener('click', (e) => {
    e.preventDefault();
    const type = block.dataset.type;
    
    if (type === 'calendar') {
      // Google Calendar link
      const title = block.dataset.title || 'Evento';
      const date = block.dataset.date; // Format: YYYYMMDDTHHMMSS
      const location = block.dataset.location || '';
      const description = block.dataset.description || '';
      
      // Format: startDate and endDate are YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS
      const endTime = '20260912T190000'; // 2 hours after start
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date}/${endTime}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(description)}`;
      
      window.open(calendarUrl, '_blank');
    } 
    else if (type === 'maps') {
      // Google Maps link
      const location = block.dataset.location || '';
      const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
      window.open(mapsUrl, '_blank');
    }
  });
});

/* ── Gallery Lightbox ── */
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCurrent = document.getElementById('lightbox-current');
const lightboxTotal = document.getElementById('lightbox-total');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let galleryImages = [];
let currentImageIndex = 0;

// Get all gallery images
function initGallery() {
  const galleryItems = document.querySelectorAll('[data-gallery="main"]');
  galleryImages = Array.from(galleryItems).map(item => {
    const img = item.querySelector('img');
    return {
      src: img.src.replace(/w=\d+/, 'w=1200'), // Higher quality for lightbox
      alt: img.alt
    };
  });
  lightboxTotal.textContent = galleryImages.length;
}

function openLightbox(index) {
  currentImageIndex = index;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  if (galleryImages.length === 0) return;
  
  const image = galleryImages[currentImageIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCurrent.textContent = currentImageIndex + 1;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}

// Event listeners for gallery items
document.addEventListener('click', (e) => {
  const galleryItem = e.target.closest('[data-gallery="main"]');
  if (galleryItem) {
    const index = Array.from(document.querySelectorAll('[data-gallery="main"]')).indexOf(galleryItem);
    openLightbox(index);
  }
});

// Lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('active')) {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
  }
});

// Initialize gallery on page load
initGallery();