const definiciones = [
    {
        id: "def01",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Identificador público y único de una vulnerabilidad conocida[cite: 42].",
        opciones: ["CVSS", "CVE", "Exploit", "Payload"],
        correctas: [1],
        explicacion: "CVE es el identificador público y único de una vulnerabilidad conocida[cite: 42]."
    },
    {
        id: "def02",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Endurecer la configuración para reducir la superficie de ataque[cite: 42].",
        opciones: ["Pentesting", "Pivoting", "Hardening", "Fuzzing"],
        correctas: [2],
        explicacion: "El hardening consiste en endurecer la configuración para reducir la superficie de ataque[cite: 42]."
    },
    {
        id: "def03",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Código que aprovecha una vulnerabilidad para ganar acceso[cite: 42].",
        opciones: ["Payload", "Exploit", "Rootkit", "Malware"],
        correctas: [1],
        explicacion: "El exploit es el código que aprovecha una vulnerabilidad para ganar acceso[cite: 42]."
    },
    {
        id: "def04",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Carga útil que se ejecuta tras explotar (p. ej. una shell)[cite: 42].",
        opciones: ["Payload", "Exploit", "Honeypot", "Backdoor"],
        correctas: [0],
        explicacion: "El payload es la carga útil que se ejecuta tras explotar una vulnerabilidad[cite: 42]."
    },
    {
        id: "def05",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Ataque autorizado para encontrar y reportar vulnerabilidades[cite: 42].",
        opciones: ["Hardening", "Auditoría de código", "Red Teaming", "Pentesting"],
        correctas: [3],
        explicacion: "El pentesting es un ataque autorizado para encontrar y reportar vulnerabilidades[cite: 42]."
    },
    {
        id: "def06",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Matriz de tácticas y técnicas reales de los atacantes[cite: 42].",
        opciones: ["OWASP", "OSSTMM", "MITRE ATT&CK", "Cyber Kill Chain"],
        correctas: [2],
        explicacion: "MITRE ATT&CK es una base de conocimiento de tácticas y técnicas reales de los atacantes[cite: 42]."
    },
    {
        id: "def07",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Expulsa a un cliente para forzar su reconexión en redes Wi-Fi[cite: 43].",
        opciones: ["Jamming", "MAC spoofing", "Deauth", "Evil Twin"],
        correctas: [2],
        explicacion: "El ataque de Deauth (deautenticación) expulsa a un cliente para forzar su reconexión[cite: 43]."
    },
    {
        id: "def08",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Punto de acceso falso que imita a uno legítimo[cite: 43].",
        opciones: ["Honeypot", "Rogue AP", "Evil Twin", "Proxy inverso"],
        correctas: [2],
        explicacion: "Un Evil Twin es un punto de acceso falso que imita a uno legítimo para engañar a los usuarios[cite: 43]."
    },
    {
        id: "def09",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Falsear ARP para ponerse en medio de la LAN (MITM)[cite: 44].",
        opciones: ["MAC spoofing", "DNS spoofing", "ARP spoofing", "Session hijacking"],
        correctas: [2],
        explicacion: "El ARP spoofing consiste en falsear mensajes ARP para situarse en medio de la LAN[cite: 44]."
    },
    {
        id: "def10",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Leer el tipo y versión de un servicio al conectarse[cite: 44].",
        opciones: ["Fingerprinting", "Banner grabbing", "Fuzzing", "Sniffing"],
        correctas: [1],
        explicacion: "El banner grabbing permite leer el tipo y versión de un servicio al conectarse[cite: 44]."
    },
    {
        id: "def11",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Sistema señuelo para detectar y estudiar atacantes[cite: 44].",
        opciones: ["Honeypot", "IDS", "Firewall", "WAF"],
        correctas: [0],
        explicacion: "Un honeypot es un sistema señuelo diseñado para detectar y estudiar a los atacantes[cite: 44]."
    },
    {
        id: "def12",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Crackear offline cuentas de servicio de AD[cite: 45].",
        opciones: ["Pass-the-Hash", "Kerberoasting", "Looting", "Brute forcing"],
        correctas: [1],
        explicacion: "Kerberoasting es el ataque que solicita tickets para crackear offline cuentas de servicio de AD[cite: 45]."
    },
    {
        id: "def13",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Autenticarse con el hash NTLM, sin la contraseña[cite: 45].",
        opciones: ["Kerberoasting", "Session hijacking", "Pass-the-Hash (PtH)", "LLMNR Spoofing"],
        correctas: [2],
        explicacion: "Pass-the-Hash (PtH) permite autenticarse utilizando directamente el hash NTLM sin conocer la contraseña en claro[cite: 45]."
    },
    {
        id: "def14",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Usar una máquina como puente hacia otra red[cite: 45].",
        opciones: ["Movimiento lateral", "Pivoting", "Escalada de privilegios", "Spoofing"],
        correctas: [1],
        explicacion: "El pivoting consiste en usar una máquina comprometida como puente hacia otra red[cite: 45]."
    },
    {
        id: "def15",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Malware que se oculta y mantiene acceso privilegiado[cite: 45].",
        opciones: ["Rootkit", "Ransomware", "Botnet", "Worm"],
        correctas: [0],
        explicacion: "Un rootkit es un malware diseñado para ocultar su presencia y mantener acceso privilegiado en el sistema[cite: 45]."
    },
    {
        id: "def16",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Ejecutar comandos del sistema por una entrada mal validada[cite: 46].",
        opciones: ["SQL Injection", "Command Injection", "XSS", "LFI"],
        correctas: [1],
        explicacion: "Command Injection permite ejecutar comandos del sistema a través de una entrada mal validada[cite: 46]."
    },
    {
        id: "def17",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Forzar una acción usando la sesión activa de la víctima[cite: 46].",
        opciones: ["SSRF", "XSS", "CSRF", "IDOR"],
        correctas: [2],
        explicacion: "El CSRF fuerza al navegador de la víctima a realizar una acción no deseada aprovechando su sesión activa[cite: 46]."
    },
    {
        id: "def18",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Acceder a recursos de otros cambiando un identificador[cite: 46].",
        opciones: ["LFI", "IDOR", "CSRF", "RFI"],
        correctas: [1],
        explicacion: "IDOR (Insecure Direct Object Reference) permite acceder a recursos de otros cambiando un identificador[cite: 46]."
    },
    {
        id: "def19",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Ocultar la existencia del mensaje (no su contenido)[cite: 47].",
        opciones: ["Cifrado asimétrico", "Hashing", "Esteganografía", "Ofuscación"],
        correctas: [2],
        explicacion: "La esteganografía oculta la existencia misma del mensaje, a diferencia de la criptografía que oculta su contenido[cite: 47]."
    },
    {
        id: "def20",
        tema: "Glosario",
        dificultad: "definicion",
        enunciado: "Robar el identificador de una sesión ya autenticada[cite: 47].",
        opciones: ["Phishing", "Secuestro de sesión", "AITM", "Evil Twin"],
        correctas: [1],
        explicacion: "El secuestro de sesión (session hijacking) consiste en tomar el control robando el identificador de una sesión ya autenticada[cite: 47]."
    }
];
