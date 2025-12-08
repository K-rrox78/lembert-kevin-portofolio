// Collection d'illustrations SVG pour la cybersécurité et l'administration système
const cyberIllustrations = {
    // Illustrations pour la cybersécurité
    securityShield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3498db" />
                <stop offset="100%" stop-color="#2980b9" />
            </linearGradient>
            <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2ecc71" />
                <stop offset="100%" stop-color="#27ae60" />
            </linearGradient>
        </defs>
        <path d="M100,10 L30,50 L30,110 C30,150 100,180 100,180 C100,180 170,150 170,110 L170,50 L100,10 Z" fill="url(#shield-gradient)" stroke="#2c3e50" stroke-width="4"/>
        <rect x="70" y="80" width="60" height="50" rx="5" fill="url(#lock-gradient)" stroke="#2c3e50" stroke-width="3"/>
        <circle cx="100" cy="100" r="10" fill="#ecf0f1"/>
        <rect x="95" y="100" width="10" height="20" fill="#ecf0f1"/>
    </svg>`,
    
    networkSecurity: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3498db" />
                <stop offset="100%" stop-color="#2980b9" />
            </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="#34495e" stroke="#2c3e50" stroke-width="3"/>
        <circle cx="100" cy="100" r="70" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="10,5"/>
        <circle cx="70" cy="80" r="15" fill="url(#network-gradient)" stroke="#2c3e50" stroke-width="2"/>
        <circle cx="130" cy="60" r="15" fill="url(#network-gradient)" stroke="#2c3e50" stroke-width="2"/>
        <circle cx="140" cy="120" r="15" fill="url(#network-gradient)" stroke="#2c3e50" stroke-width="2"/>
        <circle cx="80" cy="140" r="15" fill="url(#network-gradient)" stroke="#2c3e50" stroke-width="2"/>
        <line x1="70" y1="80" x2="130" y2="60" stroke="#2ecc71" stroke-width="3"/>
        <line x1="130" y1="60" x2="140" y2="120" stroke="#2ecc71" stroke-width="3"/>
        <line x1="140" y1="120" x2="80" y2="140" stroke="#2ecc71" stroke-width="3"/>
        <line x1="80" y1="140" x2="70" y2="80" stroke="#2ecc71" stroke-width="3"/>
        <line x1="70" y1="80" x2="140" y2="120" stroke="#2ecc71" stroke-width="3" stroke-dasharray="5,3"/>
        <line x1="130" y1="60" x2="80" y2="140" stroke="#2ecc71" stroke-width="3" stroke-dasharray="5,3"/>
    </svg>`,

    cyberAttack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="server-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3498db" />
                <stop offset="100%" stop-color="#2980b9" />
            </linearGradient>
            <linearGradient id="attack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e74c3c" />
                <stop offset="100%" stop-color="#c0392b" />
            </linearGradient>
        </defs>
        <rect x="60" y="40" width="80" height="120" rx="5" fill="url(#server-gradient)" stroke="#2c3e50" stroke-width="3"/>
        <rect x="70" y="50" width="60" height="10" rx="2" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="1"/>
        <rect x="70" y="70" width="60" height="10" rx="2" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="1"/>
        <rect x="70" y="90" width="60" height="10" rx="2" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="1"/>
        <rect x="70" y="110" width="60" height="10" rx="2" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="1"/>
        <rect x="70" y="130" width="60" height="10" rx="2" fill="#ecf0f1" stroke="#7f8c8d" stroke-width="1"/>
        <path d="M30,20 L170,180" stroke="url(#attack-gradient)" stroke-width="8" stroke-linecap="round" stroke-dasharray="1,10"/>
        <path d="M170,20 L30,180" stroke="url(#attack-gradient)" stroke-width="8" stroke-linecap="round" stroke-dasharray="1,10"/>
    </svg>`,

    // Illustrations pour l'administration système
    serverRack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="rack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2c3e50" />
                <stop offset="100%" stop-color="#1a252f" />
            </linearGradient>
            <linearGradient id="server-unit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#34495e" />
                <stop offset="100%" stop-color="#2c3e50" />
            </linearGradient>
        </defs>
        <rect x="40" y="20" width="120" height="160" rx="5" fill="url(#rack-gradient)" stroke="#2c3e50" stroke-width="3"/>
        <rect x="50" y="30" width="100" height="20" rx="2" fill="url(#server-unit-gradient)" stroke="#1a252f" stroke-width="1"/>
        <rect x="50" y="60" width="100" height="20" rx="2" fill="url(#server-unit-gradient)" stroke="#1a252f" stroke-width="1"/>
        <rect x="50" y="90" width="100" height="20" rx="2" fill="url(#server-unit-gradient)" stroke="#1a252f" stroke-width="1"/>
        <rect x="50" y="120" width="100" height="20" rx="2" fill="url(#server-unit-gradient)" stroke="#1a252f" stroke-width="1"/>
        <rect x="50" y="150" width="100" height="20" rx="2" fill="url(#server-unit-gradient)" stroke="#1a252f" stroke-width="1"/>
        
        <!-- LED et détails -->
        <circle cx="60" cy="40" r="3" fill="#2ecc71"/>
        <circle cx="70" cy="40" r="3" fill="#e74c3c"/>
        <circle cx="80" cy="40" r="3" fill="#f1c40f"/>
        <circle cx="60" cy="70" r="3" fill="#2ecc71"/>
        <circle cx="70" cy="70" r="3" fill="#2ecc71"/>
        <circle cx="80" cy="70" r="3" fill="#2ecc71"/>
        <circle cx="60" cy="100" r="3" fill="#e74c3c"/>
        <circle cx="70" cy="100" r="3" fill="#2ecc71"/>
        <circle cx="80" cy="100" r="3" fill="#2ecc71"/>
        <circle cx="60" cy="130" r="3" fill="#2ecc71"/>
        <circle cx="70" cy="130" r="3" fill="#f1c40f"/>
        <circle cx="80" cy="130" r="3" fill="#2ecc71"/>
        <circle cx="60" cy="160" r="3" fill="#2ecc71"/>
        <circle cx="70" cy="160" r="3" fill="#2ecc71"/>
        <circle cx="80" cy="160" r="3" fill="#2ecc71"/>
    </svg>`,
    
    cloudSystem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3498db" />
                <stop offset="100%" stop-color="#2980b9" />
            </linearGradient>
        </defs>
        <circle cx="100" cy="80" r="50" fill="url(#cloud-gradient)" stroke="#2c3e50" stroke-width="3"/>
        <circle cx="70" cy="60" r="25" fill="#ecf0f1" opacity="0.8"/>
        <circle cx="120" cy="70" r="30" fill="#ecf0f1" opacity="0.8"/>
        <circle cx="90" cy="40" r="20" fill="#ecf0f1" opacity="0.8"/>
        
        <!-- Serveurs dans le cloud -->
        <rect x="70" y="75" width="15" height="25" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
        <rect x="95" y="70" width="15" height="30" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
        <rect x="120" y="80" width="15" height="20" fill="#34495e" stroke="#2c3e50" stroke-width="1"/>
        
        <!-- Connexions aux dispositifs -->
        <line x1="100" y1="130" x2="60" y2="170" stroke="#2c3e50" stroke-width="2" stroke-dasharray="4,2"/>
        <line x1="100" y1="130" x2="100" y2="170" stroke="#2c3e50" stroke-width="2" stroke-dasharray="4,2"/>
        <line x1="100" y1="130" x2="140" y2="170" stroke="#2c3e50" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- Dispositifs connectés -->
        <rect x="50" y="170" width="20" height="15" fill="#2ecc71" stroke="#27ae60" stroke-width="1"/>
        <rect x="90" y="170" width="20" height="15" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
        <rect x="130" y="170" width="20" height="15" fill="#e74c3c" stroke="#c0392b" stroke-width="1"/>
    </svg>`,
    
    terminalCode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="cyber-illustration">
        <defs>
            <linearGradient id="terminal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2c3e50" />
                <stop offset="100%" stop-color="#1a252f" />
            </linearGradient>
        </defs>
        <rect x="20" y="40" width="160" height="120" rx="5" fill="url(#terminal-gradient)" stroke="#1a252f" stroke-width="3"/>
        <rect x="20" y="40" width="160" height="20" rx="5" fill="#34495e" stroke="#1a252f" stroke-width="2"/>
        <circle cx="35" cy="50" r="5" fill="#e74c3c"/>
        <circle cx="50" cy="50" r="5" fill="#f1c40f"/>
        <circle cx="65" cy="50" r="5" fill="#2ecc71"/>
        
        <!-- Code -->
        <text x="35" y="80" font-family="monospace" font-size="10" fill="#2ecc71">$ sudo systemctl start nginx</text>
        <text x="35" y="95" font-family="monospace" font-size="10" fill="#3498db">$ docker-compose up -d</text>
        <text x="35" y="110" font-family="monospace" font-size="10" fill="#ecf0f1">$ ssh admin@server.local</text>
        <text x="35" y="125" font-family="monospace" font-size="10" fill="#e74c3c">$ nmap -sV 192.168.1.0/24</text>
        <text x="35" y="140" font-family="monospace" font-size="10" fill="#f1c40f">$ tail -f /var/log/auth.log</text>
    </svg>`
};

// Fonction pour insérer une illustration dans un élément
function insertIllustration(elementId, illustrationKey) {
    const element = document.getElementById(elementId);
    if (element && cyberIllustrations[illustrationKey]) {
        element.innerHTML = cyberIllustrations[illustrationKey];
    }
}

// Initialisation des illustrations au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Illustrations pour la section cybersécurité
    insertIllustration('cyber-shield', 'securityShield');
    insertIllustration('cyber-network', 'networkSecurity');
    insertIllustration('cyber-attack', 'cyberAttack');
    
    // Illustrations pour la section administration système
    insertIllustration('sys-server', 'serverRack');
    insertIllustration('sys-cloud', 'cloudSystem');
    insertIllustration('sys-terminal', 'terminalCode');
});
