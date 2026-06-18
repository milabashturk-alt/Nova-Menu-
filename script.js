@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

:root {
    --primary: #6F4E37;
    --primary-light: #8B6914;
    --secondary: #D4A574;
    --accent: #C4A484;
    --bg-cream: #FDF5E6;
    --bg-light: #FFF8F0;
    --text-dark: #2C1810;
    --text-medium: #5D4037;
    --text-light: #8D6E63;
    --border: #E8D5C4;
    --shadow: rgba(111, 78, 55, 0.08);
    --shadow-hover: rgba(111, 78, 55, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', sans-serif;
    background: var(--bg-cream);
    color: var(--text-dark);
    line-height: 1.7;
    overflow-x: hidden;
}

/* ===== HERO SECTION ===== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #FDF5E6 0%, #F5E6D3 50%, #E8D5C4 100%);
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 150%;
    background: radial-gradient(ellipse, rgba(196, 164, 132, 0.15) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 60%;
    height: 100%;
    background: radial-gradient(ellipse, rgba(111, 78, 55, 0.05) 0%, transparent 70%);
    animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(2deg); }
    66% { transform: translate(-20px, 20px) rotate(-1deg); }
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 2rem;
}

.logo-container {
    margin-bottom: 2rem;
    animation: fadeInDown 1s ease-out;
}

.logo-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 40px rgba(111, 78, 55, 0.2);
    position: relative;
}

.logo-icon::before {
    content: '';
    position: absolute;
    inset: -8px;
    border: 2px solid var(--secondary);
    border-radius: 50%;
    opacity: 0.5;
}

.logo-icon i {
    font-size: 3rem;
    color: var(--bg-cream);
}

.hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
}

.hero .subtitle {
    font-size: 1.8rem;
    color: var(--text-medium);
    font-weight: 300;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
}

.hero .subtitle::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: var(--secondary);
    margin: 1rem auto 0;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-indicator i {
    font-size: 1.5rem;
    color: var(--primary);
    opacity: 0.6;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== NAVIGATION ===== */
.nav-bar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(253, 245, 230, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
    padding: 0.8rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--primary);
    font-weight: 700;
}

.nav-links {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.nav-link {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--text-medium);
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.nav-link:hover, .nav-link.active {
    background: var(--primary);
    color: white;
}

/* ===== CONTACT FLOATING BUTTONS ===== */
.contact-float {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    position: relative;
}

.contact-btn:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.contact-btn.whatsapp { background: #25D366; }
.contact-btn.phone { background: var(--primary); }

.contact-btn .tooltip {
    position: absolute;
    left: 70px;
    background: var(--text-dark);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.contact-btn:hover .tooltip {
    opacity: 1;
    left: 75px;
}

/* ===== MENU SECTIONS ===== */
.menu-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-icon {
    font-size: 2.5rem;
    color: var(--secondary);
    margin-bottom: 1rem;
    display: inline-block;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.section-line {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
    margin: 0 auto;
}

.menu-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 40px var(--shadow);
    border: 1px solid var(--border);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px var(--shadow-hover);
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px dashed var(--border);
    transition: all 0.3s ease;
}

.menu-item:last-child {
    border-bottom: none;
}

.menu-item:hover {
    padding-right: 10px;
}

.item-info {
    flex: 1;
}

.item-name {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--text-dark);
    margin-bottom: 0.2rem;
}

.item-name-en {
    font-size: 0.85rem;
    color: var(--text-light);
    font-weight: 400;
}

.item-price {
    font-weight: 800;
    font-size: 1.2rem;
    color: var(--primary);
    background: var(--bg-light);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    white-space: nowrap;
}

/* ===== SPECIAL BADGES ===== */
.badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 700;
    margin-right: 0.5rem;
    vertical-align: middle;
}

.badge-hot { background: #FF6B6B; color: white; }
.badge-ice { background: #4ECDC4; color: white; }
.badge-new { background: #FFD93D; color: var(--text-dark); }
.badge-popular { background: var(--primary); color: white; }

/* ===== TWO COLUMN LAYOUT ===== */
.menu-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .menu-grid.two-col {
        grid-template-columns: 1fr 1fr;
    }
}

/* ===== FOOTER ===== */
.footer {
    background: var(--primary);
    color: var(--bg-cream);
    text-align: center;
    padding: 3rem 1.5rem;
    margin-top: 4rem;
}

.footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.footer-contact {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 1.5rem 0;
    flex-wrap: wrap;
}

.footer-contact a {
    color: var(--secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.footer-contact a:hover {
    color: white;
}

.service-charge {
    background: rgba(255,255,255,0.1);
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    display: inline-block;
}

/* ===== ANIMATIONS ===== */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .hero .subtitle { font-size: 1.2rem; }
    .section-title { font-size: 1.8rem; }
    .nav-links { gap: 0.3rem; }
    .nav-link { padding: 0.4rem 0.8rem; font-size: 0.8rem; }
    .contact-float { bottom: 1rem; left: 1rem; }
    .contact-btn { width: 50px; height: 50px; font-size: 1.2rem; }
}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg-cream); }
::-webkit-scrollbar-thumb { background: var(--secondary); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--primary); }