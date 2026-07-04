// ================================================================
// ★★★ SHOP_CONFIG.js — Orla Skin Official ★★★
// ================================================================
// 📂 Deploy: ວາງໄຟລ໌ນີ້ໃນ ທັງ 2 GitHub repos (ຖ້າໃຊ້ໂຄງສ້າງແຍກ repo)
//   - orla-skin-official (shop repo)
//   - orla-skin-official-management (management repo)
// ================================================================

const SHOP_CONFIG = {

  // ─── 1. ຂໍ້ມູນຮ້ານ ────────────────────────────────────────────
  shopName:   "Orla Skin Official",
  slogan:     "ຜິວກະຈ່າງໃສ ທຳມະຊາດ · ດູແລງ່າຍ · ໝັ້ນໃຈທຸກມື້",
  logoUrl:    "https://drive.google.com/thumbnail?id=1uZ07HjYD7jANYbD7B9VlN4FMhRVJssaZ&sz=w300",

  // ─── 2. ຊ່ອງທາງຕິດຕໍ່ ─────────────────────────────────────────
  phone:        "020 9663 1028",
  whatsappLink: "https://wa.me/85602096631028",

  social: {
    facebook: {
      url:  "https://www.facebook.com/orlaskinofficial",
      name: "Orla Skin Official"
    },
    whatsapp: {
      url:  "https://wa.me/85602096631028",
      name: "020 9663 1028"
    },
    tiktok: {
      url:  "https://www.tiktok.com/@orlaskin",
      name: "@orlaskin"
    },
  },

  // ─── 3. ສີໂທນ (ສີບົວ-ຊົມພູ ໃຫ້ເຂົ້າກັບໂລໂກ້) ────────────────────
  primaryColor:    "#D6377E",
  primaryColorRgb: "214,55,126",
  secondaryColor:  "#F8BBD0",
  headerBgColor:   "#D6377E",

  // ─── 4. QR ການຊຳລະ ────────────────────────────────────────────
  qrPaymentUrl: "https://drive.google.com/thumbnail?id=1uZ07HjYD7jANYbD7B9VlN4FMhRVJssaZ&sz=w600",
  bankAccount:  "BCEL One: 140-12-00-00040941-001",

  // ─── 5. API URLs (ໃສ່ຫຼັງ Deploy Google Apps Script — ເບິ່ງ Code.gs) ──
  backendApiUrl: "ໃສ່_WebApp_URL_ຈາກ_Code.gs_ຂອງທ່ານ",
  orderApiUrl:   "ໃສ່_WebApp_URL_ຈາກ_Code.gs_ຂອງທ່ານ",

  // ─── 6. Admin ──────────────────────────────────────────────────
  adminPassword: "orla2026",

  // ─── 7. ຂົນສົ່ງ ────────────────────────────────────────────────
  shippingOptions: [
    { value: "ອານຸສິດ",   label: "✈️ ອານຸສິດ",   suspended: false },
    { value: "ຮຸ່ງອາລຸນ", label: "🚌 ຮຸ່ງອາລຸນ",  suspended: false },
    { value: "ມີໄຊ",      label: "🏍️ ມີໄຊ",       suspended: false },
  ],

  // ─── 8. ວິທີຊຳລະ ──────────────────────────────────────────────
  // ໝາຍເຫດ: COD ໃຫ້ບໍລິການສະເພາະຂົນສົ່ງ "ອານຸສິດ" ເທົ່ານັ້ນ — ຕ້ອງກວດເພີ່ມໃນ index.html (cSubmit)
  paymentOptions: [
    { value: "ໂອນຈ່າຍ", icon: "💳", label: "ໂອນຈ່າຍ",          desc: "BCEL One / ສະແກນ QR",             requireSlip: true  },
    { value: "COD",     icon: "💵", label: "COD (ຈ່າຍປາຍທາງ)", desc: "ສະເພາະຂົນສົ່ງ ອານຸສິດ ເທົ່ານັ້ນ", requireSlip: false },
  ],

  // ─── 9. Marquee / Ticker ──────────────────────────────────────
  marqueeItems: [
    "✅ Orla Skin ຂອງແທ້ 100%",
    "🚚 ສົ່ງທຸກແຂວງ ທົ່ວລາວ",
    "💳 ຮັບໂອນ BCEL One",
    "📱 ສອບຖາມ WhatsApp / TikTok ໄດ້ຕະຫຼອດ",
    "🎁 Orla Skin Official ຍິນດີໃຫ້ບໍລິການ",
  ],

  // ─── 10. ແຂວງ/ເມືອງ ───────────────────────────────────────────
  districts: {
    "ວຽງຈັນ (ນະຄອນຫຼວງ)": ["ຈັນທະບູລີ","ໄຊເສດຖາ","ສີໂຄດຕະບອງ","ສີສັດຕະນາກ","ຫາດຊາຍຟອງ","ນາຊາຍທອງ","ໄຊທານີ","ສັງທອງ","ປາກງື່ມ"],
    "ວຽງຈັນ (ແຂວງ)": ["ໂພນໂຮງ","ທຸລະຄົມ","ກາສີ","ວັງວຽງ","ແມດ","ຫີນເຫີບ","ແກ້ວອຸດົມ","ເຟືອງ","ຊະນາຄາມ","ວຽງຄຳ","ໝື່ນ"],
    "ບໍລິຄຳໄຊ": ["ປາກກະດິງ","ທ່າພະບາດ","ປາກຊັນ","ບໍລິຄັນ","ໄຊຈຳພອນ","ຄຳເກີດ","ເວຍງທອງ"],
    "ຄຳມ່ວນ": ["ທ່າແຂກ","ມະຫາໄຊ","ໜອງບົກ","ຫິນບູນ","ຍົມມະລາດ","ບົວລະພາ","ນາກາຍ","ເຊບັ້ງໄຟ","ໄຊບົວທອງ","ຄູນຄຳ"],
    "ສະຫວັນນະເຂດ": ["ໄກສອນ ພົມວິຫານ","ອຸທຸມພອນ","ອາດສະພັງທອງ","ພິນ","ເຊໂປນ","ນອງ","ທ່າປາງທອງ","ສອງຄອນ","ຈຳພອນ","ຊານຸບູລີ","ໄຊບູລີ","ວິລະບູລີ"],
    "ສາລະວັນ": ["ສາລະວັນ","ລະຄອນເພັງ","ວາປີ","ເລົ່າງາມ","ຕຸ້ມລານ","ຕະໂອ້ຍ","ຄົງເຊໂດນ","ສະມ້ວຍ"],
    "ເຊກອງ": ["ທ່າແຕງ","ລະມາມ","ກະລຸມ","ດັກຈຶງ"],
    "ຈຳປາສັກ": ["ປາກເຊ","ຊະນະສົມບູນ","ບາຈຽງຈະເລີນສຸກ","ປາກຊ່ອງ","ປະທຸມພອນ","ໂພນທອງ","ຈຳປາສັກ","ສຸຂຸມາ","ມູນລະປະໂມກ","ໂຂງ"],
    "ອັດຕະປື": ["ໄຊເສດຖາ","ສາມັກຄີໄຊ","ສະໜາມໄຊ","ຊານໄຊ","ພູວົງ"],
    "ຫຼວງພະບາງ": ["ຫຼວງພະບາງ","ຊຽງເງິນ","ນານ","ປາກອູ","ນໍ້າບາກ","ງອຍ","ປາກແຊງ","ໂພນໄຊ","ຈອມເພັດ","ວຽງຄຳ","ພູຄູນ","ໂພນທອງ"],
    "ຫຼວງນໍ້າທາ": ["ຫຼວງນໍ້າທາ","ສິງ","ລອງ","ວຽງພູຄາ","ນາແລ"],
    "ອຸດົມໄຊ": ["ໄຊ","ຫລາ","ນາໝໍ້","ງາ","ແບງ","ຮຸນ","ປາກແບງ"],
    "ບໍ່ແກ້ວ": ["ຫ້ວຍຊາຍ","ຕົ້ນເຜິ້ງ","ເມິງ","ຜາອຸດົມ","ປາກທາ"],
    "ຜົ້ງສາລີ": ["ບຸນໃຕ້","ຂວາ","ໃໝ່","ຍອດອູ","ຜົ້ງສາລີ","ສຳພັນ","ບຸນເໜືອ"],
    "ຫົວພັນ": ["ຊຳເໜືອ","ຊຽງຄໍ້","ຮ້ວມ","ວຽງໄຊ","ຫົວເມືອງ","ຊຳໃຕ້","ສົບເບົາ","ແອດ","ກວັນ","ຊ່ອນ"],
    "ໄຊສົມບູນ": ["ລ້ອງແຈ້ງ","ທ່າໂທມ","ອະນຸວົງ","ລອງຊານ","ຫົມ"],
    "ໄຊຍະບູລີ": ["ບໍ່ແຕນ","ຫົງສາ","ແກ່ນທ້າວ","ຄອບ","ເງິນ","ປາກລາຍ","ເພຍງ","ທຸ່ງມີໄຊ","ໄຊຍະບູລີ","ຊຽງຮ່ອນ","ໄຊສະຖານ"],
    "ຊຽງຂວາງ": ["ແປກ (ໂພນສະຫວັນ)","ຄຳ","ໜອງແຮດ","ຄູນ","ໝອກ","ພູກູດ","ຜາໄຊ"],
  },

  // ─── 11. ຮູບແບບ UI ─────────────────────────────────────────────
  defaultGridCols: 2,
  fontSize:        14,
  borderRadius:    14,
  timezone:        "Asia/Vientiane",
  countryPrefix:   "85620",
};

