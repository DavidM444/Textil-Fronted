<template>
  <div id="app" class="contenedor">
    <RouterView v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut"></RouterView>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false
    }
  },
  components: {
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      console.log("entro en verify")
      if (this.is_auth == false)
        this.$router.push({ name: "login" });
      else{
        this.$router.push({ name: "work" }
        )
      }  
    },
    loadLogIn: function () {
      this.$router.push({ name: "login" })
    },
    loadSignUp: function () {
      this.$router.push({ name: "Signup" })
    },
    completedLogIn: function (data) {
      console.log("entro en complete login +: ",data);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("name", data.name);
      localStorage.setItem("token_access", data.token_access);
      alert("Autenticación Exitosa");
      this.verifyAuth()
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    logOut: function(){
      console.log("log out");
      localStorage.clear();
      this.verifyAuth();

    }
  },
  created: function () {
    console.log("llamando created");
    this.verifyAuth();
  }

};
</script>
  
<style>
.contenedor {
  background-color: transparent;
}

:root {
  --clr: #222327;
}

.cabecera {
  background-color: transparent;
}
</style>
  
  

