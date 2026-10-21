const definiciones = [
    {
        "id": "def01",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Identificador público y único de una vulnerabilidad conocida.",
        "opciones": ["CVSS", "CVE", "Exploit", "Payload"],
        "correctas": [1],
        "explicacion": "CVE es el identificador público y único de una vulnerabilidad conocida."
    },
    {
        "id": "def02",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Endurecer la configuración para reducir la superficie de ataque.",
        "opciones": ["Pentesting", "Pivoting", "Hardening", "Sniffing"],
        "correctas": [2],
        "explicacion": "El hardening consiste en endurecer la configuración para reducir la superficie de ataque."
    },
    {
        "id": "def03",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Código que aprovecha una vulnerabilidad para ganar acceso.",
        "opciones": ["Payload", "Exploit", "Backdoor", "Malware"],
        "correctas": [1],
        "explicacion": "El exploit es el código que aprovecha una vulnerabilidad para ganar acceso."
    },
    {
        "id": "def04",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Carga útil que se ejecuta tras explotar (p. ej. una shell).",
        "opciones": ["Payload", "Exploit", "Malware", "Backdoor"],
        "correctas": [0],
        "explicacion": "El payload es la carga útil que se ejecuta tras explotar una vulnerabilidad."
    },
    {
        "id": "def05",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Ataque autorizado para encontrar y reportar vulnerabilidades.",
        "opciones": ["Hardening", "Footprinting", "Escaneo activo", "Pentesting"],
        "correctas": [3],
        "explicacion": "El pentesting es un ataque autorizado para encontrar y reportar vulnerabilidades."
    },
    {
        "id": "def06",
        "tema": "Glosario",
        "dificultad": "definicion",
        "enunciado": "Matriz de tácticas y técnicas reales de los atacantes.",
        "opciones": ["OWASP", "OSSTMM", "MITRE ATT&CK", "Cyber Kill Chain"],
        "correctas": [2],
        "explicacion": "MITRE ATT&CK es una base de conocimiento de tácticas y técnicas reales de los atacantes."
    },
    {
        "id": "def07",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Alerta errónea de algo que en realidad no es vulnerable.",
        "opciones": ["Falso negativo", "Vulnerabilidad", "Falso positivo", "Exploit"],
        "correctas": [2],
        "explicacion": "Un falso positivo es una alerta de algo que en realidad no es vulnerable."
    },
    {
        "id": "def08",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Vulnerabilidad real que la herramienta de monitorización no detecta.",
        "opciones": ["Falso positivo", "Falso negativo", "Defecto de diseño", "Zero-day"],
        "correctas": [1],
        "explicacion": "Un falso negativo es una vulnerabilidad real que la herramienta no detecta."
    },
    {
        "id": "def09",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Distribución orientada a pentesting que incluye cientos de herramientas de seguridad.",
        "opciones": ["Nessus", "Kali Linux", "OpenVAS", "Metasploit"],
        "correctas": [1],
        "explicacion": "Kali Linux es una distro de pentesting con cientos de herramientas preinstaladas."
    },
    {
        "id": "def10",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Escáner de vulnerabilidades comercial, cuya versión gratuita se denomina Essentials.",
        "opciones": ["OpenVAS", "Nmap", "Wireshark", "Nessus"],
        "correctas": [3],
        "explicacion": "Nessus es un escáner de vulnerabilidades comercial, gratuito en su versión Essentials."
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
        "explicacion": "OSSTMM es un manual metodológico riguroso y medible de auditoría de seguridad operativa."
    },
    {
        "id": "def13",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Comunidad de seguridad en aplicaciones que publica el Top 10 y guías de testing.",
        "opciones": ["NIST", "OWASP", "INCIBE", "CVE"],
        "correctas": [1],
        "explicacion": "OWASP es la comunidad web que publica el famoso OWASP Top 10."
    },
    {
        "id": "def14",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Evaluación autorizada de seguridad simulando ataques para encontrar y reportar debilidades.",
        "opciones": ["Enumeración", "Análisis forense", "Pentesting (test de intrusión)", "Ingeniería social"],
        "correctas": [2],
        "explicacion": "El Pentesting o test de intrusión es el proceso autorizado de evaluación de seguridad simulando ataques."
    },
    {
        "id": "def15",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Estándar que define las 7 fases de un pentest profesional.",
        "opciones": ["PTES", "OSSTMM", "ISO 27001", "ENS"],
        "correctas": [0],
        "explicacion": "PTES (Penetration Testing Execution Standard) es el marco que rige las 7 fases de un pentest."
    },
    {
        "id": "def16",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Normativas europea y española que obligan a tratar los datos con minimización y seguridad.",
        "opciones": ["ENS / NIS2", "RGPD / LOPDGDD", "ISO 27001 / HIPAA", "PCI DSS / SOX"],
        "correctas": [1],
        "explicacion": "RGPD y LOPDGDD son las normativas europea y española de protección de datos personales."
    },
    {
        "id": "def17",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Conjunto de activos, técnicas y tiempos que la autorización permite probar (lo que queda dentro del pentest).",
        "opciones": ["Scope (alcance)", "Vulnerabilidad", "Línea base", "TTP"],
        "correctas": [0],
        "explicacion": "El Scope o alcance delimita estrictamente lo que se puede auditar bajo la autorización legal."
    },
    {
        "id": "def18",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "El agente que podría aprovechar una debilidad de un sistema.",
        "opciones": ["Vulnerabilidad", "Amenaza", "Riesgo", "Impacto"],
        "correctas": [1],
        "explicacion": "La amenaza es el agente o evento potencial que podría aprovechar una debilidad para causar daño."
    },
    {
        "id": "def19",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "Debilidad intrínseca en un sistema o proceso.",
        "opciones": ["Vulnerabilidad", "Riesgo", "Amenaza", "Incidente"],
        "correctas": [0],
        "explicacion": "La vulnerabilidad es la propia debilidad (falta de parche, mala configuración) del activo."
    },
    {
        "id": "def20",
        "tema": "Glosario (UD1)",
        "dificultad": "definicion",
        "enunciado": "La probabilidad de que ocurra un ataque o fallo multiplicada por su impacto esperado.",
        "opciones": ["Amenaza", "Consecuencia", "Riesgo", "Vulnerabilidad"],
        "correctas": [2],
        "explicacion": "El riesgo representa la probabilidad de que una amenaza aproveche una vulnerabilidad y el impacto derivado."
    },
    {
        "id": "def21",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker que usa sus habilidades con fines ilegales o maliciosos; también conocido como cracker.",
        "opciones": ["White Hat", "Black Hat", "Gray Hat", "Red Hat"],
        "correctas": [1],
        "explicacion": "El Black Hat usa sus habilidades con fines ilegales o maliciosos; también llamado cracker."
    },
    {
        "id": "def22",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker ético o pentester que usa el hacking con fines defensivos y siempre con permiso del propietario.",
        "opciones": ["Blue Hat", "White Hat", "Green Hat", "Gray Hat"],
        "correctas": [1],
        "explicacion": "El White Hat es el hacker ético o pentester que actúa con fines defensivos y con permiso."
    },
    {
        "id": "def23",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker que trabaja ofensiva y defensivamente, actuando a veces sin permiso pero sin ánimo claramente delictivo.",
        "opciones": ["Gray Hat", "Hacktivista", "Script kiddie", "Blue Hat"],
        "correctas": [0],
        "explicacion": "El Gray Hat trabaja ofensiva y defensivamente en distintos momentos, a menudo sin permiso pero sin intención criminal directa."
    },
    {
        "id": "def24",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Atacante sin apenas habilidades que compromete sistemas ejecutando scripts y herramientas de otros buscando notoriedad.",
        "opciones": ["Insider", "Script kiddie", "Hacker suicida", "Green Hat"],
        "correctas": [1],
        "explicacion": "El Script kiddie carece de habilidades avanzadas y usa herramientas de terceros para buscar notoriedad."
    },
    {
        "id": "def25",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Atacante que irrumpe en sistemas como acto de protesta, promoviendo una agenda política o social mediante defacements o filtraciones.",
        "opciones": ["Ciberterrorista", "Hacktivista", "Espía corporativo", "Red Hat"],
        "correctas": [1],
        "explicacion": "El Hacktivista irrumpe en sistemas como acto de protesta para promover agendas políticas o sociales."
    },
    {
        "id": "def26",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker contratado por gobiernos para penetrar sistemas y obtener información de alto secreto o dañar infraestructuras de otras naciones.",
        "opciones": ["Hacker suicida", "Insider", "Sindicato organizado", "Patrocinado por el Estado"],
        "correctas": [3],
        "explicacion": "El hacker patrocinado por el Estado es contratado por gobiernos con fines de espionaje o sabotaje internacional."
    },
    {
        "id": "def27",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Atacante motivado por creencias religiosas o políticas que busca infundir miedo mediante la interrupción de servicios a gran escala.",
        "opciones": ["Ciberterrorista", "Hacktivista", "Hacker suicida", "Black Hat"],
        "correctas": [0],
        "explicacion": "El Ciberterrorista está motivado por creencias religiosas/políticas y busca el miedo mediante la interrupción a gran escala."
    },
    {
        "id": "def28",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Atacante que realiza espionaje entre competidores usando Amenazas Persistentes Avanzadas (APT) para robar planos o secretos comerciales.",
        "opciones": ["Insider", "Blue Hat", "Espía corporativo/industrial", "Red Hat"],
        "correctas": [2],
        "explicacion": "El Espía corporativo/industrial realiza espionaje entre competidores para robar planos, fórmulas y secretos comerciales."
    },
    {
        "id": "def29",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Profesional externo contratado puntualmente para evaluar la seguridad de un producto antes de su lanzamiento.",
        "opciones": ["Blue Hat", "Green Hat", "White Hat", "Gray Hat"],
        "correctas": [0],
        "explicacion": "El Blue Hat es un profesional externo contratado puntualmente para evaluar un producto antes de su lanzamiento."
    },
    {
        "id": "def30",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker que adopta tácticas agresivas contra los delincuentes (black hats) para neutralizarlos y no sigue reglas éticas estrictas.",
        "opciones": ["Red Hat", "White Hat", "Black Hat", "Blue Hat"],
        "correctas": [0],
        "explicacion": "El Red Hat adopta tácticas agresivas contra los black hat para neutralizarlos y no se rige por la ética estricta."
    },
    {
        "id": "def31",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Hacker novato que está fuertemente motivado por aprender y llegar a ser un profesional de la seguridad.",
        "opciones": ["Script kiddie", "Blue Hat", "Green Hat", "Gray Hat"],
        "correctas": [2],
        "explicacion": "El Green Hat es un novato motivado por aprender y llegar a ser profesional de la seguridad."
    },
    {
        "id": "def32",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Atacante que busca derribar infraestructuras críticas por una 'causa', sin importarle las consecuencias legales que pueda sufrir.",
        "opciones": ["Hacker suicida", "Hacktivista", "Ciberterrorista", "Insider"],
        "correctas": [0],
        "explicacion": "El Hacker suicida busca derribar infraestructuras críticas por una causa sin importarle las consecuencias legales."
    },
    {
        "id": "def33",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Empleado o persona de confianza que abusa de su acceso legítimo a los activos críticos de una organización.",
        "opciones": ["Espía corporativo", "Patrocinado por el Estado", "Insider", "Script kiddie"],
        "correctas": [2],
        "explicacion": "El Insider es un empleado o persona de confianza que abusa de su acceso legítimo a activos críticos."
    },
    {
        "id": "def34",
        "tema": "Glosario (Tipos de hacker)",
        "dificultad": "definicion",
        "enunciado": "Grupos criminales estructurados jerárquicamente que operan con recursos, botnets y crimeware.",
        "opciones": ["Hacktivistas", "Sindicatos/hackers organizados", "Ciberterroristas", "Red Hats"],
        "correctas": [1],
        "explicacion": "Los Sindicatos/hackers organizados son grupos criminales estructurados jerárquicamente que operan con recursos, botnets y crimeware."
    },
    {
        "id": "def35",
        "tema": "Glosario (Marcos de trabajo)",
        "dificultad": "definicion",
        "enunciado": "Modelo de Lockheed Martin que describe las 7 fases de una intrusión, basado en el concepto militar de cadena de destrucción.",
        "opciones": ["MITRE ATT&CK", "Cyber Kill Chain", "OSSTMM", "Modelo Diamante"],
        "correctas": [1],
        "explicacion": "La Cyber Kill Chain es un modelo de Lockheed Martin que describe las fases de una intrusión (reconocimiento, armado, entrega, explotación, instalación, mando y control, y acciones sobre el objetivo)[cite: 1, 12]."
    }
];
