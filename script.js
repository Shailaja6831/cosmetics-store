// script.js - cosmetics product data + rendering + interactions

// --- Sample product data (cosmetics) ---
const products = [
  {
    id: "p1",
    name: "Luminous Glow Face Serum",
    category: "serum",
    price: 899,
    img: "https://m.media-amazon.com/images/I/51t5+0Pe06L._UF1000,1000_QL80_.jpg",
    short: "Lightweight vitamin-C serum for radiant skin.",
    desc: "A lightweight serum packed with vitamin C and hyaluronic acid to brighten skin and boost hydration. Absorbs quickly and helps even skin tone."
  },
  {
    id: "p2",
    name: "Rose Mist Toner",
    category: "skin",
    price: 499,
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2b3f4c1c3b6716aefb7a9e",
    short: "Refreshing rose water to soothe and tone.",
    desc: "Alcohol-free rose mist to hydrate and calm the skin. Perfect for refreshing your face anytime and locking in moisture."
  },
  {
    id: "p3",
    name: "Silk Touch Face Cream",
    category: "cream",
    price: 1299,
    img: "data:image/jpeg;base64,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",
    short: "Rich moisturizer for soft, supple skin.",
    desc: "A nutrient-rich face cream with shea butter and niacinamide for long-lasting hydration and skin barrier repair."
  },
  {
    id: "p4",
    name: "Blooming Perfume - Floral Notes",
    category: "perfume",
    price: 1799,
    img: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d4b7f7b4a064f8e9a0c2f9c",
    short: "Light floral perfume with lasting freshness.",
    desc: "An elegant blend of jasmine and peony with warm amber base notes. Long-lasting, travel-friendly bottle."
  },
  {
    id: "p5",
    name: "Nourish Hair Oil",
    category: "hair",
    price: 699,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdsrdNOFeYutqukDz-9SFHmfYDQze3Ct_RA&s",
    short: "Lightweight oil to strengthen & add shine.",
    desc: "A natural oil blend that helps tame frizz, promotes shine and reduces breakage. Apply a few drops to damp hair."
  },
  {
    id: "p6",
    name: "Glow Primer Stick",
    category: "skin",
    price: 599,
    img: "https://m.media-amazon.com/images/I/8173uWyAvfL._UF350,350_QL80_.jpg",
    short: "Silky primer for a smooth makeup base.",
    desc: "A smoothing primer that blurs pores and gives skin a natural luminous finish. Ideal under makeup or alone."
  },
  {
    id: "p7",
    name: "Velvet Night Repair Cream",
    category: "cream",
    price: 1399,
    img: "https://rukminim2.flixcart.com/image/704/844/moisturizer-cream/w/s/3/oriflame-sweden-50-royal-velvet-repairing-night-cream-original-imae73936zdhgxc6.jpeg?q=90&crop=false",
    short: "Overnight repair for firmer-looking skin.",
    desc: "Rich overnight formula with peptides to support skin firmness and reduce the look of fine lines."
  },
  {
    id: "p8",
    name: "Citrus Fresh Perfume",
    category: "perfume",
    price: 1499,
    img: "https://images-static.nykaa.com/media/catalog/product/f/9/f9d4965NISAR00000015_2c.jpg?tr=w-500",
    short: "Zesty fragrance with a fresh citrus opening.",
    desc: "Energetic scent featuring bergamot, mandarin and a soft woody base. Great for daytime wear."
  },
  {
  id: "p9",
    name: "Dot&Key",
    category: "Sunsreen",
    price: 789,
    img: "https://media6.ppl-media.com//tr:h-235,w-235,c-at_max,dpr-2,q-40/static/img/product/372527/dot-and-key-vitamin-c-e-super-bright-sunscreen-spf-50-for-even-toned-and-glowing-skin-no-white-cast-waterlight-i-uva-b-and-blue-light-protection-i-better-vitamin-d-absorption-80gm_01_display_1742468446_9005610e.jpg",
    short: "Zesty fragrance with a fresh citrus opening.",
    desc: "Energetic scent featuring bergamot, mandarin and a soft woody base. Great for daytime wear."
  },
  {
  id: "p10",
    name: "Rosmary Hair Oil",
    category: "Hair",
    price: 999,
    img: "https://in.zohocommercecdn.com/product-images/Final+Essential+Oil+Pic+%2822%29.jpg/1056011000031562900/600x600?storefront_domain=www.artikamart.com",
    short: "Zesty fragrance with a fresh citrus opening.",
    desc: "Energetic scent featuring bergamot, mandarin and a soft woody base. Great for daytime wear."
  },
  {
  id: "p11",
    name: "Products",
    category: "Mackup",
    price: 2999,
    img: "https://vivecosmetic.com/wp-content/uploads/2020/08/Top-10-Cosmetic-Companies-in-India.jpg",
    short: "Zesty fragrance with a fresh citrus opening.",
    desc: "Energetic scent featuring bergamot, mandarin and a soft woody base. Great for daytime wear."
  },
  {
  id: "p12",
    name: "Beer Shampoo",
    category: "Shampoo",
    price: 2999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMj7xLFZqJaAAvrNbDAaDjiOyIMIRBiulhNA&s",
    short: "Zesty fragrance with a fresh citrus opening.",
    desc: "Energetic scent featuring bergamot, mandarin and a soft woody base. Great for daytime wear."
  },
];

