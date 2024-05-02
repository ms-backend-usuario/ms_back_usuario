export const  messageBrowse = {
    home:"Hola Home",
    galery:"Hola Bienvenida Galery",
    about:"Que Más About",
    contact: "Regalame tú Contact",
    principal: "Por Defecto"
};

//4 paso de routes.user.js
export const success = (req, res, status=200, mensaje="")=>{

    res.status(status).json({
        error:false,
        status:status,
        body:mensaje
    })
};

//5 paso
export const error = (req, res, status=500, mensaje="")=>{

    res.status(status).json({
        error:true,
        status:status,
        body:mensaje
    })

};
