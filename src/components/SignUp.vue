<template>
   
        <div class="container-fluid d-flex SignUp">
            <div class="col d-none d-sm-block">
                <img class="float" src="../assets/img/moonstarious-project-KbaSNX-6Vdo-unsplash.jpg" alt="" style="height: 44em; width: 80%" >
            </div>
            <div class="col"> 
                <div class="row">
                    <div class="container-fluid pt-3">
                        <div class="d-flex logo">
                            <img class="img-fluid mx-3" src="../assets/img/T.png" alt="">
                            <h1 class="mt-2">QualityTex</h1>
                        </div>
                    </div>
                </div>
                <section class="mt-3 Sp te">
                    <h2 class="text-center">Registrarse</h2>
                    <form class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" required placeholder="">
                        
                        <label for="lname" class="form-label">Apellido</label>
                        <input type="text" class="form-control" name="lname" id="lname" aria-describedby="helpId" required placeholder="">
                        
                        <label for="" class="form-label">Numero Telefonico</label>
                        <input type="text" class="form-control" pattern="[1-9]\d*" required name="" id="" aria-describedby="helpId" placeholder="">
                        
                        <label for="" class="form-label">Fecha de Nacimiento</label>
                        <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    
                        <label for="Cargo" class="form-label">Cargo</label>
                        <select class="form-select form-select-lg" name="" id="">
                            <option selected>Gestor de calidad</option>
                            <option value="">Gerente</option>
                            
                        </select>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        
                    </form>

                </section>
            </div>
         

        </div>
        <foot/>
    
   
   
</template>
<script>
import foot from './footer.vue'
export default{
    name: "Singup",
    components: {
        foot,
    }
}
</script>


<style lang="scss">


</style>