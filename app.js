// --- ESTADO DE LA APLICACIÓN ---
let bancoCompleto = [];
let bancoDefiniciones = [];
let examenActual = [];
let respuestasUsuario = {}; // { indexPregunta: [indicesSeleccionados] }
let preguntasMarcadas = new Set();
let indiceActual = 0;
let temporizadorInterval = null;
let tiempoRestante = 0;
let tiempoTotal = 0;

// Al cargar, unificar bancos de preguntas y actualizar UI
window.onload = () => {
    // Si tienes preguntas2, preguntas3, se añadirán aquí comprobando si existen
    if (typeof preguntas1 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas1);
    if (typeof preguntas2 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas2);
    if (typeof preguntas3 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas3);
    if (typeof preguntas4 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas4);
    if (typeof preguntas5 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas5);
    if (typeof preguntas6 !== 'undefined') bancoCompleto = bancoCompleto.concat(preguntas6);

    if (typeof definiciones !== 'undefined') bancoDefiniciones = definiciones;
    
    actualizarBotonFalladas();
    
    // Aviso de salida
    window.addEventListener('beforeunload', (e) => {
        if (!document.getElementById('pantalla-examen').classList.contains('d-none')) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
};

// --- GESTIÓN DE FALLADAS ---
function getFalladas() {
    return JSON.parse(localStorage.getItem('falladasHE') || '[]');
}

function saveFalladas(lista) {
    localStorage.setItem('falladasHE', JSON.stringify(lista));
    actualizarBotonFalladas();
}

function actualizarBotonFalladas() {
    const falladas = getFalladas();
    const btn = document.getElementById('btn-falladas');
    btn.innerText = `Examen de Falladas (${falladas.length} pendientes)`;
    btn.disabled = falladas.length === 0;
}

function vaciarFalladas() {
    if (confirm("¿Seguro que quieres borrar todo el historial de preguntas falladas?")) {
        localStorage.removeItem('falladasHE');
        actualizarBotonFalladas();
    }
}

// --- UTILIDADES ---
function barajarArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- LÓGICA DEL EXAMEN ---
function iniciarExamen(modo) {
    let pool = [];
    if (modo === 'falladas') {
        const falladasIds = getFalladas();
        // Buscar tanto en el banco normal como en definiciones
        pool = bancoCompleto.concat(bancoDefiniciones).filter(p => falladasIds.includes(p.id));
    } else if (modo === 'definiciones') {
        pool = [...bancoDefiniciones]; // Usar el banco de definiciones
    } else {
        pool = bancoCompleto.filter(p => p.dificultad === modo);
    }

    if (pool.length === 0) {
        alert("No hay suficientes preguntas para este modo.");
        return;
    }

    pool = barajarArray(pool);
    examenActual = pool.slice(0, 40);

    examenActual = examenActual.map(p => {
        let opcionesConIndice = p.opciones.map((opt, i) => ({ texto: opt, idxOriginal: i }));
        opcionesConIndice = barajarArray(opcionesConIndice);
        return { ...p, opcionesBarajadas: opcionesConIndice };
    });

    respuestasUsuario = {};
    preguntasMarcadas.clear();
    indiceActual = 0;
    
    tiempoTotal = examenActual.length * 45; 
    if (tiempoTotal > 1800) tiempoTotal = 1800; 
    tiempoRestante = tiempoTotal;

    document.getElementById('pantalla-inicio').classList.add('d-none');
    document.getElementById('pantalla-examen').classList.remove('d-none');
    document.getElementById('total-preguntas').innerText = examenActual.length;

    renderizarRejillaNavegacion();
    mostrarPregunta(0);
    iniciarTemporizador();
}

function iniciarTemporizador() {
    const el = document.getElementById('temporizador');
    el.classList.remove('text-danger-timer');
    
    clearInterval(temporizadorInterval);
    temporizadorInterval = setInterval(() => {
        tiempoRestante--;
        const mins = Math.floor(tiempoRestante / 60).toString().padStart(2, '0');
        const secs = (tiempoRestante % 60).toString().padStart(2, '0');
        el.innerText = `${mins}:${secs}`;

        if (tiempoRestante <= 300) el.classList.add('text-danger-timer');

        if (tiempoRestante <= 0) {
            clearInterval(temporizadorInterval);
            finalizarExamen();
        }
    }, 1000);
}

function mostrarPregunta(indice) {
    indiceActual = indice;
    const pregunta = examenActual[indice];
    const esMultiple = pregunta.correctas.length > 1;

    document.getElementById('num-pregunta-actual').innerText = indice + 1;
    document.getElementById('enunciado-pregunta').innerText = pregunta.enunciado;
    
    const badge = document.getElementById('etiqueta-dificultad');
    badge.innerText = pregunta.dificultad.toUpperCase();
    badge.className = pregunta.dificultad === 'media' ? 'badge bg-primary' : 'badge bg-danger';

    const aviso = document.getElementById('aviso-multiple');
    esMultiple ? aviso.classList.remove('d-none') : aviso.classList.add('d-none');

    // Botón marcar
    const btnMarcar = document.getElementById('btn-marcar');
    btnMarcar.innerText = preguntasMarcadas.has(indice) ? "Desmarcar revisión ❌" : "Marcar para revisión 📌";

    // Opciones
    const contenedor = document.getElementById('opciones-contenedor');
    contenedor.innerHTML = '';

    const resPrevias = respuestasUsuario[indice] || [];

    pregunta.opcionesBarajadas.forEach((opt, i) => {
        const type = esMultiple ? 'checkbox' : 'radio';
        const checked = resPrevias.includes(opt.idxOriginal) ? 'checked' : '';
        
        const div = document.createElement('label');
        div.className = 'opcion-label';
        div.innerHTML = `
            <input type="${type}" name="opcion" value="${opt.idxOriginal}" ${checked} onchange="guardarRespuesta()">
            <span>${opt.texto}</span>
        `;
        contenedor.appendChild(div);
    });

    // Estado botones ant/sig
    document.getElementById('btn-anterior').disabled = indice === 0;
    document.getElementById('btn-siguiente').disabled = indice === examenActual.length - 1;

    actualizarRejillaUI();
    
    // Progreso
    const respondidas = Object.keys(respuestasUsuario).length;
    const porcentaje = (respondidas / examenActual.length) * 100;
    document.getElementById('barra-progreso').style.width = `${porcentaje}%`;
}

function guardarRespuesta() {
    const inputs = document.querySelectorAll('input[name="opcion"]:checked');
    const seleccionados = Array.from(inputs).map(inp => parseInt(inp.value));
    
    if (seleccionados.length > 0) {
        respuestasUsuario[indiceActual] = seleccionados;
    } else {
        delete respuestasUsuario[indiceActual];
    }
    actualizarRejillaUI();
}

function cambiarPregunta(delta) {
    const nuevoIndice = indiceActual + delta;
    if (nuevoIndice >= 0 && nuevoIndice < examenActual.length) {
        mostrarPregunta(nuevoIndice);
    }
}

function marcarParaRevision() {
    if (preguntasMarcadas.has(indiceActual)) {
        preguntasMarcadas.delete(indiceActual);
    } else {
        preguntasMarcadas.add(indiceActual);
    }
    mostrarPregunta(indiceActual); // Refrescar UI botón
}

function renderizarRejillaNavegacion() {
    const rejilla = document.getElementById('rejilla-navegacion');
    rejilla.innerHTML = '';
    examenActual.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.id = `nav-btn-${i}`;
        btn.innerText = i + 1;
        btn.onclick = () => mostrarPregunta(i);
        rejilla.appendChild(btn);
    });
}

