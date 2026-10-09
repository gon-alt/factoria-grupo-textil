/*
  Catálogo de Factoría Grupo Textil (sin precios: se consultan por WhatsApp).
  Para agregar, quitar o editar productos, modificá esta lista.
  Campos: nombre, categoria, talles, descripcion
  Las categorías se toman de acá automáticamente para armar los filtros.
*/
window.CATALOGO = [
  // ── Remeras · Algodón peinado premium
  { nombre: "Remera lisa peinado premium · Niños", categoria: "Remeras", talles: "4, 6, 8, 10, 12", descripcion: "Remera infantil lisa de algodón peinado premium, apta para estampación." },
  { nombre: "Remera lisa peinado premium · Juvenil", categoria: "Remeras", talles: "14, 16", descripcion: "Remera juvenil lisa de algodón peinado premium, resistente y apta para estampado." },
  { nombre: "Remera lisa peinado premium · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Remera lisa manga corta de algodón peinado premium, corte recto y cuello redondo." },
  { nombre: "Remera lisa peinado premium · Talles especiales", categoria: "Remeras", talles: "4XL, 5XL, 6XL", descripcion: "Remera manga corta de algodón 24/1, resistente y apta para estampación." },
  { nombre: "Remera lisa peinado premium · Talles súper especiales", categoria: "Remeras", talles: "7XL, 8XL", descripcion: "Remera de algodón 24/1, suave, resistente, corte recto y cuello redondo." },
  { nombre: "Remera lisa peinado premium · Mujer", categoria: "Remeras", talles: "S, M, L, XL, XXL", descripcion: "Remera manga corta de algodón 24/1 para mujer, suave, resistente y apta para personalización." },
  { nombre: "Remera manga larga peinado premium · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Remera manga larga de algodón 24/1, resistente, suave y apta para personalización." },
  { nombre: "Remera cuello en V peinado premium · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Remera de algodón 24/1 con cuello en V, resistente y apta para personalización." },
  { nombre: "Remera lisa peinado premium gris melange · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL", descripcion: "Remera lisa de algodón peinado premium en gris melange, corte recto." },

  // ── Remeras · Algodón cardado mercerizado
  { nombre: "Remera lisa cardado mercerizado · Niños", categoria: "Remeras", talles: "4, 6, 8, 10, 12", descripcion: "Remera infantil manga corta de algodón 24/1, resistente y apta para estampación." },
  { nombre: "Remera lisa cardado mercerizado · Juvenil", categoria: "Remeras", talles: "14, 16", descripcion: "Remera juvenil lisa de algodón cardado mercerizado, apta para estampación." },
  { nombre: "Remera lisa cardado mercerizado · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL", descripcion: "Remera lisa de algodón cardado mercerizado para adulto, apta para estampación." },

  // ── Musculosas / sin manga
  { nombre: "Musculosa lisa peinado premium · Hombre", categoria: "Musculosas", talles: "S, M, L, XL, XXL", descripcion: "Musculosa lisa de algodón peinado premium para hombre, apta para personalización.", guiaTalles: true },
  { nombre: "Remera sin manga peinado premium · Niños", categoria: "Musculosas", talles: "4, 6, 8, 10, 12", descripcion: "Remera infantil sin mangas de algodón 24/1, suave, resistente y apta para personalización." },
  { nombre: "Remera sin manga peinado premium · Juvenil", categoria: "Musculosas", talles: "14, 16", descripcion: "Remera juvenil sin mangas de algodón 24/1, resistente y apta para personalización." },
  { nombre: "Remera sin manga peinado premium · Adulto", categoria: "Musculosas", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Remera sin mangas de algodón 24/1, suave, resistente y apta para estampación." },

  // ── Sublimación
  { nombre: "Remera para sublimar poliéster · Adulto", categoria: "Remeras", talles: "S, M, L, XL, XXL", descripcion: "Remera de poliéster para adulto, especialmente indicada para sublimación." },
  { nombre: "Remera para sublimar poliéster · Niños", categoria: "Remeras", talles: "4, 6, 8, 10, 12", descripcion: "Remera infantil de poliéster preparada para sublimación." },

  // ── Chombas
  { nombre: "Chomba algodón peinado premium 24/1", categoria: "Chombas", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Chomba de algodón premium, respirable y resistente; ideal para uso diario, laboral o institucional." },
  { nombre: "Chomba algodón cardado mercerizado 24/1", categoria: "Chombas", talles: "S, M, L, XL, XXL, XXXL", descripcion: "Chomba de algodón cardado, respirable, resistente y apta para bordado, serigrafía y DTF." },
  { nombre: "Chomba algodón cardado mercerizado · Talles especiales", categoria: "Chombas", talles: "T6, T8, T10", descripcion: "Chomba de algodón cardado mercerizado en talles especiales, apta para personalización." },
  { nombre: "Chomba piqué premium mercerizado · Niños", categoria: "Chombas", talles: "4, 6, 8, 10, 12", descripcion: "Chomba infantil de piqué, fresca y resistente, apta para bordado, serigrafía y DTF." },
  { nombre: "Chomba piqué premium mercerizado · Juvenil", categoria: "Chombas", talles: "14, 16", descripcion: "Chomba juvenil de piqué, fresca y resistente, apta para personalización." },
  { nombre: "Chomba piqué premium mercerizado · Adulto", categoria: "Chombas", talles: "S, M, L, XL, XXL", descripcion: "Chomba de piqué premium mercerizado, fresca, resistente y apta para bordado, serigrafía y DTF." },
  { nombre: "Chomba piqué premium mercerizado · Talles especiales", categoria: "Chombas", talles: "3XL, 4XL, 5XL", descripcion: "Chomba de piqué premium, fresca y resistente, ideal para uso corporativo y personalización." },
  { nombre: "Chomba piqué premium mercerizado · Mujer", categoria: "Chombas", talles: "S, M, L, XL, XXL", descripcion: "Chomba de piqué para mujer, respirable, resistente y de aspecto prolijo." },

  // ── Buzos
  { nombre: "Buzo canguro con capucha friza común · Niños", categoria: "Buzos", talles: "8, 10, 12", descripcion: "Buzo infantil con capucha en friza, cálido y resistente." },
  { nombre: "Buzo canguro con capucha friza común · Juvenil", categoria: "Buzos", talles: "14, 16", descripcion: "Buzo juvenil con capucha en friza, interior afelpado y corte cómodo." },
  { nombre: "Buzo canguro con capucha friza común · Adulto", categoria: "Buzos", talles: "S, M, L, XL, XXL", descripcion: "Buzo canguro con capucha en friza, cálido y resistente; apto para bordado, serigrafía y DTF." },
  { nombre: "Buzo canguro con capucha friza común · Talles especiales", categoria: "Buzos", talles: "3XL, 4XL, 5XL", descripcion: "Buzo canguro con capucha en friza, interior afelpado; apto para personalización." },
  { nombre: "Buzo canguro con capucha friza invisible", categoria: "Buzos", talles: "S, M, L, XL, XXL", descripcion: "Buzo con capucha de friza invisible, cálido, resistente y apto para estampado." },
  { nombre: "Buzo cuello redondo friza común · Adulto", categoria: "Buzos", talles: "S, M, L, XL, XXL", descripcion: "Buzo de cuello redondo en friza con interior afelpado, cómodo y resistente." },
  { nombre: "Buzo cuello redondo friza común · Talles especiales", categoria: "Buzos", talles: "T6, T8, T10", descripcion: "Buzo de cuello redondo en friza, interior afelpado, para uso diario o laboral." },

  // ── Camperas
  { nombre: "Campera con capucha y cierre friza común · Adulto", categoria: "Camperas", talles: "S, M, L, XL, XXL", descripcion: "Campera con capucha y cierre en friza, cálida y resistente; apta para personalización." },
  { nombre: "Campera con capucha y cierre friza común · Talles especiales", categoria: "Camperas", talles: "T6, T8, T10", descripcion: "Campera con capucha y cierre en friza, cálida y resistente; apta para bordado, serigrafía y DTF." },

  // ── Gorras
  { nombre: "Gorro piluso", categoria: "Gorras", talles: "Único", descripcion: "Gorro piluso liso, apto para uso diario y personalización." },
  { nombre: "Gorra trucker", categoria: "Gorras", talles: "Único", descripcion: "Gorra trucker apta para uso diario y personalización." },
  { nombre: "Gorra flex", categoria: "Gorras", talles: "Único", descripcion: "Gorra flex lisa para uso diario y personalización." },
  { nombre: "Gorra dry fit", categoria: "Gorras", talles: "Único", descripcion: "Gorra de tejido tipo dry fit, liviana y apta para personalización." },
  { nombre: "Gorra vintage", categoria: "Gorras", talles: "Único", descripcion: "Gorra estilo vintage, apta para uso diario y personalización." },
  { nombre: "Gorra estructurada", categoria: "Gorras", talles: "Único", descripcion: "Gorra estructurada lisa para uso diario o personalización." },

  // ── Insumos para sublimación
  { nombre: "Cinta térmica dorada", categoria: "Sublimación", talles: "Según variante", descripcion: "Cinta térmica resistente al calor para trabajos de sublimación." },
  { nombre: "Cinta térmica Workat", categoria: "Sublimación", talles: "", descripcion: "Cinta térmica para fijación durante procesos de sublimación." },
  { nombre: "Taza de polímero para sublimar", categoria: "Sublimación", talles: "", descripcion: "Taza de polímero preparada para sublimación." },
  { nombre: "Taza de cerámica para sublimar", categoria: "Sublimación", talles: "", descripcion: "Taza de cerámica blanca para sublimación, de superficie lisa y uniforme." },
  { nombre: "Taza con asa de color para sublimar", categoria: "Sublimación", talles: "", descripcion: "Taza para sublimar con asa de color." },
  { nombre: "Taza mágica para sublimar", categoria: "Sublimación", talles: "", descripcion: "Taza mágica para sublimación, preparada para personalización mediante calor." }
];
