<template>
  <div class="home">
    <label :class="{ sucess:color }">{{label}}</label>
    <input @keyup="comprobar"/>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "DNI",
  props:{
    label: String,
  },
  setup(){
    let color=ref(false)
    const comprobar = (e) =>{
      console.log(e.target.value)
      let texto=e.target.value
      let regExDNI = /((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))/i
        if(regExDNI.test(texto)){
          console.log("ok")
          color.value=true
        }else{
          console.log("error")
          color.value=false
        }
      }
      return{
        comprobar,
        color
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
.sucess{
    background: #42b983;
    padding:0.25rem;
    margin-right:0.5rem;
}

</style>