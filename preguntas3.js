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
        explicacion: "Libicki la dividió en comando y control (C2), inteligencia, electrónica, psicológica, de hackers, económica y ciberguerra. La criptografía cuántica no se menciona en su clasificación[cite: 3]."
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
        explicacion: "La transmisión insegura y servicios mal configurados son vulnerabilidades de configuración[cite: 2]. Equipos propensos a DoS/MITM son debilidades tecnológicas inherentes[cite: 2]. Los protocolos TCP/IP inseguros son tecnológicas, no de configuración[cite: 2], y las vulnerabilidades también ocurren por negligencia del usuario final[cite: 2]."
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
        explicacion: "El Hacktivista irrumpe en sistemas como acto de protesta, promoviendo una agenda política o social mediante defacements o filtraciones[cite: 4]."
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
        explicacion: "La Fase 1 incluye el footprinting (recopilación de información pasiva o activa) y el escaneo (identificación de hosts activos y puertos)[cite: 8]. La escalada es Fase 3 y el borrado de registros es Fase 5[cite: 8, 9]."
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
        explicacion: "MITRE ATT&CK es una base de conocimiento pública, globalmente accesible, de tácticas y técnicas de adversarios basada en observaciones del mundo real[cite: 10]."
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
        explicacion: "La Armamentización crea el payload malicioso a medida[cite: 9] y la Explotación aprovecha la vulnerabilidad[cite: 9]. Establecer un canal cifrado es la fase de Comando y control (C2), no Instalación[cite: 9]. Recopilar información pública es Reconocimiento, no Acciones sobre los objetivos[cite: 9]."
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
        explicacion: "Antes de tocar el sistema se firma un contrato que fija el alcance exacto, los contactos de emergencia, el NDA y la autorización expresa del propietario legítimo[cite: 12]. La entrega del informe ocurre en la fase final (6. Informe), no en el pre-compromiso[cite: 12]."
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
        explicacion: "La estrategia de seguridad continua/adaptativa prescribe cuatro acciones continuas para una defensa integral: Predicción, Protección, Detección y Respuesta[cite: 13]."
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
        explicacion: "La CTI recopila información sobre actores y tendencias y sigue un ciclo de vida de planificación a retroalimentación[cite: 15]. El modelado de amenazas no empieza por la explotación real (es un proceso teórico de 5 pasos que inicia identificando objetivos)[cite: 15]. El proceso IH&R es de gestión integral de incidentes, no es exclusivo de algoritmos de IA/ML[cite: 15, 16]."
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
        explicacion: "CWE (Common Weakness Enumeration) es el catálogo de tipos de debilidad de software (ej. CWE-89, inyección SQL) y abarca listas como el 'Top 25'[cite: 18]."
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
        explicacion: "El escaneo autenticado usa credenciales y ve mucho más de la superficie[cite: 22]. El escaneo basado en inferencia construye un inventario de protocolos y adapta el escaneo[cite: 22]. El escaneo activo interactúa directamente enviando tráfico, no es pasivo/indetectable[cite: 22]. Los escáneres sugieren la vulnerabilidad por versión y arrojan falsos positivos, siempre requieren verificación antes de darlos por válidos[cite: 22, 23]."
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
        explicacion: "La NVD (National Vulnerability Database) del NIST enriquece los CVE con puntuaciones CVSS y referencias[cite: 18]."
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
        explicacion: "El Art. 197 regula el descubrimiento/revelación de secretos y el acceso no autorizado[cite: 24]. El Art. 400 penaliza la tenencia/fabricación de programas para cometer estos delitos[cite: 24]. El Art. 264 trata de daños informáticos, no estafa (que es el 248)[cite: 24]. La afirmación del daño es falsa: 'el acceso no autorizado ya es punible aunque no se cause daño ni se copie nada'[cite: 24]."
    },
    {
        id: "p055",
        tema: "Glosario (Redes y Sistemas)",
        dificultad: "media",
        enunciado: "En el entorno de Metasploit, ¿qué término designa la 'carga útil' o el código que se ejecuta tras aprovechar una vulnerabilidad para lograr el efecto deseado?",
        opciones: [
            "Exploit",
            "Payload",
            "Scanner",
            "Honeypot"
        ],
        correctas: [1],
        explicacion: "El 'Payload' es la carga útil, el código que se ejecuta tras aprovechar una vulnerabilidad y que produce el efecto buscado (por ejemplo, una reverse shell)[cite: 27]."
    },
    {
        id: "p056",
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "dificil",
        enunciado: "Identifica las sentencias verdaderas sobre las herramientas y ataques inalámbricos (UD2):",
        opciones: [
            "airodump-ng captura tráfico y permite listar redes (BSSID) y clientes conectados.",
            "WPS (Wi-Fi Protected Setup) es un mecanismo inherentemente invulnerable a la fuerza bruta.",
            "El modo monitor es estrictamente necesario para auditar Wi-Fi porque permite capturar todo el tráfico del aire.",
            "hashcat se utiliza exclusivamente para crackear redes WEP sin uso de GPU."
        ],
        correctas: [0, 2],
        explicacion: "airodump-ng captura tráfico, lista redes y clientes[cite: 28]. El modo monitor permite capturar todo el tráfico del aire, siendo el primer paso obligatorio[cite: 29]. WPS es históricamente vulnerable a fuerza bruta, no invulnerable[cite: 30]. Hashcat aprovecha la GPU y soporta múltiples formatos como WPA y NTLM, no es exclusivo de WEP[cite: 29]."
    },
    {
        id: "p057",
        tema: "Glosario (Post-Explotación)",
        dificultad: "media",
        enunciado: "¿Qué ataque contra Active Directory solicita tickets de servicio (TGS) para poder crackear las contraseñas de las cuentas de servicio de manera offline?",
        opciones: [
            "Kerberoasting",
            "Pass-the-Hash (PtH)",
            "ARP Spoofing",
            "MAC Spoofing"
        ],
        correctas: [0],
        explicacion: "Kerberoasting es el ataque a AD que solicita tickets de servicio para crackear offline las contraseñas de cuentas de servicio[cite: 35]."
    },
    {
        id: "p058",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "Selecciona las técnicas o herramientas correctas relacionadas con la escalada de privilegios y recolección de información:",
        opciones: [
            "SUID es un permiso especial de Linux que permite ejecutar un binario con los privilegios de su propietario (a menudo root).",
            "GTFOBins es un catálogo de binarios de Windows empleados exclusivamente para eludir el antivirus.",
            "winPEAS y linPEAS son scripts que automatizan la búsqueda de vías de escalada de privilegios.",
            "BloodHound se utiliza para ofuscar (ocultar) las conexiones dentro de un entorno de Active Directory."
        ],
        correctas: [0, 2],
        explicacion: "SUID permite ejecutar con privilegios del propietario[cite: 36]. winPEAS y linPEAS automatizan la búsqueda de vías de escalada[cite: 36]. GTFOBins es para binarios de Unix, no Windows[cite: 34]. BloodHound mapea relaciones para hallar rutas de ataque, no para ofuscar o esconder nada[cite: 34]."
    },
    {
        id: "p059",
        tema: "Módulos complementarios",
        dificultad: "media",
        enunciado: "El ataque DoS que satura la tabla de conexiones de un servidor enviando peticiones iniciales sin llegar a completar el 'handshake TCP' se denomina:",
        opciones: [
            "SYN flood",
            "SSRF",
            "Evil Twin",
            "Session hijacking"
        ],
        correctas: [0],
        explicacion: "El ataque SYN flood satura la tabla de conexiones enviando peticiones SYN sin completar el handshake TCP[cite: 40]."
    },
    {
        id: "p060",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "Señala las descripciones correctas de las vulnerabilidades web del OWASP Top 10:",
        opciones: [
            "IDOR es un fallo de control de acceso que permite a un usuario ver registros de otro modificando un parámetro (ej. ?id=123).",
            "LFI (Local File Inclusion) ocurre cuando un servidor incluye ficheros remotos alojados en el equipo del atacante.",
            "Command Injection consiste en inyectar código SQL para manipular directamente una base de datos.",
            "CSRF obliga al navegador de la víctima a realizar acciones no deseadas aprovechando que tiene una sesión activa."
        ],
        correctas: [0, 3],
        explicacion: "IDOR permite acceder a recursos de otros cambiando un identificador[cite: 38]. CSRF fuerza acciones usando la sesión activa de la víctima[cite: 37]. LFI es inclusión de ficheros locales (no remotos, eso es RFI)[cite: 38]. Command Injection ejecuta comandos del sistema operativo; la manipulación de bases de datos se llama inyección SQL (SQLi)[cite: 37, 38]."
    }
];
