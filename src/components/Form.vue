<template>
    <div class="popup container">

        <div class="row d-flex justify-content-center ">
            <h2 class="row d-flex justify-content-center">Formulario de Calidad de Tela</h2>

            <form class="row" @submit.prevent="submitform">
                <div class="col">
                    <div class="form-group">
                        <label for="Rollo">Rollo</label>
                        <input v-model="formData.especificaciones.rollo" type="text" id="rollo" name="rollo" required>
                    </div>

                    <div class="form-group">
                        <label for="peso">Peso</label>
                        <input v-model="formData.especificaciones.peso" type="number" step="0.001" id="peso" name="peso"
                            placeholder="Kg" required>
                    </div>

                    <div class="form-group">
                        <label for="valoracion">Valoracion Grises</label>
                        <input v-model="formData.escalagrises.valoracion" type="text" id="valoracion" name="valoracion"
                            min="0" max="15" placeholder="Rango > 0" required>
                    </div>

                    <div class="form-group">
                        <label for="proveeddor">Provedor</label>
                        <select id="proveedor" name="proveedor" v-model="formData.proveedor" required>
                            <option v-for="(prov, index) in proveedor" :key="index" :value="prov.id"> {{ prov.nombre }}
                            </option> //usar prov.nombre o proveedor.nombre
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="fecha">Fecha de Registro:</label>
                        <input type="date" id="fecha" name="fecha" required v-model="formData.fecha">
                    </div>

                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="absorcion">Absorción Pilling:</label>
                        <input v-model="formData.abpilling.cantidad" id="cantidad" name="cantidad"
                            placeholder="Cantidad(g)" required>
                        <input v-model="formData.abpilling.tiempo" id="tiempo" name="tiempo" placeholder="Tiempo(s)"
                            required>
                        <select name="rango" id="rango" v-model="formData.abpilling.rango">
                            <option value="1">Cambio Severo</option>
                            <option value="2">Cambio Considerable</option>
                            <option value="3">Formacion Pilling</option>
                            <option value="4">Pilling</option>
                            <option value="5">No Hay Pilling</option>
                        </select>

                    </div>
                    <div class="form-group">
                        <label for="cuatropuntos">Cuatro Puntos:</label>
                        <input v-model="formData.sispuntos.puntuacion" type="number" id="cuatropuntos"
                            name="cuatropuntos" required>
                    </div>

                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="">Dimensiones</label>
                        <input type="number" step="0.01" name="ancho" id="ancho" placeholder="ancho"
                            title="use valores en cm" v-model="formData.dimensiones.ancho">
                        <input type="number" step="0.01" name="alto" id="alto" placeholder="alto"
                            v-model="formData.dimensiones.altura">

                    </div>
                    <div class="form-group">
                        <label for="tipoTela">Tipo de Tela</label>
                        <select v-model="formData.especificaciones.tipoTela" name="telas" id="telas">
                            <option value="Algodon">Algodon</option>
                            <option value="Lino">Lino</option>
                            <option value="Seda">Seda</option>
                            <option value="Lana">Lana</option>
                            <option value="Poliester">Poliester</option>
                            <option value="Nylon">Nylon</option>
                            <option value="Denim">Denim</option>
                            <option value="Terciopelo">Terciopelo</option>
                            <option value="Saten">Saten</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="color">Color</label>
                        <select v-model="formData.especificaciones.color" name="colores" id="color">
                            <option value="Azul">Azul</option>
                            <option value="Rojo">Rojo</option>
                            <option value="Verde">Verde</option>
                            <option value="Negro">Negro</option>
                            <option value="Amarillo">Amarillo</option>
                            <option value="Blanco">Blanco</option>
                            <option value="Cafe">Cafe</option>
                        </select>
                    </div>

                </div>
                <div class="form-group text-end">
                    <button type="submit" class="btn btn-primary">{{ modoEdicion ? 'Actualizar' : 'Guardar' }}</button>
                </div>

            </form>

        </div>
        <foter></foter>
    </div>
</template>

