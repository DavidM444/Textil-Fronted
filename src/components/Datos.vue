<template>
    <div class="dts-container">
            <h1>Tabla de la Base de Datos</h1>
        
        <div class="search-bar">
            <input type="text" id="search-input" placeholder="Buscar en columnas...">
        </div>
        
        <table id="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ancho</th>
                    <th>Alto</th>
                    <th>Color</th>
                    <th>Gramaje</th>
                    <th>Pilling</th>
                    <th>Grises</th>
                    <th>4 puntos</th>
                    <th>proveeddor</th>
                    <th>Fecha</th>
                    <th>peso</th>
                    <th>rollo</th>
                    <th>tipo tela</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>32cm</td>
                    <td>33 cm</td>
                    <td>rojo</td>
                    <td>4.6</td>
                    <td>30</td>
                    <td>3</td>
                    <td>2</td>
                    <td>NovaText</td>
                    <td>12/03/2019</td>
                    <td>2.4 kg</td>
                    <td>324-333-432</td>
                    <td>Seda</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>31 cm</td>
                    <td>25 cm</td>
                    <td>azul</td>
                    <td>3.4</td>
                    <td>20</td>
                    <td>5</td>
                    <td>2</td>
                    <td>TelasMundo</td>
                    <td>22/03/2023</td>
                    <td>3.3 kg</td>
                    <td>546-653-677</td>
                    <td>Nailon </td>
                </tr>
                <!-- Agrega más filas de datos aquí -->
            </tbody>
        </table>
    </div>
    
</template>
<style scoped>

        
        .dts-container {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #7b8cb5;
        }
        
        h1 {
            text-align: center;
            color: rgb(255, 255, 255);
        }
        
        .search-bar {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
        }
        
        .search-bar input[type="text"] {
            padding: 10px;
            width: 200px;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
        
        @media (max-width: 600px) {
            .search-bar {
                justify-content: center;
            }
            
            .search-bar input[type="text"] {
                width: 100%;
            }
            
            table {
                font-size: 14px;
            }
        }
</style>

<script>
console.log("data enabled")
</script>