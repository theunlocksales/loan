// ==================== SM FINANCE - IMPROVED PREMIUM JAVASCRIPT ====================

let currentLanguage = 'en';

// ==================== 30 UNIQUE TESTIMONIALS DATA ====================
const testimonials = [
    { name: "Rajesh Kumar", location: "Indore", text: "Got home loan at 6.5% interest! Saved ₹5 lakhs compared to other banks. Shailendra Sir is truly an expert!" },
    { name: "Priya Sharma", location: "Vijay Nagar", text: "Best loan consultant in Indore! Got lowest interest rate and quick approval within 2 days!" },
    { name: "Amit Patel", location: "Indore", text: "Balance transfer saved me ₹3 lakhs! Thank you SM Finance for the lowest rate!" },
    { name: "Neha Gupta", location: "Palasia", text: "Professional service and transparent process. Got my mortgage loan at unbeatable rates!" },
    { name: "Sandeep Verma", location: "Bhanwarkuan", text: "20 years of experience truly shows! Best guidance for home loan. Highly recommended!" },
    { name: "Anjali Singh", location: "Scheme 78", text: "Shailendra Sir helped me get property loan with lowest EMI. Very satisfied!" },
    { name: "Vikram Malhotra", location: "Indore", text: "Quick processing and excellent support. Got home loan approved in 48 hours!" },
    { name: "Pooja Jain", location: "Vijay Nagar", text: "Trustworthy and reliable service! Saved thousands on interest rate. Thank you!" },
    { name: "Rahul Agarwal", location: "Indore", text: "Best mortgage loan rates in Indore. Professional and helpful throughout the process!" },
    { name: "Kavita Desai", location: "Palasia", text: "Excellent experience! Balance transfer reduced my EMI significantly. Grateful to SM Finance!" },
    { name: "Manish Sharma", location: "Indore", text: "Got the lowest interest rate for home loan. Shailendra Sir is very knowledgeable!" },
    { name: "Deepika Patel", location: "Vijay Nagar", text: "Fast approval and best rates! Highly recommend SM Finance for all loan needs!" },
    { name: "Arjun Mehta", location: "Indore", text: "Professional service from start to finish. Got property loan at amazing rates!" },
    { name: "Sonia Kapoor", location: "Scheme 78", text: "Transparent process and no hidden charges. Very happy with the service!" },
    { name: "Rohit Gupta", location: "Indore", text: "Balance transfer helped me save ₹4 lakhs over loan tenure. Excellent advice!" },
    { name: "Madhuri Joshi", location: "Bhanwarkuan", text: "Best home loan consultant in Indore! Quick processing and lowest rates guaranteed!" },
    { name: "Anil Kumar", location: "Indore", text: "20+ years experience clearly visible in the service quality. Very satisfied!" },
    { name: "Ritu Singh", location: "Vijay Nagar", text: "Got mortgage loan within 3 days at lowest interest rate. Thank you SM Finance!" },
    { name: "Suresh Patel", location: "Indore", text: "Professional guidance and best loan options. Saved lakhs on interest!" },
    { name: "Meera Sharma", location: "Palasia", text: "Excellent service! Balance transfer was smooth and saved me a lot of money!" },
    { name: "Karan Verma", location: "Indore", text: "Best property loan rates in town! Shailendra Sir provided expert guidance!" },
    { name: "Nisha Agarwal", location: "Scheme 78", text: "Quick home loan approval and transparent process. Highly recommend!" },
    { name: "Varun Malhotra", location: "Indore", text: "Got the lowest EMI possible! Very professional and helpful service!" },
    { name: "Swati Jain", location: "Vijay Nagar", text: "Mortgage loan at best rates! Shailendra Sir is truly an expert in his field!" },
    { name: "Ashish Desai", location: "Indore", text: "Saved ₹6 lakhs with balance transfer. Excellent service from SM Finance!" },
    { name: "Preeti Kapoor", location: "Bhanwarkuan", text: "Fast processing and lowest rates! Got home loan without any hassle!" },
    { name: "Gaurav Singh", location: "Indore", text: "Professional and trustworthy! Property loan approved quickly at best rates!" },
    { name: "Divya Patel", location: "Palasia", text: "Amazing experience! Lowest interest rate and transparent process throughout!" },
    { name: "Mohit Sharma", location: "Indore", text: "Best loan consultant! Helped me save lakhs with smart balance transfer!" },
    { name: "Shweta Gupta", location: "Vijay Nagar", text: "Quick home loan approval and excellent rates! Highly satisfied with the service!" }
];

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 2000);
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLanguageToggle();
    initAOS();
    initCounters();
    initTestimonialsSlider();
    initContactForm();
    initSmoothScroll();
    initScrollProgress();
    
    console.log('🏦 SM Finance - Ultra Premium Website Loaded!');
    console.log('📞 Contact: +91 97549 34499');
    console.log('💼 Lowest Interest Rates Guaranteed!');
});

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'visible';
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    });
    
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ==================== LANGUAGE TOGGLE ====================
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateLanguage(lang);
                localStorage.setItem('preferredLanguage', lang);
            }
        });
    });
    
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== 'en') {
        const langBtn = document.querySelector(`[data-lang="${savedLang}"]`);
        if (langBtn) langBtn.click();
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-hi]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200);
        }
    });
}

