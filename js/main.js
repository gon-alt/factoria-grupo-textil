/* Factoría Grupo Textil · main.js */
(function () {
  "use strict";

  // ── Configuración: número de WhatsApp (formato internacional, sin + ni espacios)
  var WA_NUMBER = "5491139017744";

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  // Todos los enlaces con data-wa abren WhatsApp con el mensaje precargado
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waLink(a.getAttribute("data-wa"));
  });

    // ── Medición: cada clic a WhatsApp se envía a GA4 como "whatsapp_click"
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href*="wa.me/"]');
    if (!a || typeof window.gtag !== "function") return;
    var ubicacion = a.classList.contains("wa-float") ? "flotante"
      : a.closest(".site-header") ? "header"
      : a.closest("footer") ? "footer"
      : a.closest(".hero") ? "hero"
      : (a.closest("section[id]") || {}).id || "otro";
    var line = a.closest(".line");
    var product = a.closest(".product");
    // En las páginas de línea, <body data-linea> define la línea de todos los botones
    var linea = document.body.getAttribute("data-linea")
      || (line && line.querySelector("h3") ? line.querySelector("h3").textContent.trim()
      : product && product.querySelector(".p-cat") ? product.querySelector(".p-cat").textContent.trim()
      : "general");
    var producto = product && product.querySelector(".p-name") ? product.querySelector(".p-name").textContent.trim() : "";
    window.gtag("event", "whatsapp_click", { ubicacion: ubicacion, linea: linea, producto: producto, pagina: location.pathname });
  });
 
  // ── Año en el footer
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ── Menú mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
      document.body.classList.toggle("nav-open", !open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        document.body.classList.remove("nav-open");
      }
    });
  }

  // ── Header con sombra al scrollear
  var header = document.querySelector(".site-header");
  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ── Catálogo: los productos están escritos en el HTML (#products);
  //    acá solo se arman los filtros y el "ver más"
  var filtersEl = document.getElementById("filters");
  var productsEl = document.getElementById("products");
  var moreBtn = document.getElementById("more");
  var LIMIT = 8;

  function renderProducts(cards, cat, all) {
    var list = cards.filter(function (c) { return cat === "Todos" || c.getAttribute("data-cat") === cat; });
    var cut = !all && cat === "Todos" && list.length > LIMIT;
    if (moreBtn) {
      moreBtn.hidden = !cut;
      moreBtn.textContent = "Ver todo el catálogo (" + list.length + " productos)";
    }
    cards.forEach(function (c) { c.hidden = true; });
    (cut ? list.slice(0, LIMIT) : list).forEach(function (c) { c.hidden = false; });
  }

  if (filtersEl && productsEl) {
    var cards = Array.prototype.slice.call(productsEl.querySelectorAll(".product[data-cat]"));
    var cats = ["Todos"];
    cards.forEach(function (c) {
      var cat = c.getAttribute("data-cat");
      if (cats.indexOf(cat) === -1) cats.push(cat);
    });

    cats.forEach(function (c, i) {
      var b = document.createElement("button");
      b.className = "chip";
      b.textContent = c;
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        filtersEl.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-selected", "false"); });
        b.setAttribute("aria-selected", "true");
        renderProducts(cards, c);
      });
      filtersEl.appendChild(b);
    });
    renderProducts(cards, "Todos");
    if (moreBtn) moreBtn.addEventListener("click", function () { renderProducts(cards, "Todos", true); });
  }

  // ── Lightbox (galería, líneas y guías)
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector(".lb-caption");

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption || "";
    lbCap.textContent = caption || "";
    if (typeof lb.showModal === "function") lb.showModal();
    else window.open(src, "_blank");
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lightbox]");
    if (t) {
      e.preventDefault();
      openLightbox(t.getAttribute("data-lightbox"), t.getAttribute("data-caption"));
      return;
    }
    var media = e.target.closest(".line-media img[data-full]");
    if (media) openLightbox(media.getAttribute("data-full"), media.alt);
  });

  lb.querySelector(".lb-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("close", function () { lbImg.removeAttribute("src"); });

  // ── Animación de entrada suave
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".line, .step, .g-item, .aud").forEach(function (n) {
      n.classList.add("reveal");
      io.observe(n);
    });
  }
})();
