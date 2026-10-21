const definiciones = [
    {
        "id": "def01",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Identificador público y único de una vulnerabilidad conocida.",
        "opciones": ["CVSS", "CVE", "Exploit", "Payload"],
        "correctas": [1],
        "explicacion": "CVE es el identificador público y único de una vulnerabilidad conocida[cite: 1]."
    },
    {
        "id": "def02",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Endurecer la configuración para reducir la superficie de ataque.",
        "opciones": ["Pentesting", "Pivoting", "Hardening", "Sniffing"],
        "correctas": [2],
        "explicacion": "El hardening consiste en endurecer la configuración para reducir la superficie de ataque[cite: 2]."
    },
    {
        "id": "def03",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Código que aprovecha una vulnerabilidad para ganar acceso.",
        "opciones": ["Payload", "Exploit", "Backdoor", "Malware"],
        "correctas": [1],
        "explicacion": "El exploit es el código que aprovecha una vulnerabilidad para ganar acceso[cite: 1]."
    },
    {
        "id": "def04",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Carga útil que se ejecuta tras explotar (p. ej. una shell).",
        "opciones": ["Payload", "Exploit", "Malware", "Backdoor"],
        "correctas": [0],
        "explicacion": "El payload es la carga útil que se ejecuta tras explotar una vulnerabilidad[cite: 3]."
    },
    {
        "id": "def05",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Ataque autorizado para encontrar y reportar vulnerabilidades.",
        "opciones": ["Hardening", "Footprinting", "Escaneo activo", "Pentesting"],
        "correctas": [3],
        "explicacion": "El pentesting es un ataque autorizado para encontrar y reportar vulnerabilidades[cite: 3]."
    },
    {
        "id": "def06",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Matriz de tácticas y técnicas reales de los atacantes.",
        "opciones": ["OWASP", "OSSTMM", "MITRE ATT&CK", "Cyber Kill Chain"],
        "correctas": [2],
        "explicacion": "MITRE ATT&CK es una base de conocimiento de tácticas y técnicas reales de los atacantes[cite: 2]."
    },
    {
        "id": "def07",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Alerta errónea de algo que en realidad no es vulnerable.",
        "opciones": ["Falso negativo", "Vulnerabilidad", "Falso positivo", "Exploit"],
        "correctas": [2],
        "explicacion": "Un falso positivo es una alerta de algo que en realidad no es vulnerable[cite: 2]."
    },
    {
        "id": "def08",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Vulnerabilidad real que la herramienta de monitorización no detecta.",
        "opciones": ["Falso positivo", "Falso negativo", "Defecto de diseño", "Zero-day"],
        "correctas": [1],
        "explicacion": "Un falso negativo es una vulnerabilidad real que la herramienta no detecta[cite: 2]."
    },
    {
        "id": "def09",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Distribución orientada a pentesting que incluye cientos de herramientas de seguridad.",
        "opciones": ["Nessus", "Kali Linux", "OpenVAS", "Metasploit"],
        "correctas": [1],
        "explicacion": "Kali Linux es una distro de pentesting con cientos de herramientas preinstaladas[cite: 2]."
    },
    {
        "id": "def10",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Escáner de vulnerabilidades comercial, cuya versión gratuita se denomina Essentials.",
        "opciones": ["OpenVAS", "Nmap", "Wireshark", "Nessus"],
        "correctas": [3],
        "explicacion": "Nessus es un escáner de vulnerabilidades comercial, gratuito en su versión Essentials[cite: 2]."
    },
    {
        "id": "def11",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Escáner de vulnerabilidades libre y de código abierto, desarrollado como alternativa a Nessus.",
        "opciones": ["Nessus", "OpenVAS / Greenbone", "GFI LanGuard", "Nikto"],
        "correctas": [1],
        "explicacion": "OpenVAS (Greenbone) es un escáner de vulnerabilidades de código abierto[cite: 2, 3]."
    },
    {
        "id": "def12",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Metodología medible y repetible de testing de seguridad.",
        "opciones": ["OSSTMM", "PTES", "MITRE", "Cyber Kill Chain"],
        "correctas": [0],
        "explicacion": "OSSTMM es un manual metodológico riguroso y medible de auditoría de seguridad operativa[cite: 3]."
    },
    {
        "id": "def13",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Comunidad de seguridad en aplicaciones que publica el Top 10 y guías de testing.",
        "opciones": ["NIST", "OWASP", "INCIBE", "CVE"],
        "correctas": [1],
        "explicacion": "OWASP es la comunidad web que publica el famoso OWASP Top 10[cite: 3]."
    },
    {
        "id": "def14",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Evaluación autorizada de seguridad simulando ataques para encontrar y reportar debilidades.",
        "opciones": ["Enumeración", "Análisis forense", "Pentesting (test de intrusión)", "Ingeniería social"],
        "correctas": [2],
        "explicacion": "El Pentesting o test de intrusión es el proceso autorizado de evaluación de seguridad simulando ataques[cite: 3]."
    },
    {
        "id": "def15",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Estándar que define las 7 fases de un pentest profesional.",
        "opciones": ["PTES", "OSSTMM", "ISO 27001", "ENS"],
        "correctas": [0],
        "explicacion": "PTES (Penetration Testing Execution Standard) es el marco que rige las 7 fases de un pentest[cite: 3]."
    },
    {
        "id": "def16",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Normativas europea y española que obligan a tratar los datos con minimización y seguridad.",
        "opciones": ["ENS / NIS2", "RGPD / LOPDGDD", "ISO 27001 / HIPAA", "PCI DSS / SOX"],
        "correctas": [1],
        "explicacion": "RGPD y LOPDGDD son las normativas europea y española de protección de datos personales[cite: 3]."
    },
    {
        "id": "def17",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Conjunto de activos, técnicas y tiempos que la autorización permite probar (lo que queda dentro del pentest).",
        "opciones": ["Scope (alcance)", "Vulnerabilidad", "Línea base", "TTP"],
        "correctas": [0],
        "explicacion": "El Scope o alcance delimita estrictamente lo que se puede auditar bajo la autorización legal[cite: 3]."
    },
    {
        "id": "def18",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "El agente que podría aprovechar una debilidad de un sistema.",
        "opciones": ["Vulnerabilidad", "Amenaza", "Riesgo", "Impacto"],
        "correctas": [1],
        "explicacion": "La amenaza es el agente o evento potencial que podría aprovechar una debilidad para causar daño[cite: 1]."
    },
    {
        "id": "def19",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Debilidad intrínseca en un sistema o proceso.",
        "opciones": ["Vulnerabilidad", "Riesgo", "Amenaza", "Incidente"],
        "correctas": [0],
        "explicacion": "La vulnerabilidad es la propia debilidad (falta de parche, mala configuración) del activo[cite: 1]."
    },
    {
        "id": "def20",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "La probabilidad de que ocurra un ataque o fallo multiplicada por su impacto esperado.",
        "opciones": ["Amenaza", "Consecuencia", "Riesgo", "Vulnerabilidad"],
        "correctas": [2],
        "explicacion": "El riesgo representa la probabilidad de que una amenaza aproveche una vulnerabilidad y el impacto derivado[cite: 1]."
    }
];
