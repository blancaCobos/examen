const preguntas2 = [
    {
        id: "p021",
        tema: "2. Conceptos de hacking",
        dificultad: "media",
        enunciado: "¿Cómo se denomina al hacker novato motivado por aprender y llegar a ser profesional de la seguridad?",
        opciones: [
            "Blue Hat",
            "Green Hat",
            "Script kiddie",
            "Red Hat"
        ],
        correctas: [1],
        explicacion: "El Green Hat es un novato motivado por aprender y llegar a ser profesional de la seguridad[cite: 4]."
    },
    {
        id: "p022",
        tema: "2. Conceptos de hacking",
        dificultad: "dificil",
        enunciado: "Señala las afirmaciones correctas sobre los perfiles de atacantes:",
        opciones: [
            "Un 'Script kiddie' tiene altas habilidades y desarrolla sus propios exploits.",
            "Un 'Hacktivista' irrumpe en sistemas como acto de protesta para promover una agenda política o social.",
            "Un 'Hacker suicida' busca derribar infraestructuras críticas sin importarle las consecuencias legales.",
            "Un 'Insider' siempre es un atacante externo que usa ingeniería social."
        ],
        correctas: [1, 2],
        explicacion: "El Hacktivista actúa como protesta y el Hacker suicida ataca sin importar las consecuencias[cite: 4]. El Script kiddie compromete sistemas usando scripts de otros por falta de habilidad, y el Insider es un empleado o persona de confianza, no un atacante externo[cite: 4, 5]."
    },
    {
        id: "p023",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "¿En qué etapa del marco de hacking ético CEH se establece conexiones activas con el sistema para obtener listas de usuarios y recursos compartidos?",
        opciones: [
            "Fase 1: Reconocimiento (footprinting)",
            "Fase 1: Enumeración",
            "Fase 2: Análisis de vulnerabilidades",
            "Fase 3: Obtención de acceso"
        ],
        correctas: [1],
        explicacion: "La Enumeración, que pertenece a la Fase 1 junto con footprinting y escaneo, establece conexiones activas para obtener listas de usuarios, recursos compartidos, grupos, etc.[cite: 8]."
    },
    {
        id: "p024",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "Acerca de los Indicadores de Compromiso (IoC), ¿cuáles de los siguientes ejemplos están clasificados correctamente?",
        opciones: [
            "IoC de comportamiento: URL y nombres de dominio.",
            "IoC basados en el host: nombres de fichero, claves de registro y mutex.",
            "IoC de correo electrónico: dirección del remitente y enlaces.",
            "IoC de red: ejecución remota de comandos."
        ],
        correctas: [1, 2],
        explicacion: "Los IoC basados en host incluyen ficheros, registros y mutex[cite: 10]. Los IoC de correo incluyen remitente, adjuntos y enlaces[cite: 10]. Las URL y dominios son de red, y la ejecución remota de comandos es de comportamiento[cite: 10]."
    },
    {
        id: "p025",
        tema: "5. Las fases de una prueba de intrusión",
        dificultad: "media",
        enunciado: "¿Qué metodología abierta es la referencia estándar en la industria para la auditoría de aplicaciones web?",
        opciones: [
            "OWISAM",
            "OWASP (WSTG)",
            "NIST SP 800-115",
            "PTES"
        ],
        correctas: [1],
        explicacion: "OWASP, concretamente su guía WSTG, es la metodología de referencia para la auditoría de aplicaciones web[cite: 11]."
    },
    {
        id: "p026",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Dentro de la gestión de riesgos, ¿qué ocurre exactamente en la fase de 'Evaluación de riesgos'?",
        opciones: [
            "Se aplican controles preventivos para mitigar vulnerabilidades.",
            "Se detectan las fuentes, causas y consecuencias del riesgo.",
            "Se estima la probabilidad y el impacto, asignando prioridades para la mitigación.",
            "Se realizan parches automáticos en los sistemas heredados."
        ],
        correctas: [2],
        explicacion: "La 'Evaluación de riesgos' es la fase donde se estima la probabilidad y el impacto, y se asignan prioridades para la mitigación usando valores cuantitativos y cualitativos[cite: 15]."
    },
    {
        id: "p027",
        tema: "6. Controles de seguridad de la información",
        dificultad: "media",
        enunciado: "¿Cuál es el principio militar que implementa múltiples capas de protección para que, si el atacante rompe una, solo llegue a la siguiente?",
        opciones: [
            "Inteligencia de amenazas",
            "Modelo Diamante",
            "Defensa en profundidad",
            "Gestión de incidentes"
        ],
        correctas: [2],
        explicacion: "La defensa en profundidad implementa múltiples capas de protección en todo el sistema, minimizando el impacto si una capa es superada[cite: 13]."
    },
    {
        id: "p028",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Qué escáner de vulnerabilidades comercial ofrece una versión gratuita llamada Essentials, muy usada en la industria?",
        opciones: [
            "OpenVAS",
            "Nessus",
            "Wireshark",
            "GFI LanGuard"
        ],
        correctas: [1],
        explicacion: "Nessus es un escáner de vulnerabilidades muy usado en empresa, cuya versión gratuita se denomina Essentials[cite: 21, 26]."
    },
    {
        id: "p029",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "Selecciona todas las métricas y características reales asociadas al sistema CVSS v4.0:",
        opciones: [
            "Puntúa la gravedad de 0 a 10.",
            "Incluye métricas de ataque, entorno y suplementarias.",
            "Una puntuación de 7.5 se considera 'Crítica'.",
            "Estima exclusivamente la probabilidad de explotación, ignorando el impacto."
        ],
        correctas: [0, 1],
        explicacion: "CVSS v4.0 puntúa la gravedad de 0 a 10 e incluye métricas base, de amenaza, de entorno y suplementarias[cite: 18]. Un 7.5 corresponde a severidad 'Alta', y la probabilidad pura de explotación la mide EPSS, no CVSS[cite: 18]."
    },
    {
        id: "p030",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "¿Qué norma española es de cumplimiento obligatorio para el sector público y sus proveedores de servicios TIC?",
        opciones: [
            "PCI DSS",
            "ISO 27001",
            "ENS (RD 311/2022)",
            "HIPAA"
        ],
        correctas: [2],
        explicacion: "El Esquema Nacional de Seguridad (ENS, RD 311/2022) es obligatorio para el sector público en España y sus proveedores[cite: 24]."
    },
    {
        id: "p031",
        tema: "Glosario (UD1)",
        dificultad: "dificil",
        enunciado: "¿Cuál es la diferencia precisa entre amenaza, vulnerabilidad y riesgo?",
        opciones: [
            "La amenaza es la debilidad, la vulnerabilidad es el agente, y el riesgo el impacto.",
            "La vulnerabilidad es una debilidad; la amenaza es el agente que podría aprovecharla; el riesgo es la probabilidad de que ocurra por su impacto.",
            "El riesgo es la falta de parches, la amenaza es el CVSS, y la vulnerabilidad es el atacante.",
            "Son sinónimos exactos en el marco metodológico OSSTMM."
        ],
        correctas: [1],
        explicacion: "La vulnerabilidad es una debilidad; la amenaza es el agente que podría aprovecharla; el riesgo es la probabilidad de que ocurra por su impacto[cite: 48]."
    },
    {
        id: "p032",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Cuál es el uso principal de la herramienta Nmap/Zenmap según la UD1?",
        opciones: [
            "Sistema de prevención de intrusiones (IPS).",
            "Escáner de red para descubrimiento de hosts, puertos, servicios y SO.",
            "Analizador de protocolos para capturar tráfico.",
            "Gestor automatizado de parches para Windows."
        ],
        correctas: [1],
        explicacion: "Nmap/Zenmap es un escáner de red cuyo uso principal es el descubrimiento de hosts, puertos, servicios y SO, y con NSE, detección de vulnerabilidades[cite: 75]."
    },
    {
        id: "p033",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "¿Qué caracteriza al estándar PTES (Penetration Testing Execution Standard)?",
        opciones: [
            "Define cómo medir la superficie de ataque de forma puramente matemática.",
            "Es un catálogo de debilidades de software que incluye el Top 25.",
            "Define las 7 fases de un pentest profesional, desde la interacción previa al informe.",
            "Es una normativa europea de protección de datos personales."
        ],
        correctas: [2],
        explicacion: "El PTES es un estándar que define las 7 fases de un pentest profesional, desde la preinteracción hasta el informe[cite: 50, 65]."
    },
    {
        id: "p034",
        tema: "Glosario (UD1)",
        dificultad: "media",
        enunciado: "¿Qué metodología de testing de seguridad aporta un método medible y repetible para auditar operativamente un sistema?",
        opciones: [
            "OSSTMM",
            "RGPD",
            "Kali Linux",
            "CVSS"
        ],
        correctas: [0],
        explicacion: "OSSTMM es un manual de metodología de testing de seguridad que aporta un método medible y repetible para auditar[cite: 50, 65]."
    },
    {
        id: "p035",
        tema: "Glosario (UD1)",
        dificultad: "dificil",
        enunciado: "En el análisis de vulnerabilidades, ¿qué representa un 'Falso positivo'?",
        opciones: [
            "Una vulnerabilidad crítica que el sistema no ha detectado.",
            "Una alerta de algo que en realidad no es vulnerable (ej. servicio parcheado marcado como vulnerable).",
            "Un error en el escáner que impide realizar la conexión a la base de datos.",
            "La explotación exitosa de una vulnerabilidad de día cero."
        ],
        correctas: [1],
        explicacion: "Un falso positivo es una alerta de algo que en realidad no es vulnerable (por ejemplo, Nessus marca un servicio como vulnerable pero al comprobarlo está parcheado)[cite: 49]."
    },
    {
        id: "p036",
        tema: "Glosario (UD1)",
        dificultad: "media",
        enunciado: "¿Qué es Kali Linux en el contexto del pentesting?",
        opciones: [
            "Un escáner comercial de vulnerabilidades web.",
            "Una base de datos de exploits pública.",
            "Una distribución orientada a pentesting que incluye cientos de herramientas de seguridad.",
            "Un protocolo de intercambio de inteligencia de amenazas."
        ],
        correctas: [2],
        explicacion: "Kali Linux es una distribución de Linux orientada a pentesting que incluye cientos de herramientas de seguridad preinstaladas[cite: 49]."
    },
    {
        id: "p037",
        tema: "Glosario (UD1)",
        dificultad: "dificil",
        enunciado: "¿Qué persigue el proceso de 'Hardening'?",
        opciones: [
            "Descifrar contraseñas mediante fuerza bruta.",
            "Endurecer la configuración de un sistema para reducir su superficie de ataque.",
            "Incrementar la puntuación CVSS de un activo informático.",
            "Generar informes ejecutivos para la dirección sin jerga técnica."
        ],
        correctas: [1],
        explicacion: "El hardening es el proceso de endurecer la configuración de un sistema (desactivar servicios, aplicar parches) para reducir su superficie de ataque[cite: 49]."
    },
    {
        id: "p038",
        tema: "Glosario (UD1)",
        dificultad: "media",
        enunciado: "La comunidad abierta que publica el 'Top 10' de riesgos más críticos en aplicaciones web y guías de testing se denomina:",
        opciones: [
            "MITRE",
            "NIST",
            "OWASP",
            "INCIBE"
        ],
        correctas: [2],
        explicacion: "OWASP es una comunidad abierta de seguridad en aplicaciones que publica el OWASP Top 10 y guías de testing (WSTG)[cite: 50]."
    },
    {
        id: "p039",
        tema: "Glosario (UD1)",
        dificultad: "dificil",
        enunciado: "Diferencia los conceptos 'Exploit' y 'Payload' en la terminología de Hacking Ético:",
        opciones: [
            "Son sinónimos absolutos y se usan indistintamente.",
            "El Payload es el código que busca la vulnerabilidad, el Exploit es la máquina atacante.",
            "El Exploit aprovecha la vulnerabilidad para obtener acceso, y el Payload es la carga útil que se ejecuta después para producir el efecto buscado.",
            "El Exploit es una herramienta defensiva y el Payload es el análisis forense."
        ],
        correctas: [2],
        explicacion: "El exploit es el código que aprovecha la vulnerabilidad[cite: 48], mientras que el payload es la 'carga útil' que se ejecuta tras aprovecharla para producir el efecto (ej. una shell)[cite: 50]."
    },
    {
        id: "p040",
        tema: "Glosario (UD1)",
        dificultad: "media",
        enunciado: "La evaluación autorizada de la seguridad de un sistema simulando ataques reales para encontrar y reportar debilidades se conoce como:",
        opciones: [
            "Zero-day testing",
            "Pentesting (test de intrusión)",
            "Ingeniería inversa",
            "Auditoría de cumplimiento legal"
        ],
        correctas: [1],
        explicacion: "El pentesting (test de intrusión) es la evaluación autorizada de la seguridad de un sistema simulando ataques reales para encontrar y reportar debilidades[cite: 50]."
    }
    ];
