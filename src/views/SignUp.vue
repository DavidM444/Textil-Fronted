<template>
    <div class="container-fluid px-0">
        <div class="row">
            <div class="col d-none d-sm-block flt">
                <img src="../assets/img/moonstarious-project-KbaSNX-6Vdo-unsplash.jpg" alt="">

            </div>
            <div class="col">
                <Navbar />
                <section class="mt-5 reg">
                    <h2 class="text-center">Registrarse</h2>
                    <form class="form" @submit.prevent="processSignUp">
                        <label for="name" class="form-label">Nombre</label>
                        <input v-model="user.nombre" type="text" class="form-control" name="name" id="name"
                            aria-describedby="helpId" required placeholder="">

                        <label for="lname" class="form-label">Apellido</label>
                        <input v-model="user.apellido" type="text" class="form-control" name="lname" id="name"
                            aria-describedby="helpId" required placeholder="">

                        <label for="Email" class="form-label">Email</label>
                        <input v-model="user.email" type="email" class="form-control" required name="Email" id="Email"
                            aria-describedby="helpId" placeholder="">

                        <label for="contraseña" class="form-label">Contraseña</label>
                        <input v-model="user.clave" type="password" class="form-control" required name="contraseña"
                            id="contraseña">

                        <button type="submit" class="btn btn btn-primary mt-3">Registrar</button>

                    </form>

                </section>
            </div>
        </div>

        <foot />

    </div>
</template>
<script>
import foot from '../components/footer.vue'
import axios from 'axios'
import { SwalFireAlert } from '../components/peticiones/http'
import Navbar from '../components/Navbar.vue'
export default {
    name: "Singup",
    components: {
        foot, Navbar,
    },
    data: function () {
        return {
            user: {
                nombre: "",
                apellido: "",
                email: "",
                clave: ""
            }

        }
    },
    methods: {
        processSignUp: function () {
            axios.post(
                "http://localhost:8081/signup",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    console.log("res ", result.data)
                    let { nombre: userName, apellido: userLastName } = result.data;
                    SwalFireAlert('success', `Usuario registrado: ${userName} ${userLastName} `, "Inicie Sesion", "Ok")
                    this.$router.push("Login");
                    /*

                    //Autentication Automatic
                    let dataSignUp = {
                        name: this.user.nombre,
                        apellido: this.user.apellido,
                        email: this.user.email,
                        token_access: result.data.clave,
                
                    }
                    this.$emit('completedSignUp', dataSignUp)
                    */
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
        }
    }
}
</script>


<style lang="scss" scoped>
$bg-ss: #00473e;
$bg2: #f2f7f5;



.flt {
   
    img {
        height: 38em;
        width: 90%;
        border-radius: 0 0 1rem 0;
    }
}

.btnr {
    background-color: $bg-ss;
    border-bottom: #00473e;
}


.btnr:hover {
    background-color: #0d6efd;
    font-size: large;
}

.reg h2 {
    color: #00473e;
}

.form{
    padding: 1rem;
}
</style>