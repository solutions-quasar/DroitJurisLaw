/**
 * Droit Juris Law - Core Configuration & Logic
 * Mobile-first, component-based rendering.
 * Now with Internationalization (i18n).
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
    heroImage: "assets/images/hero_split.png",
    googleMapsLink: "https://www.google.com/search?q=droit+juris+law#lrd=0x4ca8188287343b4f:0x6a2e48232675713c,1"
};

const TRANSLATIONS = {
    en: {
        nav: {
            services: "Services",
            about: "About",
            faq: "FAQ",
            contact: "Contact",
            home: "Home",
            practiceAreas: "Practice Areas",
            call: "Call",
            email: "Email",
            directions: "Directions",
            menu: "Menu",
            close: "Close",
            message: "Message",
            inquire: "Inquire"
        },
        buttons: {
            googleMaps: "Open in Google Maps",
            googleReviews: "Google Reviews"
        },
        hero: {
            title: "Legal services in Dieppe, New Brunswick.",
            subtitle: "Clarity in process, responsiveness in representation. Your trust is our priority.",
            cta: "Request a Consultation"
        },
        sectionTitles: {
            reviews: "Client Feedback",
            whyChooseUs: "Why Choose Us",
            services: "Our Services",
            process: "How It Works",
            faq: "Common Questions",
            faqSubtitle: "Find quick answers to common legal process inquiries.",
            team: "Our Professionals",
            location: "Our Location",
            contact: "Request a Consultation",
            footerTagline: "Clarity in process.<br>Responsiveness in representation.",
            footerNav: "Navigation",
            footerPractice: "Practice Areas",
            footerContact: "Contact",
            rights: "All rights reserved.",
            disclaimer: "Information only. Contacting us does not create a solicitor-client relationship."
        },
        practiceAreas: [
            {
                id: 1,
                title: "Real Estate (Residential & Commercial)",
                description: "Expert guidance for all your property transactions, from residential closings to commercial real estate development.",
                image: "assets/images/practice_real_estate.png"
            },
            {
                id: 2,
                title: "Corporate Law",
                description: "Strategic legal solutions for businesses, including incorporation, mergers, and contract negotiation.",
                image: "assets/images/practice_corporate.png"
            },
            {
                id: 3,
                title: "Succession-Estate",
                description: "Comprehensive estate planning and succession strategies to secure your legacy and family's future.",
                image: "assets/images/practice_succession.png"
            },
            {
                id: 4,
                title: "Wills & Probate",
                description: "Compassionate assistance with drafting wills and navigating the probate process with dignity and clarity.",
                image: "assets/images/practice_wills.png"
            },
            {
                id: 5,
                title: "Municipal Law",
                description: "Specialized representation for administrative and municipal legal matters, navigating regulations effectively.",
                image: "assets/images/practice_municipal.png"
            }
        ],
        whyChooseUs: [
            { title: "Client Focused", description: "Prioritizing your needs with a personalized legal approach." },
            { title: "Result Oriented", description: "Commitment to achieving the best possible outcomes for every case." },
            { title: "Local Expertise", description: "Deep understanding of the New Brunswick legal landscape." }
        ],
        reviews: [
            { author: "Marj Bourque", text: "Working with Louis is always a pleasure. He makes transactions easy and comfortable for everyone!", rating: 5 },
            { author: "Bossé Jean-Michel", text: "Louis Ouellette has been my go-to lawyer for all of my real estate transactions for the past 8 years, and I couldn't be happier with his services. His deep knowledge of real estate law and his impeccable attention to detail have been invaluable.", rating: 5 }
        ],
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
                title: "Co-Founder & Lead Counsel",
                specialties: ["Administrative Law", "Municipal Law"],
                image: "assets/images/andre_daigle.jpg",
                bio: "With a Master of Laws (LL.M.) and years of dedicated service in Dieppe, André Daigle provides sophisticated legal solutions with a focus on administrative and municipal law."
            },
            {
                name: "Louis M. Ouellette, B.A., LL.B.",
                title: "Co-Founder & Counsel",
                specialties: ["Real Estate - Immobilier", "Corporate Law"],
                image: "assets/images/louis_ouellette.jpg",
                bio: "Louis M. Ouellette brings extensive expertise in real estate and corporate law, ensuring smooth transactions and robust legal protection for business and residential clients."
            }
        ],
        form: {
            name: "Name",
            contact: "Email or Phone",
            topic: "Topic",
            message: "Message",
            send: "Send Message",
            placeholderName: "John Doe",
            placeholderContact: "email@example.com or (555) 555-5555",
            placeholderMessage: "How can we help you?",
            selectTopic: "Select a topic",
            other: "Other"
        },
        disclaimers: {
            contact: "Information only. Contacting us does not create a solicitor-client relationship. Do not send confidential information until we confirm representation."
        }
    },
    fr: {
        nav: {
            services: "Services",
            about: "À propos",
            faq: "FAQ",
            contact: "Contact",
            home: "Accueil",
            practiceAreas: "Domaines de pratique",
            call: "Appeler",
            email: "Courriel",
            directions: "Itinéraire",
            menu: "Menu",
            close: "Fermer",
            message: "Message",
            inquire: "Se renseigner"
        },
        buttons: {
            googleMaps: "Ouvrir dans Google Maps",
            googleReviews: "Avis Google"
        },
        hero: {
            title: "Services juridiques à Dieppe, Nouveau-Brunswick.",
            subtitle: "Clarté dans le processus, réactivité dans la représentation. Votre confiance est notre priorité.",
            cta: "Demander une consultation"
        },
        sectionTitles: {
            reviews: "Avis Clients",
            whyChooseUs: "Pourquoi Nous Choisir",
            services: "Nos Services",
            process: "Procédure",
            faq: "Questions Fréquentes",
            faqSubtitle: "Trouvez des réponses rapides aux questions juridiques courantes.",
            team: "Nos Professionnels",
            location: "Notre Emplacement",
            contact: "Demander une Consultation",
            footerTagline: "Clarté dans le processus.<br>Réactivité dans la représentation.",
            footerNav: "Navigation",
            footerPractice: "Domaines de pratique",
            footerContact: "Contact",
            rights: "Tous droits réservés.",
            disclaimer: "Information seulement. Nous contacter ne crée pas de relation avocat-client."
        },
        practiceAreas: [
            {
                id: 1,
                title: "Immobilier (Résidentiel & Commercial)",
                description: "Conseils d'experts pour toutes vos transactions immobilières, des clôtures résidentielles au développement immobilier commercial.",
                image: "assets/images/practice_real_estate.png"
            },
            {
                id: 2,
                title: "Droit des Affaires",
                description: "Solutions juridiques stratégiques pour les entreprises, y compris l'incorporation, les fusions et la négociation de contrats.",
                image: "assets/images/practice_corporate.png"
            },
            {
                id: 3,
                title: "Successions",
                description: "Planification successorale complète et stratégies de succession pour assurer votre héritage et l'avenir de votre famille.",
                image: "assets/images/practice_succession.png"
            },
            {
                id: 4,
                title: "Testaments et Homologation",
                description: "Aide compassionnelle pour la rédaction de testaments et la navigation dans le processus d'homologation avec dignité et clarté.",
                image: "assets/images/practice_wills.png"
            },
            {
                id: 5,
                title: "Droit Municipal",
                description: "Représentation spécialisée pour les questions juridiques administratives et municipales, naviguant efficacement dans les réglementations.",
                image: "assets/images/practice_municipal.png"
            }
        ],
        whyChooseUs: [
            { title: "Axé sur le Client", description: "Prioriser vos besoins avec une approche juridique personnalisée." },
            { title: "Orienté Résultats", description: "Engagement à obtenir les meilleurs résultats possibles pour chaque cas." },
            { title: "Expertise Locale", description: "Compréhension approfondie du paysage juridique du Nouveau-Brunswick." }
        ],
        reviews: [
            { author: "Marj Bourque", text: "Travailler avec Louis est toujours un plaisir. Il rend les transactions faciles et confortables pour tout le monde !", rating: 5 },
            { author: "Bossé Jean-Michel", text: "Louis Ouellette a été mon avocat de référence pour toutes mes transactions immobilières au cours des 8 dernières années, et je ne pourrais pas être plus heureux de ses services.", rating: 5 }
        ],
        process: [
            { step: "1", title: "Consultation", description: "Réunion initiale pour discuter de votre dossier." },
            { step: "2", title: "Stratégie", description: "Élaboration d'un plan juridique sur mesure." },
            { step: "3", title: "Exécution", description: "Mise en œuvre de la stratégie avec précision." }
        ],
        faq: [
            { q: "Comment commencer mon dossier ?", a: "Demandez une consultation via notre formulaire ou appelez-nous directement." },
            { q: "Que dois-je apporter à la première réunion ?", a: "Tout document pertinent à votre affaire juridique." }
        ],
        team: [
            {
                name: "André Daigle, LL.M.",
                title: "Cofondateur & Avocat Principal",
                specialties: ["Droit Administratif", "Droit Municipal"],
                image: "assets/images/andre_daigle.jpg",
                bio: "Avec une Maîtrise en Droit (LL.M.) et des années de service dédié à Dieppe, André Daigle offre des solutions juridiques sophistiquées avec un accent sur le droit administratif et municipal."
            },
            {
                name: "Louis M. Ouellette, B.A., LL.B.",
                title: "Cofondateur & Avocat",
                specialties: ["Immobilier", "Droit des Affaires"],
                image: "assets/images/louis_ouellette.jpg",
                bio: "Louis M. Ouellette apporte une vaste expertise en droit immobilier et des affaires, assurant des transactions fluides et une protection juridique solide pour les clients commerciaux et résidentiels."
            }
        ],
        form: {
            name: "Nom",
            contact: "Courriel ou Téléphone",
            topic: "Sujet",
            message: "Message",
            send: "Envoyer le Message",
            placeholderName: "Jean Dupont",
            placeholderContact: "email@exemple.com ou (555) 555-5555",
            placeholderMessage: "Comment pouvons-nous vous aider ?",
            selectTopic: "Sélectionnez un sujet",
            other: "Autre"
        },
        disclaimers: {
            contact: "Information seulement. Nous contacter ne crée pas de relation avocat-client. N'envoyez pas d'informations confidentielles avant que nous confirmions la représentation."
        }
    }
};

let CURRENT_LANG = 'en';

// SVG Icon Helpers (unchanged)
const ICONS = {
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`
};

// Core Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
    checkPassword();
});

function checkPassword() {
    const overlay = document.getElementById('password-overlay');
    const form = document.getElementById('password-form');
    const input = document.getElementById('site-password');
    const errorMsg = document.getElementById('password-error');

    // Check if already authenticated in this session
    if (sessionStorage.getItem('droit_auth') === 'true') {
        overlay.style.display = 'none';
        initApp();
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = input.value;
        if (password === 'droit2025') {
            sessionStorage.setItem('droit_auth', 'true');
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                initApp();
            }, 500);
        } else {
            errorMsg.textContent = 'Incorrect password. Please try again.';
            input.value = '';
            input.focus();
        }
    });
}

function initApp() {
    renderAll();
    renderOverlayMenu();
    initFAQ();
}

function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') return;
    CURRENT_LANG = lang;
    renderAll();
    updateLanguageButtons();
}

function updateLanguageButtons() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        if (btn.textContent.toLowerCase() === CURRENT_LANG) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderAll() {
    // 1. Update static elements with data-i18n
    const content = TRANSLATIONS[CURRENT_LANG];
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // split key by dot
        const parts = key.split('.');
        let value = content;
        for (const part of parts) {
            if (value[part] !== undefined) {
                value = value[part];
            } else {
                value = undefined;
                break;
            }
        }
        if (value) {
            el.innerHTML = value; // innerHTML to support <br>
        }
    });

    // 2. Render dynamic sections
    renderMobileNav();
    renderHero();
    renderServices();
    renderReviews();
    renderWhyChooseUs();
    renderProcess();
    renderFAQ();
    renderAbout();
    renderLocation();
    renderContact();
    renderOverlayMenu();
    // injectJSONLD(); // Should ideally be updated but less critical for visual
}

function renderMobileNav() {
    const existing = document.querySelector('.mobile-nav-bar');
    if (existing) existing.remove();

    const nav = document.createElement('nav');
    nav.className = 'mobile-nav-bar';
    const content = TRANSLATIONS[CURRENT_LANG];

    // Added language toggle in mobile nav for convenience? 
    // Or maybe just stick to top-bar actions if they show up? No they are hidden on mobile.
    // Let's rely on RenderOverlayMenu to show lang options in mobile or add it to bottom bar.
    // User asked for "compact toggle", implies top bar usually.
    // I'll add a small FAB or just put it in the Overlay Menu.

    nav.innerHTML = `
        <a href="#" class="mobile-nav-item" id="menu-toggle">
            <div class="nav-icon-container">
                <span class="nav-icon-state icon-menu">${ICONS.menu}</span>
                <span class="nav-icon-state icon-close">${ICONS.close}</span>
            </div>
            <div class="nav-label-container">
                <span class="nav-label-state label-menu">${content.nav.menu}</span>
                <span class="nav-label-state label-close">${content.nav.close}</span>
            </div>
        </a>
        <a href="tel:${CONFIG.business.phoneRaw}" class="mobile-nav-item">
            ${ICONS.phone}
            <span>${content.nav.call}</span>
        </a>
        <a href="#contact" class="mobile-nav-item">
            ${ICONS.message}
            <span>${content.nav.message}</span>
        </a>
    `;
    document.body.appendChild(nav);

    const toggle = document.getElementById('menu-toggle');
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const overlay = document.getElementById('menu-overlay');
        const isActive = overlay.classList.toggle('active');
        toggle.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
}

function renderHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    hero.className = 'hero hero-split';
    hero.innerHTML = `
        <div class="hero-container">
            <div class="hero-content">
                <h1>${content.hero.title}</h1>
                <p>${content.hero.subtitle}</p>
                <div class="hero-actions">
                    <a href="#contact" class="btn btn-primary">${content.hero.cta}</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="hero-image-wrapper">
                    <img src="${CONFIG.heroImage}" alt="Modern Law Office" class="hero-image">
                    <div class="hero-angle-divider"></div>
                </div>
            </div>
        </div>
    `;
}

function renderReviews() {
    const section = document.getElementById('reviews');
    if (!section) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-8">${content.sectionTitles.reviews}</h2>
        <div class="card-grid">
            ${content.reviews.map(r => `
                <div class="card review-card">
                    <div class="rating mb-4">
                        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                    </div>
                    <p>"${r.text}"</p>
                    <cite>— ${r.author}</cite>
                </div>
            `).join('')}
        </div>
        <div style="margin-top: 4rem; text-align: center;">
            <a href="${CONFIG.googleMapsLink}" target="_blank" class="btn btn-secondary">${content.buttons.googleReviews}</a>
        </div>
    `;
}

function renderWhyChooseUs() {
    const section = document.getElementById('why-choose-us');
    if (!section) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-8">${content.sectionTitles.whyChooseUs}</h2>
        <div class="card-grid">
            ${content.whyChooseUs.map(w => `
                <div class="card">
                    <h3>${w.title}</h3>
                    <p>${w.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderServices() {
    const section = document.getElementById('services');
    if (!section) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-8">${content.sectionTitles.services}</h2>
        <div class="card-grid">
            ${content.practiceAreas.map(p => `
                <div class="card service-card">
                    <div class="service-card-image">
                        <img src="${p.image}" alt="${p.title}" loading="lazy">
                    </div>
                    <div class="service-card-content">
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <a href="#contact" class="text-link">${content.nav.inquire}</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderProcess() {
    const section = document.getElementById('process');
    if (!section) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-12">${content.sectionTitles.process}</h2>
        <div class="process-grid">
            ${content.process.map((s) => `
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
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <div class="faq-wrapper">
            <div class="faq-header-content">
                <h2>${content.sectionTitles.faq}</h2>
                <p>${content.sectionTitles.faqSubtitle}</p>
            </div>
            <div class="faq-items">
                ${content.faq.map(f => `
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
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-12">${content.sectionTitles.team}</h2>
        <div class="team-grid">
            ${content.team.map(m => `
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
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-8">${content.sectionTitles.location}</h2>
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
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.business.address)}" target="_blank" class="btn btn-primary">${content.buttons.googleMaps}</a>
        </div>
    `;
}

function renderContact() {
    const section = document.getElementById('contact');
    if (!section) return;
    const content = TRANSLATIONS[CURRENT_LANG];
    section.innerHTML = `
        <h2 class="text-center mb-8">${content.sectionTitles.contact}</h2>
        <form name="contact" method="POST" data-netlify="true" class="contact-form">
            <input type="hidden" name="form-name" value="contact">
            <div class="form-group">
                <label for="name">${content.form.name}</label>
                <input type="text" id="name" name="name" required placeholder="${content.form.placeholderName}" autocomplete="name">
            </div>
            <div class="form-group">
                <label for="email">${content.form.contact}</label>
                <input type="text" id="contact_method" name="contact_method" required placeholder="${content.form.placeholderContact}" autocomplete="email">
            </div>
            <div class="form-group">
                <label for="topic">${content.form.topic}</label>
                <select id="topic" name="topic" required>
                    <option value="" disabled selected>${content.form.selectTopic}</option>
                    ${content.practiceAreas.map(p => `<option value="${p.title}">${p.title}</option>`).join('')}
                    <option value="Other">${content.form.other}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">${content.form.message}</label>
                <textarea id="message" name="message" required placeholder="${content.form.placeholderMessage}" rows="4"></textarea>
            </div>
            <p class="disclaimer small">${content.disclaimers.contact}</p>
            <button type="submit" class="btn btn-primary">${content.form.send}</button>
        </form>
    `;
}


function renderOverlayMenu() {
    const existing = document.getElementById('menu-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menu-overlay';
    const content = TRANSLATIONS[CURRENT_LANG];

    overlay.innerHTML = `
        <div class="nav-links">
            <a href="#">${content.nav.home}</a>
            <a href="#services">${content.nav.services}</a>
            <a href="#about">${content.nav.about}</a>
            <a href="#faq">${content.nav.faq}</a>
            <a href="#contact">${content.nav.contact}</a>
        </div>
        <div class="mobile-lang-options" style="margin-top: 2rem;">
             <button class="lang-btn ${CURRENT_LANG === 'en' ? 'active' : ''}" onclick="setLanguage('en')">EN</button>
             <span class="lang-divider">|</span>
             <button class="lang-btn ${CURRENT_LANG === 'fr' ? 'active' : ''}" onclick="setLanguage('fr')">FR</button>
        </div>
        <div class="menu-footer">
            <h4>${CONFIG.business.name}</h4>
            <p>${CONFIG.business.address}</p>
            <p>${CONFIG.business.phone}</p>
        </div>
    `;
    document.body.appendChild(overlay);

    const toggle = document.getElementById('menu-toggle');
    // Listeners are handled in renderMobileNav, but close on link click needs to be re-attached
    const links = overlay.querySelectorAll('.nav-links a, .mobile-lang-options button');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // If it's a lang button, allow event to bubble to onclick handler first
            if (e.target.classList.contains('lang-btn')) return;

            overlay.classList.remove('active');
            if (toggle) toggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function initFAQ() {
    // Need to re-attach listeners after re-render
    const section = document.getElementById('faq');
    // Delegation or re-attach
    // Simple re-attach
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });
}

console.log("Droit Juris Law v1.1.0 - i18n");
