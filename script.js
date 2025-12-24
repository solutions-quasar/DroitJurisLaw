/**
 * Droit Juris Law - Core Configuration & Logic
 * Mobile-first, component-based rendering.
 */

const CONFIG = {
    business: {
        name: "Droit Juris Law",
        phone: "(506) 830-2526",
        phoneRaw: "+15068302526",
        email: "reception@droitjurislaw.com",
        address: "678 Champlain Street, Dieppe, NB, Canada",
        website: "https://www.droitjurislaw.com"
    },
    theme: {
        darkMode: false,
        primaryColor: "#0f172a",
        secondaryColor: "#b68d40"
    },
    hero: {
        title: "Legal services in Dieppe, New Brunswick.",
        subtitle: "Clarity in process, responsiveness in representation. Your trust is our priority.",
        cta: "Request a Consultation",
        image: "assets/images/hero_split.png"
    },
    practiceAreas: [
        { id: 1, title: "Practice Area 1 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." },
        { id: 2, title: "Practice Area 2 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." },
        { id: 3, title: "Practice Area 3 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." },
        { id: 4, title: "Practice Area 4 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." },
        { id: 5, title: "Practice Area 5 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." },
        { id: 6, title: "Practice Area 6 (OWNER TO FILL)", description: "Detailed description of legal services offered in this area." }
    ],
    whyChooseUs: [
        { title: "Client Focused", description: "Neutral, editable bullet point about our approach." },
        { title: "Result Oriented", description: "Neutral, editable bullet point about our approach." },
        { title: "Local Expertise", description: "Neutral, editable bullet point about our approach." }
    ],
    reviews: [
        { author: "Marj Bourque", text: "Working with Louis is always a pleasure. He makes transactions easy and comfortable for everyone!", rating: 5 },
        { author: "Bossé Jean-Michel", text: "Louis Ouellette has been my go-to lawyer for all of my real estate transactions for the past 8 years, and I couldn't be happier with his services. His deep knowledge of real estate law and his impeccable attention to detail have been invaluable.", rating: 5 }
    ],
    googleMapsLink: "https://www.google.com/search?q=droit+juris+law#lrd=0x4ca8188287343b4f:0x6a2e48232675713c,1",
    process: [
        { step: "1", title: "Consultation", description: "Initial meeting to discuss your case." },
        { step: "2", title: "Strategy", description: "Developing a tailored legal plan." },
        { step: "3", title: "Execution", description: "Implementing the strategy with precision." }
    ],
    faq: [
        { q: "How do I start my case?", a: "Request a consultation via our form or call us directly." },
        { q: "What should I bring to the first meeting?", a: "Any documents relevant to your legal matter." }
    ],
    team: [
        {
            name: "André Daigle, LL.M.",
            title: "Founder & Lead Counsel",
            specialties: ["Administrative Law", "Municipal Law"],
            image: "assets/images/andre_daigle.jpg",
            bio: "With a Master of Laws (LL.M.) and years of dedicated service in Dieppe, André Daigle provides sophisticated legal solutions with a focus on administrative and municipal law."
        },
        {
            name: "Louis M. Ouellette, B.A., LL.B.",
            title: "Associate Counsel",
            specialties: ["Real Estate - Immobilier", "Corporate Law"],
            image: "assets/images/louis_ouellette.jpg",
            bio: "Louis M. Ouellette brings extensive expertise in real estate and corporate law, ensuring smooth transactions and robust legal protection for business and residential clients."
        }
    ],
    disclaimers: {
        contact: "Information only. Contacting us does not create a solicitor-client relationship. Do not send confidential information until we confirm representation."
    }
};

