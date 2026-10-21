const preguntas1 = [
    {
        id: "p001",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "¿Qué elementos componen la clásica tríada CIA de la seguridad de la información?",
        opciones: [
            "Confidencialidad, Integridad y Autorización",
            "Confidencialidad, Integridad y Disponibilidad",
            "Cifrado, Identificación y Autenticación",
            "Concienciación, Integridad y Accesibilidad"
        ],
        correctas: [1],
        explicacion: "La seguridad de la información se sustenta en cinco elementos, donde los tres primeros forman la clásica tríada CIA: Confidencialidad, Integridad y Disponibilidad[cite: 1]."
    },
    {
        id: "p002",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "¿Qué propiedad de seguridad asegura que un emisor no pueda negar el envío de un mensaje ni el receptor su recepción?",
        opciones: [
            "Integridad",
            "Autenticidad",
            "No repudio",
            "Disponibilidad"
        ],
        correctas: [2],
        explicacion: "El No repudio es el elemento que garantiza que el emisor no pueda negar el envío ni el receptor la recepción, siendo los controles habituales las firmas digitales[cite: 1]."
    },
    {
        id: "p003",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Selecciona cuáles de las siguientes afirmaciones sobre autenticación, autorización y no repudio son correctas:",
        opciones: [
            "La autorización consiste en comprobar quién es la persona que accede.",
            "La autenticación comprueba la identidad, mientras que la autorización determina qué acciones están permitidas.",
            "El no repudio asegura que un usuario no pueda negar sus acciones en el sistema.",
            "La autenticidad es un concepto limitado exclusivamente al inicio de sesión."
        ],
        correctas: [1, 2],
        explicacion: "La autenticación comprueba quién eres, la autorización qué puedes hacer una vez identificado, y el no repudio garantiza que no puedas negar tus acciones[cite: 1]. La autenticidad es más amplia que el mero inicio de sesión, afectando a datos y transacciones[cite: 1]."
    },
    {
        id: "p004",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Según la anatomía de un ataque, un ataque se define como la combinación de:",
        opciones: [
            "Vulnerabilidad, Exploit y Payload",
            "Motivación (objetivo), Método (TTP) y Vulnerabilidad",
            "Amenaza, Riesgo e Impacto",
            "Ingeniería Social, Malware y Redes Botnet"
        ],
        correctas: [1],
        explicacion: "Un ataque puede conceptualizarse como la combinación de un motivo, un método y una vulnerabilidad, formulado como: Ataque = Motivación (objetivo) + Método (TTP) + Vulnerabilidad[cite: 1]."
    },
    {
        id: "p005",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "En el contexto del análisis de actores de amenazas (TTP), ¿cómo se definen las 'Tácticas' y los 'Procedimientos'?",
        opciones: [
            "Las tácticas son herramientas de software, y los procedimientos son scripts automatizados.",
            "Las tácticas son la estrategia global del adversario, y los procedimientos son la secuencia sistemática de acciones que ejecuta.",
            "Las tácticas identifican vulnerabilidades, y los procedimientos aplican los parches.",
            "Los procedimientos son los métodos técnicos para lograr resultados intermedios, y las tácticas la secuencia lógica."
        ],
        correctas: [1],
        explicacion: "Las tácticas son la estrategia global que sigue el adversario de principio a fin, mientras que los procedimientos son la secuencia sistemática de acciones que ejecuta. Los métodos técnicos intermedios corresponden a las técnicas[cite: 2]."
    },
    {
        id: "p006",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "media",
        enunciado: "Un ataque que intercepta y monitoriza el tráfico de red sin alterarlo, como el análisis de tráfico o el sniffing, pertenece a la categoría de:",
        opciones: [
            "Ataques Activos",
            "Ataques de Distribución",
            "Ataques Pasivos",
            "Ataques Internos"
        ],
        correctas: [2],
        explicacion: "Los ataques pasivos interceptan y monitorizan el tráfico sin alterarlo y son muy difíciles de detectar al no haber interacción activa. Ejemplos incluyen el footprinting y el sniffing[cite: 2]."
    },
    {
        id: "p007",
        tema: "1. Conceptos de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Dentro de las categorías de ataques de la IATF, señala las opciones correctas:",
        opciones: [
            "Los ataques activos son muy difíciles de detectar porque no alteran datos.",
            "Los ataques de cercanía (ej. dumpster diving o shoulder surfing) se realizan en proximidad física al objetivo.",
            "Los ataques internos los realiza siempre un individuo ajeno a la organización mediante intrusión lógica.",
            "Los ataques de distribución manipulan hardware o software antes de su instalación, en la cadena de suministro."
        ],
        correctas: [1, 3],
        explicacion: "Los ataques de cercanía se realizan en proximidad física (shoulder surfing, dumpster diving)[cite: 3]. Los de distribución manipulan hardware/software antes de la instalación, es decir, en la cadena de suministro[cite: 3]. Los activos sí alteran datos, y los internos los realiza una persona de confianza, no alguien ajeno[cite: 3]."
    },
    {
        id: "p008",
        tema: "2. Conceptos de hacking",
        dificultad: "media",
        enunciado: "¿Cuál de los siguientes términos define a un profesional externo contratado puntualmente para evaluar la seguridad de un producto antes de su lanzamiento?",
        opciones: [
            "Blue Hat",
            "White Hat",
            "Script Kiddie",
            "Red Hat"
        ],
        correctas: [0],
        explicacion: "Un Blue Hat es un profesional externo contratado puntualmente para evaluar un producto antes de su lanzamiento[cite: 4]."
    },
    {
        id: "p009",
        tema: "2. Conceptos de hacking",
        dificultad: "dificil",
        enunciado: "¿Qué caracteriza al 'Red Hat' y al 'Gray Hat' dentro de la taxonomía de los hackers?",
        opciones: [
            "El Red Hat sigue reglas éticas estrictas y trabaja para el Estado.",
            "El Gray Hat trabaja ofensiva y defensivamente, y a veces actúa sin permiso aunque sin ánimo claramente delictivo.",
            "El Red Hat adopta tácticas agresivas contra los black hat para neutralizarlos y no sigue reglas éticas estrictas.",
            "Ambos perfiles tienen siempre la intención explícita de causar daño económico."
        ],
        correctas: [1, 2],
        explicacion: "El Gray Hat trabaja ofensiva y defensivamente, actuando a veces sin permiso pero sin ánimo delictivo[cite: 4]. El Red Hat adopta tácticas agresivas contra los black hat para neutralizarlos y no sigue reglas éticas estrictas[cite: 4]."
    },
    {
        id: "p010",
        tema: "3. Hacking ético",
        dificultad: "media",
        enunciado: "Según la 'regla de oro' del hacking ético, ¿qué documento resulta indispensable antes de iniciar cualquier actividad de intrusión?",
        opciones: [
            "Un informe técnico automatizado de un escáner comercial.",
            "Un contrato de seguro de responsabilidad civil.",
            "Un documento legal firmado que otorgue permiso expreso.",
            "Un acta notarial de los hallazgos."
        ],
        correctas: [2],
        explicacion: "Ninguna actividad de hacking ético debe iniciarse sin un documento legal firmado que otorgue permiso expreso[cite: 6]."
    },
    {
        id: "p011",
        tema: "3. Hacking ético",
        dificultad: "dificil",
        enunciado: "¿Qué papel juega la Inteligencia Artificial en el contexto actual del hacking ético y qué precaución clave debe tomarse respecto a su uso?",
        opciones: [
            "La IA reemplaza completamente la necesidad de pensamiento crítico y análisis humano.",
            "Ayuda a automatizar tareas repetitivas y detección avanzada de amenazas (ej. zero-day).",
            "Debido al NDA y al RGPD, nunca se deben introducir datos reales de un cliente o credenciales en servicios de IA en la nube.",
            "La IA solo puede usarse en entornos aislados y está prohibida en evaluaciones de vulnerabilidades."
        ],
        correctas: [1, 2],
        explicacion: "La IA automatiza tareas repetitivas y ayuda a detectar amenazas avanzadas[cite: 7]. Como precaución crítica, no se deben introducir datos reales de un cliente, credenciales o información sensible en la nube por riesgo de incumplir el NDA y el RGPD[cite: 7]."
    },
    {
        id: "p012",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "Dentro de las 5 fases del marco de hacking ético CEH, ¿qué ocurre en la Fase 4: Mantenimiento del acceso?",
        opciones: [
            "El atacante elimina registros e historiales para permanecer indetectable.",
            "El atacante instala software malicioso o backdoors para retener el control del sistema comprometido.",
            "Se busca información en fuentes públicas como Whois.",
            "Se identifican, miden y clasifican las vulnerabilidades del sistema."
        ],
        correctas: [1],
        explicacion: "En la fase 4 (Mantenimiento del acceso) el atacante retiene el control, sube/manipula datos e instala software malicioso para mantener un perfil bajo. El borrado de rastros pertenece a la fase 5[cite: 9]."
    },
    {
        id: "p013",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "dificil",
        enunciado: "De acuerdo con el modelo 'Cyber Kill Chain' de Lockheed Martin, selecciona las afirmaciones verdaderas sobre sus etapas:",
        opciones: [
            "La 'Entrega (delivery)' es la transmisión del arma a la víctima (ej. adjunto de correo o enlace malicioso).",
            "La etapa de 'Reconocimiento' implica explotar la vulnerabilidad de forma remota.",
            "En 'Comando y control (C2)' se establece un canal bidireccional cifrado entre la víctima y el servidor del adversario.",
            "La 'Armamentización' es la acción final donde se destruyen los servidores de la organización."
        ],
        correctas: [0, 2],
        explicacion: "La fase de Entrega envía el arma a la víctima mediante correos, USB, etc.[cite: 9]. En la fase Comando y Control (C2) se establece un canal bidireccional cifrado para la explotación remota[cite: 9]. La explotación aprovecha la vulnerabilidad, y las acciones finales corresponden a 'Acciones sobre los objetivos'[cite: 9]."
    },
    {
        id: "p014",
        tema: "4. Metodologías y marcos de hacking",
        dificultad: "media",
        enunciado: "En el Análisis de Intrusión, el Modelo Diamante se basa en cuatro características fundamentales interconectadas. ¿Cuáles son?",
        opciones: [
            "Hardware, Software, Red y Humano",
            "Reconocimiento, Explotación, Escalada y Limpieza",
            "Adversario, Víctima, Capacidad e Infraestructura",
            "Confidencialidad, Integridad, Disponibilidad y No repudio"
        ],
        correctas: [2],
        explicacion: "El 'evento Diamante' consta de cuatro características básicas ordenadas por sus relaciones: Adversario, Víctima, Capacidad e Infraestructura[cite: 11]."
    },
    {
        id: "p015",
        tema: "5. Las fases de una prueba de intrusión",
        dificultad: "media",
        enunciado: "¿Cuál es el propósito principal de generar tanto un 'informe técnico' como un 'informe ejecutivo' al finalizar un pentest?",
        opciones: [
            "Para cobrar el doble al cliente según la metodología OSSTMM.",
            "El ejecutivo es para la dirección (orientado a riesgo y negocio) y el técnico es para el equipo TI (con detalle reproducible de fallos).",
            "El técnico se manda a las autoridades competentes, el ejecutivo a la prensa.",
            "No son obligatorios si el pentest no encontró ninguna vulnerabilidad severa."
        ],
        correctas: [1],
        explicacion: "Se distinguen dos entregables: el informe ejecutivo, dirigido a la dirección sin jerga técnica y orientado al negocio, y el informe técnico, para el equipo TI detallando y permitiendo reproducir cada hallazgo[cite: 12]."
    },
    {
        id: "p016",
        tema: "6. Controles de seguridad de la información",
        dificultad: "dificil",
        enunciado: "Respecto a la métrica y evaluación del riesgo, ¿cuál de las siguientes fórmulas y conceptos es correcta?",
        opciones: [
            "RIESGO = Amenazas × Vulnerabilidades × Impacto.",
            "El riesgo bajo implica medidas inmediatas ante peligro inminente.",
            "La matriz de riesgo escala la probabilidad frente a la consecuencia de un evento.",
            "Implementar controles de seguridad elimina siempre por completo el nivel de riesgo de un activo."
        ],
        correctas: [0, 2],
        explicacion: "Una fórmula del riesgo es: RIESGO = Amenazas × Vulnerabilidades × Impacto[cite: 14]. Además, la matriz de riesgo escala la probabilidad frente a la consecuencia para visualizar y comparar riesgos[cite: 14]. Las medidas de control reducen el nivel, pero rara vez lo eliminan por completo[cite: 14]."
    },
    {
        id: "p017",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "media",
        enunciado: "¿Qué identificador se utiliza universalmente para clasificar y referenciar una vulnerabilidad pública y conocida?",
        opciones: [
            "CWE",
            "CVSS",
            "CVE",
            "EPSS"
        ],
        correctas: [2],
        explicacion: "CVE (Common Vulnerabilities and Exposures) es el identificador único de cada vulnerabilidad conocida, como por ejemplo CVE-2021-44228[cite: 17]."
    },
    {
        id: "p018",
        tema: "7. Análisis de vulnerabilidades",
        dificultad: "dificil",
        enunciado: "En la evaluación de vulnerabilidades, ¿qué diferencia a un falso positivo de un falso negativo?",
        opciones: [
            "Un falso positivo ocurre cuando el escáner falla por falta de red; el negativo por falta de permisos.",
            "Un falso positivo es una alerta de algo que en realidad no es vulnerable; un falso negativo es una vulnerabilidad real no detectada.",
            "Un falso positivo es la puntuación CVSS superior a 9.0; falso negativo es inferior a 4.0.",
            "Los falsos positivos confirman que el exploit funcionará siempre, mientras el negativo indica mitigaciones presentes."
        ],
        correctas: [1],
        explicacion: "Un falso positivo es una alerta de algo que en realidad no es vulnerable, mientras que un falso negativo es una vulnerabilidad real que la herramienta no llega a detectar[cite: 26]."
    },
    {
        id: "p019",
        tema: "8. Marco legal y estándares de seguridad",
        dificultad: "media",
        enunciado: "En el marco legal europeo y español, ¿qué directiva impone obligaciones de ciberseguridad a sectores esenciales e importantes?",
        opciones: [
            "Directiva NIS2 (UE 2022/2555)",
            "LOPDGDD (LO 3/2018)",
            "Art. 197 quater CP",
            "Esquema Nacional de Seguridad (ENS)"
        ],
        correctas: [0],
        explicacion: "La Directiva NIS2 (UE 2022/2555) es la normativa que regula las obligaciones de ciberseguridad de sectores esenciales e importantes[cite: 24]."
    },
    {
        id: "p020",
        tema: "Glosario (UD1)",
        dificultad: "dificil",
        enunciado: "En un test de intrusión, ¿qué define el 'Scope' (alcance) y qué implica salirse del mismo?",
        opciones: [
            "Es el conjunto de activos, técnicas y tiempos autorizados; salirse de él puede suponer un delito.",
            "Es la puntuación CVSS máxima permitida; salirse implica un falso positivo.",
            "Es el tiempo límite del examen; salirse de él requiere reiniciar la máquina.",
            "Es el contrato económico; salirse de él solo implica una penalización financiera."
        ],
        correctas: [0],
        explicacion: "El alcance (scope) es el conjunto de activos, técnicas y tiempos que la autorización permite probar[cite: 50]. Salirse de él supone el suspenso en el curso y, en la realidad, un delito[cite: 51]."
    }
];
