
document.addEventListener("DOMContentLoaded", function() {
    
    // === FUNCIONALIDAD 1: INSERTAR BOTÓN DE VOLVER ===
    if (window.location.pathname.includes("/actividades/")) {
        
        const botonVolver = document.createElement("a");
        
        botonVolver.innerText = "⬅ Regresar al Menú Principal";
        botonVolver.href = "../../index.html";
        
        
        botonVolver.className = "boton-volver";
        
        botonVolver.style.marginBottom = "20px";
        botonVolver.style.display = "inline-block";

        document.body.insertBefore(botonVolver, document.body.firstChild);
        
        console.log("Botón de retorno generado automáticamente por script_global.js");
    }

    // === FUNCIONALIDAD 2: FIRMA EN CONSOLA ===
    console.log("Portafolio cargado correctamente. Alumno: Venus Getsemaní Semino Alemán");
});