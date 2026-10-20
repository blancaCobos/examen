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
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "dificil",
        enunciado: "Señala las afirmaciones correctas sobre tecnologías y ataques inalámbricos:",
        opciones: [
            "PMF (Protected Management Frames) mitiga los ataques de deautenticación clásicos.",
            "WPA3 incluye SAE y es resistente a ataques offline.",
            "El handshake WPA2 siempre se crackea en menos de 5 minutos, independientemente de la contraseña.",
            "El ataque PMKID requiere que obligatoriamente haya un cliente conectado al punto de acceso."
        ],
        correctas: [0, 1],
        explicacion: "PMF (802.11w) mitiga los ataques de deauth[cite: 30], y WPA3-SAE es resistente a ataques offline[cite: 30]. El PMKID permite crackear la clave *sin* cliente conectado[cite: 30], y el tiempo de crackeo del handshake depende enteramente del diccionario y la robustez de la clave[cite: 29]."
    },
    {
        id: "p032",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "media",
        enunciado: "¿Qué técnica se utiliza para deducir el sistema operativo de la máquina objetivo observando el comportamiento de su pila TCP/IP?",
        opciones: [
            "Banner grabbing",
            "Fingerprinting",
            "ARP spoofing",
            "Fuzzing"
        ],
        correctas: [1],
        explicacion: "El Fingerprinting sirve para identificar con precisión el sistema operativo y las versiones, por ejemplo, deduciendo que es Windows 7 SP1 por el comportamiento de su pila TCP/IP[cite: 32]."
    },
    {
        id: "p033",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "dificil",
        enunciado: "¿Qué vulnerabilidad histórica de SMB permite la ejecución remota de código en sistemas Windows y fue empleada por el ransomware WannaCry?",
        opciones: [
            "Log4Shell",
            "Heartbleed",
            "EternalBlue (MS17-010)",
            "BlueKeep"
        ],
        correctas: [2],
        explicacion: "EternalBlue (MS17-010) es una vulnerabilidad crítica de SMB en Windows que permite ejecución remota de código, famosa por ser el exploit de WannaCry en 2017[cite: 31]."
    },
    {
        id: "p034",
        tema: "Glosario (Post-Explotación)",
        dificultad: "media",
        enunciado: "¿Cómo se llama el payload avanzado de Metasploit que ofrece una potente consola interactiva para la post-explotación en la víctima?",
        opciones: [
            "Meterpreter",
            "NetExec",
            "BloodHound",
            "Responder"
        ],
        correctas: [0],
        explicacion: "Meterpreter es el payload avanzado de Metasploit que da una consola interactiva y potente en la víctima[cite: 35]."
    },
    {
        id: "p035",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "Selecciona las afirmaciones verdaderas sobre ataques y técnicas en Directorio Activo (AD):",
        opciones: [
            "BloodHound automatiza inyecciones SQL masivas contra controladores de dominio.",
            "Pass-the-Hash (PtH) permite autenticarse usando el hash NTLM sin conocer la contraseña en claro.",
            "Kerberoasting solicita tickets de servicio para crackear offline las contraseñas de cuentas de servicio.",
            "LLMNR es un protocolo seguro por defecto imposible de envenenar."
        ],
        correctas: [1, 2],
        explicacion: "PtH permite usar directamente el hash NTLM para acceder[cite: 35]. Kerberoasting solicita tickets TGS para crackear contraseñas de servicio offline[cite: 34]. BloodHound mapea relaciones (no inyecta SQL)[cite: 34], y LLMNR es vulnerable y se envenena frecuentemente con Responder[cite: 35]."
    },
    {
        id: "p036",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿Qué vulnerabilidad permite a un atacante obligar al servidor a realizar peticiones a destinos internos elegidos por él, eludiendo firewalls perimetrales?",
        opciones: [
            "SSRF (Server-Side Request Forgery)",
            "CSRF (Cross-Site Request Forgery)",
            "XSS (Cross-Site Scripting)",
            "Command Injection"
        ],
        correctas: [0],
        explicacion: "SSRF obliga al servidor a hacer peticiones a destinos elegidos por el atacante, como un endpoint interno, siendo muy peligrosa en entornos cloud[cite: 38]."
    },
    {
        id: "p037",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "Para proteger las cookies de sesión contra robo mediante inyección de JavaScript (XSS), ¿qué atributo se debe configurar obligatoriamente en la cabecera Set-Cookie?",
        opciones: [
            "SameSite=Strict",
            "Secure",
            "HttpOnly",
            "Anti-CSRF-Token"
        ],
        correctas: [2],
        explicacion: "El atributo HttpOnly impide que la cookie sea accesible mediante JavaScript, mitigando así el riesgo de robo por ataques XSS[cite: 37]."
    },
    {
        id: "p038",
        tema: "Módulos complementarios",
        dificultad: "media",
        enunciado: "¿Cómo se denomina al mecanismo que oculta la existencia misma de un mensaje o dato (por ejemplo, dentro de una imagen), a diferencia de la criptografía que solo oculta su contenido?",
        opciones: [
            "Fingerprinting",
            "Esteganografía",
            "Fuzzing",
            "Hashing"
        ],
        correctas: [1],
        explicacion: "La esteganografía consiste en ocultar la existencia misma de un mensaje (por ejemplo, con steghide dentro de una imagen)[cite: 39]."
    },
    {
        id: "p039",
        tema: "Módulos complementarios",
        dificultad: "dificil",
        enunciado: "Respecto al 'Adversary-in-the-Middle (AITM)' y la suplantación de correo, ¿qué afirmaciones son correctas?",
        opciones: [
            "AITM captura credenciales y también la cookie de sesión autenticada, saltándose el 2FA tradicional.",
            "Para defenderse del AITM, el 2FA por SMS es 100% efectivo e invulnerable.",
            "Mecanismos como SPF, DKIM y DMARC dificultan la suplantación del dominio del remitente en el correo electrónico.",
            "DMARC se utiliza exclusivamente para cifrar el contenido del correo electrónico."
        ],
        correctas: [0, 2],
        explicacion: "AITM es un phishing avanzado que roba credenciales y la cookie de sesión, saltándose métodos como el 2FA por SMS[cite: 39]. SPF, DKIM y DMARC son mecanismos para evitar la suplantación del remitente (no para cifrar)[cite: 40]."
    },
    {
        id: "p040",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿Qué herramienta usarías para realizar 'fuzzing' y descubrir automáticamente directorios o parámetros ocultos en un servidor web?",
        opciones: [
            "Burp Suite (modo Proxy)",
            "sqlmap",
            "ffuf o gobuster",
            "hashcat"
        ],
        correctas: [2],
        explicacion: "ffuf o gobuster se usan para fuzzing, probando automáticamente muchas entradas desde un diccionario para encontrar rutas y recursos ocultos[cite: 36]."
    }
];
