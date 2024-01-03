<template>
    <div>
      <div class="table-responsive">
        <section>
          <h2 class="text-center text-bg-success fs-2 font-monospace">Tabla de registros</h2>
        </section>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <!-- Agrega más columnas según tus datos -->
              <th>Fecha</th>
              <th>Proveedor</th>
            
            </tr>
          </thead>
          <tbody>
            <tr v-for="(registro, index) in registros" :key="index" >
              <td>{{ registro.id }}</td>
              <!-- Muestra más datos según tus necesidades -->
              <td>{{ registro.fecha }}</td>
              <td>{{ registro.proveedor }}</td>
             
              
              <!-- ... -->
              <td>
                <button @click="mostrarDetalle(registro)" class="btn btn-info btn-sm">
                  Detalles
                </button>
              </td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteRegistry(registro.id)"> Eliminar </button>
              </td>
              <td>
                <button class="btn btn-secondary btn-sm"  @click="update(registro)"> Update </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal para detalles -->
      
      <div v-if="mostrarModal" class="modal">
      <div class="modal-content">
        <span class="cerrar" @click="cerrarModal">&times;</span>
        <h3>Dimensiones</h3>
        <p>Alto {{  detalle.altura }}  Ancho {{ detalle.ancho }}</p>

        <h3>Especificamos</h3>
        
        <p>Rollo: {{ detalle.rollo }}</p>
        <p>Peso: {{ detalle.peso }}</p>
        <p>Tipo Tela : {{ detalle.tipoTela }}</p>
        <p>Color: {{ detalle.color }} </p>

        <h3>Valoracion de Grises: </h3><p>Valoracion: {{ detalle.valoracion }}</p>

        <h3>Absorcion Y Pilling</h3>
        <p>Cantidad : {{ detalle.cantidad }} </p>
        <p>Tiempo : {{ detalle.tiempo }}</p>
        <p>Rango : {{ detalle.consideracion }}</p>

        <h3>Resultado Prueba Cuantro Puntos: </h3><p>Estado: {{ detalle.estado }}</p>
      </div>
    </div>
    


    </div>
  </template>
  
  <script>

  import axios from 'axios';
  import { deletePeticion, getRegistros, SwalFireAlert } from './peticiones/http'
  const token = localStorage.getItem('token_access');
  
  export default {

    data() {
      return {
        registros: [], // Aquí se almacenarán los registros obtenidos de la respuesta
        mostrarModal: false,
        detalle: {},
        registroSeleccionado: null, // Aquí se almacenarán los detalles del registro seleccionado
      };
    },

    computed: {

    },
    methods: {
      async obtenerDatos() {
        console.log("obteeniendo datos: ",token);
        
        // Realiza la solicitud GET a la URL
        try {
          const head = { headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }} 

          const response = await axios.get("http://localhost:8081/registro",head);
          this.registros = response.data;
          console.log(response.data, "regi" , this.registros)
          
           // Asigna los datos de respuesta a la variable registros
          
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      },
      mostrarDetalle(registro) {
      // Aquí puedes hacer una llamada a una API para obtener el apellido y la edad del item seleccionado
      // Por simplicidad, asumiremos que ya tenemos los datos y los asignaremos al detalle
      this.detalle = {
        id: registro.id,
        altura: registro.datosDimensiones.altura,
        ancho : registro.datosDimensiones.ancho,
        rollo: registro.especificaciones.rollo,
        peso: registro.especificaciones.peso,
        tipoTela: registro.especificaciones.tipoTela,
        color: registro.especificaciones.color,
        valoracion: registro.escalagrises.valoracion,
        cantidad: registro.abpilling.cantidad,
        tiempo: registro.abpilling.tiempo,
        consideracion: registro.abpilling.rango,
        estado: registro.sispuntos.puntuacion
      };

      this.mostrarModal = true;
    },

    async deleteRegistry(id){
      try {
        console.log("id delete ",id)
        await deletePeticion(id).then(
                  SwalFireAlert('success','¡Registro eliminado!','El registro se ha eliminado.','OK')                  
                );
      } catch (error) {
        alert("El registro no ha podido ser eliminado");
        
      }
    },

    update(registro){
      //llamar a Form
      console.log("lamando update", registro)
     
      this.$emit('nuevoregistro', { registro, modoEdicion: true});
      console.log("se emitio evento")
      
   
    },
    


    cerrarModal() {
      this.mostrarModal = false;
    }
    },
    mounted() {
      this.obtenerDatos(); // Llama a la función para obtener los datos cuando el componente se monta
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos específicos del componente aquí */

  .modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.cerrar {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.cerrar:hover,
.cerrar:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
  </style>
  