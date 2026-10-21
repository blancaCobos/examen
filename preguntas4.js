const preguntas4 = [
    {
        id: "p061",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Dentro de los cinco elementos de la seguridad de la información, ¿cuál se encarga de garantizar la fiabilidad de los datos previniendo cambios indebidos o no autorizados?",
        opciones: [
            "Confidencialidad",
            "Integridad",
            "Disponibilidad",
            "Autenticidad"
        ],
        correctas: [1],
        explicacion: "La Integridad garantiza la fiabilidad de los datos previniendo cambios indebidos o no autorizados; sus controles habituales incluyen el uso de checksum/hash."
    },
    {
        id: "p062",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Identifica las afirmaciones correctas sobre las vulnerabilidades y sus causas:",
        opciones: [
            "El uso compartido de credenciales y la conexión a redes inseguras se consideran actos de negligencia del usuario final.",
            "Una vulnerabilidad es una fortaleza en el diseño de un sistema que impide eludir la autenticación.",
            "Las contraseñas débiles de cuentas del sistema y los servicios de Internet mal configurados son ejemplos de vulnerabilidades de configuración.",
            "Las vulnerabilidades inherentes de la tecnología siempre se solucionan modificando las políticas del usuario."
        ],
        correctas: [0, 2],
        explicacion: "La negligencia del usuario final incluye el uso compartido de credenciales y conexión a redes inseguras. Las contraseñas débiles y servicios mal configurados son vulnerabilidades de configuración. Una vulnerabilidad es una debilidad, no una fortaleza."
    },
    {
        id: "p063",
        tema: "2. Conceptos de hacking",
        dificultad: "media",
        enunciado: "¿Qué tipo de hacker trabaja contratado por gobiernos para penetrar y obtener información de alto secreto o dañar sistemas de otras naciones?",
        opciones: [
            "Patrocinado por el Estado",
            "Sindicatos organizados",
            "Ciberterrorista",
            "Insider"
        ],
        correctas: [0],
        explicacion: "El hacker patrocinado por el Estado es contratado por gobiernos para penetrar y obtener información de alto secreto o dañar sistemas de otras naciones."
    },
    {
        id: "p064",
        tema: "2. Conceptos de hacking",
        dificultad: "dificil",
        enunciado: "En la taxonomía de los hackers, ¿qué diferencias clave existen entre un 'Black Hat' y un 'Script kiddie'?",
        opciones: [
            "El Black Hat usa sus habilidades con fines defensivos; el Script kiddie con fines ilegales.",
            "El Black Hat tiene altas habilidades y fines maliciosos, mientras que el Script kiddie apenas tiene habilidades y compromete sistemas ejecutando scripts de otros.",
            "El Script kiddie busca notoriedad, mientras que el Black Hat suele buscar beneficio económico u otros fines maliciosos.",
            "El Script kiddie siempre es contratado por el Estado para realizar auditorías."
        ],
        correctas: [1, 2],
        explicacion: "El Black Hat (o cracker) usa altas habilidades con fines ilegales/maliciosos. El Script kiddie apenas tiene habilidades, compromete sistemas con herramientas de terceros y busca notoriedad."
    },
    {
        id: "p065",
        tema: "3. Hacking ético",
        dificultad: "media",
        enunciado: "¿Qué evaluación busca responder a las preguntas: '¿qué puede ver un atacante en el sistema?', '¿qué puede hacer con esa información?' y '¿se están detectando sus intentos?'?",
        opciones: [
            "La auditoría de calidad de código fuente.",
            "La evaluación de un hacker ético.",
            "La inspección física del centro de datos.",
            "El escaneo de vulnerabilidades automatizado."
        ],
        correctas: [1],
        explicacion: "La evaluación de un hacker ético busca responder esas tres preguntas clave para entender el riesgo real desde la perspectiva del atacante."
    },
    {
        id: "p066",
        tema: "3. Hacking ético",
        dificultad: "dificil",
        enunciado: "Señala las afirmaciones correctas sobre el alcance, las limitaciones y las habilidades del hacking ético:",
        opciones: [
            "El alcance limita la responsabilidad: cruzarlo puede causar pérdidas al cliente y responsabilidad legal para el auditor.",
            "El hacker ético debe implementar directamente todas las salvaguardas y parches tras entregar el informe.",
            "Las habilidades no técnicas incluyen la redacción de informes y el compromiso con las políticas de seguridad.",
            "Un 'Tiger Team' es un equipo que realiza pruebas exclusivas sobre la red Wi-Fi."
        ],
        correctas: [0, 2],
        explicacion: "El alcance limita la responsabilidad y cruzarlo tiene consecuencias legales. Las habilidades no técnicas incluyen redacción de informes y resolución de problemas. El hacker ético ayuda a comprender la seguridad, pero corresponde a la organización implementar las salvaguardas. Un Tiger Team realiza pruebas a gran escala (red, sistemas e intrusión física), no solo Wi-Fi."
    },
    {
        id: "p067",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "En la matriz MITRE ATT&CK, la matriz 'Enterprise' contiene 14 categorías de tácticas que derivan de:",
        opciones: [
            "Las etapas posteriores de la Cyber Kill Chain.",
            "Las certificaciones ISO 27001.",
            "El modelo OSI de redes.",
            "Las reglas de Firewall de Windows."
        ],
        correctas: [0],
        explicacion: "La matriz Enterprise contiene 14 categorías de tácticas derivadas de las etapas posteriores de la Cyber Kill Chain, aportando mayor granularidad."
    },
    {
        id: "p068",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "Sobre el Modelo Diamante de Análisis de Intrusión ampliado, ¿qué metacaracterísticas adicionales se añaden al modelo básico?",
        opciones: [
            "Sociopolíticas (relación adversario-víctima, motivación).",
            "Financieras (coste exacto del incidente).",
            "Tecnológicas (relación infraestructura-capacidad).",
            "Jurídicas (penas de cárcel aplicables)."
        ],
        correctas: [0, 2],
        explicacion: "El modelo extendido añade metacaracterísticas sociopolíticas (relación adversario-víctima, motivación) y tecnológicas (relación infraestructura-capacidad)."
    },
    {
        id: "p069",
        tema: "5. Las fases de una prueba de intrusión",
        dificultad: "media",
        enunciado: "¿En qué fase del ciclo de pentesting se ejecutan técnicas como la escalada de privilegios, el pivoting y el looting?",
        opciones: [
            "Fase 1. Reconocimiento",
            "Fase 3. Análisis de vulnerabilidades",
            "Fase 5. Post-explotación",
            "Fase 6. Informe"
        ],
        correctas: [2],
        explicacion: "La Fase 5 (Post-explotación) incluye la escalada de privilegios, la persistencia, el pivoting y el looting."
    },
    {
        id: "p070",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Señala cuáles de las siguientes son fases correctas del proceso de Gestión de Riesgos:",
        opciones: [
            "Identificación de riesgos: detectar fuentes y causas antes de que causen daño.",
            "Explotación del riesgo: comprometer activamente los sistemas vulnerables.",
            "Tratamiento del riesgo: seleccionar e implementar controles adecuados según la severidad.",
            "Seguimiento y revisión: garantizar que los controles son adecuados y evaluar el rendimiento."
        ],
        correctas: [0, 2, 3],
        explicacion: "Las fases de la gestión de riesgos incluyen la identificación, evaluación, tratamiento, y seguimiento/revisión. La 'explotación' no es una fase de la gestión de riesgos defensiva."
    },
    {
        id: "p071",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Qué tipo de vulnerabilidad es aquella que es desconocida por el fabricante y para la cual aún no existe un parche disponible?",
        opciones: [
            "Vulnerabilidad de plataforma heredada (legacy)",
            "Vulnerabilidad de día cero (zero-day)",
            "Defecto de diseño",
            "Malconfiguración"
        ],
        correctas: [1],
        explicacion: "Las vulnerabilidades de día cero (zero-day) son aquellas desconocidas por el fabricante y sin parche disponible."
    },
    {
        id: "p072",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "En el ciclo de vida de la gestión de vulnerabilidades, ¿qué acciones corresponden a las fases de Remediación y Verificación?",
        opciones: [
            "Remediación: crear una línea base e inventariar activos.",
            "Remediación: corregir las vulnerabilidades mediante parches, reconfiguración o mitigación.",
            "Verificación: comprobar que la corrección aplicada es efectiva.",
            "Verificación: clasificar los hallazgos según su CVSS."
        ],
        correctas: [1, 2],
        explicacion: "En la Remediación se corrigen las vulnerabilidades (parches, mitigación), y en la Verificación se comprueba que dicha corrección ha sido efectiva. Crear un inventario es Preevaluación, y clasificar por CVSS es Evaluación de riesgos."
    },
    {
        id: "p073",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "¿Qué estándar internacional certifica un Sistema de Gestión de la Seguridad de la Información (SGSI)?",
        opciones: [
            "PCI DSS",
            "ISO/IEC 27001",
            "HIPAA",
            "SOX"
        ],
        correctas: [1],
        explicacion: "La norma ISO/IEC 27001 regula el Sistema de gestión de la seguridad de la información (SGSI)."
    },
    {
        "id": "p074",
        "tema": "7. Análisis de vulnerabilidades",
        "dificultad": "media",
        "enunciado": "¿Qué diferencia principal existe entre el escaneo de vulnerabilidades activo y el pasivo?",
        "opciones": [
            "El escaneo activo observa el tráfico sin interactuar, mientras que el pasivo envía paquetes directos al objetivo.",
            "El escaneo activo interactúa directamente con el objetivo enviando tráfico, mientras que el pasivo observa el tráfico sin interactuar.",
            "El escaneo activo requiere credenciales de administrador (autenticado), el pasivo no.",
            "El escaneo pasivo solo detecta vulnerabilidades web, mientras que el activo detecta vulnerabilidades de red."
        ],
        "correctas": [1],
        "explicacion": "El escaneo activo interactúa directamente con el objetivo enviando tráfico y observando las respuestas, mientras que el escaneo pasivo observa el tráfico sin interactuar con el objetivo."
    },
    {
        "id": "p075",
        "tema": "1. Conceptos de seguridad de la información",
        "dificultad": "dificil",
        "enunciado": "Según las categorías de ataques de la IATF, ¿cuáles de las siguientes descripciones son correctas?",
        "opciones": [
            "Los ataques pasivos alteran los datos en tránsito para engañar al receptor.",
            "Los ataques de cercanía se realizan en proximidad física al objetivo, como el 'shoulder surfing'.",
            "Los ataques activos interceptan y monitorizan el tráfico sin alterarlo.",
            "Los ataques internos los realiza una persona de confianza con acceso físico o lógico privilegiado."
        ],
        "correctas": [1, 3],
        "explicacion": "Los ataques de cercanía se realizan en proximidad física al objetivo (ej. shoulder surfing, dumpster diving) y los ataques internos los realiza una persona de confianza con acceso privilegiado[cite: 10, 11]. Los ataques pasivos no alteran datos, y los activos sí lo hacen[cite: 9, 10]."
    },
    {
        "id": "p076",
        "tema": "7. Análisis de vulnerabilidades",
        "dificultad": "media",
        "enunciado": "¿Para qué sirve el sistema EPSS (Exploit Prediction Scoring System) en la gestión de vulnerabilidades?",
        "opciones": [
            "Identifica el tipo genérico de debilidad de software, como la inyección SQL.",
            "Estima la probabilidad de explotación de una vulnerabilidad, complementando al CVSS para priorizar su corrección.",
            "Asigna un número único y público a cada vulnerabilidad conocida con el formato CVE-AÑO-NÚMERO.",
            "Sustituye al marco legal europeo sobre protección de datos personales."
        ],
        "correctas": [1],
        "explicacion": "El EPSS (Exploit Prediction Scoring System) estima la probabilidad de explotación de una vulnerabilidad y complementa a CVSS para ayudar a priorizar."
    },
    {
        "id": "p077",
        "tema": "8. Marco legal y estándares de seguridad",
        "dificultad": "dificil",
        "enunciado": "En el contexto del hacking ético y el marco legal español (Código Penal), señala la afirmación correcta sobre el acceso a sistemas:",
        "opciones": [
            "El acceso no autorizado solo es delito si el atacante altera o borra información crítica.",
            "El acceso no autorizado es punible aunque no se cause daño ni se copie nada, ya que la frontera es el consentimiento explícito.",
            "La existencia de un sistema mal configurado equivale a una autorización tácita para auditarlo.",
            "Actuar bajo las directrices del hacking ético exime automáticamente de responsabilidad penal, incluso sin un contrato firmado previo."
        ],
        "correctas": [1],
        "explicacion": "El acceso no autorizado ya es punible (Art. 197 CP) aunque no se cause daño ni se copie nada. La frontera siempre es el consentimiento explícito; la existencia de una vulnerabilidad o un sistema mal configurado no equivale a una autorización para entrar[cite: 31, 32]."
    },
    {
        "id": "p078",
        "tema": "4. Metodologías y marcos de hacking",
        "dificultad": "media",
        "enunciado": "¿Qué son los Indicadores de Compromiso (IoC) dentro del análisis de amenazas y respuesta a incidentes?",
        "opciones": [
            "Son la inteligencia de amenazas definitiva que bloquea ataques automáticamente en el firewall.",
            "Son las pistas, artefactos y fragmentos forenses que evidencian una posible intrusión.",
            "Son las credenciales por defecto que los atacantes usan para comprometer sistemas heredados.",
            "Son normativas legales europeas que obligan a las empresas a reportar incidentes de seguridad."
        ],
        "correctas": [1],
        "explicacion": "Los Indicadores de Compromiso (IoC) son las pistas, artefactos y fragmentos forenses que evidencian una posible intrusión. No son inteligencia en sí mismos, pero conforman la materia prima del proceso de inteligencia de amenazas."
    },
    {
        "id": "p079",
        "tema": "3. Hacking ético",
        "dificultad": "media",
        "enunciado": "¿Cuál de las siguientes afirmaciones sobre el uso de la Inteligencia Artificial (IA) en el hacking ético es cierta, según el temario de la UD1?",
        "opciones": [
            "La IA es perfecta y reemplazará por completo la experiencia, la creatividad y el pensamiento crítico de los hackers éticos humanos.",
            "No existe ninguna herramienta de IA que pueda integrarse en la terminal para asistir en tareas de pentesting.",
            "La IA complementa la experiencia humana automatizando tareas repetitivas y mejorando el análisis, pero no sustituye el juicio contextual humano.",
            "El RGPD permite subir sin restricciones los datos reales de los clientes a servicios de IA en la nube para obtener mejores informes."
        ],
        "correctas": [2],
        "explicacion": "La IA complementa, no reemplaza, la experiencia humana, ya que no puede sustituir la creatividad ni el juicio contextual. Automatiza tareas y mejora la detección de amenazas, pero requiere supervisión. Subir datos reales a servicios en la nube puede incumplir el NDA y el RGPD."
    },
    {
        "id": "p080",
        "tema": "6. Controles de seguridad de la información",
        "dificultad": "dificil",
        "enunciado": "El Aseguramiento de la Información (IA) busca garantizar la integridad, disponibilidad, confidencialidad y autenticidad de la información. ¿Qué procesos ayudan a lograr este aseguramiento?",
        "opciones": [
            "Usar únicamente el cifrado de grado militar en todos los servidores de la empresa, ignorando las políticas de red.",
            "Desarrollar políticas y directrices, identificar vulnerabilidades, planificar recursos y formar al personal.",
            "Contratar un 'Tiger Team' de forma obligatoria cada semana para auditar el código fuente.",
            "Realizar la Certificación y Acreditación (C&A) y aplicar estrategias de autenticación de red y usuario."
        ],
        "correctas": [1, 3],
        "explicacion": "Los procesos que ayudan a lograr el Aseguramiento de la Información (IA) incluyen: desarrollar políticas y directrices, diseñar estrategias de autenticación de red y usuario, identificar vulnerabilidades y amenazas, planificar recursos, aplicar controles, realizar Certificación y Acreditación (C&A) y formar al personal."
    }
];
