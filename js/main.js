/*
==== ARCHIVO: js/main.js ====
Propósito: Lógica de interacciones, render dinámico, validaciones, filtros
Dependencias: Bootstrap 5 JS
Dónde editar: Arrays de datos (servicios, productos, testimonios), número de WhatsApp
*/

// ==== [CONFIG: WhatsApp] ====
// EDITA AQUÍ el número de WhatsApp (formato internacional sin +)
const WHATSAPP_NUMBER = '573001112233';

// ==== [DATA: Servicios] ====
const servicios = [
  {
    id: 'cejas-express',
    nombre: 'Cejas Glow Express',
    duracion: 30,
    precio: 45000,
    descripcion: 'Diseño y definición suave que favorece tu rostro. Técnica profesional con resultados naturales.',
    img: 'img/servicios/cejas.jpg'
  },
  {
    id: 'pestanas-naturales',
    nombre: 'Pestañas Naturales',
    duracion: 30,
    precio: 55000,
    descripcion: 'Lifting sutil para mirada fresca sin exceso. Efecto natural que realza tus ojos.',
    img: 'img/servicios/pestanas.jpg'
  },
  {
    id: 'skin-flash',
    nombre: 'Skin Flash 30\'',
    duracion: 30,
    precio: 60000,
    descripcion: 'Limpieza profunda y glow inmediato para eventos. Resultados visibles al instante.',
    img: 'img/servicios/skin.jpg'
  },
  {
    id: 'manicure-express',
    nombre: 'Manicure Express',
    duracion: 30,
    precio: 40000,
    descripcion: 'Manos impecables con esmaltado semipermanente. Secado rápido, larga duración.',
    img: 'img/servicios/manicure.jpg'
  },
  {
    id: 'makeup-glow',
    nombre: 'Makeup Glow',
    duracion: 30,
    precio: 70000,
    descripcion: 'Maquillaje natural con glow para el día a día. Técnica que resalta tu belleza.',
    img: 'img/servicios/makeup.jpg'
  },
  {
    id: 'depilacion-facial',
    nombre: 'Depilación Facial',
    duracion: 30,
    precio: 35000,
    descripcion: 'Rostro suave y limpio con técnicas suaves. Sin irritación, resultados duraderos.',
    img: 'img/servicios/depilacion.jpg'
  }
];

