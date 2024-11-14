import express from 'express'   //Las dependencias no requieren la extensión
import userRoutes from './routes/userRoutes.js';    //Pero archivo internos que tu creas si requiere la extensión ".js"

//Crear la app
const app = express()

//Habilito PUG
app.set('view engine', 'pug')   //quiero utilizar PUG para las vistas
app.set('views', './views') //Y todas las vistas las verás en la carpeta "views" para que los renderices y los trates como un template engine de PUG.

//Carpeta Pública
//Es la carpeta que pueden abrir las personas que visiten el sitio web pero también es el contenedor de los archivos estáticos.
app.use( express.static('public'));

//Routing
app.use('/auth', userRoutes) //use va a buscar todas las rutas que inicien con "/", que está asociado a todas mis rutas que hice en userRoutes.js, a diferencia de get que sólo va a buscar una vez y que sea exactamente "/"

//Definir un puerto y arrancárlo
const port = 3005;

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto: ${port}`)
});