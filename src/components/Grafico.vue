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

</template>
<script>

const token = localStorage.getItem('token_access');
import { getDatosGraphic } from './peticiones/http'

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data:()=> ({
    loaded: false,
      etiquetas: [], valores: [],
      chartData: [], chartOptions: { responsive: true}
    
  }),
  async mounted () {
    this.loaded = false
    this.etiquetas.push("Bajo", "Moderado", "Alto", "Excelente")

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
   
      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {label: 'Registros', data: this.valores,backgroundColor: ['#4F6F52','#80BCBD','#F3B664','#FFB534'] }
        ]
      }


      
      

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}


</script>