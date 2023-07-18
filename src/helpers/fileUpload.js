import { nanoid } from "@reduxjs/toolkit";

export const fileUpload = async(file) => {
    if(!file) throw new Error('No hay archivos cargados');

    const claudUrl = 'https://api.cloudinary.com/v1_1/dvmv4jpka/upload';

    const formData = new FormData();
    formData.append('upload_preset','React-Journal')
    formData.append('file',file)
    try {

        const resp = await fetch(claudUrl,{
            method: 'POST',
            body:formData
        })

        if(!resp.ok) throw new Error('No se pudo subir el archivo');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch (error) {
        // console.log(error)
        throw new Error(error.message)
    }
}