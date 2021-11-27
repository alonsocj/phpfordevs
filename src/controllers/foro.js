import req from "express/lib/request";
import { conexion } from "../database";

export const getTemas = async(req,res)=>{

    const { rows } = await conexion.query("SELECT * FROM foro")
    console.log(rows)
    //Pintar en pantalla
    res.render("foro",{data:rows});

}

export const getComments = async(req,res)=>{

    const { rows } = await conexion.query("SELECT * FROM respuesta WHERE id_foro = $1",[req.params.id])
    console.log(rows)

    //Pintar en pantalla
    res.render("thread",{data:rows});

}


export const postTemas = async(req,res) =>{
    console.log(req.body.author);
  
    const rows  = await conexion.query("INSERT INTO foro (descripcion, titforo, user_foro) VALUES ($1,$2,$3)",
    [req.body.contenido, req.body.Titulo, req.body.author])
    console.log(rows);
    res.redirect('/foro')

}