// ==================== AOS ANIMATION ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
            mirror: false
        });
    }
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 10);
        } else {
            if (target > 100) {
                counter.innerText = target;
            } else {
                counter.innerText = target + '+';
            }
        }
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                counter.innerText = '0';
                countUp(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        if (counter.getAttribute('data-target')) {
            observer.observe(counter);
        }
    });
}

// ==================== ENDLESS TESTIMONIALS SLIDER (30 REVIEWS) ====================
function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    
    // Create testimonial cards
    let html = '';
    testimonials.forEach(testimonial => {
        html += `
            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>${testimonial.text}</p>
                <h4>${testimonial.name}</h4>
                <span>${testimonial.location}</span>
            </div>
        `;
    });
    
    // Duplicate for endless effect
    track.innerHTML = html + html;
    
    console.log('✅ 30 testimonials loaded and sliding endlessly!');
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const loanType = document.getElementById('loanType').value;
            const message = document.getElementById('message').value.trim();
            
            if (phone.length < 10) {
                showNotification('कृपया 10 अंकों का फ़ोन नंबर दर्ज करें / Please enter valid 10-digit phone number', 'error');
                return;
            }
            
            const whatsappMessage = createWhatsAppMessage(name, phone, loanType, message);
            const whatsappURL = `https://api.whatsapp.com/send?phone=919754934499&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            showNotification('✅ पूछताछ भेजी गई! / Inquiry sent! We\'ll contact you within 30 minutes.', 'success');
            contactForm.reset();
            trackEvent('form_submission', { loan_type: loanType });
        });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
        
        phoneInput.addEventListener('blur', function() {
            if (this.value.length === 10) {
                this.style.borderColor = '#10B981';
            } else if (this.value.length > 0) {
                this.style.borderColor = '#EF4444';
            }
        });
    }
}

function createWhatsAppMessage(name, phone, loanType, message) {
    let msg = `*🏦 नया लोन पूछताछ / New Loan Inquiry - SM Finance*\n\n`;
    msg += `*नाम / Name:* ${name}\n`;
    msg += `*फोन / Phone:* ${phone}\n`;
    msg += `*लोन प्रकार / Loan Type:* ${loanType}\n`;
    if (message) {
        msg += `*संदेश / Message:* ${message}\n`;
    }
    msg += `\n_SM Finance Website से भेजा गया / Sent from SM Finance Website_`;
    msg += `\n_📉 न्यूनतम ब्याज दर की गारंटी / Lowest Interest Rate Guaranteed_`;
    return msg;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    const colors = {
        success: 'linear-gradient(135deg, #10B981, #059669)',
        error: 'linear-gradient(135deg, #EF4444, #DC2626)',
        info: 'linear-gradient(135deg, #3B82F6, #2563EB)'
    };
    
    notification.innerHTML = `
        <span style="font-size: 1.8rem;">${icons[type]}</span>
        <p>${message}</p>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${colors[type]};
        color: white;
        padding: 25px 40px;
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 20px;
        animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), slideOutRight 0.5s ease 3s;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        min-width: 380px;
        max-width: 500px;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(500px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(500px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3500);
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==================== SCROLL PROGRESS BAR ====================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.width = '0';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ==================== WHATSAPP CLICK TRACKING ====================
function trackWhatsAppClick(source) {
    console.log(`📱 WhatsApp clicked from: ${source}`);
    trackEvent('whatsapp_click', { source: source });
}

document.addEventListener('DOMContentLoaded', () => {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const source = this.classList.contains('floating-whatsapp') ? 'Floating Button' : 
                          this.classList.contains('btn-whatsapp-nav') ? 'Navigation' : 
                          this.classList.contains('btn-service') ? 'Service Card' : 
                          this.classList.contains('btn-primary') ? 'Hero Section' :
                          'Contact Form';
            trackWhatsAppClick(source);
        });
    });
});

