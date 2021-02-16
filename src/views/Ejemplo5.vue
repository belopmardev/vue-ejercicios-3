<template>
<div>
  <h1>Ejemplo 5</h1>
  <p>
    El Número de Identificación Fiscal (NIF), el Documento Nacional de Identidad
    (DNI) y el Número de Identidad de Extranjero (NIE) están
    formados por una serie alfanumérica diferente.
  </p>
  <p>
    Este componente permite verificar si el número de documento facilitado es
    correcto, cambiando del color rojo (DNI, NIF o NIE incorrecto) al verde (si los
    datos son válidos).
  </p>
  <div>  <p>¡Comprueba si tu DNI, tu NIF o tu NIE son válidos!
    label="DNI" regEx="/^\d{8}[a-zA-Z]$/i" 
    label="NIF" regEx="((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))" 
    label="NIE" regEx="^[XxTtYyZz]{1}[0-9]{7}[a-zA-Z]{1}$" 
  </p>
</div>
</div>
</template>

<script>
import Validador from "@/components/Validador.vue";

export default {
  components: {
    Validador,
  },
};
</script>