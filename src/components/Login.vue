<template>
  <div class="container-fluid cont">
    <div class="row ">
      <div class="col">
        <div class="container-fluid pt-3">
          <div class="d-flex logo">
            <img class="img-fluid mx-3" src="../assets/img/T.png" alt="">
            <h1 class="mt-2 text-center">Quality Tex</h1>
          </div>

          <div class="pt-3">
            <div class="card login">
              <h2 class="text-center">Iniciar Sesión</h2>
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
                <router-link class="btn btn-primary mt-3 btn-login" to="/work">Iniciar Sesión</router-link>
              </div>

            </form>
          </div>
          <div class="pt-5">
            <p class="fs-6 ">¿ No estas registrado ? <router-link to="/singup">Registrarse</router-link></p>
          </div>

         

        </div>
      </div>

      <div class="col d-none d-md-block">

        <img src="../assets/img/pexels-skylar-kang-6045248.jpg" class="img-fluid dm-none d-sm-block" alt="image desc"
          style="height: 37em; width: 100%;">

      </div>

    </div>
    
  </div>
  <foot></foot>
</template>

<style>
body{
  font-family: 'Poppins', sans-serif;
}


.cont {
  background-color: #f2f7f5;
  height: max-content;
}

.logo img {
  max-width: 100px;
  height: auto;
  border-radius: 20%;
}

.logo h1 {

  font-size: 3rem;
  font-weight: 600;
  color: #00473e
}

.login {
  background-color: transparent;
  border: none;
}

.login h2 {
  color: #00473e;

}

.login .m1 {
  padding: 8px;
}

.login img {
  width: 12%;
  background-color:transparent;
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

.btn-login{
  background-color: #00473e;
  border-color: #00473e;
}
</style>


<script>
import foot from './footer.vue'
export default {
  name: "Login",
  components: {
    foot,
  }
}
console.log("entranod a login")
</script>