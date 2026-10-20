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
        explicacion: "La Integridad garantiza la fiabilidad de los datos previniendo cambios indebidos o no autorizados; sus controles habituales incluyen el uso de checksum/hash[cite: 1]."
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
        explicacion: "La negligencia del usuario final incluye el uso compartido de credenciales y conexión a redes inseguras[cite: 2]. Las contraseñas débiles y servicios mal configurados son vulnerabilidades de configuración[cite: 2]. Una vulnerabilidad es una debilidad, no una fortaleza[cite: 2]."
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
        explicacion: "El hacker patrocinado por el Estado es contratado por gobiernos para penetrar y obtener información de alto secreto o dañar sistemas de otras naciones[cite: 4]."
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
        explicacion: "El Black Hat (o cracker) usa altas habilidades con fines ilegales/maliciosos[cite: 4]. El Script kiddie apenas tiene habilidades, compromete sistemas con herramientas de terceros y busca notoriedad[cite: 4]."
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
        explicacion: "La evaluación de un hacker ético busca responder esas tres preguntas clave para entender el riesgo real desde la perspectiva del atacante[cite: 6]."
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
        explicacion: "El alcance limita la responsabilidad y cruzarlo tiene consecuencias legales[cite: 6]. Las habilidades no técnicas incluyen redacción de informes y resolución de problemas[cite: 7]. El hacker ético ayuda a comprender la seguridad, pero corresponde a la organización implementar las salvaguardas[cite: 6]. Un Tiger Team realiza pruebas a gran escala (red, sistemas e intrusión física), no solo Wi-Fi[cite: 6]."
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
        explicacion: "La matriz Enterprise contiene 14 categorías de tácticas derivadas de las etapas posteriores de la Cyber Kill Chain, aportando mayor granularidad[cite: 10]."
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
        explicacion: "El modelo extendido añade metacaracterísticas sociopolíticas (relación adversario-víctima, motivación) y tecnológicas (relación infraestructura-capacidad)[cite: 11]."
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
        explicacion: "La Fase 5 (Post-explotación) incluye la escalada de privilegios, la persistencia, el pivoting y el looting[cite: 12]."
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
        explicacion: "Las fases de la gestión de riesgos incluyen la identificación, evaluación, tratamiento, y seguimiento/revisión[cite: 15]. La 'explotación' no es una fase de la gestión de riesgos defensiva."
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
        explicacion: "Las vulnerabilidades de día cero (zero-day) son aquellas desconocidas por el fabricante y sin parche disponible[cite: 17]."
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
        explicacion: "En la Remediación se corrigen las vulnerabilidades (parches, mitigación), y en la Verificación se comprueba que dicha corrección ha sido efectiva[cite: 19]. Crear un inventario es Preevaluación, y clasificar por CVSS es Evaluación de riesgos[cite: 19]."
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
        explicacion: "La norma ISO/IEC 27001 regula el Sistema de gestión de la seguridad de la información (SGSI)[cite: 24]."
    },
    {
        id: "p074",
        tema: "Glosario (Redes Inalámbricas)",
        dificultad: "dificil",
        enunciado: "Indica las sentencias correctas acerca de la auditoría y los dispositivos de radiofrecuencia (UD2):",
        opciones: [
            "BLE (Bluetooth Low Energy) es una variante de alto consumo usada exclusivamente para enlaces de fibra óptica.",
            "Flipper Zero es un dispositivo multiherramienta para RF sub-GHz, RFID, NFC, entre otros.",
            "El ataque de deautenticación (Deauth) envía tramas para expulsar a un cliente de la red Wi-Fi y forzar su reconexión.",
            "NFC es una tecnología de radio de muy largo alcance (kilómetros)."
        ],
        correctas: [1, 2],
        explicacion: "Flipper Zero es para RF sub-GHz, RFID, NFC[cite: 29]. El ataque de Deauth expulsa al cliente para forzar reconexión[cite: 28]. BLE es de *bajo* consumo para IoT, no fibra[cite: 28], y NFC es de *muy corto* alcance[cite: 29]."
    },
    {
        id: "p075",
        tema: "Glosario (Redes y Sistemas)",
        dificultad: "media",
        enunciado: "¿Qué nombre recibe un sistema señuelo que simula ser vulnerable con el fin de detectar y estudiar el comportamiento de los atacantes?",
        opciones: [
            "Firewall",
            "Honeypot",
            "IDS",
            "Proxy"
        ],
        correctas: [1],
        explicacion: "Un Honeypot es un sistema señuelo que simula ser vulnerable para detectar y estudiar a los atacantes[cite: 32]."
    },
    {
        id: "p076",
        tema: "Glosario (Post-Explotación)",
        dificultad: "dificil",
        enunciado: "Dentro de la post-explotación, diferencia correctamente los conceptos de 'Pivoting' y 'Movimiento lateral':",
        opciones: [
            "El Pivoting usa una máquina comprometida como puente para alcanzar redes a las que no se llegaba directamente.",
            "El Movimiento lateral consiste en desplazarse de un sistema comprometido a otros dentro de la misma red.",
            "Ambos conceptos significan exactamente lo mismo y se usan como sinónimos en Metasploit.",
            "El Pivoting se refiere exclusivamente a la elevación de privilegios en sistemas Linux (root)."
        ],
        correctas: [0, 1],
        explicacion: "El Pivoting es usar una máquina como puente para alcanzar otras redes[cite: 36], mientras que el Movimiento lateral es desplazarse a otros sistemas dentro de la misma red[cite: 35]. Son conceptos distintos y ninguno se refiere a la escalada de privilegios[cite: 35, 36]."
    },
    {
        id: "p077",
        tema: "Glosario (Auditoría Web)",
        dificultad: "media",
        enunciado: "¿Qué vulnerabilidad puede derivar en ejecución remota de código si la aplicación web reconstruye objetos a partir de datos no confiables o manipulados?",
        opciones: [
            "SQL Injection (SQLi)",
            "Cross-Site Scripting (XSS)",
            "Deserialización insegura",
            "IDOR"
        ],
        correctas: [2],
        explicacion: "La deserialización insegura es una vulnerabilidad al reconstruir objetos a partir de datos no confiables, que puede derivar en ejecución de código[cite: 37]."
    },
    {
        id: "p078",
        tema: "Módulos complementarios",
        dificultad: "dificil",
        enunciado: "Selecciona las afirmaciones correctas sobre criptografía e IAM (Gestión de Identidades):",
        opciones: [
            "El cifrado simétrico (ej. AES) usa una sola clave para cifrar y descifrar, y suele ser más rápido.",
            "El cifrado asimétrico usa un par de claves (pública y privada) y resuelve el problema del reparto de claves.",
            "IAM (Identity and Access Management) es un sistema exclusivo para redes Wi-Fi locales.",
            "La responsabilidad compartida en la nube indica que el cliente no tiene que configurar ninguna medida de seguridad."
        ],
        correctas: [0, 1],
        explicacion: "El cifrado simétrico usa una sola clave (rápido, ej. AES), y el asimétrico usa par pública/privada resolviendo el reparto[cite: 39]. IAM es la gestión de identidades y permisos, especialmente en la nube[cite: 39]. La responsabilidad compartida implica que el cliente SÍ debe proteger sus datos y configuraciones[cite: 40]."
    },
    {
        id: "p079",
        tema: "Glosario (General)",
        dificultad: "media",
        enunciado: "¿Qué utilidad proporciona el atributo 'SameSite' al configurarlo en una cookie de sesión?",
        opciones: [
            "Impide que la cookie sea leída mediante JavaScript.",
            "Garantiza que la cookie solo viaje por canales cifrados (HTTPS).",
            "Limita el envío de la cookie en peticiones entre distintos sitios, mitigando ataques CSRF.",
            "Fuerza al usuario a introducir un segundo factor de autenticación."
        ],
        correctas: [2],
        explicacion: "El atributo SameSite limita el envío de la cookie entre sitios cruzados, mitigando los ataques CSRF[cite: 38]."
    },
    {
        id: "p080",
        tema: "Módulos complementarios",
        dificultad: "dificil",
        enunciado: "Sobre las técnicas de evasión y persistencia, ¿qué afirmaciones son ciertas?",
        opciones: [
            "Un rootkit es un malware diseñado para ocultar su presencia y mantener un acceso privilegiado en el sistema.",
            "Los Alternate Data Streams (ADS) en NTFS permiten ocultar información o ejecutables dentro de un fichero aparentemente inofensivo.",
            "La 'sal' (salt) criptográfica facilita el uso de rainbow tables para crackear contraseñas más rápido.",
            "La persistencia asegura el acceso al sistema solo si la máquina no se reinicia."
        ],
        correctas: [0, 1],
        explicacion: "Un rootkit oculta su presencia y mantiene acceso privilegiado[cite: 36]. Los ADS en NTFS permiten ocultar datos en flujos alternativos[cite: 34]. La sal *anula* la eficacia de las rainbow tables[cite: 36], y la persistencia mantiene el acceso *incluso* si el sistema se reinicia[cite: 35]."
    }
];
