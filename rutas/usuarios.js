var ruta=require("express").Router();
ruta.get("/", (req,res)=>{
  //  res.send("Hola mundo");
  res.render("inicio");
});

// post recive datos del formulario, get para lo demas
ruta.get("/login", (req,res)=>{
  res.render("login");
});

ruta.post("/validar", (req,res)=>{
if(req.body.usuario=="Abril" && req.body.password=="12345"){ // body formulario, url:params
  //variable de sesion
  req.session.usuarioS=req.body.usuario;
//res.render("bienvenido");
res.redirect("/bienvenido");
} else{
 // res.render("error");
 res.redirect("/error");
}

});

ruta.get("/bienvenido",(req,res)=>{
  if(req.session.usuarioS){
    res.render("bienvenido",{usuarioS:req.session.usuarioS});
  }else{
      res.redirect("/error"); //lo mandamos a otra pagina
  }

});



ruta.get("/protegido",(req,res)=>{
  if(req.session.usuarioS){
    res.render("protegido",{usuarioS:req.session.usuarioS});
  }else{
      res.redirect("/error"); //lo mandamos a otra pagina
  }

});




ruta.get("/error",(req,res)=>{
res.render("error");
});

ruta.get("/logout",(req,res)=>{
    req.session.destroy(); //destruye las sesiones
    res.redirect("/");
});

module.exports=ruta;