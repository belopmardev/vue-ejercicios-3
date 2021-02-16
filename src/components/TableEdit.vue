<template>
<div>
  <h2>{{ title }}</h2>
  <div class="input-container"><label>Concepto</label><input type="text" v-model="concepto">
    <label>Cantidad</label><input type="number" step="1" min="0" v-model="cantidad">
    <label>Precio</label><input type="number" step="0.01" min="0" v-model="precio" class="precio">
    <button class="btn" @click="nuevo">Añadir al stock</button>
  </div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Concepto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stock, i) in stock" :key="i">
          <td>{{ i +1 }}</td>
          <td><input class="input-edit" type="text" v-model="stock.concepto"></td>
          <td><input class="input-edit" type="number" min="0" step="0.01" v-model="stock.precio"></td>
          <td><input type="number" min="0" step="1" v-model="stock.cantidad"></td>
          <td>
            {{ subTotal(stock.precio, stock.cantidad) }} €
          </td>
          <td ><button class="btn btn-danger" @click="borrar(i)">x</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            Total: {{ total }} €
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "TableEdit",
  props: {
    title: {
      type: String,
      default: "Tabla 1",
    },
  },
  setup() {
    let concepto = ref("")
    let cantidad = ref(0)
    let precio = ref(0)
    let stock = reactive([
      {
        concepto: "Pantalones vaqueros chico",
        cantidad: 2,
        precio: 30.99,
        moneda: "euros",
      },
      {
        concepto: "Camiseta básica chico",
        cantidad: 4,
        precio: 6.99,
        moneda: "euros",
      },
      { concepto: "Pijama unisex",
        cantidad: 1,
        precio: 12.5,
        moneda: "euros"
      },
      {
        concepto: "Deportivas Nike",
        cantidad: 1,
        precio: 80.0,
        moneda: "euros",
      },
    ]);
    let total = ref(0)
    
    const subTotal = (cantidad, precio) => cantidad * precio;
        const sumTotal = () => {
          stock.forEach(
        (product) => (total.value += product.cantidad * product.precio)
      )
    }

    const nuevo=()=>{
      let nuevaPrenda={
        concepto: concepto.value,
        precio: precio.value,
        cantidad: cantidad.value,
      }
      stock.push(nuevaPrenda)
      total.value=0
      sumTotal()
    }

    const borrar=(id)=>{
      stock.splice(id,1)
    }
  
    onMounted(() => sumTotal());

    return {
      stock,
      subTotal,
      total,
      nuevo,
      concepto,
      cantidad,
      precio,
      borrar
    };
  },
};
</script>

<style lang="scss" scoped>

input{
  height: 2rem;
  width: 25%;
  margin: 0.5rem;
  background: #a2d8c0;
  border: none;
  text-align: center;
  font-size: 1rem;
}

input:focus{
  border: solid 2px #333333;
}

input:invalid{
  background: red;
  box-shadow: none;
}

td input:invalid{
  background: transparent;
}

td input{
  background: transparent;
}

.input-edit{
  width: 100%
}

.container {
  width: 100%;
  display: table;
}

.input-container{
  margin: 0 auto;
  width: 80%;
}

.container table {
  margin: 0 auto;
  width: 80%;
}

table {
  border: none;
  width: 60%;
  text-align: center;
  border-collapse: collapse;
}
table.table td,
table.table th {
  border: 0px solid #ffffff;
  padding: 0.5rem;
}

table.table tr:nth-child(even) {
  background: #ebebeb;
}
table.table thead {
  background: #42b983;
  border-bottom: 0px solid #333333;
}
table.table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 0px solid #333333;
}
table.table thead th:first-child {
  border-left: none;
}

table.table tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background: #42b983;
  border-top: 0px solid #333333;
}
table.table tfoot td {
  font-size: 20px;
  text-align: right;
  padding: 0.5rem;
}
.btn {
  background-color: #2C3E50;
  border: none;
  color: #fff;
  padding: 7px 10px;
  text-decoration: none;
  margin: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover{
  background: #fff;
  color: #2C3E50;
}

.btn-danger{
  background-color: #9E1A1A;
}

td input[type="number"]{
width: 80px;
}

.input-container input[type="number"]{
width: 80px;
}

</style>