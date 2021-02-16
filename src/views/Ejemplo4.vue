<template>
<div>
    <h1>Ejemplo 4</h1>
    <p>
        El Número de Identificación Fiscal (NIF) y el Documento Nacional de Identidad (DNI) están formados por una serie alfanumérica de 8 números y una letra.
    </p>
    <p>
        Este componente permite verificar si el número de documento facilitado es correcto,
        cambiando del color rojo (DNI o NIF incorrecto) al verde (si los datos son válidos).
    </p>
    <p>¡Comprueba si tu DNI o tu NIF son válidos!</p>
    <DNI label="DNI" /><br>
    <DNI label="NIF" />
</div>
</template>

<script>
 import DNI from '@/components/DNI.vue'
   
export default {
    components:{
        DNI
    }
}
</script>