// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => 
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        })
    );
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formation details modal
const formationDetails = {
    telecom: {
        title: "Réseaux et Télécommunications",
        duration: "6 mois",
        level: "Débutant à Avancé",
        description: "Une formation complète pour devenir expert en réseaux et télécommunications. Vous apprendrez les fondamentaux des réseaux informatiques, la configuration d'équipements, et la maintenance des infrastructures de télécommunications.",
        program: [
            "Introduction aux réseaux informatiques",
            "Protocoles TCP/IP et OSI",
            "Configuration de routeurs et switches",
            "Technologies sans fil (WiFi, 4G, 5G)",
            "Sécurité des réseaux",
            "Installation d'équipements télécoms",
            "Maintenance et dépannage",
            "Projet final pratique"
        ],
        prerequisites: "Aucun prérequis - Formation accessible à tous",
        certification: "Certificat RTIM",
        career: "Technicien réseau, Administrateur système, Ingénieur télécom",
        price: "150 000 FCFA"
    },
    admin: {
        title: "Administration Système",
        duration: "4 mois",
        level: "Intermédiaire",
        description: "Maîtrisez l'administration des systèmes Linux et Windows en environnement professionnel. Formation pratique avec des laboratoires équipés.",
        program: [
            "Administration Linux (Ubuntu, CentOS)",
            "Administration Windows Server",
            "Gestion des utilisateurs et permissions",
            "Scripts d'automatisation",
            "Sauvegarde et récupération",
            "Monitoring système",
            "Virtualisation (VMware, VirtualBox)",
            "Projet d'infrastructure"
        ],
        prerequisites: "Connaissances de base en informatique",
        certification: "Certificat RTIM",
        career: "Administrateur système, Ingénieur DevOps, Support technique",
        price: "120 000 FCFA"
    },
    cyber: {
        title: "Cybersécurité",
        duration: "5 mois",
        level: "Avancé",
        description: "Protégez les systèmes d'information contre les cybermenaces. Formation axée sur la pratique avec des scénarios réels d'attaques et de défense.",
        program: [
            "Fondamentaux de la sécurité informatique",
            "Tests d'intrusion (Penetration Testing)",
            "Sécurisation des réseaux",
            "Cryptographie appliquée",
            "Analyse de malwares",
            "Incident Response",
            "Audit de sécurité",
            "Éthique et réglementation"
        ],
        prerequisites: "Bonnes connaissances en réseaux et systèmes",
        certification: "Certificat RTIM",
        career: "Analyste sécurité, Consultant cybersécurité, RSSI",
        price: "200 000 FCFA"
    },
    fibre: {
        title: "Fibre Optique",
        duration: "3 mois",
        level: "Débutant",
        description: "Apprenez les techniques d'installation, de raccordement et de maintenance des réseaux en fibre optique. Formation très pratique avec équipements professionnels.",
        program: [
            "Principes de la fibre optique",
            "Types de fibres et câbles",
            "Techniques de tirage de câbles",
            "Épissurage et connectique",
            "Mesures et tests",
            "Maintenance préventive",
            "Sécurité sur chantier",
            "Cas pratiques terrain"
        ],
        prerequisites: "Aucun prérequis - Formation de base",
        certification: "Certificat RTIM + Habilitation travail en hauteur",
        career: "Technicien fibre optique, Installateur réseau, Chef d'équipe",
        price: "80 000 FCFA"
    },
    cloud: {
        title: "Cloud Computing",
        duration: "4 mois",
        level: "Intermédiaire",
        description: "Maîtrisez le déploiement et la gestion d'infrastructures cloud sur AWS, Azure et Google Cloud Platform.",
        program: [
            "Introduction au Cloud Computing",
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform",
            "Containerisation (Docker, Kubernetes)",
            "Infrastructure as Code",
            "Monitoring et logging",
            "Migration vers le cloud"
        ],
        prerequisites: "Connaissances système et réseau",
        certification: "Certificat RTIM",
        career: "Architecte cloud, DevOps Engineer, Cloud Consultant",
        price: "180 000 FCFA"
    },
    mobile: {
        title: "Maintenance Mobile",
        duration: "2 mois",
        level: "Débutant",
        description: "Apprenez la réparation et maintenance des équipements de télécommunication mobile (smartphones, tablettes, stations de base).",
        program: [
            "Électronique appliquée aux mobiles",
            "Diagnostic de pannes",
            "Réparation hardware",
            "Installation de logiciels",
            "Maintenance stations de base",
            "Antennes et propagation",
            "Outils de mesure",
            "Ateliers pratiques"
        ],
        prerequisites: "Notions d'électronique souhaitées",
        certification: "Certificat RTIM de technicien mobile",
        career: "Technicien mobile, Réparateur, Technicien maintenance",
        price: "60 000 FCFA"
    }
};

