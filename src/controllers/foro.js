import req from "express/lib/request";
import { conexion } from "../database";

export const getTemas = async(req,res)=>{

    const { rows } = await conexion.query("SELECT * FROM foro")
    console.log(rows)
    //Pintar en pantall
    res.render("foro",{data:rows});

}

export const getComments = async(req,res)=>{

    const { rows } = await conexion.query("SELECT * FROM respuesta WHERE id_foro = $1",[req.params.id])
    console.log(rows)

    //Pintar en pantalla
    res.render("thread",{data:rows});

}

/*
export const postTemas = async(req,res) =>{
    console.log(req.body)
    res.render("thread",{body: req.body})
}
*/