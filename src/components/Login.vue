<template>
  <div>
	<div>
		<h2>Iniciar Sesion</h2>
		<form v-on:submit.prevent="processLoginUser">
			<input type="text" placeholder="username" v-model="user.username">
			<input type="password" placeholder="contraseña" v-model="user.password">
			<button type="submit">Iniciar</button>
		</form>
	</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

	name: "Login",

	data: function(){
		return{
			user:{
				username: "",
				password: ""
			}
		}
	},
	methods: {
		processLoginUser: function(){
			axios.post(
				'http://127.0.0.1:8000/login/',
				this.user,

				{headers:{}}
			)
			.then((result) => {
				let dataLogin = {
					tokenAccess : result.data.access,
					tokenRefresh : result.data.refresh,
					username : this.user.username
				}
				this.$emit('completedLogIn',dataLogin)

			})
			.catch((error) =>{
				if(error.response.status == "401")
					alert("incorrect credentials")
			})
		}
	}

}
</script>

<style>

</style>