<template>
<div>
  <h2>{{title}}</h2>
  <p>Selecciona una opción para ver al usuario/a y su avatar</p>
<div class="container">
  <div class="column">
    <select v-model="seleccionado" @change="verSeleccionado">
      <option v-for="(user,i) in users" :key="i" :value="user.imagen" :alt="user.alt">
        {{user.nombre}} - {{user.alt}}
      </option>
    </select>
    <img class= "avatar" :src="seleccionado" :alt="seleccionado">
  </div>
</div>
</div>
</template>

<script>
import { ref} from "vue";
export default {
  name: "User",
  props: {
    title:{
      type: String,
      default: "Avatar"
    }
  },
  setup() {
    let seleccionado=ref("")
    let users=[
      {id:0, nombre: 'Usuario 1', imagen:'avatar1.svg', alt:"Avatar 1"},
      {id:1, nombre: 'Usuario 2', imagen:'avatar2.svg', alt:"Avatar 2"},
      {id:2, nombre: 'Usuario 3', imagen:'avatar3.svg', alt:"Avatar 3"},
      {id:3, nombre: 'Usuario 4', imagen:'avatar4.svg', alt:"Avatar 4"},
    ]

    return{
      seleccionado,
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: table;
}

.column {
  margin: 0 auto;
  width: 90%;
}

.avatar {
  width: 15%;
}

</style>