function showFormationDetails(formationType) {
    const modal = document.getElementById('formationModal');
    const modalContent = document.getElementById('modalContent');
    const formation = formationDetails[formationType];

    modalContent.innerHTML = `
        <h2>${formation.title}</h2>
        <div class="formation-meta">
            <span class="badge duration">📅 ${formation.duration}</span>
            <span class="badge level">📈 ${formation.level}</span>
            <span class="badge price">💰 ${formation.price}</span>
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${formation.description}</p>
        </div>

        <div class="modal-section">
            <h3>Programme de formation</h3>
            <ul class="program-list">
                ${formation.program.map(item => `<li>✓ ${item}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Prérequis</h3>
            <p>${formation.prerequisites}</p>
        </div>

        <div class="modal-section">
            <h3>Certification</h3>
            <p>${formation.certification}</p>
        </div>

        <div class="modal-section">
            <h3>Débouchés</h3>
            <p>${formation.career}</p>
        </div>

        <div class="modal-actions">
            <button class="btn btn-primary" onclick="scrollToRegistration()">S'inscrire maintenant</button>
            <button class="btn btn-outline" onclick="closeModal()">Fermer</button>
        </div>
    `;

    // Add CSS for modal content if not already added
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .formation-meta {
                display: flex;
                gap: 1rem;
                margin: 1rem 0 2rem 0;
                flex-wrap: wrap;
            }
            .badge {
                background: #f3f4f6;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
            }
            .modal-section {
                margin-bottom: 2rem;
            }
            .modal-section h3 {
                color: #1f2937;
                margin-bottom: 1rem;
                font-size: 1.3rem;
            }
            .program-list {
                list-style: none;
                padding: 0;
            }
            .program-list li {
                padding: 0.5rem 0;
                color: #374151;
            }
            .modal-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
            }
        `;
        document.head.appendChild(style);
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('formationModal').style.display = 'none';
}