function actualizarRejillaUI() {
    examenActual.forEach((_, i) => {
        const btn = document.getElementById(`nav-btn-${i}`);
        if(!btn) return;
        
        btn.classList.remove('actual', 'respondida', 'marcada');
        if (i === indiceActual) btn.classList.add('actual');
        if (respuestasUsuario[i]) btn.classList.add('respondida');
        if (preguntasMarcadas.has(i)) btn.classList.add('marcada');
    });
}

function confirmarEntrega() {
    const respondidas = Object.keys(respuestasUsuario).length;
    const faltan = examenActual.length - respondidas;
    let msg = "¿Seguro que deseas entregar el examen?";
    if (faltan > 0) msg = `Te faltan ${faltan} preguntas por responder. ` + msg;
    
    if (confirm(msg)) {
        clearInterval(temporizadorInterval);
        finalizarExamen();
    }
}

// --- EVALUACIÓN Y RESULTADOS ---
function finalizarExamen() {
    document.getElementById('pantalla-examen').classList.add('d-none');
    document.getElementById('pantalla-resultados').classList.remove('d-none');
    
    let aciertos = 0;
    let fallos = 0;
    let enBlanco = 0;
    let falladasIds = getFalladas();

    const contenedorRev = document.getElementById('contenedor-revision');
    contenedorRev.innerHTML = '';

    examenActual.forEach((pregunta, index) => {
        const userAns = respuestasUsuario[index] || [];
        const correctasSorted = [...pregunta.correctas].sort();
        const userSorted = [...userAns].sort();

        let estado = 'en blanco'; // correcta, incorrecta, en blanco
        if (userAns.length === 0) {
            enBlanco++;
            estado = 'en blanco';
            if (!falladasIds.includes(pregunta.id)) falladasIds.push(pregunta.id);
        } else if (JSON.stringify(correctasSorted) === JSON.stringify(userSorted)) {
            aciertos++;
            estado = 'correcta';
            // Quitar de falladas si estaba
            falladasIds = falladasIds.filter(id => id !== pregunta.id);
        } else {
            fallos++;
            estado = 'incorrecta';
            if (!falladasIds.includes(pregunta.id)) falladasIds.push(pregunta.id);
        }

        // Crear bloque de revisión
        let claseCard = estado === 'correcta' ? 'revision-correcta' : (estado === 'incorrecta' ? 'revision-incorrecta' : 'revision-neutra');
        
        // Generar texto de opciones
        let opcionesHtml = '';
        pregunta.opciones.forEach((optText, origIdx) => {
            const esCorrecta = pregunta.correctas.includes(origIdx);
            const fueElegida = userAns.includes(origIdx);
            
            let icon = '';
            if (esCorrecta) icon = '✅';
            else if (fueElegida && !esCorrecta) icon = '❌';

            let estilo = esCorrecta ? 'font-weight: bold; color: #198754;' : (fueElegida ? 'color: #dc3545;' : '');
            opcionesHtml += `<div style="${estilo}">${icon} ${optText}</div>`;
        });

        contenedorRev.innerHTML += `
            <div class="card p-3 mb-3 ${claseCard}">
                <h6>${index + 1}. ${pregunta.enunciado}</h6>
                <div class="mb-2 ms-3">${opcionesHtml}</div>
                <div class="mt-2 p-2 bg-light border rounded small">
                    <strong>Explicación:</strong> ${pregunta.explicacion}
                </div>
            </div>
        `;
    });

    saveFalladas(falladasIds);

    // Calcular nota
    let nota = ((aciertos * 1) - (fallos * 0.33)) * (10 / examenActual.length);
    if (nota < 0) nota = 0;

    document.getElementById('res-nota').innerText = nota.toFixed(2) + " / 10";
    document.getElementById('res-aciertos').innerText = aciertos;
    document.getElementById('res-fallos').innerText = fallos;
    
    const tiempoUsado = tiempoTotal - tiempoRestante;
    const m = Math.floor(tiempoUsado / 60).toString().padStart(2, '0');
    const s = (tiempoUsado % 60).toString().padStart(2, '0');
    document.getElementById('res-tiempo').innerText = `${m}:${s}`;
}

function volverInicio() {
    document.getElementById('pantalla-resultados').classList.add('d-none');
    document.getElementById('pantalla-inicio').classList.remove('d-none');
}
