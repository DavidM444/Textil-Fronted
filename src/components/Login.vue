<template>
    <div class="container-fluid cont">
        <div class="row ">
            <div class="col">
                <div class="container-fluid pt-3">
                    <div class="d-flex logo">
                        <img class="img-fluid mx-3" src="../assets/img/T.png" alt="">
                        <h1 class="mt-2">QualityTex</h1>

                    </div>

                    <div class="pt-3">
                        <div class="card login">
                            <h2 class="text-center">Inicia Sesion</h2>
                            <div class="d-flex  justify-content-center align-items-center">
                                <img class="m-3 m1 " src="../assets/img/facebook.png" alt="Card image cap">
                                <img class="m-3 m1" src="../assets/img/google.png" alt="Card image cap">
                                <img class="m-3" src="../assets/img/icons8-apple-logo-64.png" alt="Card image cap">
                            </div>

                        </div>
                    </div>

                    <div class="mt-3">
                        <form class="w-auto mx-auto" action="Home.html">
                            <div class="form-group ">
                                <label for="email">Correo electrónico:</label>
                                <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña:</label>
                                <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña" required>
                            </div>
                            <div class="text-center">
                              <router-link class="btn btn-primary mt-3" to="/work">Iniciar Sesion</router-link>
                                  
                                
                            </div>
                          
                        </form>
                    </div>
                    <div class="pt-5">
                      <p class="fs-6 ">No estas registrado?  <router-link to="/singup">Registrarse</router-link></p>
                    </div>

                     <div class="f1">
                        <div class="card text-center pt-4">
                            <p>QualityTex - Software de calidad Textil</p>
                            <p>2023 - © Copyrigth</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="col d-none d-sm-block" sm>
                
                <img src="../assets/img/pexels-skylar-kang-6045248.jpg" class="img-fluid dm-none d-sm-block" alt="image desc" style="height: 44em; width: 100%;">    
                
            </div>
           
        </div>
        <foot></foot>
    </div>

           
</template>

<style >
* {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.cont {
  background-color: #ffe414;
  height: max-content;
}

.logo img {
  max-width: 100px;
  height: auto;
  border-radius: 20%;
}
.logo h1 {
  font-family: "Cormorant SC", serif;
  color: #006E51;
}

.login {
  background-color: #ffe414;
  border: none;
}
.login h2 {
  color: #006E51;
  
}
.login .m1 {
  padding: 8px;
}
.login img {
  width: 12%;
  background-color: #36b48e;
  border-radius: 50%;
}

.logo {
  animation: myAnim 5s ease 0s 1 normal none;
}

@keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateX(-250px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.f1 {
  background-color: #ffe414;
}
.f1 .card {
  background-color: #ffe414;
  border: none;
}


</style>


<script>
import foot from './footer.vue'
export default{
  name: "Login",
  components: {
    foot,
  }
}
console.log("entranod a login")
</script>