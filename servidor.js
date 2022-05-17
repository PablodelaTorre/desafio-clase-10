const express = require('express')
const app = express()
const multer = require('multer')
const routesProductos = require("./routes/routes-productos.js")

app.use(multer({
    dest:__dirname+"/public/files",

}).single("photo"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use('/productos', routesProductos)
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('index', {
        title:"Agregue un producto"
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})