// ==================== PAGE VISIBILITY API ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '💰 कम ब्याज दर चाहिए? / Need Lowest Rate? - SM Finance';
    } else {
        document.title = 'SM Finance | Get Loan at Lowest Interest Rates in Indore | Expert Loan Consultant';
    }
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;
    const isInput = activeElement.matches('input, textarea, select');
    
    if (!isInput) {
        if (e.key === 'w' || e.key === 'W') {
            window.open('https://wa.me/919754934499?text=Hi%2C%20I%20want%20loan%20at%20lowest%20interest%20rate', '_blank');
        }
        if (e.key === 'h' || e.key === 'H') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (e.key === 'l' || e.key === 'L') {
            const currentBtn = document.querySelector('.lang-btn.active');
            const nextLang = currentBtn.getAttribute('data-lang') === 'en' ? 'hi' : 'en';
            document.querySelector(`[data-lang="${nextLang}"]`).click();
        }
    }
});

// ==================== ANALYTICS TRACKING ====================
function trackEvent(eventName, eventData) {
    console.log('📊 Event:', eventName, eventData);
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// ==================== MOBILE TOUCH OPTIMIZATIONS ====================
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-service, .btn-whatsapp-nav, .btn-submit, .btn-whatsapp-form');
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        }, {passive: false});
    });
}

// ==================== CONSOLE BRANDING ====================
console.log('%c🏦 SM FINANCE', 'color: #1E40AF; font-size: 48px; font-weight: 900; font-family: Poppins;');
console.log('%c💰 Lowest Interest Rates Guaranteed', 'color: #F59E0B; font-size: 18px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #1E40AF;');
console.log('%c📞 Contact: +91 97549 34499', 'color: #10B981; font-size: 15px; font-weight: bold;');
console.log('%c👨‍💼 Expert: Shailendra Malviya', 'color: #1E40AF; font-size: 13px; font-weight: bold;');
console.log('%c🏠 Services: Home | Mortgage | Balance Transfer | Property', 'color: #1E40AF; font-size: 12px; font-weight: bold;');
console.log('%c🌐 Languages: English & हिंदी Support', 'color: #F59E0B; font-size: 12px; font-weight: bold;');
console.log('%c💻 Website by: The Unlock Sales (+91 8629933125)', 'color: #10B981; font-size: 11px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #1E40AF;');

// ==================== END OF SCRIPT ====================
console.log('✅ All JavaScript initialized successfully!');
console.log('🏦 SM Finance - Ultra Premium with 30 Testimonials!');
console.log('📞 Call/WhatsApp: +91 97549 34499');
console.log('🌐 Bilingual: English & हिंदी');
console.log('💰 Mission: Lowest Interest Rates for Everyone!');
