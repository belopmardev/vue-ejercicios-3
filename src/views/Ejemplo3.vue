<template>
<div class="about">
    <h1>Ejemplo 3</h1>
    <p>Con estos módulos podrás calcular el <b>incremento</b> o <b>decrimento</b> de 2, 5 o 10 del total del contador</p>
    <h3>Componente 1</h3>
    <Reactividad inc="2"/>
    <h3>Componente 2</h3>
    <Reactividad inc="5"/>
    <h3>Componente 3</h3>
    <Reactividad inc="10"/>
</div>
</template>
<script>
import Reactividad from '@/components/Reactividad.vue'
export default {
    components:{
        Reactividad
    }
}
</script>