// SVG Icon Helpers
const ICONS = {
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`
};

// Core Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderMobileNav();
    renderHero();
    renderReviews();
    renderWhyChooseUs();
    renderServices();
    renderProcess();
    renderFAQ();
    renderAbout();
    renderLocation();
    renderContact();
    injectJSONLD();
}

function renderMobileNav() {
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav-bar';
    nav.innerHTML = `
        <a href="#" class="mobile-nav-item" id="menu-toggle">
            ${ICONS.menu}
            <span>Menu</span>
        </a>
        <a href="tel:${CONFIG.business.phoneRaw}" class="mobile-nav-item">
            ${ICONS.phone}
            <span>Call</span>
        </a>
        <a href="#contact" class="mobile-nav-item">
            ${ICONS.message}
            <span>Message</span>
        </a>
    `;
    document.body.appendChild(nav);
}

function renderHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    hero.className = 'hero hero-split';
    hero.innerHTML = `
        <div class="hero-container">
            <div class="hero-content">
                <h1>${CONFIG.hero.title}</h1>
                <p>${CONFIG.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary">${CONFIG.hero.cta}</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="hero-image-wrapper">
                    <img src="${CONFIG.hero.image}" alt="Modern Law Office" class="hero-image">
                    <div class="hero-angle-divider"></div>
                </div>
            </div>
        </div>
    `;
}

function renderReviews() {
    const section = document.getElementById('reviews');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-8">Client Feedback</h2>
        <div class="card-grid">
            ${CONFIG.reviews.map(r => `
                <div class="card review-card">
                    <div class="rating mb-4">
                        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                    </div>
                    <p>"${r.text}"</p>
                    <cite>— ${r.author}</cite>
                </div>
            `).join('')}
        </div>
        <div class="text-center mt-8">
            <a href="${CONFIG.googleMapsLink}" target="_blank" class="btn btn-secondary">View more on Google</a>
        </div>
    `;
}

function renderWhyChooseUs() {
    const section = document.getElementById('why-choose-us');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-8">Why Choose Us</h2>
        <div class="card-grid">
            ${CONFIG.whyChooseUs.map(w => `
                <div class="card">
                    <h3>${w.title}</h3>
                    <p>${w.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderServices() {
    const section = document.getElementById('services-snapshot');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-8">Our Services</h2>
        <div class="card-grid">
            ${CONFIG.practiceAreas.map(p => `
                <div class="card">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <a href="services.html" class="text-link">Learn More</a>
                </div>
            `).join('')}
        </div>
    `;
}

function renderProcess() {
    const section = document.getElementById('process');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-12">How It Works</h2>
        <div class="process-grid">
            ${CONFIG.process.map((s, index) => `
                <div class="step-card">
                    <div class="step-header">
                        <span class="step-number">0${s.step}</span>
                        <div class="step-line"></div>
                    </div>
                    <div class="step-body">
                        <h3>${s.title}</h3>
                        <p>${s.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFAQ() {
    const section = document.getElementById('faq');
    if (!section) return;
    section.innerHTML = `
        <div class="faq-wrapper">
            <div class="faq-header-content">
                <h2>Common Questions</h2>
                <p>Find quick answers to common legal process inquiries.</p>
            </div>
            <div class="faq-items">
                ${CONFIG.faq.map(f => `
                    <div class="faq-item">
                        <button class="faq-question">
                            <span>${f.q}</span>
                            <span class="faq-icon">+</span>
                        </button>
                        <div class="faq-answer">
                            <div class="faq-answer-inner">
                                <p>${f.a}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderAbout() {
    const section = document.getElementById('about');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-12">Our Professionals</h2>
        <div class="team-grid">
            ${CONFIG.team.map(m => `
                <div class="team-card">
                    <div class="team-image">
                        <img src="${m.image}" alt="${m.name}" loading="lazy">
                    </div>
                    <div class="team-content">
                        <div class="team-meta">
                            <span class="team-title">${m.title}</span>
                            <h3>${m.name}</h3>
                        </div>
                        <p class="team-bio">${m.bio}</p>
                        <div class="team-specialties">
                            ${m.specialties.map(s => `<span class="tag">${s}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderLocation() {
    const section = document.getElementById('location');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-8">Our Location</h2>
        <div class="card location-card">
            <div style="width: 100%; height: 400px; margin-bottom: 2rem; border-radius: var(--radius-md); overflow: hidden;">
                <iframe 
                    width="100%" 
                    height="100%" 
                    id="gmap_canvas" 
                    src="https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.business.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                </iframe>
            </div>
            <p>${CONFIG.business.address}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.business.address)}" target="_blank" class="btn btn-primary">Open in Google Maps</a>
        </div>
    `;
}

function renderContact() {
    const section = document.getElementById('contact');
    if (!section) return;
    section.innerHTML = `
        <h2 class="text-center mb-8">Request a Consultation</h2>
        <form name="contact" method="POST" data-netlify="true" class="contact-form">
            <input type="hidden" name="form-name" value="contact">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" autocomplete="name">
            </div>
            <div class="form-group">
                <label for="email">Email or Phone</label>
                <input type="text" id="contact_method" name="contact_method" required placeholder="email@example.com or (555) 555-5555" autocomplete="email">
            </div>
            <div class="form-group">
                <label for="topic">Topic</label>
                <select id="topic" name="topic" required>
                    <option value="" disabled selected>Select a topic</option>
                    ${CONFIG.practiceAreas.map(p => `<option value="${p.title}">${p.title}</option>`).join('')}
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required placeholder="How can we help you?" rows="4"></textarea>
            </div>
            <p class="disclaimer small">${CONFIG.disclaimers.contact}</p>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    `;
}

function injectJSONLD() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const json = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": CONFIG.business.name,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "678 Champlain Street",
            "addressLocality": "Dieppe",
            "addressRegion": "NB",
            "addressCountry": "CA"
        },
        "telephone": CONFIG.business.phone,
        "email": CONFIG.business.email,
        "url": CONFIG.business.website
    };
    script.textContent = JSON.stringify(json);
    document.head.appendChild(script);
}

function renderOverlayMenu() {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menu-overlay';
    overlay.innerHTML = `
        <button class="close-menu" id="menu-close">${ICONS.close}</button>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="about.html">About</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="menu-footer">
            <p>${CONFIG.business.address}</p>
            <p>${CONFIG.business.phone}</p>
        </div>
    `;
    document.body.appendChild(overlay);

    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on backdrop click (optional but good UX)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initFAQ() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Update initApp to include new listeners
const originalInitApp = initApp;
initApp = function () {
    originalInitApp();
    renderOverlayMenu();
    initFAQ();
};

console.log("Droit Juris Law v1.0.0");
