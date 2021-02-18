<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="container">
      <div class="column">
        <label for="provincia">Provincia</label>
        <div class="select">
          <select v-model="provincia" @change="verMunicipios">
            <option v-for="(provincia, i) in provincias" :key="i" :value="provincia.CODPROV">
              {{ provincia.NOMBRE_PROVINCIA }} - {{ provincia.CODPROV }}
            </option>
          </select>
          <div class="select_arrow"></div>
        </div>
        <label for="municipio">Municipio</label>
        <div class="select">
          <select v-model="municipio" @change="verInfo">
            <option v-for="(municipio, i) in municipios" :key="i" :value="municipio.COD_GEO">
              {{ municipio.NOMBRE }}
            </option>
          </select>
          <div class="select_arrow"></div>
        </div>
        <div v-if="info.datos">
            Información del municipio <b>{{info.datos.municipio.NOMBRE}}</b>
            <div class="api-data">Altitud: {{info.datos.municipio.ALTITUD}}</div>
            <div class="api-data">Latitud: {{info.datos.municipio.LATITUD_ETRS89_REGCAN95}}</div>
            <div class="api-data">Latitud: {{info.datos.municipio.LONGITUD_ETRS89_REGCAN95}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Meteo",
  props: {
    title: {
      type: String,
      default: "Meteo",
    },
  },
  setup() {
    let provincias = reactive([]);
    let provincia = ref("");
    let municipios = reactive([]);
    let municipio = ref("");
    let info = reactive([])

    fetch("https://www.el-tiempo.net/api/json/v2/provincias")
      .then((res) => res.json())
      .then((datos) => {
        datos.provincias.forEach(provincia => {
          provincias.push(provincia);
        });
      });

    const verMunicipios = () => {
      fetch(
        `https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`
      )
        .then((res) => res.json())
        .then((datos) => {
          municipios.splice(0);
          datos.municipios.forEach(municipio => {
            municipios.push(municipio);
          });
        });
    };

    const verInfo = () =>{
        fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${municipio.value}/municipios/${municipio.value}`)
        .then(res=>res.json())
        .then(datos=>{
            info.datos=datos
            console.log(datos)
        })
    }

    return {
      provincias,
      provincia,
      verMunicipios,
      municipios,
      municipio,
      verInfo,
      info
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.column {
  margin: 0 auto;
  width: 60%;
}

.column.api-data{
display: flex;
 width: 30%;
 text-align: left;
}

.select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
}
.select select {
  font-family: "Arial";
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 8px 15px;
  outline: 0;
  border: 4px hidden #000000;
  background: #80b89e;
  color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select::-ms-expand {
  display: none;
}
.select select:hover,
.select select:focus {
  color: #000000;
  background: #cccccc;
}
.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.select_arrow {
  position: absolute;
  top: 3px;
  right: 20px;
  width: 6px;
  height: 6px;
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.select select:hover ~ .select_arrow,
.select select:focus ~ .select_arrow {
  border-color: #000000;
}
.select select:disabled ~ .select_arrow {
  border-top-color: #e82626;
}

label {
  margin: 0.5rem;
}
</style>