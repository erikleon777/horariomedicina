// Añade al inicio de script-inicial.js y script.js
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('skeleton-loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('skeleton-loader').remove();
        }, 300);
    }, 800);
});
// Añade al inicio de script-inicial.js y script.js
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('skeleton-loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('skeleton-loader').remove();
        }, 300);
    }, 800);
});
document.addEventListener("DOMContentLoaded", function () {
    // Datos de las materias por año (puedes agregar más años y materias)
    const materiasPorAno = {
        "ano1": [
            { codigo: "MED100", nombre: "MED 100 - ANATOMÍA HUMANA" },
            { codigo: "MED101", nombre: "MED 101 - HISTOLOGÍA Y EMBRIOLOGÍA" },
	    { codigo: "SAP100", nombre: "SAP 100 - SALUD PÚBLICA I" },
	    { codigo: "MAF100", nombre: "MAF 100 - FORMACIÓN SOCIOCULTURAL" },
			
            // Agrega más materias de 1º año
        ],
        "ano2": [
            { codigo: "MED200", nombre: "MED 200 - ANATOMÍA PATOLÓGICA" },
            { codigo: "MED201", nombre: "MED 201 - BACTERIOLOGÍA Y VIROLOGÍA MÉDICA" },
            { codigo: "MED202", nombre: "MED 202 - FISIOLOGÍA HUMANA" },
            { codigo: "MED203", nombre: "MED 203 - BIOQUÍMICA MÉDICA" },
            { codigo: "MED209", nombre: "MED 209 - PARASITOLOGÍA Y MICOLOGÍA MÉDICA" },
            { codigo: "SAP200", nombre: "SAP 200 - SALUD PÚBLICA II" },
        ],
        "ano3": [
            { codigo: "MED301", nombre: "MED 301 - FISIOPATOLOGÍA" },
			{ codigo: "MED304", nombre: "MED 304 - INFECTOLOGÍA Y MEDICINA TRADICIONAL" },
			{ codigo: "CIR305", nombre: "CIR 305 - CIRUGÍA I" },
			{ codigo: "MED302", nombre: "MED 302 - SEMIOLOGÍA GENERAL" },
			{ codigo: "MED303", nombre: "MED 303 - FARMACOLOGÍA Y TERAPÉUTICA MÉDICA" },
			{ codigo: "SAP300", nombre: "SAP 300 - SALUD PÚBLICA III" },

            // Agrega más materias de 3º año
        ],
        "ano4": [
            { codigo: "MED000", nombre: "SIN INFORMACIÓN" },
            // Agrega más materias de 4º año
        ],
        "ano5": [
            { codigo: "MED000", nombre: "SIN INFORMACIÓN" },
            // Agrega más materias de 5º año
        ]
    };

    // Función para mostrar las materias de un año
    window.mostrarMaterias = function (ano) {
        const contenedorMaterias = document.getElementById(`materias-${ano}`);
        contenedorMaterias.innerHTML = ""; // Limpiar contenido anterior

        // Obtener las materias del año seleccionado
        const materias = materiasPorAno[ano];

        // Crear elementos para cada materia
        materias.forEach(materia => {
            const divMateria = document.createElement("div");
            divMateria.classList.add("materia");

            // Checkbox para seleccionar la materia
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = materia.codigo;
            checkbox.id = `materia-${materia.codigo}`;

            // Label para el nombre de la materia
            const label = document.createElement("label");
            label.htmlFor = `materia-${materia.codigo}`;
            label.textContent = materia.nombre;

            divMateria.appendChild(checkbox);
            divMateria.appendChild(label);
            contenedorMaterias.appendChild(divMateria);
        });

        // Mostrar el contenedor de materias
        contenedorMaterias.style.display = "block";
    };

    // Función para redirigir a la página de horarios con las materias seleccionadas
    window.redirigirAHorario = function () {
        const materiasSeleccionadas = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            materiasSeleccionadas.push(checkbox.value);
        });

        if (materiasSeleccionadas.length > 0) {
            // Redirigir a la página de horarios con las materias seleccionadas
            window.location.href = `horario.html?materias=${materiasSeleccionadas.join(",")}`;
        } else {
            alert("Por favor, seleccione al menos una materia.");
        }
    };
});
