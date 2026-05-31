const zona = document.getElementById("zona");
const tipoReporte = document.getElementById("tipo_reporte");

zona.addEventListener("change", function(){

    if(zona.value === "baño"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Plomeria</option>
            <option>Humedad / Filtraciones</option>
            <option>Electrico</option>
            <option>Sanitario</option>
            <option>Acabado</option>
        `;
    }

    else if(zona.value === "cocina"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Plomeria</option>
            <option>Gas</option>
            <option>Electrico</option>
            <option>Ventilación</option>
            <option>Acabados</option>
        `;
    }

    else if(zona.value === "habitaciones"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Electrico</option>
            <option>Humedad / Filtraciones</option>
            <option>Ventanas / Puertas</option>
            <option>Acabados</option>
            <option>Ventilacion / Clima</option>
        `;
    }

    else if(zona.value === "sala"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Electrico</option>
            <option>Humedad / Filtraciones</option>
            <option>Ventanas / Puertas</option>
            <option>Acabados</option>
            <option>Ventilación</option>
        `;
    }

    else if(zona.value === "lavado"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Plomeria</option>
            <option>Electrico</option>
            <option>Humedad</option>
            <option>Instalaciones</option>
        `;
    }

    else if(zona.value === "comun"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Iluminación</option>
            <option>Estructura</option>
            <option>Seguridad</option>
            <option>Limpieza / Plagas</option>
        `;
    }

    else if(zona.value === "fachada"){

        tipoReporte.innerHTML = `
            <option>Seleccione</option>

            <option>Estructura</option>
            <option>Humedad</option>
            <option>Puertas / Accesos</option>
            <option>Pinturas / Acabados</option>
        `;
    }

    else{

        tipoReporte.innerHTML = `
            <option value="">Seleccione zona</option>
        `;
    }
});