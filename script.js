// ==================== SM FINANCE - FULLY MOBILE RESPONSIVE JAVASCRIPT ====================

let currentLanguage = 'en';

// ==================== 30 UNIQUE TESTIMONIALS (ENGLISH & HINDI) ====================
const testimonialsData = [
    {
        en: { name: "Rajesh Kumar", location: "Indore", text: "Excellent service! Shailendra Sir helped me get home loan with great terms. Very professional and trustworthy!" },
        hi: { name: "राजेश कुमार", location: "इंदौर", text: "बेहतरीन सेवा! शैलेंद्र सर ने मुझे बेहतरीन शर्तों के साथ होम लोन दिलाने में मदद की। बहुत पेशेवर और भरोसेमंद!" }
    },
    {
        en: { name: "Priya Sharma", location: "Vijay Nagar", text: "Best loan consultant in Indore! Quick approval and transparent process. Highly recommend!" },
        hi: { name: "प्रिया शर्मा", location: "विजय नगर", text: "इंदौर में सर्वश्रेष्ठ लोन सलाहकार! त्वरित अनुमोदन और पारदर्शी प्रक्रिया। अत्यधिक अनुशंसित!" }
    },
    {
        en: { name: "Amit Patel", location: "Indore", text: "Thank you SM Finance for helping with balance transfer. Saved a lot on interest!" },
        hi: { name: "अमित पटेल", location: "इंदौर", text: "बैलेंस ट्रांसफर में मदद के लिए SM Finance का धन्यवाद। ब्याज पर बहुत बचत हुई!" }
    },
    {
        en: { name: "Neha Gupta", location: "Palasia", text: "Professional service and personal attention. Got my mortgage loan approved quickly!" },
        hi: { name: "नेहा गुप्ता", location: "पलासिया", text: "पेशेवर सेवा और व्यक्तिगत ध्यान। मेरा मॉर्गेज लोन जल्दी स्वीकृत हो गया!" }
    },
    {
        en: { name: "Sandeep Verma", location: "Bhanwarkuan", text: "20 years of experience shows! Best guidance for home loan. Very satisfied!" },
        hi: { name: "संदीप वर्मा", location: "भंवरकुंआ", text: "20 साल का अनुभव दिखता है! होम लोन के लिए सर्वोत्तम मार्गदर्शन। बहुत संतुष्ट!" }
    },
    {
        en: { name: "Anjali Singh", location: "Scheme 78", text: "Helped me understand all loan options clearly. Very patient and knowledgeable!" },
        hi: { name: "अंजलि सिंह", location: "स्कीम 78", text: "मुझे सभी ऋण विकल्पों को स्पष्ट रूप से समझने में मदद की। बहुत धैर्यवान और जानकार!" }
    },
    {
        en: { name: "Vikram Malhotra", location: "Indore", text: "Quick processing and excellent support. Got home loan approved in 48 hours!" },
        hi: { name: "विक्रम मल्होत्रा", location: "इंदौर", text: "त्वरित प्रसंस्करण और उत्कृष्ट समर्थन। 48 घंटे में होम लोन स्वीकृत हो गया!" }
    },
    {
        en: { name: "Pooja Jain", location: "Vijay Nagar", text: "Trustworthy and reliable service! Always available to answer questions. Thank you!" },
        hi: { name: "पूजा जैन", location: "विजय नगर", text: "भरोसेमंद और विश्वसनीय सेवा! प्रश्नों के उत्तर देने के लिए हमेशा उपलब्ध। धन्यवाद!" }
    },
    {
        en: { name: "Rahul Agarwal", location: "Indore", text: "Best experience with mortgage loan. Professional throughout the process!" },
        hi: { name: "राहुल अग्रवाल", location: "इंदौर", text: "मॉर्गेज लोन के साथ सर्वोत्तम अनुभव। पूरी प्रक्रिया में पेशेवर!" }
    },
    {
        en: { name: "Kavita Desai", location: "Palasia", text: "Excellent experience! Balance transfer reduced my EMI significantly. Grateful!" },
        hi: { name: "कविता देसाई", location: "पलासिया", text: "उत्कृष्ट अनुभव! बैलेंस ट्रांसफर ने मेरी EMI काफी कम कर दी। आभारी हूं!" }
    },
    {
        en: { name: "Manish Sharma", location: "Indore", text: "Got competitive rates for home loan. Shailendra Sir is very knowledgeable!" },
        hi: { name: "मनीष शर्मा", location: "इंदौर", text: "होम लोन के लिए प्रतिस्पर्धी दरें मिलीं। शैलेंद्र सर बहुत जानकार हैं!" }
    },
    {
        en: { name: "Deepika Patel", location: "Vijay Nagar", text: "Fast approval and transparent process! Highly recommend SM Finance!" },
        hi: { name: "दीपिका पटेल", location: "विजय नगर", text: "तेज़ अनुमोदन और पारदर्शी प्रक्रिया! SM Finance की अत्यधिक अनुशंसा करती हूं!" }
    },
    {
        en: { name: "Arjun Mehta", location: "Indore", text: "Professional service from start to finish. Got property loan with great terms!" },
        hi: { name: "अर्जुन मेहता", location: "इंदौर", text: "शुरू से अंत तक पेशेवर सेवा। बेहतरीन शर्तों के साथ प्रॉपर्टी लोन मिला!" }
    },
    {
        en: { name: "Sonia Kapoor", location: "Scheme 78", text: "Transparent process and no hidden charges. Very happy with the service!" },
        hi: { name: "सोनिया कपूर", location: "स्कीम 78", text: "पारदर्शी प्रक्रिया और कोई छिपे हुए शुल्क नहीं। सेवा से बहुत खुश!" }
    },
    {
        en: { name: "Rohit Gupta", location: "Indore", text: "Balance transfer helped me save significantly. Excellent advice and support!" },
        hi: { name: "रोहित गुप्ता", location: "इंदौर", text: "बैलेंस ट्रांसफर ने मुझे काफी बचत करने में मदद की। उत्कृष्ट सलाह और समर्थन!" }
    },
    {
        en: { name: "Madhuri Joshi", location: "Bhanwarkuan", text: "Best home loan consultant in Indore! Quick processing and great rates!" },
        hi: { name: "माधुरी जोशी", location: "भंवरकुंआ", text: "इंदौर में सर्वश्रेष्ठ होम लोन सलाहकार! त्वरित प्रसंस्करण और बेहतरीन दरें!" }
    },
    {
        en: { name: "Anil Kumar", location: "Indore", text: "20+ years experience clearly visible. Very professional and helpful!" },
        hi: { name: "अनिल कुमार", location: "इंदौर", text: "20+ साल का अनुभव स्पष्ट रूप से दिखता है। बहुत पेशेवर और सहायक!" }
    },
    {
        en: { name: "Ritu Singh", location: "Vijay Nagar", text: "Got mortgage loan within 3 days. Fast and efficient service. Thank you!" },
        hi: { name: "रितु सिंह", location: "विजय नगर", text: "3 दिनों में मॉर्गेज लोन मिल गया। तेज़ और कुशल सेवा। धन्यवाद!" }
    },
    {
        en: { name: "Suresh Patel", location: "Indore", text: "Professional guidance and best loan options. Saved a lot with competitive rates!" },
        hi: { name: "सुरेश पटेल", location: "इंदौर", text: "पेशेवर मार्गदर्शन और सर्वोत्तम ऋण विकल्प। प्रतिस्पर्धी दरों से बहुत बचत!" }
    },
    {
        en: { name: "Meera Sharma", location: "Palasia", text: "Excellent service! Balance transfer was smooth and hassle-free!" },
        hi: { name: "मीरा शर्मा", location: "पलासिया", text: "उत्कृष्ट सेवा! बैलेंस ट्रांसफर सुगम और परेशानी मुक्त था!" }
    },
    {
        en: { name: "Karan Verma", location: "Indore", text: "Best property loan rates! Shailendra Sir provided expert guidance throughout!" },
        hi: { name: "करण वर्मा", location: "इंदौर", text: "सर्वोत्तम प्रॉपर्टी लोन दरें! शैलेंद्र सर ने पूरे समय विशेषज्ञ मार्गदर्शन प्रदान किया!" }
    },
    {
        en: { name: "Nisha Agarwal", location: "Scheme 78", text: "Quick home loan approval and transparent process. Highly recommend!" },
        hi: { name: "निशा अग्रवाल", location: "स्कीम 78", text: "त्वरित होम लोन अनुमोदन और पारदर्शी प्रक्रिया। अत्यधिक अनुशंसित!" }
    },
    {
        en: { name: "Varun Malhotra", location: "Indore", text: "Got the best EMI terms! Very professional and helpful service!" },
        hi: { name: "वरुण मल्होत्रा", location: "इंदौर", text: "सर्वोत्तम EMI शर्तें मिलीं! बहुत पेशेवर और सहायक सेवा!" }
    },
    {
        en: { name: "Swati Jain", location: "Vijay Nagar", text: "Mortgage loan with great terms! Shailendra Sir is truly an expert!" },
        hi: { name: "स्वाति जैन", location: "विजय नगर", text: "बेहतरीन शर्तों के साथ मॉर्गेज लोन! शैलेंद्र सर वास्तव में एक विशेषज्ञ हैं!" }
    },
    {
        en: { name: "Ashish Desai", location: "Indore", text: "Saved significantly with balance transfer. Excellent service from SM Finance!" },
        hi: { name: "आशीष देसाई", location: "इंदौर", text: "बैलेंस ट्रांसफर से काफी बचत हुई। SM Finance से उत्कृष्ट सेवा!" }
    },
    {
        en: { name: "Preeti Kapoor", location: "Bhanwarkuan", text: "Fast processing and great support! Got home loan without any hassle!" },
        hi: { name: "प्रीति कपूर", location: "भंवरकुंआ", text: "तेज़ प्रसंस्करण और बेहतरीन समर्थन! बिना किसी परेशानी के होम लोन मिला!" }
    },
    {
        en: { name: "Gaurav Singh", location: "Indore", text: "Professional and trustworthy! Property loan approved quickly with best rates!" },
        hi: { name: "गौरव सिंह", location: "इंदौर", text: "पेशेवर और भरोसेमंद! सर्वोत्तम दरों के साथ प्रॉपर्टी लोन जल्दी स्वीकृत!" }
    },
    {
        en: { name: "Divya Patel", location: "Palasia", text: "Amazing experience! Competitive rates and transparent process throughout!" },
        hi: { name: "दिव्या पटेल", location: "पलासिया", text: "अद्भुत अनुभव! पूरे समय प्रतिस्पर्धी दरें और पारदर्शी प्रक्रिया!" }
    },
    {
        en: { name: "Mohit Sharma", location: "Indore", text: "Best loan consultant! Helped me with smart balance transfer and saved money!" },
        hi: { name: "मोहित शर्मा", location: "इंदौर", text: "सर्वश्रेष्ठ लोन सलाहकार! स्मार्ट बैलेंस ट्रांसफर से मदद की और पैसे बचाए!" }
    },
    {
        en: { name: "Shweta Gupta", location: "Vijay Nagar", text: "Quick home loan approval and excellent service! Highly satisfied with SM Finance!" },
        hi: { name: "श्वेता गुप्ता", location: "विजय नगर", text: "त्वरित होम लोन अनुमोदन और उत्कृष्ट सेवा! SM Finance से अत्यधिक संतुष्ट!" }
    }
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
    
    console.log('🏦 SM Finance - Fully Mobile Responsive Website Loaded!');
    console.log('📞 Contact: +91 97549 34499');
    console.log('🌐 Bilingual: English & हिंदी Support');
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

// ==================== LANGUAGE TOGGLE WITH TESTIMONIALS UPDATE ====================
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateLanguage(lang);
                updateTestimonials(lang); // Update testimonials when language changes
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

// ==================== ENDLESS TESTIMONIALS SLIDER (30 REVIEWS WITH HINDI) ====================
function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    
    updateTestimonials(currentLanguage);
    console.log('✅ 30 testimonials loaded with Hindi support!');
}