// ================================================================
// ★ applyShopConfig()
// ================================================================
function applyShopConfig() {
  const C = SHOP_CONFIG;
  document.documentElement.style.setProperty("--primary",         C.primaryColor);
  document.documentElement.style.setProperty("--primary-rgb",     C.primaryColorRgb);
  document.documentElement.style.setProperty("--secondary",       C.secondaryColor);
  document.documentElement.style.setProperty("--font-size-base",  C.fontSize + "px");
  document.documentElement.style.setProperty("--radius-lg",       C.borderRadius + "px");
  document.documentElement.style.setProperty("--radius-md",       Math.max(0, C.borderRadius - 4) + "px");
  document.documentElement.style.setProperty("--radius-sm",       Math.max(0, C.borderRadius - 8) + "px");
  document.documentElement.style.setProperty("--grid-cols",       C.defaultGridCols);
  document.querySelectorAll("[data-shop-name]").forEach(el => el.textContent = C.shopName);
  document.querySelectorAll("[data-shop-slogan]").forEach(el => el.textContent = C.slogan);
  document.querySelectorAll("[data-shop-logo]").forEach(el => el.src = C.logoUrl);
  document.title = C.shopName;
  document.querySelectorAll(".site-header, .header, #app-header").forEach(el => {
    el.style.background = C.headerBgColor;
  });
}

