<template>
  <div class="home">
    <label v-bind:class="{ sucess:color }">{{label}}</label>
    <input v-model="texto" @keyup="comprobar"/>
  </div>
</template>

<script>
import {ref, reactive, onMounted} from 'vue'
export default {
  name: "Validador",
  props:{
    label: String,
    regEx: String,
    text: String,
  },
  setup(){
    let color=ref(false)
    const comprobar = (e) =>{
      console.log(e.target.value)
      let texto=e.target.value
      let regEx = ""
        if(regEx.test(texto)){
          console.log("ok")
          color.value=true
        }else{
          console.log("error")
          color.value=false
        }
      }
      return{
        comprobar,
        color,
        text
      }
  }
}
</script>

<style scoped lang="scss">

label{
  background: #9E1A1A;
  color: #fff;
  padding:0.25rem;
  margin-right:0.5rem;
}
input{
  margin: 0.4rem;
}
.sucess{
  background: #42b983;
  padding:0.25rem;
  margin-right:0.5rem;
}

</style>