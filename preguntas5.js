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
        explicacion: "Los motivos habituales incluyen: interrumpir la continuidad del negocio, robar o manipular información, infligir pérdidas económicas, dañar la reputación, vengarse o exigir un rescate."
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
        explicacion: "El Hacktivista irrumpe como acto de protesta para promover una agenda política o social. El Ciberterrorista está motivado por creencias religiosas o políticas y busca el miedo mediante la interrupción a gran escala."
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
        explicacion: "La IA complementa, pero no reemplaza, la experiencia humana ni puede sustituir la creatividad, el pensamiento crítico ni el juicio contextual."
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
        explicacion: "El reconocimiento pasivo se realiza sin interacción directa (información pública, Whois). El reconocimiento activo implica interacción directa para ver puertos abiertos, mapear red, etc.."
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
        explicacion: "Los estándares de intercambio para los Indicadores de Compromiso (IoC) y la inteligencia de amenazas son STIX y TAXII."
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
        explicacion: "La IA (Information Assurance) garantiza la integridad, disponibilidad, confidencialidad y autenticidad. El proceso IH&R comprende preparación, triaje, contención, análisis forense, erradicación, recuperación y seguimiento. La formación del personal SÍ es parte de los procesos de IA, y la predicción pertenece a la estrategia adaptativa, no al ciclo IH&R de respuesta[cite: 13, 15]."
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
        explicacion: "Las técnicas de clasificación supervisadas aprenden a partir de datos etiquetados, a diferencia de las no supervisadas, que detectan patrones sin etiquetas."
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
        explicacion: "Las vulnerabilidades de aplicación incluyen desbordamientos de búfer, desreferencia de puntero nulo y TOC/TOU. Los sistemas antiguos sin soporte se clasifican como plataformas heredadas (legacy). Los desbordamientos no son defectos de cifrado WEP, y los puertos abiertos son 'Malconfiguración / configuración débil', no hardware obligatorio."
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
        explicacion: "EPSS (Exploit Prediction Scoring System) estima la probabilidad de explotación y complementa a CVSS para priorizar."
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
        explicacion: "La solución basada en inferencia (inference-based) comienza construyendo un inventario de protocolos y adapta el escaneo a lo que encuentra."
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
        explicacion: "Wireshark es un analizador de protocolos cuyo uso principal es la captura y análisis de tráfico de red."
    },
    {
        id: "p092",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "En el marco de hacking ético de EC-Council, ¿cuál es el objetivo principal de la Fase 2: Análisis de vulnerabilidades?",
        opciones: [
            "Establecer conexiones activas para enumerar usuarios y grupos.",
            "Borrar rastros y manipular logs del sistema operativo.",
            "Examinar la capacidad del sistema para resistir un ataque, identificando, midiendo y clasificando debilidades.",
            "Explotar activamente los fallos para conseguir una consola de administrador."
        ],
        correctas: [2],
        explicacion: "La Fase 2 examina la capacidad del sistema para resistir un ataque, identificando, midiendo y clasificando las vulnerabilidades para su posterior explotación."
    },
    {
        id: "p093",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "En el marco CEH, explotar vulnerabilidades y escalar privilegios pertenece a la fase de:",
        opciones: [
            "Fase 1: Reconocimiento",
            "Fase 3: Obtención de acceso",
            "Fase 4: Mantenimiento",
            "Fase 5: Borrado de rastros"
        ],
        correctas: [1],
        explicacion: "La Fase 3 (Obtención de acceso y escalada de privilegios) es donde se explotan las vulnerabilidades para acceder y escalar privilegios."
    },
    {
        id: "p094",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Según la IATF, ¿cómo se define un ataque de 'distribución'?",
        opciones: [
            "Interrumpir servicios masivos mediante botnets (DoS).",
            "Realizar ingeniería social en proximidad física a la víctima.",
            "Manipular el hardware o software antes de su instalación, en la cadena de suministro.",
            "Interceptar y monitorizar el tráfico débilmente cifrado sin alertar."
        ],
        correctas: [2],
        explicacion: "Los ataques de distribución manipulan hardware o software antes de su instalación (cadena de suministro), por ejemplo, backdoors introducidas en fabricación."
    },
    {
        id: "p095",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Los ataques realizados por una persona de confianza con acceso lógico o físico privilegiado a la organización se denominan:",
        opciones: [
            "Ataques Activos",
            "Ataques de Cercanía",
            "Ataques Pasivos",
            "Ataques Internos"
        ],
        correctas: [3],
        explicacion: "Los ataques internos los realiza una persona de confianza con acceso físico o lógico privilegiado."
    },
    {
        id: "p096",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "Dentro de la estructura de MITRE ATT&CK, existen diversas matrices. ¿Qué relación tienen con la Cyber Kill Chain?",
        opciones: [
            "La matriz PRE-ATT&CK equivale a las etapas finales de mantenimiento y ejecución de la Kill Chain.",
            "La matriz Enterprise contiene 14 categorías derivadas de las etapas posteriores de la Cyber Kill Chain.",
            "MITRE ATT&CK reemplaza por completo la Kill Chain haciendo ilegal su uso.",
            "La matriz Enterprise solo documenta vulnerabilidades de aplicaciones móviles."
        ],
        correctas: [1],
        explicacion: "La matriz Enterprise contiene 14 categorías de tácticas derivadas de las etapas posteriores de la Cyber Kill Chain, aportando mayor granularidad."
    },
    {
        id: "p097",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "En la definición de las 'TTP' de un adversario, los métodos técnicos específicos usados para lograr resultados intermedios se conocen como:",
        opciones: [
            "Procedimientos",
            "Tácticas",
            "Técnicas",
            "Vulnerabilidades"
        ],
        correctas: [2],
        explicacion: "Las técnicas son los métodos técnicos usados para lograr resultados intermedios."
    },
    {
        id: "p098",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Sobre el proceso de Gestión y Respuesta ante Incidentes (IH&R), selecciona las etapas correctas que lo componen:",
        opciones: [
            "Preevaluación, Escaneo y Enumeración.",
            "Preparación, triaje, contención, análisis forense, erradicación y recuperación.",
            "Identificación de riesgos, Evaluación, Tratamiento y Seguimiento.",
            "Planificación, recolección, procesamiento y difusión."
        ],
        correctas: [1],
        explicacion: "El proceso IH&R comprende preparación, registro, triaje, notificación, contención, análisis forense, erradicación, recuperación y seguimiento."
    },
    {
        id: "p099",
        tema: "6. Controles de seguridad de la información",
        dificultad: "media",
        enunciado: "¿Cómo se llama la disciplina que recopila y analiza información sobre tendencias de ataque, estadísticas de brechas y evolución de los adversarios?",
        opciones: [
            "Hacking Ético",
            "Inteligencia de Amenazas Cibernéticas (CTI)",
            "Ingeniería Inversa",
            "Forense Digital"
        ],
        correctas: [1],
        explicacion: "La CTI (Cyber Threat Intelligence) recopila y analiza información sobre actores, tendencias de ataque, estadísticas y TTP."
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
        explicacion: "Nikto es un escáner web. Snort/Suricata son IDS/IPS que detectan y bloquean tráfico malicioso. Nmap es un escáner de red, no un framework de inyección SQL (que sería sqlmap)[cite: 21, 38]. Wazuh es un SIEM, no un escáner Wi-Fi."
    }
];