function scrollToRegistration() {
    closeModal();
    document.getElementById('inscription').scrollIntoView({
        behavior: 'smooth'
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('formationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Close modal with close button
document.querySelector('.close').addEventListener('click', closeModal);

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Add timestamp and unique ID
    data.id = generateUniqueId();
    data.dateInscription = new Date().toISOString();
    data.statut = 'En attente';
    
    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Save to localStorage and show success
    setTimeout(() => {
        // Save candidate data
        saveCandidateData(data);
        
        // Show success modal
        showSuccessModal(data);
        
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }, 2000);
});

// Generate unique ID for candidates
function generateUniqueId() {
    return 'ARTEM-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// Save candidate data to localStorage
function saveCandidateData(candidateData) {
    try {
        // Get existing candidates
        let candidates = JSON.parse(localStorage.getItem('artemCandidates') || '[]');
        
        // Add new candidate
        candidates.push(candidateData);
        
        // Save back to localStorage
        localStorage.setItem('artemCandidates', JSON.stringify(candidates));
        
        // Update statistics
        updateRegistrationStats();
        
        console.log('Candidat enregistré:', candidateData);
        return true;
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
        return false;
    }
}

// Show success modal
function showSuccessModal(data) {
    const modal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');
    const successDetails = document.getElementById('successDetails');
    
    successMessage.textContent = `Merci ${data.prenom} ${data.nom}! Votre candidature a été enregistrée avec succès.`;
    
    successDetails.innerHTML = `
        <h4>Détails de votre inscription:</h4>
        <p><strong>Numéro de candidature:</strong> ${data.id}</p>
        <p><strong>Formation:</strong> ${getFormationName(data.formation)}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.telephone}</p>
        <p><strong>Date d'inscription:</strong> ${new Date(data.dateInscription).toLocaleDateString('fr-FR')}</p>
        <p><strong>Statut:</strong> ${data.statut}</p>
        <hr style="margin: 1rem 0;">
        <p style="font-size: 0.9rem; color: #6b7280;">
            Nous vous contacterons sous 48h pour confirmer votre inscription et vous communiquer les détails de la formation.
        </p>
    `;
    
    modal.style.display = 'block';
}

// Close success modal
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Update registration statistics
function updateRegistrationStats() {
    try {
        const candidates = JSON.parse(localStorage.getItem('artemCandidates') || '[]');
        const stats = {
            total: candidates.length,
            parFormation: {},
            parMois: {},
            derniereMiseAJour: new Date().toISOString()
        };
        
        candidates.forEach(candidate => {
            // Stats par formation
            const formation = candidate.formation;
            stats.parFormation[formation] = (stats.parFormation[formation] || 0) + 1;
            
            // Stats par mois
            const mois = new Date(candidate.dateInscription).toISOString().substr(0, 7);
            stats.parMois[mois] = (stats.parMois[mois] || 0) + 1;
        });
        
        localStorage.setItem('artemStats', JSON.stringify(stats));
        console.log('Statistiques mises à jour:', stats);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des statistiques:', error);
    }
}

// Get all candidates (for admin purposes)
function getAllCandidates() {
    try {
        return JSON.parse(localStorage.getItem('artemCandidates') || '[]');
    } catch (error) {
        console.error('Erreur lors de la récupération des candidats:', error);
        return [];
    }
}

// Get registration statistics
function getRegistrationStats() {
    try {
        return JSON.parse(localStorage.getItem('artemStats') || '{}');
    } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
        return {};
    }
}

// Export candidates data (for admin)
function exportCandidatesData() {
    try {
        const candidates = getAllCandidates();
        const stats = getRegistrationStats();
        
        const exportData = {
            candidates: candidates,
            statistics: stats,
            exportDate: new Date().toISOString(),
            totalCandidates: candidates.length
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `artem-candidats-${new Date().toISOString().substr(0, 10)}.json`;
        link.click();
        
        console.log('Données exportées:', exportData);
    } catch (error) {
        console.error('Erreur lors de l\'export:', error);
    }
}

// Search candidates by criteria
function searchCandidates(criteria) {
    const candidates = getAllCandidates();
    
    return candidates.filter(candidate => {
        if (criteria.formation && candidate.formation !== criteria.formation) return false;
        if (criteria.nom && !candidate.nom.toLowerCase().includes(criteria.nom.toLowerCase())) return false;
        if (criteria.email && !candidate.email.toLowerCase().includes(criteria.email.toLowerCase())) return false;
        if (criteria.dateDebut && new Date(candidate.dateInscription) < new Date(criteria.dateDebut)) return false;
        if (criteria.dateFin && new Date(candidate.dateInscription) > new Date(criteria.dateFin)) return false;
        return true;
    });
}

function getFormationName(formationCode) {
    const formations = {
        'telecom': 'Réseaux et Télécommunications',
        'admin': 'Administration Système',
        'cyber': 'Cybersécurité',
        'fibre': 'Fibre Optique',
        'cloud': 'Cloud Computing',
        'mobile': 'Maintenance Mobile'
    };
    return formations[formationCode] || formationCode;
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.formation-card, .stat-item, .value-item, .contact-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Auto-fill formation field when coming from formation card
const urlParams = new URLSearchParams(window.location.search);
const selectedFormation = urlParams.get('formation');
if (selectedFormation) {
    const formationSelect = document.getElementById('formation');
    if (formationSelect) {
        formationSelect.value = selectedFormation;
    }
}

// Form validation enhancements
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', validateField);
    field.addEventListener('input', clearErrors);
});

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer une adresse email valide');
            return false;
        }
    }
    
    // Phone validation (simple Mali phone format)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^(\+223|223)?[67]\d{7}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            showFieldError(field, 'Veuillez entrer un numéro de téléphone malien valide');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearErrors(e) {
    const field = e.target;
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Add error styles
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(errorStyles);

console.log('RTIM Website loaded successfully!');
console.log('Contact: info@rtim.org');
console.log('GitHub:');

// Initialize registration system
document.addEventListener('DOMContentLoaded', function() {
    // Initialize stats if not exists
    if (!localStorage.getItem('artemStats')) {
        updateRegistrationStats();
    }
    
    // Log current statistics for admin
    const stats = getRegistrationStats();
    console.log('📊 Statistiques actuelles:', stats);
    
    // Admin functions available in console
    window.artemAdmin = {
        getAllCandidates: getAllCandidates,
        getStats: getRegistrationStats,
        exportData: exportCandidatesData,
        searchCandidates: searchCandidates,
        clearData: function() {
            if (confirm('Êtes-vous sûr de vouloir supprimer toutes les données ?')) {
                localStorage.removeItem('artemCandidates');
                localStorage.removeItem('artemStats');
                console.log('Données supprimées');
            }
        }
    };
    
    console.log('🔧 Fonctions admin disponibles: artemAdmin.getAllCandidates(), artemAdmin.getStats(), artemAdmin.exportData(), artemAdmin.searchCandidates(criteria), artemAdmin.clearData()');
});
//defilement image
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Fonction pour afficher une slide
function showSlide(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Boutons navigation
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Auto-défilement toutes les 5s
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);
// animation compteurs
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = Math.ceil(target / 150);

            if (current < target) {
                counter.innerText = current + increment > target ? target : current + increment;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
});