// ==== [DATA: Productos] ====
const productos = [
  {
    id: 'kit-glow',
    nombre: 'Kit Glow Diario',
    categoria: 'kits',
    precio: 120000,
    beneficio: 'Rutina simple AM/PM para brillo saludable. Todo lo que necesitas en un solo kit.',
    img: 'img/productos/kit-glow.jpg',
    ig: 'https://instagram.com/p/XXXXX',
    disponible: true
  },
  {
    id: 'lip-serum',
    nombre: 'Lip Glow Serum',
    categoria: 'maquillaje',
    precio: 38000,
    beneficio: 'Hidratación con brillo sutil sin pegajosidad. Labios suaves todo el día.',
    img: 'img/productos/lip-serum.jpg',
    ig: 'https://instagram.com/p/YYYYY',
    disponible: true
  },
  {
    id: 'jade-roller',
    nombre: 'Jade Roller',
    categoria: 'accesorios',
    precio: 45000,
    beneficio: 'Masaje facial para desinflamar y relajar. Jade 100% natural.',
    img: 'img/productos/jade-roller.jpg',
    ig: 'https://instagram.com/p/ZZZZZ',
    disponible: true
  },
  {
    id: 'serum-vitamina-c',
    nombre: 'Serum Vitamina C',
    categoria: 'facial',
    precio: 85000,
    beneficio: 'Ilumina y unifica el tono de tu piel. Fórmula concentrada con resultados visibles.',
    img: 'img/productos/serum-vitamina-c.jpg',
    ig: 'https://instagram.com/p/AAAAA',
    disponible: true
  },
  {
    id: 'mascara-hidratante',
    nombre: 'Mascarilla Hidratante',
    categoria: 'facial',
    precio: 52000,
    beneficio: 'Hidratación profunda en 15 minutos. Piel suave y radiante al instante.',
    img: 'img/productos/mascara.jpg',
    ig: 'https://instagram.com/p/BBBBB',
    disponible: true
  },
  {
    id: 'brow-gel',
    nombre: 'Brow Fixing Gel',
    categoria: 'maquillaje',
    precio: 35000,
    beneficio: 'Cejas en su lugar todo el día sin efecto pesado. Fijación natural.',
    img: 'img/productos/brow-gel.jpg',
    ig: 'https://instagram.com/p/CCCCC',
    disponible: true
  },
  {
    id: 'gua-sha',
    nombre: 'Gua Sha Cuarzo Rosa',
    categoria: 'accesorios',
    precio: 48000,
    beneficio: 'Esculpe y tonifica tu rostro naturalmente. Cuarzo rosa original.',
    img: 'img/productos/gua-sha.jpg',
    ig: 'https://instagram.com/p/DDDDD',
    disponible: true
  },
  {
    id: 'kit-skincare-noche',
    nombre: 'Kit Skincare Noche',
    categoria: 'kits',
    precio: 145000,
    beneficio: 'Rutina nocturna completa para piel radiante. 4 productos esenciales.',
    img: 'img/productos/kit-noche.jpg',
    ig: 'https://instagram.com/p/EEEEE',
    disponible: true
  },
  {
    id: 'highlighter-cream',
    nombre: 'Cream Highlighter',
    categoria: 'maquillaje',
    precio: 42000,
    beneficio: 'Glow natural en mejillas y párpados. Textura cremosa fácil de difuminar.',
    img: 'img/productos/highlighter.jpg',
    ig: 'https://instagram.com/p/FFFFF',
    disponible: false
  },
  {
    id: 'limpiador-facial',
    nombre: 'Limpiador Gel Suave',
    categoria: 'facial',
    precio: 58000,
    beneficio: 'Limpieza profunda sin resecar. Para todo tipo de piel.',
    img: 'img/productos/limpiador.jpg',
    ig: 'https://instagram.com/p/GGGGG',
    disponible: true
  },
  {
    id: 'esponja-facial',
    nombre: 'Esponja Konjac',
    categoria: 'accesorios',
    precio: 22000,
    beneficio: 'Exfoliación suave diaria. 100% natural y biodegradable.',
    img: 'img/productos/esponja.jpg',
    ig: 'https://instagram.com/p/HHHHH',
    disponible: true
  },
  {
    id: 'kit-viaje',
    nombre: 'Kit Viaje Esenciales',
    categoria: 'kits',
    precio: 98000,
    beneficio: 'Todo lo necesario en tamaño viaje. Perfecto para llevar a todos lados.',
    img: 'img/productos/kit-viaje.jpg',
    ig: 'https://instagram.com/p/IIIII',
    disponible: true
  }
];

// ==== [DATA: Testimonios] ====
const testimonios = [
  {
    texto: 'Los servicios son súper rápidos y el resultado es increíble. Me encanta que no tengo que sacar tiempo de más, en 30 minutos salgo lista y hermosa.',
    autor: 'Carolina M.',
    rating: 5
  },
  {
    texto: 'El kit Glow Diario cambió mi rutina completamente. Mi piel nunca había estado tan radiante y es súper fácil de usar.',
    autor: 'Andrea P.',
    rating: 5
  },
  {
    texto: 'Agendar por WhatsApp es lo mejor, nada de apps complicadas. Además las chicas son súper profesionales y amables.',
    autor: 'Daniela R.',
    rating: 5
  },
  {
    texto: 'Me hice las cejas y pestañas y quedé fascinada. El diseño es perfecto y natural, justo lo que buscaba.',
    autor: 'Laura S.',
    rating: 5
  },
  {
    texto: 'Los productos son de excelente calidad y a buenos precios. Ya compré varios y todos me han encantado.',
    autor: 'Valentina G.',
    rating: 5
  }
];

// ==== [HELPER: Generar link WhatsApp con UTM] ====
function waLink(texto) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const utm = '?utm_source=web&utm_medium=cta&utm_campaign=glowexpress';
  return `${base}?text=${encodeURIComponent(texto)}${utm}`;
}

