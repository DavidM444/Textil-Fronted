<template>
    <h2 class="text-center bg-warning">Grafico De Registros</h2>
    <div>
      <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
          <div class="card border border-dark">
            <div class="card-header bg-dark"></div>
            <div class="card-body">
                <Bar v-if="loaded" :data="chartData" id="my-chart-id"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="col-md-6 offset-md-3 ">
        <p class="text-center">La Escala de Grises para la Transferencia de Color se utiliza para evaluar visualmente la transferencia de color o manchado debido a pruebas de solidez del color.</p>
      </div>
    </div>
    <div class="container-fluid col text-center">
      <h2 >Grafico Nivel de Pilling</h2>

      <div class="col-md-6 offset-md-3">
        <Doughnut v-if="loaded" :data="doughnutData" :options="chartOptions"/>
      </div>
    </div>

</template>
<script>

const token = localStorage.getItem('token_access');
import { getDatosGraphic } from './peticiones/http'

import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar, Doughnut },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data:()=> ({
    loaded: false,
      etiquetas: [], valores: [],
      chartData: [], chartOptions: { responsive: true, maintainAspectRatio: false},

    etiquetasDoughnut: [], valoresDougnut: [],
    doughnutData: [], 
    
  }),
  async mounted () {
    this.loaded = false

    this.etiquetas.push("Bajo", "Moderado", "Alto", "Excelente")
    //etiquetas doughnut
    this.etiquetasDoughnut.push("Cambio Severo", "Cambio Considerable", "Formacion Pilling", "Pilling", "No Hay Pilling")

    const head = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }

    const registrosData = await getDatosGraphic(head);
    console.log("data ", registrosData, "tpp ", registrosData.data)

    //puedo quitar las variables let y pasasr directamente los campos del json al array de valoraes: line 65
            const datosInfo = registrosData.data;
            let datosBajos = datosInfo.bajo;
            let datosModerados = datosInfo.moderado;
            let datosAltos = datosInfo.alto;
            let datosExcelentes = datosInfo.excelente;

    try {
      this.loaded = false;
      this.valores.push(datosBajos,datosModerados,datosAltos,datosExcelentes);

      this.valoresDougnut.push(datosInfo.severo, datosInfo.considerable, datosInfo.formacion, datosInfo.pilling, datosInfo.ninguno)
   
      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {labels: 'Registros', data: this.valores,backgroundColor: ['#4F6F52','#80BCBD','#F3B664','#FFB534','#65451F'] }
        ]
      }

      this.doughnutData= {
        labels: this.etiquetasDoughnut,
        datasets: [
          {
            data: this.valoresDougnut, backgroundColor:['#4F6F43','#FF9800','#7E30E1','#5FBDFF']
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