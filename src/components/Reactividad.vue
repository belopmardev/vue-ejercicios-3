<template>
<div class="container">
  <div class="reactividad">
    <p>
      {{ contador.title }}
      <span class="leyenda"
        ><b>{{ contador.value }}</b></span
      >
    </p>
    <button class="btn" @click="sumar">+</button>
    <button class="btn" @click="restar">-</button>
    <button class="btn" @click="resetear">Reiniciar</button>
    <div class="leyenda">
      El incremento/decrimento de este componente es: <b>{{ incremento }}</b>
    </div>
  </div>
</div>

</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Reactividad",
  props: {
    inc: {
      default: 1,
    },
  },
  setup(props) {
    let incremento = parseInt(props.inc);
    let contador = reactive({
      title: "Contador: ",
      value: 0,
    });

    const sumar = () => {
      contador.value += incremento;
    };

    const restar = () => {
      contador.value -= incremento;
    };
    const resetear = () => {
      contador.value = 0;
    };
    return {
      contador,
      incremento,
      sumar,
      restar,
      resetear,
    };
  },
};
</script>

<style scoped lang="scss">

.reactividad {
  background: #42b983;
  width: 60%;
  color: #fff;
  padding: 1rem;
  margin: 0 auto;
}

.btn {
  background: #2c3e50;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: solid 1px #2c3e50;
  height: 2rem;
  width: 5rem;
  margin: 0.1rem;
}

.btn:hover {
    background: grey;
}

.leyenda {
  font-size: 1.5rem;
  margin-top: 1rem;
  color:#2c3e50;
}
</style>