// ==== [HELPER: Mostrar toast] ====
function showToast(message) {
  const toastElement = document.getElementById('mainToast');
  const toastMessage = document.getElementById('toastMessage');
  if (toastElement && toastMessage) {
    toastMessage.textContent = message;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
}

// ==== [HELPER: Formatear precio] ====
function formatPrice(price) {
  return `$${price.toLocaleString('es-CO')}`;
}

// ==== [INIT: Año dinámico en footer] ====
function setCurrentYear() {
  const yearElements = document.querySelectorAll('#currentYear');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
}

// ==== [INIT: Links WhatsApp globales] ====
function initWhatsAppLinks() {
  // Hero CTA
  const heroCta = document.getElementById('hero-cta-whatsapp');
  if (heroCta) {
    heroCta.href = waLink('Hola Glow Express, quiero agendar un servicio');
  }

  // Footer CTA
  const footerCta = document.getElementById('footer-cta-whatsapp');
  if (footerCta) {
    footerCta.href = waLink('Hola Glow Express, quiero información');
  }

  // Footer WhatsApp icon
  const footerWa = document.getElementById('footer-whatsapp');
  if (footerWa) {
    footerWa.href = waLink('Hola Glow Express');
  }

  // Botón flotante
  const floatWa = document.getElementById('whatsapp-float');
  if (floatWa) {
    floatWa.href = waLink('Hola Glow Express, tengo una consulta');
    floatWa.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(floatWa.href, '_blank');
      showToast('Abriendo WhatsApp...');
    });
  }

  // CTA Servicios
  const ctaServicios = document.getElementById('cta-servicios-whatsapp');
  if (ctaServicios) {
    ctaServicios.href = waLink('Hola, necesito ayuda para elegir un servicio');
  }

  // CTA Productos
  const ctaProductos = document.getElementById('cta-productos-whatsapp');
  if (ctaProductos) {
    ctaProductos.href = waLink('Hola, necesito ayuda para elegir un producto');
  }

  // Contacto WhatsApp
  const contactWa = document.getElementById('contact-whatsapp');
  if (contactWa) {
    contactWa.href = waLink('Hola Glow Express, quiero contactarlos');
  }
}

// ==== [RENDER: Servicios] ====
function renderServicios() {
  const container = document.getElementById('serviciosContainer');
  if (!container) return;

  container.innerHTML = '';

  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="service-card">
        <img src="${servicio.img}" alt="${servicio.nombre}" class="service-card__image" loading="lazy">
        <!-- Reemplaza por foto real -->
        <div class="service-card__body">
          <h3 class="service-card__title">${servicio.nombre}</h3>
          <p class="service-card__description">${servicio.descripcion}</p>
          <div class="service-card__meta">
            <span class="service-card__duration">
              <i class="fas fa-clock me-1"></i>${servicio.duracion} min
            </span>
            <span class="service-card__price">${formatPrice(servicio.precio)}</span>
          </div>
          <a href="#" class="btn btn-primary w-100" data-servicio="${servicio.id}">
            <i class="fab fa-whatsapp me-2"></i>Agendar por WhatsApp
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);

    // Event listener para el botón de agendar
    const btn = card.querySelector(`[data-servicio="${servicio.id}"]`);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const mensaje = `Hola, quiero agendar: ${servicio.nombre} (${servicio.duracion} min - ${formatPrice(servicio.precio)})`;
      window.open(waLink(mensaje), '_blank');
      showToast(`Abriendo WhatsApp para ${servicio.nombre}...`);
    });
  });
}

// ==== [RENDER: Productos] ====
let currentFilters = {
  categoria: 'all',
  precioMax: 200000
};

