const preguntas6 = [
    {
        id: "p101",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "media",
        enunciado: "¿Qué herramienta funciona como un buscador local en Kali Linux para consultar rápidamente la base de datos de Exploit-DB?",
        opciones: [
            "searchsploit",
            "Nmap",
            "bettercap",
            "sqlmap"
        ],
        correctas: [0],
        explicacion: "searchsploit es un buscador local de exploits de la base de datos Exploit-DB, útil para localizar exploits tras identificar versiones vulnerables[cite: 34]."
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
        explicacion: "Los IoC se distinguen en indicadores atómicos (IP, correos), computados (hashes, expresiones regulares) y de comportamiento (agrupaciones lógicas de los anteriores)[cite: 10]."
    },
    {
        id: "p103",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿Qué tipo de cortafuegos específico se sitúa delante de una aplicación web para filtrar ataques como inyecciones SQL o XSS?",
        opciones: [
            "WAF (Web Application Firewall)",
            "IDS de red",
            "Filtro MAC",
            "Honeypot"
        ],
        correctas: [0],
        explicacion: "Un WAF (Web Application Firewall) es un cortafuegos específico que filtra ataques web (SQLi, XSS) antes de que lleguen a la aplicación[cite: 39]."
    },
    {
        id: "p104",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "Sobre la vulnerabilidad XSS (Cross-Site Scripting), selecciona las afirmaciones verdaderas:",
        opciones: [
            "XSS inyecta scripts en una web para que se ejecuten en el navegador de otros usuarios.",
            "Sus tres variantes principales son reflejado, almacenado y DOM.",
            "Se mitiga configurando la base de datos para no aceptar consultas preparadas (Prepared Statements).",
            "La sanitización, CSP (Content Security Policy) y la cookie HttpOnly son mecanismos de mitigación para XSS."
        ],
        correctas: [0, 1, 3],
        explicacion: "XSS inyecta scripts para que se ejecuten en el navegador de otros (variantes: reflejado, almacenado, DOM)[cite: 39]. Se mitiga con sanitización, CSP y la cookie HttpOnly[cite: 39]. Las consultas preparadas son la mitigación para inyecciones SQL, no XSS[cite: 39]."
    },
    {
        id: "p105",
        tema: "Módulos complementarios",
        dificultad: "media",
        enunciado: "En la ingeniería social, ¿cómo se denomina al engaño por correo electrónico que va dirigido y personalizado a una víctima específica (ej. un directivo)?",
        opciones: [
            "Spam",
            "Phishing",
            "Spear phishing",
            "Vishing"
        ],
        correctas: [2],
        explicacion: "El spear phishing es un tipo de engaño por correo que va dirigido y personalizado, a diferencia del phishing genérico[cite: 40]."
    },
    {
        id: "p106",
        tema: "Módulos complementarios",
        dificultad: "dificil",
        enunciado: "En auditorías de entornos Cloud, ¿qué principio explica que la mayoría de brechas son por errores de configuración del cliente?",
        opciones: [
            "El cifrado simétrico.",
            "El modelo de responsabilidad compartida.",
            "El principio de confianza cero (Zero Trust).",
            "La esteganografía en la nube."
        ],
        correctas: [1],
        explicacion: "El modelo de responsabilidad compartida reparte la seguridad entre el proveedor (hardware) y el cliente (datos y configuraciones); la mayoría de brechas cloud son errores de configuración del cliente[cite: 41]."
    },
    {
        id: "p107",
        tema: "Glosario (Post-Explotación)",
        dificultad: "media",
        enunciado: "¿En qué archivo almacenan los sistemas operativos Linux modernos las representaciones irreversibles (hashes) de las contraseñas de los usuarios?",
        opciones: [
            "SAM",
            "NTDS.dit",
            "/etc/passwd",
            "/etc/shadow"
        ],
        correctas: [3],
        explicacion: "Windows guarda hashes NTLM en la SAM, pero Linux guarda los hashes de contraseñas en /etc/shadow[cite: 34]."
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
        explicacion: "Un nivel Extremo exige medidas inmediatas para combatir el riesgo (peligro inminente)[cite: 14]. Un riesgo Bajo requiere tomar medidas preventivas para mitigar sus efectos[cite: 14]."
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
        explicacion: "La solución basada en árbol aplica distintas estrategias a cada máquina, y la basada en inferencia adapta el escaneo a lo que encuentra[cite: 22]. Basada en producto es la que se instala en la red, y basada en servicio es la ofrecida por terceros, justo al revés de lo que afirman las dos primeras opciones[cite: 22]."
    },
    {
        id: "p111",
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "media",
        enunciado: "¿Qué función de las redes Wi-Fi, diseñada para una configuración rápida mediante un PIN de 8 dígitos, es históricamente vulnerable a ataques de fuerza bruta?",
        opciones: [
            "WPA3",
            "WPS",
            "PMF",
            "PMKID"
        ],
        correctas: [1],
        explicacion: "WPS es una función de configuración rápida de Wi-Fi mediante PIN, históricamente vulnerable a fuerza bruta y cuya desactivación se recomienda[cite: 30]."
    },
    {
        id: "p112",
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "dificil",
        enunciado: "Respecto a las mitigaciones y evoluciones en seguridad Wi-Fi, marca las afirmaciones ciertas:",
        opciones: [
            "WEP es actualmente el estándar recomendado para domótica e IoT.",
            "PMF (Protected Management Frames) corresponde al estándar 802.11w y mitiga ataques de deauth.",
            "WPA3 incluye el protocolo SAE y resiste ataques de diccionario offline.",
            "El modo monitor es una defensa de los puntos de acceso para evitar suplantaciones (Evil Twin)."
        ],
        correctas: [1, 2],
        explicacion: "PMF (802.11w) mitiga los ataques de deauth[cite: 30]. WPA3 usa SAE y es resistente a ataques offline[cite: 30]. WEP está obsoleto y roto[cite: 30], y el modo monitor es una función de la tarjeta de red del atacante/auditor para capturar tráfico, no una defensa del AP[cite: 29]."
    },
    {
        id: "p113",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿Cuál es la función principal de la herramienta Burp Suite durante la auditoría de aplicaciones web?",
        opciones: [
            "Actuar como Proxy de interceptación para inspeccionar y modificar peticiones entre el navegador y el servidor.",
            "Escanear la red local en busca de puertos SMB abiertos.",
            "Craquear contraseñas Wi-Fi mediante fuerza bruta de diccionarios.",
            "Automatizar el análisis de código fuente."
        ],
        correctas: [0],
        explicacion: "Burp Suite es un proxy de auditoría web que intercepta, inspecciona y modifica las peticiones entre el navegador y el servidor[cite: 37]."
    },
    {
        id: "p114",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "En la fase de escalada de privilegios, un atacante se topa con un mecanismo que le solicita permiso explícito para ejecutar una acción como Administrador, o encuentra un script llamado 'winPEAS'. ¿Qué es cierto en estos escenarios?",
        opciones: [
            "El mecanismo que pide confirmación en Windows es el UAC (User Account Control).",
            "winPEAS es un script que explota automáticamente las vulnerabilidades sin intervención humana.",
            "En entornos Linux, el atacante buscaría abusar de permisos SUID para ejecutar binarios como su propietario (frecuentemente root).",
            "linPEAS detiene y elimina el malware en servidores Linux."
        ],
        correctas: [0, 2],
        explicacion: "El UAC de Windows pide confirmación para elevar privilegios[cite: 36]. En Linux se abusa del permiso especial SUID para ejecutar binarios como su propietario (root)[cite: 36]. winPEAS/linPEAS automatizan la búsqueda de vías de escalada (no explotan ni eliminan malware, solo buscan y alertan)[cite: 36]."
    },
    {
        id: "p115",
        tema: "Glosario (Pentesting de Redes)",
        dificultad: "media",
        enunciado: "¿Cómo se llama el formato de reto de ciberseguridad en el que hay que encontrar evidencias ocultas o comprometer máquinas para obtener una 'bandera'?",
        opciones: [
            "Role Play",
            "CTF (Capture The Flag)",
            "Bug Bounty",
            "Red Teaming"
        ],
        correctas: [1],
        explicacion: "Un CTF (Capture The Flag) es un reto de seguridad en el que hay que 'capturar banderas' resolviendo pruebas técnicas, como comprometer una máquina y leer un fichero flag.txt[cite: 31]."
    },
    {
        id: "p116",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "¿Qué relación existe entre las 'Rainbow tables' y el uso de la 'Sal' (salt) criptográfica en el almacenamiento de contraseñas?",
        opciones: [
            "La sal facilita que los hashes sean siempre idénticos y, por tanto, acelera el uso de las Rainbow tables.",
            "Una Rainbow table es una tabla precalculada de hashes que acelera el crackeo.",
            "La sal (salt) es un valor aleatorio que se añade a la contraseña antes de hashearla, lo que anula la eficacia de las Rainbow tables.",
            "Las Rainbow tables son útiles únicamente contra contraseñas con sal y el cifrado WEP."
        ],
        correctas: [1, 2],
        explicacion: "Una Rainbow table es una tabla precalculada de hashes que acelera el crackeo[cite: 36]. La sal añade un valor aleatorio a cada contraseña antes del hash, haciendo que contraseñas iguales tengan hashes distintos, lo cual anula completamente el uso de las Rainbow tables precalculadas[cite: 36]."
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
        explicacion: "El Art. 248 y siguientes del CP regulan la estafa informática y el fraude[cite: 24]."
    },
    {
        id: "p118",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "En la auditoría de bases de datos desde aplicaciones web, identifica la herramienta y su uso de forma correcta:",
        opciones: [
            "Burp Suite se utiliza para automatizar la extracción masiva de registros SQL.",
            "sqlmap es una herramienta que automatiza la detección y explotación de inyecciones SQL.",
            "ffuf / gobuster descubren inyecciones SQL encriptadas en protocolos Wi-Fi.",
            "sqlmap puede, entre otras acciones, enumerar bases de datos si se le proporciona un punto de inyección válido."
        ],
        correctas: [1, 3],
        explicacion: "sqlmap automatiza la detección y explotación de inyecciones SQL y puede enumerar bases de datos (ej. usando --dbs)[cite: 38]. Burp se usa como proxy[cite: 37], y ffuf/gobuster se utilizan para fuzzing y descubrimiento de directorios, no inyecciones SQL[cite: 37]."
    },
    {
        id: "p119",
        tema: "Módulos complementarios",
        dificultad: "media",
        enunciado: "¿Cómo se llama el ataque en el que un actor malicioso toma el control de una sesión ya autenticada robando su identificador (ej. una cookie), sin necesidad de conocer la contraseña?",
        opciones: [
            "Session hijacking (Secuestro de sesión)",
            "Phishing",
            "Jamming",
            "ARP Spoofing"
        ],
        correctas: [0],
        explicacion: "El Session hijacking (secuestro de sesión) consiste en tomar el control de una sesión ya autenticada robando su identificador (ej. mediante XSS), sin conocer la contraseña[cite: 41]."
    },
    {
        id: "p120",
        tema: "Glosario (Auditoría Web)",
        dificultad: "dificil",
        enunciado: "Compara las vulnerabilidades SSRF (Server-Side Request Forgery) y CSRF (Cross-Site Request Forgery). Selecciona las diferencias correctas:",
        opciones: [
            "SSRF obliga al servidor a hacer peticiones a destinos internos elegidos por el atacante.",
            "CSRF obliga al navegador de la víctima a realizar acciones no deseadas aprovechando su sesión activa.",
            "SSRF ataca siempre y exclusivamente la cookie de sesión del administrador del sitio.",
            "CSRF se utiliza para enumerar puertos internos del servidor donde se aloja la base de datos."
        ],
        correctas: [0, 1],
        explicacion: "SSRF obliga al servidor a realizar peticiones a destinos elegidos por el atacante[cite: 39]. CSRF obliga al navegador de la víctima a realizar acciones no deseadas usando su sesión activa[cite: 37]. El SSRF no ataca la cookie del administrador, y el CSRF no enumera puertos internos[cite: 37, 39]."
    }
];