<script>
import axios from 'axios';
import foter from './footer.vue'

import _ from 'lodash';
import { getUnicoRegistro, saveRegistry, getProveedor, updateRegistry, SwalFireAlert } from './peticiones/http'

console.log("evento form ");

export default {

    name: "Form",
    components: {
        foter,
    },

    data() {
        return {
            formData: {
                fecha: '',
                proveedor: null,
                dimensiones: {
                    altura: null,
                    ancho: null,
                },
                escalagrises: {
                    valoracion: null,
                },
                sispuntos: {
                    puntuacion: null,
                },
                abpilling: {
                    cantidad: null,
                    tiempo: null,
                    rango: null,
                },
                especificaciones: {
                    rollo: null,
                    peso: null,
                    tipoTela: '',
                    color: '',
                },
            },
            modoEdicion: false,
            proveedor: [],
            id: null

        }
    },

    methods: {

        submitform() {
            console.log("antes del data ", this.formData);
            let dataSend = this.formData

            const token = localStorage.getItem("token_access");
            const head = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }

            function Guardar() {
                //http saveRegistry
                console.log("guardando datos ", dataSend)
                saveRegistry(dataSend, head)
                    .then((response) => {
                        console.log("data response ok: ", response.data);
                        console.log('token ' + token);
                        SwalFireAlert(
                            'success', '¡Registro exitoso!', 'El registro se ha completado satisfactoriamente.',
                            'OK'
                        );
                    }
                    ).catch((error) => {
                        SwalFireAlert("error", "¡Registro fallido!", "El registro no ha sido completado.", "Cool")
                    });
            };

            function Actualizar(id, calificacion) {
                //console.log("actualizar ",dataSend)

                let dataUpdate = { ...dataSend, id };
                delete dataUpdate.escalagrises.valoracion;
                console.log("id", id, " datoooo ", dataUpdate)

                //upodateRegistry
                updateRegistry(dataUpdate, head).then((response) => {
                    if (response.status === 200) {
                        SwalFireAlert('success', '¡Actualización exitosa!', 'El registro se ha actualizado satisfactoriamente.', 'OK',
                        );
                    }

                })((error) => {
                    SwalFireAlert('error', '¡Actualización fallida!', `La actualización no se ha completado. ${error.message}`, 'Cool',
                    );
                });

            };

            this.modoEdicion ? Actualizar(this.id) : Guardar();
            console.log("ffinal");
        },
    },

    async mounted() {
        //obtener los proveedores disponibles

        const token = localStorage.getItem("token_access");
        const head = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

        getProveedor(head).then((result) => {
            this.proveedor = result.data;
            console.log("data proveedor ", this.proveedor)
        }).catch((error) => {
            console.log("error ", error);
        });

        const idParam = this.$route.params.id;
        this.id = idParam
        idParam ? this.modoEdicion = true : this.modoEdicion = false;
        console.log("edicion afadsfdlajkfa " + this.modoEdicion)

        if (this.modoEdicion) {
            //Obteniendo Objeto a editar-realizar peticion por id
            let reg;
            try {
                reg = await getUnicoRegistro(head, idParam);
            } catch (error) {
                console.error("error trayendo data unica ", error.message)
            }

            this.formData = reg.data;
            console.log("formdata ", this.formData)

        }
    }

}
</script>
<style lang="scss" scoped>
.popup {
    top: 2%;
    left: 2%;
    align-content: center;


    background-color: #f2f7f5;
    overflow-y: auto;
    border-radius: 10px;

    h2 {

        color: #00473e;
        text-align: center;
        font-weight: 600;
        padding: 2rem;
    }
}

/* estilos del formmulario*/
form {
    max-width: 50rem;
}

.form-group {
    position: relative;

    margin-bottom: 20px;

    label {
        margin-bottom: 5px;
    }

    .btn {
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

}

.form-group input,
.form-group select {
    width: 100%;
    padding: 8px;
    border: 2px solid #00473e;
    border-radius: 4px;
    background-color: #cbe4e0;
}

.form-group textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
</style>