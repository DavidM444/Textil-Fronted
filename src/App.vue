<template>
  <div id="app" class="contenedor ">
    <RouterView v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut" v-on:nuevoregistro="newre"></RouterView>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
      is_user: false
    }
  },
  components: {
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      console.log("entro en verify")
      if (this.is_auth == false)
        this.$router.push({ name: "home" });
      else{
        this.is_user? this.$router.push({name: "admin"}):this.$router.push({ name: "work" }
        )
      }  
    },
    loadLogIn: function () {
      this.$router.push({ name: "datos" })
    },
    loadSignUp: function () {
      this.$router.push({ name: "Signup" })
    },
    completedLogIn: function (data) {
      console.log("entro en complete login +: ",data);
      this.is_user=data.role_user;
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

    },
    newre: function(datas){
      this.$router.push({name:'formUp',params: { id: datas.registro.id}})
      console.log("data evento_ ", datas.registro)
    }
  },
  created: function () {
    console.log("llamando created");
    this.verifyAuth();
  },
  
  

};
</script>
  
<style scoped>
.contenedor {
  margin: 0 auto;
  max-width: 200ch;
  display: flex;
  align-content: center;
  justify-content: center;
  align-self: center;
}

:root {
  --clr: #222327;
}
</style>

<style>


body{
  font-family: 'Poppins', sans-serif;
  background-color: red;
  
}

</style>
  
  

