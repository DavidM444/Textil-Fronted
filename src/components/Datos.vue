<template>
    <div class="cont">
       <section>
          <h2 class="text-center text-bg-success fs-2 font-verdana p-2">Tabla de registros</h2>
        </section>
      <div class="table-responsive container">
        <table class="table align-middle table-striped table-hover table-success">
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
                <button @click="mostrarDetalle(registro)" class="btn btn-info btn-sm">Detalles</button>
              </td>
              
              <td>
                <button class="btn btn-secondary btn-sm"  @click="update(registro)"> Update </button>
              </td>
              <td>
                <button class="btn btn-danger btn-sm " @click="deleteRegistry(registro.id)"> Eliminar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal para detalles -->
      
      <div v-if="mostrarModal" class="modal">
        <div class="modal-content bg-success">
          <span class="cerrar p-2 text-warning" @click="cerrarModal">&times;</span>
          <h3>Dimensiones</h3>
          <p><strong>Alto</strong> {{ detalle.altura }} metros.  <strong>Ancho</strong> {{ detalle.ancho }} metros.</p>

          <h3>Especificamos</h3>
        
          <p><strong>Rollo:</strong> {{ detalle.rollo }}</p>
          <p><strong>Peso:</strong> {{ detalle.peso }} kg</p>
          <p><strong>Tipo Tela</strong> : {{ detalle.tipoTela }}</p>
          <p><strong>Color:</strong> {{ detalle.color }} </p>

          <h3>Valoración de Grises: </h3><p><strong>Valoración:</strong> {{ detalle.valoracion }}</p>

          <h3>Absorcion Y Pilling</h3>
          <p><strong>Cantidad :</strong> {{ detalle.cantidad }} gramos.</p>
          <p><strong>Tiempo :</strong> {{ detalle.tiempo }} segundos.</p>
          <p><strong>Rango :</strong> {{ detalle.consideracion }}</p>

          <h3>Resultado Prueba Cuatro Puntos: </h3><p><strong>Estado:</strong> {{ detalle.estado }}</p>
        </div>
      </div>

    </div>
  </template>
  
  <script>

  import axios from 'axios';
  import { deletePeticion, getRegistros, SwalFireAlert } from './peticiones/http'
  
  
  export default {

    data() {
      return {
        registros: [], 
        mostrarModal: false,
        detalle: {},
        registroSeleccionado: null, 
      };
    },

   
    methods: {
      async obtenerDatos() {
        const token = localStorage.getItem('token_access');
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
        console.log("id delete ",id);
        const token = localStorage.getItem('token_access');
        const head = { headers: {
                'Authorization': `Bearer ${token}`
            }};

        await deletePeticion(id,head).then(
                  SwalFireAlert('success','¡Registro eliminado!','El registro se ha eliminado.','OK')                  
                )
                .catch((error)=>{
                  SwalFireAlert('warning','Fallo','No se pudo eliminar el regitro', 'OK');
                })
      } catch (error) {
        console.log(error)
        
      }
    },

    update(registro){
      this.$emit('nuevoregistro', { registro, modoEdicion: true});
    },
    


    cerrarModal() {
      this.mostrarModal = false;
    }
    },
    mounted() {
      this.obtenerDatos();
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
.modal h3{
  color: rgb(111 233 132);
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
@media (max-width: 700px) {
  .cont{
    background-color: black;
    
  }
  table, .btn{
    font-size: 13px;
    
  }
}




  </style>
  