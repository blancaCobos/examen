const preguntas6 = [
    {
        id: "p101",
        tema: "3. Hacking ético",
        dificultad: "media",
        enunciado: "¿Cuál de estas herramientas es un asistente de IA integrado en la terminal del ecosistema CEH v13?",
        opciones: [
            "OpenVAS",
            "ShellGPT",
            "GFI LanGuard",
            "Nessus"
        ],
        correctas: [1],
        explicacion: "ShellGPT es un asistente de IA integrado en la terminal mencionado como parte del ecosistema CEH v13."
    },
    {
        id: "p102",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "En el contexto de la inteligencia de amenazas, ¿cómo se clasifican los Indicadores de Compromiso (IoC) según su nivel de complejidad?",
        opciones: [
            "Atómicos (ej. IP, correos), Computados (ej. hashes, expresiones regulares) y de Comportamiento (ej. agrupación lógica de los anteriores).",
            "Físicos, Lógicos y Administrativos.",
            "De red, de aplicación, de hardware y de usuario final.",
            "Zero-day, Legacy y Malconfigurados."
        ],
        correctas: [0],
        explicacion: "Los IoC se distinguen en indicadores atómicos (IP, correos), computados (hashes, expresiones regulares) y de comportamiento (agrupaciones lógicas de los anteriores)."
    },
    {
        id: "p103",
        tema: "6. Controles de seguridad de la información",
        dificultad: "media",
        enunciado: "En los procesos de Aseguramiento de la Información (IA), ¿qué significan las siglas C&A?",
        opciones: [
            "Cifrado y Autenticación",
            "Certificación y Acreditación",
            "Control y Auditoría",
            "Clasificación y Análisis"
        ],
        correctas: [1],
        explicacion: "Uno de los procesos para lograr la Información Assurance (IA) es realizar Certificación y Acreditación (C&A)."
    },
    {
        id: "p104",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Selecciona las fórmulas correctas para calcular o conceptualizar el Nivel de Riesgo:",
        opciones: [
            "RIESGO = Amenazas × Vulnerabilidades × Impacto.",
            "RIESGO = Amenaza + Impacto - Vulnerabilidad.",
            "Nivel de Riesgo = Consecuencia × Probabilidad.",
            "RIESGO = Tácticas × Técnicas × Procedimientos."
        ],
        correctas: [0, 2],
        explicacion: "Las fórmulas válidas son: RIESGO = Amenazas × Vulnerabilidades × Impacto; y Nivel de Riesgo = Consecuencia × Probabilidad."
    },
    {
        id: "p105",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "Los fallos inherentes a la propia arquitectura de Windows o Linux se catalogan como vulnerabilidades de tipo:",
        opciones: [
            "Defectos del sistema operativo",
            "Malconfiguración",
            "Defectos de diseño de red",
            "Contraseñas por defecto"
        ],
        correctas: [0],
        explicacion: "Los fallos inherentes al SO se catalogan como Defectos del sistema operativo."
    },
    {
        id: "p106",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "La proliferación de dependencias externas y sistemas aislados o 'en la sombra' se clasifica como una vulnerabilidad debida a:",
        opciones: [
            "Gestión deficiente de parches.",
            "Vulnerabilidades de aplicación.",
            "Riesgos de terceros y activos no documentados.",
            "Gestión inadecuada de certificados."
        ],
        correctas: [2],
        explicacion: "Las dependencias externas y sistemas dispersos o 'en la sombra' se clasifican como Riesgos de terceros y activos no documentados."
    },
    {
        "id": "p107",
        "tema": "7. Análisis de vulnerabilidades",
        "dificultad": "media",
        "enunciado": "A diferencia del escaneo pasivo, el escaneo activo de vulnerabilidades implica:",
        "opciones": [
            "Observar el tráfico usando Wireshark en silencio.",
            "Instalar un backdoor en la máquina víctima.",
            "Que el escáner interactúa directamente con el objetivo enviando tráfico y observando las respuestas.",
            "Extraer información exclusivamente de bases de datos OSINT."
        ],
        "correctas": [2],
        "explicacion": "El escaneo activo interactúa directamente con el objetivo enviando tráfico y observando las respuestas, mientras que el pasivo solo observa[cite: 23]."
    },
    {
        id: "p108",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "En la categorización de riesgos según su impacto y la acción a tomar, relaciona correctamente:",
        opciones: [
            "Riesgo Extremo / grave: Tomar medidas preventivas pero sin urgencia.",
            "Riesgo Extremo / grave: Medidas inmediatas para combatir el riesgo por peligro inminente.",
            "Riesgo Bajo: Implementar los controles lo antes posible.",
            "Riesgo Bajo: Tomar medidas preventivas para mitigar sus efectos."
        ],
        correctas: [1, 3],
        explicacion: "Un nivel Extremo exige medidas inmediatas para combatir el riesgo (peligro inminente). Un riesgo Bajo requiere tomar medidas preventivas para mitigar sus efectos."
    },
    {
        id: "p109",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "Al realizar una comparativa de herramientas en un laboratorio, ¿qué característica principal distingue a OpenVAS de Nessus?",
        opciones: [
            "OpenVAS es un analizador de tráfico (sniffer), mientras que Nessus solo mapea puertos.",
            "OpenVAS es un escáner de código abierto y libre, mientras que Nessus es comercial (con versión Essentials limitada).",
            "Nessus se ejecuta obligatoriamente desde el navegador de la víctima.",
            "OpenVAS requiere la compra de licencias para poder escanear más de 16 IPs."
        ],
        correctas: [1],
        explicacion: "OpenVAS (Greenbone) es un escáner de vulnerabilidades de código abierto y libre, que funciona como alternativa a Nessus, el cual es comercial y su versión Essentials gratuita está limitada a 16 IP[cite: 21, 24]."
    },
    {
        id: "p110",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "En cuanto a los tipos de soluciones de evaluación de vulnerabilidades, ¿cuáles de las siguientes descripciones son precisas?",
        opciones: [
            "Solución basada en producto: Ofrecida como un servicio de auditoría externa por terceros.",
            "Solución basada en servicio: Se instala directamente en la red interna de la organización.",
            "Solución basada en árbol (tree-based): Aplica distintas estrategias de escaneo a cada máquina o componente.",
            "Solución basada en inferencia (inference-based): Adapta el escaneo en función del inventario de protocolos que encuentra."
        ],
        correctas: [2, 3],
        explicacion: "La solución basada en árbol aplica distintas estrategias a cada máquina, y la basada en inferencia adapta el escaneo a lo que encuentra. Basada en producto es la que se instala en la red, y basada en servicio es la ofrecida por terceros, justo al revés de lo que afirman las dos primeras opciones."
    },
    {
        id: "p111",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "Una solución de evaluación que aplica distintas estrategias a cada máquina o componente específico se denomina:",
        opciones: [
            "Basada en inferencia",
            "Basada en árbol (tree-based)",
            "Basada en producto",
            "Basada en servicio"
        ],
        correctas: [1],
        explicacion: "La solución basada en árbol (tree-based) aplica distintas estrategias a cada máquina/componente."
    },
    {
        id: "p112",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "¿Qué componentes suelen formar parte de un informe profesional de evaluación de vulnerabilidades?",
        opciones: [
            "Resumen ejecutivo y alcance de la evaluación.",
            "Lista de contraseñas root en texto plano extraídas de la red.",
            "Hallazgos detallados (CVE/CVSS) y análisis de causa raíz.",
            "Políticas de sanciones para los empleados que fallaron al configurar el servidor."
        ],
        correctas: [0, 2],
        explicacion: "Un informe habitual incluye resumen ejecutivo, alcance, metodología, hallazgos (CVSS/CVE), análisis de causa raíz y recomendaciones."
    },
    {
        id: "p113",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "El estándar internacional orientado a la protección de la información sanitaria en Estados Unidos es:",
        opciones: [
            "PCI DSS",
            "HIPAA",
            "SOX",
            "FISMA"
        ],
        correctas: [1],
        explicacion: "HIPAA es la norma aplicable a la protección de la información sanitaria en EE. UU.."
    },
    {
        id: "p114",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "dificil",
        enunciado: "Según el marco legal expuesto en la unidad, ¿qué acción penaliza el Artículo 400 del Código Penal?",
        opciones: [
            "La revelación de secretos empresariales por parte de la prensa.",
            "La interceptación de comunicaciones Wi-Fi.",
            "La fabricación o tenencia de programas destinados a cometer delitos informáticos.",
            "El borrado negligente de bases de datos por un empleado."
        ],
        correctas: [2],
        explicacion: "El Art. 400 CP penaliza la fabricación o tenencia de programas destinados a cometer delitos informáticos (estafa, daños, etc.)."
    },
    {
        id: "p115",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "¿Qué norma estadounidense regula la Gestión de la seguridad de la información federal?",
        opciones: [
            "FISMA",
            "PCI DSS",
            "NIS2",
            "ISO 27001"
        ],
        correctas: [0],
        explicacion: "FISMA regula la gestión de la seguridad de la información federal en EE. UU.."
    },
    {
        id: "p116",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "dificil",
        enunciado: "Diferencia correctamente el ámbito de aplicación del ENS y del RGPD en el marco europeo y español:",
        opciones: [
            "El ENS es obligatorio solo para el sector privado; el RGPD aplica al sector público y privado.",
            "El RGPD y la LOPDGDD exigen licitud, minimización, confidencialidad y responsabilidad proactiva en datos personales.",
            "El ENS (Esquema Nacional de Seguridad) es obligatorio para el sector público y sus proveedores.",
            "Ambas normativas solo protegen la información financiera de tarjetas de pago."
        ],
        correctas: [1, 2],
        explicacion: "El ENS es obligatorio para el sector público y sus proveedores. El RGPD/LOPDGDD protegen datos personales exigiendo licitud, minimización y responsabilidad proactiva."
    },
    {
        id: "p117",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "Según el Código Penal español, ¿qué artículos regulan la estafa informática y el fraude?",
        opciones: [
            "Art. 197 y 197 bis-ter CP",
            "Art. 248 y ss. CP",
            "Art. 400 CP",
            "Art. 264 y ss. CP"
        ],
        correctas: [1],
        explicacion: "El Art. 248 y siguientes del CP regulan la estafa informática y el fraude."
    },
    {
        id: "p118",
        tema: "3. Hacking ético",
        dificultad: "dificil",
        enunciado: "En relación a las reglas éticas y morales de un auditor (White Hat), ¿qué afirmaciones son correctas?",
        opciones: [
            "Se puede ejecutar un ataque de Denegación de Servicio (DoS) si se considera necesario para demostrar la vulnerabilidad, sin pactarlo.",
            "Es necesario firmar un acuerdo de confidencialidad (NDA).",
            "Nunca debe iniciarse la evaluación sin un documento legal firmado que otorgue permiso expreso.",
            "El auditor asume la responsabilidad de solucionar el código fuente de los fallos encontrados."
        ],
        correctas: [1, 2],
        explicacion: "Se requiere autorización expresa legal, firmar un NDA y mantener confidencialidad. Un DoS solo se ejecuta si se ha pactado previamente en el alcance."
    },
    {
        id: "p119",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "El uso indebido de PowerShell, la actividad inusual en cuentas privilegiadas o las anomalías geográficas son ejemplos de:",
        opciones: [
            "Indicadores de Compromiso (IoC) y comportamientos del adversario.",
            "Vulnerabilidades de diseño heredadas.",
            "Fases iniciales del Modelo Diamante.",
            "Políticas de hardening preventivo."
        ],
        correctas: [0],
        explicacion: "Son comportamientos típicos a vigilar e IoC habituales que evidencian una posible intrusión[cite: 63, 64]."
    },
    {
        id: "p120",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "Relaciona correctamente la categoría del IoC con el artefacto forense correspondiente:",
        opciones: [
            "De correo electrónico: Nombres de fichero y DLLs inyectadas.",
            "Basados en el host: Claves de registro alteradas y mutex detectados.",
            "De comportamiento: Ejecución de comandos codificados en PowerShell.",
            "De red: Archivos adjuntos y asuntos engañosos."
        ],
        correctas: [1, 2],
        explicacion: "Los basados en el host incluyen ficheros, registros, DLLs y mutex. Los de comportamiento incluyen la ejecución remota o de PowerShell. Los correos incluyen remitentes y adjuntos (no red), y red abarca IPs y dominios (no adjuntos)."
    }
];
