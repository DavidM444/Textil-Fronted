<template>
  <div>
    <div class="head">
      <h2 class="text-center py-3 title">Datos Textiles</h2>
    </div>

    <div>
      <div>
        <h2 class="subtitle text-center">Gráfico Escala De Grises</h2>
      </div>
      <div class="row pt-1">
        <div class="col-md-6 offset-md-3">
          <div class="card border border-dark">
            <div class="card-header bg-dark"></div>
            <div class="card-body">
              <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="bart">
      <div class="container-fluid pt-3">
        <div class="col-md-6 offset-md-3">
          <p class="text-center">La Escala de Grises para la Transferencia de Color se utiliza para evaluar visualmente
            la
            transferencia de color o manchado debido a pruebas de solidez del color.</p>
        </div>
      </div>
      <div class="container-fluid col text-center">
        <h2 class="subtitle">Gráfico Nivel de Pilling</h2>

        <div class="col-md-6 offset-md-3">
          <Doughnut v-if="loaded" :data="doughnutData" :options="chartOptions" />
        </div>
      </div>
      <div class="container-fluid mt-4 ">
        <div class="col-md-6 offset-md-3">
          <p>La prueba de pilling en tela tiene como objetivo evaluar la resistencia de un tejido a la formación de
            bolitas o
            "pills".
            Las bolitas son pequeñas acumulaciones de fibras que se forman en la superficie de la tela debido al roce
            durante
            el uso y lavado.</p>

          <p>El pilling puede afectar la apariencia estética de la tela, haciendo que se vea desgastada o envejecida
            prematuramente.</p>
          <p>La prueba de pilling es importante en la industria textil para evaluar la durabilidad y la calidad
            percibida de un tejido.</p>
        </div>



      </div>
    </section>
    <Foot />
  </div>

</template>
<script>


import { getDatosGraphic } from './peticiones/http'

import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import Foot from "./footer.vue"
export default {
  name: 'BarChart',
  components: { Bar, Doughnut, Foot },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data: () => ({
    loaded: false,
    etiquetas: ["Bajo", "Moderado", "Alto", "Excelente"], valores: [],
    chartData: [], chartOptions: { responsive: true, maintainAspectRatio: false },

    etiquetasDoughnut: ["Cambio Severo", "Cambio Considerable", "Formacion Pilling", "Pilling", "No Hay Pilling"], valoresDougnut: [],
    doughnutData: [],

  }),
  async mounted() {
    const token = localStorage.getItem('token_access');
    this.loaded = false

    const head = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const registrosData = await getDatosGraphic(head);
    console.log("data ", registrosData, "tpp ", registrosData.data)
    const datosInfo = registrosData.data;


    try {
      this.loaded = false;
      this.valores.push(datosInfo.bajo, datosInfo.moderado, datosInfo.alto, datosInfo.excelente);
      this.valoresDougnut.push(datosInfo.severo, datosInfo.considerable, datosInfo.formacion, datosInfo.pilling, datosInfo.ninguno)

      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          { label: 'Valoracion', data: this.valores, backgroundColor: ['#4F6F52', '#80BCBD', '#F3B664', '#FFB534'] }
        ]
      }

      this.doughnutData = {
        labels: this.etiquetasDoughnut,
        datasets: [
          {
            data: this.valoresDougnut, backgroundColor: ['#4F6F43', '#FF9800', '#7E30E1', '#5FBDFF']
          }
        ]
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}


</script>

<style lang="scss" scoped>
$green: #065147;

.title {
  color: whitesmoke;
}

.subtitle {
  color: $green;
  padding-top: 1rem;
  font-size: 1.5em;

}

.head {
  background-color: $green;
}
</style>