// ==== [CONFIG: WhatsApp] ====
const WHATSAPP_NUMBER = '573001112233';

// ==== [DATA: Servicios] ====
const servicios = [
  { id:'cejas-express', nombre:'Cejas Glow Express', duracion:30, precio:45000,
    descripcion:'Diseño y definición suave que favorece tu rostro. Técnica profesional con resultados naturales.',
    img:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80' },
  { id:'pestanas-naturales', nombre:'Pestañas Naturales', duracion:30, precio:55000,
    descripcion:'Lifting sutil para mirada fresca sin exceso. Efecto natural que realza tus ojos.',
    img:'https://images.unsplash.com/photo-1637851496670-2bdc6c548d27?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id:'skin-flash', nombre:'Skin Flash 30\'', duracion:30, precio:60000,
    descripcion:'Limpieza profunda y glow inmediato para eventos. Resultados visibles al instante.',
    img:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80' },
  { id:'manicure-express', nombre:'Manicure Express', duracion:30, precio:40000,
    descripcion:'Manos impecables con esmaltado semipermanente. Secado rápido, larga duración.',
    img:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80' },
  { id:'makeup-glow', nombre:'Makeup Glow', duracion:30, precio:70000,
    descripcion:'Maquillaje natural con glow para el día a día. Técnica que resalta tu belleza.',
    img:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80' },
  { id:'depilacion-facial', nombre:'Depilación Facial', duracion:30, precio:35000,
    descripcion:'Rostro suave y limpio con técnicas suaves. Sin irritación, resultados duraderos.',
    img:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80' }
];

// ==== [DATA: Productos] ====
const productos = [
  { id:'kit-glow', nombre:'Kit Glow Diario', categoria:'kits', precio:120000,
    beneficio:'Rutina simple AM/PM para brillo saludable. Todo lo que necesitas en un solo kit.',
    img:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'lip-serum', nombre:'Lip Glow Serum', categoria:'maquillaje', precio:38000,
    beneficio:'Hidratación con brillo sutil sin pegajosidad. Labios suaves todo el día.',
    img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'jade-roller', nombre:'Jade Roller', categoria:'accesorios', precio:45000,
    beneficio:'Masaje facial para desinflamar y relajar. Jade 100% natural.',
    img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'serum-vitamina-c', nombre:'Serum Vitamina C', categoria:'facial', precio:85000,
    beneficio:'Ilumina y unifica el tono de tu piel. Fórmula concentrada con resultados visibles.',
    img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'mascara-hidratante', nombre:'Mascarilla Hidratante', categoria:'facial', precio:52000,
    beneficio:'Hidratación profunda en 15 minutos. Piel suave y radiante al instante.',
    img:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'brow-gel', nombre:'Brow Fixing Gel', categoria:'maquillaje', precio:35000,
    beneficio:'Cejas en su lugar todo el día sin efecto pesado. Fijación natural.',
    img:'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'gua-sha', nombre:'Gua Sha Cuarzo Rosa', categoria:'accesorios', precio:48000,
    beneficio:'Esculpe y tonifica tu rostro naturalmente. Cuarzo rosa original.',
    img:'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'kit-skincare-noche', nombre:'Kit Skincare Noche', categoria:'kits', precio:145000,
    beneficio:'Rutina nocturna completa para piel radiante. 4 productos esenciales.',
    img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'highlighter-cream', nombre:'Cream Highlighter', categoria:'maquillaje', precio:42000,
    beneficio:'Glow natural en mejillas y párpados. Textura cremosa fácil de difuminar.',
    img:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:false },
  { id:'limpiador-facial', nombre:'Limpiador Gel Suave', categoria:'facial', precio:58000,
    beneficio:'Limpieza profunda sin resecar. Para todo tipo de piel.',
    img:'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'esponja-facial', nombre:'Esponja Konjac', categoria:'accesorios', precio:22000,
    beneficio:'Exfoliación suave diaria. 100% natural y biodegradable.',
    img:'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true },
  { id:'kit-viaje', nombre:'Kit Viaje Esenciales', categoria:'kits', precio:98000,
    beneficio:'Todo lo necesario en tamaño viaje. Perfecto para llevar a todos lados.',
    img:'https://images.unsplash.com/photo-1701686794515-8e83954d609a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', ig:'https://www.instagram.com/glow_expresss?igsh=Ymd2anV5c2w2cHBy&utm_source=qr', disponible:true }
];

// ==== [DATA: Testimonios] ====
const testimonios = [
  { texto:'Los servicios son súper rápidos y el resultado es increíble. Me encanta que no tengo que sacar tiempo de más, en 30 minutos salgo lista y hermosa.', autor:'Carolina M.', rating:5 },
  { texto:'El kit Glow Diario cambió mi rutina completamente. Mi piel nunca había estado tan radiante y es súper fácil de usar.', autor:'Andrea P.', rating:5 },
  { texto:'Agendar por WhatsApp es lo mejor, nada de apps complicadas. Además las chicas son súper profesionales y amables.', autor:'Daniela R.', rating:5 },
  { texto:'Me hice las cejas y pestañas y quedé fascinada. El diseño es perfecto y natural, justo lo que buscaba.', autor:'Laura S.', rating:5 },
  { texto:'Los productos son de excelente calidad y a buenos precios. Ya compré varios y todos me han encantado.', autor:'Valentina G.', rating:5 }
];

// ==== [HELPERS] ====
function waLink(texto){
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const utm = '&utm_source=web&utm_medium=cta&utm_campaign=glowexpress';
  return `${base}?text=${encodeURIComponent(texto)}${utm}`;
}
function showToast(message){
  const toastElement = document.getElementById('mainToast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toastElement || !toastMessage) return;
  toastMessage.textContent = message;
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}
function formatPrice(price){ return `$${price.toLocaleString('es-CO')}`; }
function setCurrentYear(){
  document.querySelectorAll('#currentYear').forEach(el => el.textContent = new Date().getFullYear());
}

// Garantiza que imágenes con error no queden invisibles por el lazy (opacity:0)
function setImgFallback(img, w=400, h=300, text='Imagen'){
  img.src = `https://via.placeholder.com/${w}x${h}/FF4DA6/FFFFFF?text=${encodeURIComponent(text)}`;
  img.classList.add('fallback','loaded');
}

// ==== [INIT: Links WhatsApp] ====
function initWhatsAppLinks(){
  const pairs = [
    ['footer-cta-whatsapp','Hola Glow Express, quiero información'],
    ['footer-whatsapp','Hola Glow Express'],
    ['whatsapp-float','Hola Glow Express, tengo una consulta'],
    ['cta-productos-whatsapp','Hola, necesito ayuda para elegir un producto'],
    ['contact-whatsapp','Hola Glow Express, quiero contactarlos']
  ];
  pairs.forEach(([id,msg])=>{
    const el = document.getElementById(id);
    if (el){ el.href = waLink(msg); }
  });
  // Abrir en pestaña nueva el flotante
  const floatWa = document.getElementById('whatsapp-float');
  if (floatWa){
    floatWa.addEventListener('click', e=>{
      e.preventDefault();
      window.open(floatWa.href, '_blank', 'noopener,noreferrer');
      showToast('Abriendo WhatsApp...');
    });
  }
}

// ==== [RENDER: Servicios] ====
function renderServicios(){
  const container = document.getElementById('serviciosContainer');
  if (!container) return;
  container.innerHTML = '';

  servicios.forEach(s=>{
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="service-card">
        <img src="${s.img}" alt="${s.nombre}" class="service-card__image" loading="lazy" decoding="async">
        <div class="service-card__body">
          <h3 class="service-card__title">${s.nombre}</h3>
          <p class="service-card__description">${s.descripcion}</p>
          <div class="service-card__meta">
            <span class="service-card__duration"><i class="fas fa-clock me-1"></i>${s.duracion} min</span>
            <span class="service-card__price">${formatPrice(s.precio)}</span>
          </div>
          <a href="#" class="btn btn-primary w-100" data-servicio="${s.id}">
            <i class="fab fa-whatsapp me-2"></i>Agendar por WhatsApp
          </a>
        </div>
      </div>
    `;
    const img = col.querySelector('img');
    img.addEventListener('load', ()=> img.classList.add('loaded'));
    img.addEventListener('error', ()=> setImgFallback(img, 800, 500, s.nombre));

    const btn = col.querySelector(`[data-servicio="${s.id}"]`);
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const msg = `Hola, quiero agendar: ${s.nombre} (${s.duracion} min - ${formatPrice(s.precio)})`;
      window.open(waLink(msg), '_blank', 'noopener,noreferrer');
      showToast(`Abriendo WhatsApp para ${s.nombre}...`);
    });

    container.appendChild(col);
  });
}

// ==== [PRODUCTOS] ====
let currentFilters = { categoria:'all', precioMax:200000 };

function renderProductos(){
  const container = document.getElementById('productosContainer');
  const noResults = document.getElementById('noResultsMessage');
  if (!container) return;
  container.innerHTML = '';

  const list = productos.filter(p=>{
    const okCat = currentFilters.categoria === 'all' || p.categoria === currentFilters.categoria;
    const okPrice = p.precio <= currentFilters.precioMax;
    return okCat && okPrice;
  });

  if (list.length === 0){
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';

  list.forEach(p=>{
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 col-xl-3';
    col.innerHTML = `
      <div class="product-card">
        <img src="${p.img}" alt="${p.nombre}" class="product-card__image" loading="lazy" decoding="async">
        <div class="product-card__body">
          <h3 class="product-card__name">${p.nombre}</h3>
          <p class="product-card__benefit">${p.beneficio}</p>
          <div class="product-card__price">${formatPrice(p.precio)}</div>
          <div class="product-card__availability">
            ${p.disponible ? '<i class="fas fa-check-circle me-1"></i>Disponible' : '<i class="fas fa-clock me-1"></i>Próximamente'}
          </div>
          <div class="product-card__actions">
            <button class="btn btn-primary btn-sm" data-producto="${p.id}" ${!p.disponible ? 'disabled' : ''}>
              <i class="fab fa-whatsapp"></i> Comprar
            </button>
            <a href="${p.ig}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">
              <i class="fab fa-instagram"></i> Ver
            </a>
          </div>
        </div>
      </div>
    `;
    const img = col.querySelector('img');
    img.addEventListener('load', ()=> img.classList.add('loaded'));
    img.addEventListener('error', ()=> setImgFallback(img, 800, 800, p.nombre));

    if (p.disponible){
      const btn = col.querySelector(`[data-producto="${p.id}"]`);
      btn.addEventListener('click', ()=>{
        const msg = `Hola, quiero comprar: ${p.nombre} (${formatPrice(p.precio)})`;
        window.open(waLink(msg), '_blank', 'noopener,noreferrer');
        showToast(`Abriendo WhatsApp para ${p.nombre}...`);
      });
    }

    container.appendChild(col);
  });
}

function initProductFilters(){
  document.querySelectorAll('input[name="category"]').forEach(input=>{
    input.addEventListener('change', e=>{
      currentFilters.categoria = e.target.value;
      renderProductos();
    });
  });
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceRangeValue');
  if (priceRange && priceValue){
    const updateRangeProgress = ()=>{
      const value = +priceRange.value, max = +priceRange.max;
      const progress = (value / max) * 100;
      priceRange.style.setProperty('--range-progress', `${progress}%`);
    };
    updateRangeProgress();
    priceRange.addEventListener('input', e=>{
      const value = +e.target.value;
      currentFilters.precioMax = value;
      priceValue.textContent = `$0 - ${formatPrice(value)}`;
      updateRangeProgress();
      renderProductos();
    });
  }
}

// ==== [TESTIMONIOS] ====
let currentTestimonial = 0;
function renderTestimonial(i){
  const container = document.getElementById('testimonialSlider');
  if (!container) return;
  const t = testimonios[i];
  const stars = '<i class="fas fa-star"></i>'.repeat(t.rating);
  container.innerHTML = `
    <div class="testimonial-item">
      <p class="testimonial-item__text">"${t.texto}"</p>
      <div class="testimonial-item__author">${t.autor}</div>
      <div class="testimonial-item__rating">${stars}</div>
    </div>
  `;
}
function initTestimonialSlider(){
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  if (!prevBtn || !nextBtn) return;

  renderTestimonial(currentTestimonial);
  prevBtn.addEventListener('click', ()=>{
    currentTestimonial = (currentTestimonial - 1 + testimonios.length) % testimonios.length;
    renderTestimonial(currentTestimonial);
  });
  nextBtn.addEventListener('click', ()=>{
    currentTestimonial = (currentTestimonial + 1) % testimonios.length;
    renderTestimonial(currentTestimonial);
  });

  let autoplay = setInterval(()=>{
    currentTestimonial = (currentTestimonial + 1) % testimonios.length;
    renderTestimonial(currentTestimonial);
  }, 5000);

  const slider = document.getElementById('testimonialSlider');
  if (slider){
    slider.addEventListener('mouseenter', ()=> clearInterval(autoplay));
    slider.addEventListener('mouseleave', ()=>{
      autoplay = setInterval(()=>{
        currentTestimonial = (currentTestimonial + 1) % testimonios.length;
        renderTestimonial(currentTestimonial);
      }, 5000);
    });
  }
}

// ==== [FORMULARIO CONTACTO] ====
function initContactForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    if (!nombre || !telefono || !mensaje){ showToast('Por favor completa todos los campos obligatorios'); return; }
    const texto = `Hola, mi nombre es ${nombre}.
Teléfono: ${telefono}
Asunto: ${asunto}
Mensaje: ${mensaje}`;
    window.open(waLink(texto), '_blank', 'noopener,noreferrer');
    showToast('Abriendo WhatsApp...');
    form.reset();
  });
}

// ==== [SCROLL SUAVE] ====
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href === '#' || href.length === 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const top = target.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior:'smooth' });
    });
  });
}

// ==== [LAZY LOADING] ====
function initLazyLoading(){
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          const img = entry.target;
          // si la imagen falla, no se queda invisible
          img.onerror = ()=> setImgFallback(img, img.classList.contains('product-card__image') ? 800 : 800,
                                                img.classList.contains('product-card__image') ? 800 : 500,
                                                img.alt || 'Imagen');
          img.onload = ()=> img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });
    images.forEach(img=> io.observe(img));
  } else {
    images.forEach(img=> img.classList.add('loaded'));
  }
}

// ==== [INIT] ====
document.addEventListener('DOMContentLoaded', ()=>{
  setCurrentYear();
  initWhatsAppLinks();
  initSmoothScroll();
  initLazyLoading();

  if (document.getElementById('serviciosContainer')) renderServicios();
  if (document.getElementById('productosContainer')){ renderProductos(); initProductFilters(); }
  if (document.getElementById('testimonialSlider')) initTestimonialSlider();
  if (document.getElementById('contactForm')) initContactForm();

  console.log('✨ Glow Express loaded successfully');
});
