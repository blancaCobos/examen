const preguntas5 = [
    {
        id: "p081",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Todo ataque parte de la idea de que el sistema objetivo almacena o procesa algo valioso. ¿Cuál de los siguientes es un motivo habitual para realizar un ataque?",
        opciones: [
            "Actualizar el hardware de la víctima a la última versión.",
            "Infligir pérdidas económicas, dañar la reputación o exigir un rescate.",
            "Mejorar la latencia de la red de la organización.",
            "Facilitar las copias de seguridad remotas."
        ],
        correctas: [1],
        explicacion: "Los motivos habituales incluyen: interrumpir la continuidad del negocio, robar o manipular información, infligir pérdidas económicas, dañar la reputación, vengarse o exigir un rescate[cite: 2]."
    },
    {
        id: "p082",
        tema: "2. Conceptos de hacking",
        dificultad: "dificil",
        enunciado: "En la clasificación de atacantes, ¿qué diferencia principal existe entre un 'Ciberterrorista' y un 'Hacktivista'?",
        opciones: [
            "El Ciberterrorista actúa patrocinado por el Estado, mientras que el Hacktivista siempre pertenece a la propia empresa (insider).",
            "El Hacktivista irrumpe en sistemas como acto de protesta promoviendo una agenda social o política; el Ciberterrorista busca infundir miedo mediante la interrupción a gran escala motivado por creencias.",
            "Ambos perfiles tienen exactamente el mismo objetivo y se usan como sinónimos en la industria.",
            "El Ciberterrorista solo utiliza exploits de día cero, mientras que el Hacktivista usa herramientas comerciales con licencia."
        ],
        correctas: [1],
        explicacion: "El Hacktivista irrumpe como acto de protesta para promover una agenda política o social[cite: 4]. El Ciberterrorista está motivado por creencias religiosas o políticas y busca el miedo mediante la interrupción a gran escala[cite: 4]."
    },
    {
        id: "p083",
        tema: "3. Hacking ético",
        dificultad: "media",
        enunciado: "Según la metodología CEH v13, el uso de Inteligencia Artificial (IA) en el hacking ético aporta una serie de beneficios. ¿Cuál de los siguientes NO es un beneficio atribuido a la IA?",
        opciones: [
            "Eficiencia al procesar grandes volúmenes de datos.",
            "Reemplazo total del pensamiento crítico y juicio humano.",
            "Detección avanzada de amenazas desconocidas (zero-day).",
            "Escalabilidad y reducción de costes."
        ],
        correctas: [1],
        explicacion: "La IA complementa, pero no reemplaza, la experiencia humana ni puede sustituir la creatividad, el pensamiento crítico ni el juicio contextual[cite: 7]."
    },
    {
        id: "p084",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "En la fase de 'Reconocimiento', existen dos variantes: pasivo y activo. Señala las afirmaciones correctas que los diferencian:",
        opciones: [
            "El reconocimiento pasivo interactúa directamente con los servidores del objetivo para escanear puertos.",
            "El reconocimiento pasivo recopila información pública sin interacción directa con el objetivo (ej. Whois).",
            "El reconocimiento activo establece interacción directa para identificar puertos abiertos y mapear la red.",
            "Ambas variantes siempre disparan alertas críticas en los sistemas IDS/IPS de la víctima."
        ],
        correctas: [1, 2],
        explicacion: "El reconocimiento pasivo se realiza sin interacción directa (información pública, Whois)[cite: 8]. El reconocimiento activo implica interacción directa para ver puertos abiertos, mapear red, etc.[cite: 8]."
    },
    {
        id: "p085",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "¿Qué estándares son los más habituales para el intercambio de información sobre Indicadores de Compromiso (IoC) y amenazas?",
        opciones: [
            "HTTP y FTP",
            "STIX y TAXII",
            "IPsec y TLS",
            "OSSTMM y PTES"
        ],
        correctas: [1],
        explicacion: "Los estándares de intercambio para los Indicadores de Compromiso (IoC) y la inteligencia de amenazas son STIX y TAXII[cite: 10]."
    },
    {
        id: "p086",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Sobre el concepto de 'Aseguramiento de la Información' (IA) y la 'Gestión de incidentes' (IH&R), ¿qué afirmaciones son ciertas?",
        opciones: [
            "La IA garantiza la integridad, disponibilidad, confidencialidad y autenticidad de la información durante su uso, procesamiento y transmisión.",
            "El proceso IH&R (Incident Handling & Response) tiene como fases el triaje, la contención, la erradicación y la recuperación, entre otras.",
            "El aseguramiento de la información (IA) es un proceso que ignora la formación del personal.",
            "La gestión de incidentes (IH&R) se ocupa exclusivamente de la predicción de ataques antes de que ocurran."
        ],
        correctas: [0, 1],
        explicacion: "La IA (Information Assurance) garantiza la integridad, disponibilidad, confidencialidad y autenticidad[cite: 13]. El proceso IH&R comprende preparación, triaje, contención, análisis forense, erradicación, recuperación y seguimiento[cite: 15]. La formación del personal SÍ es parte de los procesos de IA[cite: 13], y la predicción pertenece a la estrategia adaptativa, no al ciclo IH&R de respuesta[cite: 13, 15]."
    },
    {
        id: "p087",
        tema: "6. Controles de seguridad de la información",
        dificultad: "media",
        enunciado: "Al aplicar Machine Learning en ciberseguridad, ¿cómo se denomina la técnica que aprende a detectar patrones utilizando 'datos etiquetados' previamente?",
        opciones: [
            "Clasificación no supervisada",
            "Clasificación supervisada",
            "Ataque de diccionario",
            "Fuzzing algorítmico"
        ],
        correctas: [1],
        explicacion: "Las técnicas de clasificación supervisadas aprenden a partir de datos etiquetados, a diferencia de las no supervisadas, que detectan patrones sin etiquetas[cite: 16]."
    },
    {
        id: "p088",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "En la clasificación de vulnerabilidades, relaciona correctamente el tipo con su origen:",
        opciones: [
            "TOC/TOU (time of check/time of use): Vulnerabilidad de aplicación.",
            "Desbordamiento de búfer: Defecto en el cifrado WEP.",
            "Sistemas antiguos sin soporte: Plataformas heredadas (legacy).",
            "Puertos abiertos innecesarios: Instalaciones por defecto obligatorias de hardware."
        ],
        correctas: [0, 2],
        explicacion: "Las vulnerabilidades de aplicación incluyen desbordamientos de búfer, desreferencia de puntero nulo y TOC/TOU[cite: 17]. Los sistemas antiguos sin soporte se clasifican como plataformas heredadas (legacy)[cite: 17]. Los desbordamientos no son defectos de cifrado WEP, y los puertos abiertos son 'Malconfiguración / configuración débil', no hardware obligatorio[cite: 17]."
    },
    {
        id: "p089",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Qué sistema de puntuación complementa a CVSS estimando estadísticamente la 'probabilidad' de que una vulnerabilidad sea explotada en el mundo real?",
        opciones: [
            "CVE",
            "EPSS",
            "CWE",
            "OWASP"
        ],
        correctas: [1],
        explicacion: "EPSS (Exploit Prediction Scoring System) estima la probabilidad de explotación y complementa a CVSS para priorizar[cite: 18]."
    },
    {
        id: "p090",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "Respecto a las soluciones de escaneo de vulnerabilidades, ¿qué significa que una solución sea 'basada en inferencia' (inference-based)?",
        opciones: [
            "Que se instala físicamente en la red de la organización, como un servidor dedicado.",
            "Que comienza construyendo un inventario de protocolos y adapta el escaneo dinámicamente a lo que encuentra.",
            "Que aplica siempre la misma lista de 10 pruebas a todos los componentes, ignorando el inventario.",
            "Que requiere la validación manual de cada falso positivo por parte del usuario final antes de escanear."
        ],
        correctas: [1],
        explicacion: "La solución basada en inferencia (inference-based) comienza construyendo un inventario de protocolos y adapta el escaneo a lo que encuentra[cite: 22]."
    },
    {
        id: "p091",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "De las siguientes herramientas de evaluación y monitorización, ¿cuál es su uso principal de Wireshark?",
        opciones: [
            "Escáner de vulnerabilidades de aplicaciones web.",
            "Gestión automatizada de parches para Windows.",
            "Analizador de protocolos para la captura y análisis de tráfico de red.",
            "Sistema de Prevención de Intrusiones (IPS)."
        ],
        correctas: [2],
        explicacion: "Wireshark es un analizador de protocolos cuyo uso principal es la captura y análisis de tráfico de red[cite: 21]."
    },
    {
        id: "p092",
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "dificil",
        enunciado: "Selecciona las afirmaciones verdaderas sobre ataques a redes inalámbricas:",
        opciones: [
            "El 'MAC spoofing' consiste en suplantar la dirección MAC de la tarjeta de red, útil para evadir filtros MAC.",
            "El 'Jamming' es una interferencia deliberada de una señal de radio, actuando como un ataque de denegación de servicio (DoS) inalámbrico.",
            "El 'MAC spoofing' impide físicamente que un atacante capture tramas de administración.",
            "El 'Jamming' es una práctica defensiva recomendada por el estándar 802.11w (PMF)."
        ],
        correctas: [0, 1],
        explicacion: "El MAC spoofing consiste en suplantar la dirección MAC de la tarjeta para evadir filtros o anonimizarse[cite: 29]. El Jamming es la interferencia deliberada de una señal de radio para impedir la comunicación (un DoS inalámbrico)[cite: 29]."
    },
    {
        id: "p093",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "media",
        enunciado: "¿A qué técnica nos referimos cuando un atacante extrae la información que un servicio muestra al conectarse, como por ejemplo 'OpenSSH 7.2'?",
        opciones: [
            "ARP spoofing",
            "Fuzzing",
            "Banner grabbing",
            "SQL Injection"
        ],
        correctas: [2],
        explicacion: "El Banner grabbing es la acción de obtener la información que un servicio muestra al conectarse (tipo y versión del software), lo cual permite identificar versiones vulnerables[cite: 31]."
    },
    {
        id: "p094",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "dificil",
        enunciado: "En la fase de explotación, se suelen utilizar shells para obtener control de la máquina. ¿Qué diferencia hay entre una 'Reverse shell' y una 'Bind shell'?",
        opciones: [
            "La Reverse shell abre un puerto en la víctima esperando conexión; la Bind shell hace que el atacante se conecte a sí mismo.",
            "La Reverse shell se conecta de vuelta al equipo del atacante; la Bind shell abre un puerto en el equipo de la víctima para que el atacante se conecte a él.",
            "La Bind shell siempre va cifrada por defecto, mientras que la Reverse shell transmite en texto plano.",
            "Ambas requieren inyección SQL obligatoriamente."
        ],
        correctas: [1],
        explicacion: "En una reverse shell, la víctima se conecta de vuelta al atacante; en una bind shell, la víctima abre un puerto para que el atacante se conecte[cite: 33]."
    },
    {
        id: "p095",
        tema: "Glosario (Post-Explotación)",
        dificultad: "media",
        enunciado: "¿Con qué término se conoce a la acción de recolectar información de valor (como credenciales o configuraciones) tras haber comprometido una máquina?",
        opciones: [
            "Pivoting",
            "Looting",
            "Footprinting",
            "Fuzzing"
        ],
        correctas: [1],
        explicacion: "El Looting es la recolección de información de valor tras comprometer una máquina, como extraer credenciales o configuraciones[cite: 35]."
    },
    {
        id: "p096",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "Identifica la función correcta de las siguientes herramientas de post-explotación en entornos Windows/AD:",
        opciones: [
            "Responder: Envenena protocolos como LLMNR para capturar hashes de autenticación (ej. NetNTLMv2).",
            "CrackMapExec: Valida credenciales, ejecuta comandos y realiza ataques PtH en masa en la red.",
            "BloodHound: Intercepta tráfico HTTPS en aplicaciones web para buscar inyecciones SQL.",
            "winPEAS: Automatiza ataques de fuerza bruta remota contra servicios RDP."
        ],
        correctas: [0, 1],
        explicacion: "Responder envenena LLMNR para capturar hashes[cite: 35]. CrackMapExec/NetExec valida credenciales, ejecuta comandos y hace PtH en masa[cite: 34]. BloodHound mapea relaciones de AD en un grafo (no intercepta HTTPS)[cite: 34], y winPEAS automatiza la búsqueda de vías de escalada local (no fuerza bruta remota)[cite: 36]."
    },
    {
        id: "p097",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿En qué consiste la vulnerabilidad web conocida como LFI (Local File Inclusion)?",
        opciones: [
            "En inyectar código JavaScript para robar sesiones de usuario.",
            "En forzar al servidor web a ejecutar comandos de base de datos.",
            "En incluir o leer ficheros locales del servidor (como /etc/passwd) a través de una ruta mal validada.",
            "En falsear la dirección MAC del servidor para interceptar tráfico."
        ],
        correctas: [2],
        explicacion: "La inclusión de ficheros locales (LFI) ocurre cuando, por una ruta mal validada, el atacante puede leer ficheros del servidor (ej. un parámetro page=../../etc/passwd)[cite: 38]."
    },
    {
        id: "p098",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "Señala las diferencias clave entre un ataque de 'Command Injection' y uno de 'SQL Injection (SQLi)':",
        opciones: [
            "Command Injection inyecta comandos en el sistema operativo del servidor a través de una entrada mal validada.",
            "SQLi manipula directamente las bases de datos para extraer o alterar registros.",
            "Command Injection se mitiga con tokens anti-CSRF, mientras que SQLi no tiene defensa conocida.",
            "Ambas vulnerabilidades atacan exclusivamente a los navegadores de las víctimas mediante ejecución de código DOM."
        ],
        correctas: [0, 1],
        explicacion: "Command Injection permite ejecutar comandos del sistema (ej. sistema operativo)[cite: 37]. SQLi manipula la base de datos inyectando código SQL[cite: 38]. Ninguna de ellas ataca al navegador (eso es XSS)[cite: 39] ni se mitigan con tokens anti-CSRF (defensa contra CSRF)[cite: 37]."
    },
    {
        id: "p099",
        tema: "Módulos complementarios",
        dificultad: "media",
        enunciado: "¿Qué nombre recibe una red de equipos comprometidos que es controlada remotamente por un atacante, usada típicamente para lanzar ataques DDoS?",
        opciones: [
            "Honeynet",
            "Evil Twin",
            "Botnet",
            "Active Directory"
        ],
        correctas: [2],
        explicacion: "Una Botnet es una red de equipos comprometidos controlados por un atacante, usada por ejemplo para ataques DDoS, como fue el caso de Mirai[cite: 39]."
    },
    {
        id: "p100",
        tema: "Herramientas de evaluación (UD1)",
        dificultad: "dificil",
        enunciado: "Asocia correctamente las siguientes herramientas con su categoría y uso principal:",
        opciones: [
            "Nikto: Escáner web enfocado en fallos y configuraciones inseguras en servidores web.",
            "Snort / Suricata: Sistemas de detección y prevención de intrusiones (IDS/IPS).",
            "Nmap: Framework exclusivo de explotación web para inyecciones SQL.",
            "Wazuh: Escáner especializado en auditar redes Wi-Fi (reemplaza a airodump-ng)."
        ],
        correctas: [0, 1],
        explicacion: "Nikto es un escáner web[cite: 21]. Snort/Suricata son IDS/IPS que detectan y bloquean tráfico malicioso[cite: 21]. Nmap es un escáner de red, no un framework de inyección SQL (que sería sqlmap)[cite: 21, 38]. Wazuh es un SIEM, no un escáner Wi-Fi[cite: 21]."
    }
];