// --- DOM refs ---
const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// --- Render products ---
function renderProducts(list) {
  productGrid.innerHTML = "";
  if (!list.length) {
    productGrid.innerHTML = `<p style="color:#fff; font-weight:700; grid-column:1/-1; text-align:center;">No products found.</p>`;
    return;
  }
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <div class="badge">${p.category.toUpperCase()}</div>
        <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy"/>
      </div>
      <div class="card-body">
        <div class="product-title">${escapeHtml(p.name)}</div>
        <div class="product-desc">${escapeHtml(p.short)}</div>
        <div class="price-row">
          <div class="price">₹${p.price}</div>
        </div>
        <div class="action-row">
          <button class="btn btn-outline btn-view" data-id="${p.id}">View</button>
          <button class="btn btn-primary btn-wishlist" data-id="${p.id}">❤ Wishlist</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // attach view handlers
  document.querySelectorAll(".btn-view").forEach(b => {
    b.addEventListener("click", (e) => openModalForProduct(e.target.dataset.id));
  });
  document.querySelectorAll(".btn-wishlist").forEach(b => {
    b.addEventListener("click", (e) => toggleWishlist(e.target.dataset.id, e.target));
  });
}

// escape helper to avoid injection
function escapeHtml(text){
  return text.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

// --- Filtering / searching / sorting ---
function filterAndRender(){
  const cat = categoryFilter.value;
  const sort = sortFilter.value;
  const q = (searchInput.value || "").trim().toLowerCase();

  let out = products.slice();

  if (cat && cat !== "all"){
    out = out.filter(p => p.category === cat);
  }
  if (q) {
    out = out.filter(p => (p.name + " " + p.short + " " + p.desc).toLowerCase().includes(q));
  }
  if (sort === "lowToHigh"){
    out.sort((a,b)=> a.price - b.price);
  } else if (sort === "highToLow"){
    out.sort((a,b)=> b.price - a.price);
  }
  renderProducts(out);
}

// --- Simple modal implementation ---
const modalBackdrop = createModalElements();
function createModalElements(){
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <button class="close-modal" aria-label="Close">&times;</button>
    <div class="modal-img"><img src="" alt=""/></div>
    <div class="modal-body">
      <h3></h3>
      <p class="modal-desc"></p>
      <div class="modal-price" style="font-weight:800; margin:10px 0;"></div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-primary btn-add">Add to Cart</button>
        <button class="btn btn-outline btn-close">Close</button>
      </div>
    </div>
  `;
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  // close handlers
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  modal.querySelector(".close-modal").addEventListener("click", closeModal);
  modal.querySelector(".btn-close").addEventListener("click", closeModal);

  return backdrop;
}
function openModalForProduct(id){
  const p = products.find(x => x.id === id);
  if (!p) return;
  const modal = modalBackdrop.querySelector(".modal");
  modalBackdrop.style.display = "flex";
  modal.querySelector(".modal-img img").src = p.img;
  modal.querySelector(".modal-body h3").textContent = p.name;
  modal.querySelector(".modal-desc").textContent = p.desc;
  modal.querySelector(".modal-price").textContent = `Price: ₹${p.price}`;
  modal.querySelector(".btn-add").onclick = () => {
    addToCart(p.id);
    alert(`${p.name} added to cart (demo).`);
  };
}
function closeModal(){
  modalBackdrop.style.display = "none";
}

// --- Simple wishlist using localStorage ---
function getWishlist(){
  try{
    return JSON.parse(localStorage.getItem("cosmetic_wishlist") || "[]");
  }catch(e){ return []; }
}
function saveWishlist(arr){
  localStorage.setItem("cosmetic_wishlist", JSON.stringify(arr));
}
function toggleWishlist(id, btnEl){
  const list = getWishlist();
  const idx = list.indexOf(id);
  if (idx === -1){
    list.push(id);
    btnEl.textContent = "✓ Wishlisted";
    btnEl.disabled = true;
    btnEl.classList.add("btn-outline");
  } else {
    list.splice(idx,1);
    btnEl.textContent = "❤ Wishlist";
  }
  saveWishlist(list);
}
// --- Demo cart (localStorage) ---
function addToCart(id){
  try{
    const cart = JSON.parse(localStorage.getItem("demo_cart") || "[]");
    cart.push(id);
    localStorage.setItem("demo_cart", JSON.stringify(cart));
  }catch(e){}
}

// --- event wiring ---
categoryFilter.addEventListener("change", filterAndRender);
sortFilter.addEventListener("change", filterAndRender);
searchBtn.addEventListener("click", filterAndRender);
searchInput.addEventListener("keydown", (e) => { if(e.key === "Enter") filterAndRender(); });

// initial render
filterAndRender();

