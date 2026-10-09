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

  // ── Catálogo
  var data = window.CATALOGO || [];
  var filtersEl = document.getElementById("filters");
  var productsEl = document.getElementById("products");

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var moreBtn = document.getElementById("more");
  var LIMIT = 8;

  function renderProducts(cat, all) {
    productsEl.innerHTML = "";
    var list = data.filter(function (p) { return cat === "Todos" || p.categoria === cat; });
    var cut = !all && cat === "Todos" && list.length > LIMIT;
    if (moreBtn) {
      moreBtn.hidden = !cut;
      moreBtn.textContent = "Ver todo el catálogo (" + list.length + " productos)";
    }
    (cut ? list.slice(0, LIMIT) : list)
      .forEach(function (p) {
        var card = el("article", "product");
        card.appendChild(el("p", "p-cat", p.categoria));
        card.appendChild(el("h3", "p-name", p.nombre));
        card.appendChild(el("p", "p-desc", p.descripcion));

        if (p.talles) {
          var sizes = el("ul", "p-sizes");
          sizes.setAttribute("aria-label", "Talles");
          p.talles.split(",").forEach(function (t) {
            t = t.trim();
            if (t) sizes.appendChild(el("li", null, t));
          });
          card.appendChild(sizes);
        }

        var actions = el("div", "p-actions");
        var a = el("a", "btn btn-wa btn-sm", "Consultar precio");
        a.href = waLink("¡Hola Factoría! Quiero consultar precio por cantidad de: " + p.nombre);
        a.target = "_blank";
        a.rel = "noopener";
        actions.appendChild(a);

        if (p.guiaTalles) {
          var g = el("button", "link-arrow", "Guía de talles");
          g.type = "button";
          g.setAttribute("data-lightbox", "/assets/img/lineas/guia-talles-musculosa.webp");
          g.setAttribute("data-caption", "Guía de talles · Musculosa hombre");
          actions.appendChild(g);
        }
        card.appendChild(actions);
        productsEl.appendChild(card);
      });
  }

  if (filtersEl && productsEl) {
    var cats = ["Todos"];
    data.forEach(function (p) { if (cats.indexOf(p.categoria) === -1) cats.push(p.categoria); });

    cats.forEach(function (c, i) {
      var b = el("button", "chip", c);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        filtersEl.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-selected", "false"); });
        b.setAttribute("aria-selected", "true");
        renderProducts(c);
      });
      filtersEl.appendChild(b);
    });
    renderProducts("Todos");
    if (moreBtn) moreBtn.addEventListener("click", function () { renderProducts("Todos", true); });
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