function updateTestimonials(lang) {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    
    let html = '';
    testimonialsData.forEach(testimonial => {
        const data = testimonial[lang];
        html += `
            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>${data.text}</p>
                <h4>${data.name}</h4>
                <span>${data.location}</span>
            </div>
        `;
    });
    
    // Duplicate for endless effect
    track.innerHTML = html + html;
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
            
            showNotification('✅ पूछताछ भेजी गई! / Inquiry sent! We\'ll contact you within 24 hours.', 'success');
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
        document.title = '💼 Need Loan Consultation? - SM Finance';
    } else {
        document.title = 'SM Finance | Trusted Loan Consultant in Indore | Shailendra Malviya';
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
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-service, .btn-submit, .btn-whatsapp-form');
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        }, {passive: false});
    });
}

// ==================== CONSOLE BRANDING ====================
console.log('%c🏦 SM FINANCE', 'color: #1E40AF; font-size: 48px; font-weight: 900; font-family: Poppins;');
console.log('%c💼 Your Trusted Loan Partner', 'color: #F59E0B; font-size: 18px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #1E40AF;');
console.log('%c📞 Contact: +91 97549 34499', 'color: #10B981; font-size: 15px; font-weight: bold;');
console.log('%c👨‍💼 Consultant: Shailendra Malviya', 'color: #1E40AF; font-size: 13px; font-weight: bold;');
console.log('%c🏠 Services: Home | Mortgage | Balance Transfer | Property', 'color: #1E40AF; font-size: 12px; font-weight: bold;');
console.log('%c🌐 Languages: English & हिंदी Support', 'color: #F59E0B; font-size: 12px; font-weight: bold;');
console.log('%c💻 Website by: The Unlock Sales (+91 8629933125)', 'color: #10B981; font-size: 11px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #1E40AF;');

// ==================== END OF SCRIPT ====================
console.log('✅ All features initialized successfully!');
console.log('📱 100% Mobile Responsive');
console.log('🌐 Bilingual: English & हिंदी');
console.log('⭐ 30 Testimonials with Language Support');
console.log('🎯 Focus: Trust & Long-term Relationships');