// ================================================================
// ★ Utility Functions
// ================================================================
function pad2(n) { return String(n).padStart(2, "0"); }
function fN(n)   { return Number(n || 0).toLocaleString(); }

function toYMD(d) {
  if (!d) return "";
  const s = String(d).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.substring(0, 10);
  const dt = new Date(s);
  if (!isNaN(dt)) return `${dt.getFullYear()}-${pad2(dt.getMonth()+1)}-${pad2(dt.getDate())}`;
  return "";
}
function fmtDT(d) {
  const ymd = toYMD(d); if (!ymd) return "-";
  const [y, m, day] = ymd.split("-");
  return `${day}/${m}/${y}`;
}
function fmtDTFull(d) {
  if (!d) return "-";
  const s = String(d).trim();
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(s)) {
    const [y, m, day] = s.substring(0,10).split("-");
    return `${day}/${m}/${y} ${s.substring(11,16)}`;
  }
  return fmtDT(s);
}
function convertGD(url) {
  if (!url || !url.trim()) return "";
  url = url.trim();
  if (url.includes("drive.google.com/uc") || url.includes("thumbnail")) return url;
  const m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w300`;
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2) return `https://drive.google.com/thumbnail?id=${m2[1]}&sz=w300`;
  return url;
}
function driveFileId(url) {
  if (!url) return "";
  const m = String(url).match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return m[1];
  const m2 = String(url).match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (m2) return m2[1];
  return "";
}
function driveThumb(url, size) {
  const id = driveFileId(url);
  if (!id) return url || "";
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size || 400}`;
}
function toWaPhone(rawPhone) {
  const digits = String(rawPhone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.indexOf("856") === 0) return digits;
  const last8 = digits.length > 8 ? digits.slice(-8) : digits;
  return SHOP_CONFIG.countryPrefix + last8;
}
function waLink(rawPhone) {
  const p = toWaPhone(rawPhone);
  return p ? `https://wa.me/${p}` : "";
}
function escHtml(s) {
  return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

const noImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23bbb' font-size='10'%3Eບໍ່ມີ%3C/text%3E%3C/svg%3E";

const SETTINGS_KEY = "orla_skin_official_v1";
function getSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; } catch(e) { return {}; }
}
function saveSettings(o) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(o)); }

// ─── API Client ────────────────────────────────────────────────
const api = {
  async get(action, params = {}, useOrderApi = false) {
    const url = useOrderApi ? SHOP_CONFIG.orderApiUrl : SHOP_CONFIG.backendApiUrl;
    const qs  = new URLSearchParams({ action, ...params }).toString();
    const res = await fetch(`${url}?${qs}`, { method: "GET", redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success === false) throw new Error(json.error || "API error");
    return json.data !== undefined ? json.data : json;
  },
  async post(action, body = {}, useOrderApi = false) {
    const url = useOrderApi ? SHOP_CONFIG.orderApiUrl : SHOP_CONFIG.backendApiUrl;
    const res = await fetch(url, {
      method: "POST", redirect: "follow",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ action, ...body }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success === false) throw new Error(json.error || "API error");
    return json;
  },
};
