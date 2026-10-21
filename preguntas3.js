const preguntas3 = [
    {
        id: "p041",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Según Martin Libicki, la guerra de la información (InfoWar) se divide en varias categorías. ¿Cuál de las siguientes NO es una de ellas?",
        opciones: [
            "Guerra de comando y control (C2)",
            "Ciberguerra",
            "Guerra de criptografía cuántica",
            "Guerra de hackers"
        ],
        correctas: [2],
        explicacion: "Libicki la dividió en comando y control (C2), inteligencia, electrónica, psicológica, de hackers, económica y ciberguerra. La criptografía cuántica no se menciona en su clasificación."
    },
    {
        id: "p042",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "En relación con las vulnerabilidades, selecciona las afirmaciones correctas que distinguen entre vulnerabilidades tecnológicas y de configuración:",
        opciones: [
            "Los protocolos TCP/IP inherentemente inseguros (HTTP, FTP) son ejemplos de vulnerabilidades de configuración.",
            "La transmisión insegura de credenciales y los servicios de Internet mal configurados son ejemplos de vulnerabilidades de configuración.",
            "Los equipos propensos a ataques DoS o MITM por diseño representan debilidades inherentes de la tecnología.",
            "Una vulnerabilidad siempre se debe a actos intencionados del usuario final, nunca a negligencias."
        ],
        correctas: [1, 2],
        explicacion: "La transmisión insegura y servicios mal configurados son vulnerabilidades de configuración. Equipos propensos a DoS/MITM son debilidades tecnológicas inherentes. Los protocolos TCP/IP inseguros son tecnológicas, no de configuración, y las vulnerabilidades también ocurren por negligencia del usuario final."
    },
    {
        id: "p043",
        tema: "2. Conceptos de hacking",
        dificultad: "media",
        enunciado: "¿Qué tipo de hacker irrumpe en sistemas como acto de protesta para promover una agenda política o social mediante defacements o filtraciones?",
        opciones: [
            "Ciberterrorista",
            "Hacktivista",
            "Espía corporativo",
            "Hacker suicida"
        ],
        correctas: [1],
        explicacion: "El Hacktivista irrumpe en sistemas como acto de protesta, promoviendo una agenda política o social mediante defacements o filtraciones."
    },
    {
        id: "p044",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "En el marco de hacking ético de EC-Council, ¿qué acciones corresponden a la 'Fase 1: Reconocimiento' (Footprinting y Escaneo)?",
        opciones: [
            "Recopilación de información pública (OSINT) sin interacción directa.",
            "Identificación de hosts activos, puertos abiertos y servicios mediante un sondeo profundo.",
            "Escalada de privilegios para obtener acceso de administrador.",
            "Borrado de registros para mantener un perfil bajo."
        ],
        correctas: [0, 1],
        explicacion: "La Fase 1 incluye el footprinting (recopilación de información pasiva o activa) y el escaneo (identificación de hosts activos y puertos). La escalada es Fase 3 y el borrado de registros es Fase 5[cite: 8, 9]."
    },
    {
        id: "p045",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "¿Qué es MITRE ATT&CK y cuál es su principal utilidad para los profesionales de ciberseguridad?",
        opciones: [
            "Un marco normativo europeo para la protección de datos personales.",
            "Una herramienta de software libre equivalente a Metasploit para explotar vulnerabilidades.",
            "Una base de conocimiento pública de tácticas y técnicas de adversarios basada en observaciones del mundo real.",
            "Un escáner de vulnerabilidades de código abierto que compite con OpenVAS."
        ],
        correctas: [2],
        explicacion: "MITRE ATT&CK es una base de conocimiento pública, globalmente accesible, de tácticas y técnicas de adversarios basada en observaciones del mundo real."
    },
    {
        id: "p046",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "En la metodología Cyber Kill Chain de Lockheed Martin, selecciona las asociaciones correctas entre la fase y su descripción:",
        opciones: [
            "Armamentización (weaponization): Crear un payload malicioso a medida acoplado a un exploit y un backdoor.",
            "Instalación: Establecer un canal cifrado entre la víctima y el servidor del adversario (C2).",
            "Explotación: El código malicioso aprovecha una vulnerabilidad del SO, aplicación o servidor.",
            "Acciones sobre los objetivos: Recopilar información pública del objetivo (OSINT) buscando puntos débiles."
        ],
        correctas: [0, 2],
        explicacion: "La Armamentización crea el payload malicioso a medida y la Explotación aprovecha la vulnerabilidad. Establecer un canal cifrado es la fase de Comando y control (C2), no Instalación. Recopilar información pública es Reconocimiento, no Acciones sobre los objetivos."
    },
    {
        id: "p047",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "El estándar PTES (Penetration Testing Execution Standard) estructura una prueba de intrusión en cuántas fases principales:",
        opciones: [
            "4 fases",
            "5 fases",
            "7 fases",
            "10 fases"
        ],
        correctas: [2],
        explicacion: "El PTES (Penetration Testing Execution Standard) define 7 fases, desde la interacción previa hasta la generación del informe[cite: 11, 27]."
    },
    {
        id: "p048",
        tema: "5. Las fases de una prueba de intrusión",
        dificultad: "dificil",
        enunciado: "Durante la fase de 'Pre-compromiso', se define el contrato y las reglas de compromiso (ROE). ¿Qué elementos son esenciales en esta etapa?",
        opciones: [
            "La firma de un acuerdo de confidencialidad (NDA).",
            "La entrega del informe técnico definitivo con los CVSS de las vulnerabilidades.",
            "La definición exacta del alcance (scope) incluyendo IP y dominios excluidos.",
            "La autorización expresa del propietario legítimo del sistema."
        ],
        correctas: [0, 2, 3],
        explicacion: "Antes de tocar el sistema se firma un contrato que fija el alcance exacto, los contactos de emergencia, el NDA y la autorización expresa del propietario legítimo. La entrega del informe ocurre en la fase final (6. Informe), no en el pre-compromiso."
    },
    {
        id: "p049",
        tema: "6. Controles de seguridad de la información",
        dificultad: "media",
        enunciado: "¿Cuáles son las cuatro acciones continuas de una estrategia de seguridad continua/adaptativa?",
        opciones: [
            "Identificar, Proteger, Detectar, Recuperar.",
            "Predicción, Protección, Detección, Respuesta.",
            "Prevención, Escaneo, Explotación, Reporte.",
            "Concienciación, Clasificación, Cifrado, Borrado seguro."
        ],
        correctas: [1],
        explicacion: "La estrategia de seguridad continua/adaptativa prescribe cuatro acciones continuas para una defensa integral: Predicción, Protección, Detección y Respuesta."
    },
    {
        id: "p050",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Sobre la Inteligencia de Amenazas Cibernéticas (CTI) y el modelado de amenazas, elige las correctas:",
        opciones: [
            "La CTI sigue un ciclo de vida que incluye planificación, recolección, procesamiento, análisis, difusión y retroalimentación.",
            "El modelado de amenazas evalúa la seguridad de una aplicación comenzando por la explotación real del sistema.",
            "La CTI recopila información sobre actores, estadísticas de brechas, conflictos geopolíticos y evolución de las TTP.",
            "El proceso IH&R se encarga exclusivamente de la detección de anomalías mediante técnicas no supervisadas de IA/ML."
        ],
        correctas: [0, 2],
        explicacion: "La CTI recopila información sobre actores y tendencias y sigue un ciclo de vida de planificación a retroalimentación. El modelado de amenazas no empieza por la explotación real (es un proceso teórico de 5 pasos que inicia identificando objetivos). El proceso IH&R es de gestión integral de incidentes, no es exclusivo de algoritmos de IA/ML[cite: 15, 16]."
    },
    {
        id: "p051",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "La enumeración de debilidades de software como, por ejemplo, la inyección SQL, está catalogada en la industria bajo el identificador:",
        opciones: [
            "CVE",
            "CVSS",
            "CWE",
            "EPSS"
        ],
        correctas: [2],
        explicacion: "CWE (Common Weakness Enumeration) es el catálogo de tipos de debilidad de software (ej. CWE-89, inyección SQL) y abarca listas como el 'Top 25'."
    },
    {
        id: "p052",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "En el escaneo y análisis de vulnerabilidades, ¿qué diferencias existen entre los distintos enfoques de escaneo?",
        opciones: [
            "El escaneo activo observa el tráfico sin enviar paquetes al objetivo, haciéndolo indetectable.",
            "El escaneo autenticado utiliza credenciales válidas y, por tanto, permite ver mucho más de la superficie de ataque interna.",
            "El escaneo basado en inferencia construye un inventario de protocolos y adapta el escaneo a lo que encuentra.",
            "Un escáner de vulnerabilidades confirma de forma absoluta que un fallo es explotable y no requiere verificación humana."
        ],
        correctas: [1, 2],
        explicacion: "El escaneo autenticado usa credenciales y ve mucho más de la superficie. El escaneo basado en inferencia construye un inventario de protocolos y adapta el escaneo. El escaneo activo interactúa directamente enviando tráfico, no es pasivo/indetectable. Los escáneres sugieren la vulnerabilidad por versión y arrojan falsos positivos, siempre requieren verificación antes de darlos por válidos[cite: 22, 23]."
    },
    {
        id: "p053",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Qué base de datos mantenida por el NIST de EE. UU. enriquece los identificadores CVE con puntuaciones CVSS y referencias adicionales?",
        opciones: [
            "MITRE ATT&CK",
            "NVD",
            "Exploit-DB",
            "OWASP WSTG"
        ],
        correctas: [1],
        explicacion: "La NVD (National Vulnerability Database) del NIST enriquece los CVE con puntuaciones CVSS y referencias."
    },
    {
        id: "p054",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "dificil",
        enunciado: "Según el Código Penal español abordado en la UD1, marca las asociaciones correctas entre artículo y delito:",
        opciones: [
            "Art. 197 y 197 bis-ter CP: Descubrimiento y revelación de secretos; acceso no autorizado a sistemas.",
            "Art. 264 y ss. CP: Estafa informática y fraude.",
            "Art. 400 CP: Fabricación o tenencia de programas destinados a cometer delitos informáticos.",
            "El acceso no autorizado solo es punible si el atacante causa un daño demostrable o copia información."
        ],
        correctas: [0, 2],
        explicacion: "El Art. 197 regula el descubrimiento/revelación de secretos y el acceso no autorizado. El Art. 400 penaliza la tenencia/fabricación de programas para cometer estos delitos. El Art. 264 trata de daños informáticos, no estafa (que es el 248). La afirmación del daño es falsa: 'el acceso no autorizado ya es punible aunque no se cause daño ni se copie nada'."
    },
    {
        id: "p055",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "Herramientas como Wazuh o Splunk, cuya función es centralizar logs y alertas ofreciendo correlación y monitorización (visión Blue Team), pertenecen a la categoría de:",
        opciones: [
            "IDS/IPS",
            "Escáneres web",
            "SIEM",
            "Analizadores de protocolos"
        ],
        correctas: [2],
        explicacion: "Wazuh y Splunk son soluciones SIEM (correlación y monitorización) que centralizan logs y alertas."
    },
    {
        id: "p056",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "¿Cuál es el enfoque principal de la herramienta GFI LanGuard?",
        opciones: [
            "Acelerar el descubrimiento mediante Inteligencia Artificial.",
            "Detectar y bloquear tráfico malicioso a nivel de red.",
            "Escáner de vulnerabilidades y gestión de parches para evaluación y remediación en entornos Windows.",
            "Identificar configuraciones inseguras de manera exclusiva en servidores Linux/Apache."
        ],
        correctas: [2],
        explicacion: "GFI LanGuard es un escáner y gestor de parches para evaluación y remediación, enfocado principalmente en entornos Windows."
    },
    {
        id: "p057",
        tema: "3. Hacking ético",
        dificultad: "media",
        enunciado: "Un equipo especializado que realiza pruebas de seguridad a gran escala, combinando ataques a la red, sistemas e intrusión física, se denomina:",
        opciones: [
            "Tiger Team",
            "Blue Hat",
            "Sindicato cibernético",
            "Certificado de Acreditación"
        ],
        correctas: [0],
        explicacion: "Un equipo que realiza pruebas a gran escala (red, sistemas e intrusión física) se denomina Tiger Team."
    },
    {
        id: "p058",
        tema: "2. Conceptos de hacking",
        dificultad: "dificil",
        enunciado: "Dentro de las clases de atacantes, ¿cómo se caracterizan los 'Sindicatos / hackers organizados'?",
        opciones: [
            "Actúan siempre sin ánimo de lucro y buscan la justicia social.",
            "Son grupos criminales estructurados jerárquicamente que operan con recursos, botnets y crimeware.",
            "Se dedican exclusivamente a probar la seguridad de productos en fase beta.",
            "Son novatos que utilizan scripts de terceros sin entender la tecnología subyacente."
        ],
        correctas: [1],
        explicacion: "Los sindicatos o hackers organizados son grupos criminales estructurados jerárquicamente que operan con recursos, botnets y crimeware."
    },
    {
        id: "p059",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "En el Código Penal español, ¿qué establece el Artículo 197 quater?",
        opciones: [
            "La normativa sobre cookies y rastreadores web.",
            "Un agravante cuando los hechos informáticos se cometen en el seno de una organización criminal.",
            "La exención de penas para los auditores (White Hats).",
            "La protección de infraestructuras críticas del Estado."
        ],
        correctas: [1],
        explicacion: "El Art. 197 quater CP establece un agravante cuando los hechos se cometen en organización criminal."
    },
    {
        id: "p060",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "El modelado de amenazas evalúa la seguridad de una aplicación en 5 pasos secuenciales. Selecciona los dos primeros pasos:",
        opciones: [
            "Explotar vulnerabilidades y aplicar parches.",
            "Identificar amenazas y descomponer la aplicación.",
            "Identificar los objetivos de seguridad y crear una visión general de la aplicación.",
            "Asignar puntuación CVSS y generar el informe técnico."
        ],
        correctas: [2],
        explicacion: "Los primeros pasos del modelado de amenazas son: (1) identificar los objetivos de seguridad; (2) crear una visión general de la aplicación."
    }
];
