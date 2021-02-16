<template>
<div>
  <h2>{{ title }}</h2>
  <div class="container">
    <table class="greyGridTable">
      <thead>
        <tr>
          <th>Nº prendas</th>
          <th>Concepto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Moneda</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stock, i) in stock" :key="i">
          <td>{{ i+1 }}</td>
          <td>{{ stock.concepto }}</td>
          <td>{{ stock.precio }}</td>
          <td>{{ stock.cantidad }}</td>
          <td>
            {{ subTotal(stock.precio, stock.cantidad) }}
          </td>
          <td>{{ stock.moneda }}</td>
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
  name: "Table",
  props: {
    title: {
      type: String,
      default: "Tabla 1",
    },
  },
  setup() {
    const stock = reactive([
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
      {
        concepto: "Deportivas Adidas",
        cantidad: 1,
        precio: 90.0,
        moneda: "euros",
      },
      {
        concepto: "Borra de béisbol",
        cantidad: 2,
        precio: 6.0,
        moneda: "euros",
      },
    ]);
    let total = ref(0);

    const subTotal = (cantidad, precio) => cantidad * precio;
    const sumTotal = () => {
      stock.forEach(
        (product) => (total.value += product.cantidad * product.precio)
      );
    };
    onMounted(() => sumTotal());

    return {
      stock,
      subTotal,
      total,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: table;
}

.container table {
  margin: 0 auto;
  width: 60%;
}

table.greyGridTable {
  border: 2px solid #ffffff;
  width: 60%;
  text-align: center;
  border-collapse: collapse;
}
table.greyGridTable td,
table.greyGridTable th {
  border: 0px solid #ffffff;
  padding: 0.5rem;
}
table.greyGridTable tbody td {
  font-size: 13px;
}
table.greyGridTable tr:nth-child(even) {
  background: #ebebeb;
}
table.greyGridTable thead {
  background: #42b983;
  border-bottom: 0px solid #333333;
}
table.greyGridTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 0px solid #333333;
}
table.greyGridTable thead th:first-child {
  border-left: none;
}

table.greyGridTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background: #42b983;
  border-top: 0px solid #333333;
}
table.greyGridTable tfoot td {
  font-size: 20px;
  text-align: right;
  padding: 0.5rem;
}
</style>