var express=require("express");
var path=require("path");
var session=require("express-session");
var usuariosRutas=require("./rutas/usuarios");
require("dotenv").config(); 

var app=express();
app.set("view engine", "ejs");
//definimos caroeta estatica
app.use("/web", express.static(path.join(__dirname, "/web")));
//recivir datos del formulario
app.use(express.urlencoded({extended:true}));

//manejo de sesiones 
app.use(session({
    secret: process.env.SECRETO_SESION,
    //secret:"holiscvbnm", //encriptacion, se le agregan esos caracteres, aqui encripta sesion
    resave:true,
    saveUninitialized:true
}));

//ingresar a rutas
app.use("/",usuariosRutas);
secret: process.env.PORT || 3000;
// var port=process.env.PORT  || 3000;

app.listen(3000,()=>{
    console.log(`Servidor en http://localhost:${port}`);
});