function renderProductos() {
  const container = document.getElementById('productosContainer');
  const noResults = document.getElementById('noResultsMessage');
  if (!container) return;

  container.innerHTML = '';

  // Filtrar productos
  const filteredProducts = productos.filter(producto => {
    const matchCategoria = currentFilters.categoria === 'all' || producto.categoria === currentFilters.categoria;
    const matchPrecio = producto.precio <= currentFilters.precioMax;
    return matchCategoria && matchPrecio;
  });

  // Mostrar mensaje si no hay resultados
  if (filteredProducts.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  filteredProducts.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 col-xl-3';
    card.innerHTML = `
      <div class="product-card">
        <img src="${producto.img}" alt="${producto.nombre}" class="product-card__image" loading="lazy">
        <!-- Reemplaza por foto real -->
        <div class="product-card__body">
          <h3 class="product-card__name">${producto.nombre}</h3>
          <p class="product-card__benefit">${producto.beneficio}</p>
          <div class="product-card__price">${formatPrice(producto.precio)}</div>
          <div class="product-card__availability">
            ${producto.disponible ? '<i class="fas fa-check-circle me-1"></i>Disponible' : '<i class="fas fa-clock me-1"></i>Próximamente'}
          </div>
          <div class="product-card__actions">
            <button class="btn btn-primary btn-sm" data-producto="${producto.id}" ${!producto.disponible ? 'disabled' : ''}>
              <i class="fab fa-whatsapp"></i> Comprar
            </button>
            <a href="${producto.ig}" target="_blank" class="btn btn-outline-dark btn-sm">
              <i class="fab fa-instagram"></i> Ver
            </a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);

    // Event listener para el botón de comprar
    if (producto.disponible) {
      const btn = card.querySelector(`[data-producto="${producto.id}"]`);
      btn.addEventListener('click', () => {
        const mensaje = `Hola, quiero comprar: ${producto.nombre} (${formatPrice(producto.precio)})`;
        window.open(waLink(mensaje), '_blank');
        showToast(`Abriendo WhatsApp para ${producto.nombre}...`);
      });
    }
  });
}

// ==== [FILTROS: Productos] ====
function initProductFilters() {
  // Filtro categoría
  const categoryInputs = document.querySelectorAll('input[name="category"]');
  categoryInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      currentFilters.categoria = e.target.value;
      renderProductos();
    });
  });

  // Filtro precio
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceRangeValue');
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      currentFilters.precioMax = value;
      priceValue.textContent = `$0 - ${formatPrice(value)}`;
      renderProductos();
    });
  }
}

// ==== [RENDER: Testimonios Slider] ====
let currentTestimonial = 0;

function renderTestimonial(index) {
  const container = document.getElementById('testimonialSlider');
  if (!container) return;

  const testimonial = testimonios[index];
  const stars = '<i class="fas fa-star"></i>'.repeat(testimonial.rating);

  container.innerHTML = `
    <div class="testimonial-item">
      <p class="testimonial-item__text">"${testimonial.texto}"</p>
      <div class="testimonial-item__author">${testimonial.autor}</div>
      <div class="testimonial-item__rating">${stars}</div>
    </div>
  `;
}

function initTestimonialSlider() {
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  if (!prevBtn || !nextBtn) return;

  renderTestimonial(currentTestimonial);

  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonios.length) % testimonios.length;
    renderTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonios.length;
    renderTestimonial(currentTestimonial);
  });

  // Auto-play (pausa al hover)
  let autoplayInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonios.length;
    renderTestimonial(currentTestimonial);
  }, 5000);

  const slider = document.getElementById('testimonialSlider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    slider.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonios.length;
        renderTestimonial(currentTestimonial);
      }, 5000);
    });
  }
}

// ==== [FORMULARIO: Contacto] ====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación simple
    if (!nombre || !telefono || !mensaje) {
      showToast('Por favor completa todos los campos obligatorios');
      return;
    }

    // Construir mensaje para WhatsApp
    const mensajeWa = `Hola, mi nombre es ${nombre}.
Teléfono: ${telefono}
Asunto: ${asunto}
Mensaje: ${mensaje}`;

    window.open(waLink(mensajeWa), '_blank');
    showToast('Abriendo WhatsApp...');

    // Reset form
    form.reset();
  });
}

// ==== [SCROLL: Suave para anchors internos] ====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length === 1) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==== [LAZY LOADING: Imágenes] ====
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback para navegadores sin IntersectionObserver
    images.forEach(img => img.classList.add('loaded'));
  }
}

// ==== [INIT: Ejecutar al cargar DOM] ====
document.addEventListener('DOMContentLoaded', () => {
  // Funciones globales
  setCurrentYear();
  initWhatsAppLinks();
  initSmoothScroll();
  initLazyLoading();

  // Funciones específicas por página
  if (document.getElementById('serviciosContainer')) {
    renderServicios();
  }

  if (document.getElementById('productosContainer')) {
    renderProductos();
    initProductFilters();
  }

  if (document.getElementById('testimonialSlider')) {
    initTestimonialSlider();
  }

  if (document.getElementById('contactForm')) {
    initContactForm();
  }

  console.log('✨ Glow Express loaded successfully');
});