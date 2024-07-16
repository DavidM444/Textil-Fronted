<template>
    <div class="cont">
       <section>
          <h2 class="text-center fs-2 font-verdana py-3 title">Tabla de registros</h2>
        </section>
      <div class="table-responsive container">
        <table class="table align-middle table-striped table-hover table-success">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Proveedor</th>
            
            </tr>
          </thead>
          <tbody>
            <tr v-for="(registro, index) in registros" :key="index">
              <td>{{ registro.id }}</td>
              <td>{{ registro.fecha }}</td>
              <td>{{ registro.nombreProveedor }}</td>
              <td>
                <button @click="mostrarDetalle(registro)" class="btn btn-info btn-sm">Detalles</button>
              </td>
              
              <td>
                <button class="btn btn-secondary btn-sm" @click="update(registro)"> Update </button>
              </td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteRegistry(registro.id)"> Eliminar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal para detalles -->
      <div v-if="mostrarModal" class="modal">
        <Modal :detalle="detalle" @modalCerrado="cerrarModal"/>
       
      </div>

    </div>
  </template>
  
  <script>

  import axios from 'axios';
  import { deletePeticion, getRegistros, SwalFireAlert } from '../components/peticiones/http'
  import Modal from '../components/Modal.vue'
import { ref } from 'vue';
  
  
  export default {

    data() {
      return {
        registros: ref([]),
        mostrarModal: false,
        detalle: {},
        registroSeleccionado: null, 
      };
    },
    components: {
      Modal
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
        this.detalle=registro;
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
      this.$emit('nuevoregistro', { registro});
    },
    

    cerrarModal() {
      this.mostrarModal = false;
    }
    },
    created() {
      this.obtenerDatos();
    },
    props: []
  };



  </script>
  
  <style lang="scss" scoped>
  /* Agrega estilos específicos del componente aquí */

  $green-dark: #00473e;

  .title{
    color: $green-dark;
  }

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
@media (max-width: 550px) {
  table{
    background-color: transparent;
  }
  
  table, .btn{
    font-size: 9px;
    
  }
}

  </style>