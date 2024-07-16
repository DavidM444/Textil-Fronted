<template>
  <div>
    <div class="modal-content">
          <span class="cerrar p-2 text-warning" @click="cerrarModal">&times;</span>
          <h3>Dimensiones</h3>
          <p><strong>Alto</strong> {{ detalle.dimensiones.altura }} metros.  <strong>Ancho</strong> {{ detalle.dimensiones.ancho }} metros.</p>

          <h3>Especificamos</h3>
        
          <p><strong>Rollo:</strong> {{ detalle.especificaciones.rollo }}</p>
          <p><strong>Peso:</strong> {{ detalle.especificaciones.peso }} kg</p>
          <p><strong>Tipo Tela</strong> : {{ detalle.especificaciones.tipoTela }}</p>
          <p><strong>Color:</strong> {{ detalle.especificaciones.color }} </p>

          <h3>Valoración de Grises: </h3><p><strong>Valoración:</strong> {{ detalle.escalagrises.valoracion }}</p>

          <h3>Absorcion Y Pilling</h3>
          <p><strong>Cantidad :</strong> {{ detalle.abpilling.cantidad }} gramos.</p>
          <p><strong>Tiempo :</strong> {{ detalle.abpilling.tiempo }} segundos.</p>
          <p><strong>Rango :</strong> {{ detalle.abpilling.rango }}</p>

          <h3>Resultado Prueba Cuatro Puntos: </h3><p><strong>Estado:</strong> {{ detalle.sispuntos.puntuacion }}</p>
        </div>
    
  </div>
</template>

<script>

export default{
    name: 'Modal',
    props:{
        detalle:{
            type: Object,
            
        },
      
    }, 
    methods:{
        cerrarModal(){
            this.$emit('modalCerrado');
        }
    },
    created(){
      //set rango y puntuacion. Pueodo cambiar los valores o agregar nuevos campos al aobjeto. Elegi la primera
      const rango = {
        1 : 'Cambio Severo',
        2 : 'Cambio Considerable',
        3 : 'Formacion Pilling',
        4 : 'Pilling',
        5 : 'No Hay Pilling'
      }

      const numerRango = this.detalle.abpilling.rango
      const cuatroPuntos = this.detalle.sispuntos.puntuacion
      
      this.detalle.abpilling.rango = rango[numerRango];
      this.detalle.sispuntos.puntuacion = cuatroPuntos >30? 'Bueno': 'Malo';
      
      //console.log("montado el modal", this.detalle )
    }
}



</script>
 
<style lang="scss" scoped>

$green-dark: #00473e;
$green: #3f7354;
$modal-back: #F1EAFF;

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
  color: $green;
}

.modal-content {
  background-color: $modal-back;
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