import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadUids = async() =>{

    const collectionRef = collection(FirebaseDB,`/idusuarios`)
    const docs = await getDocs(collectionRef);
    const uids = [];
    docs.forEach(doc=>{
        uids.push({id:doc.id, ...doc.data() })
    })
    console.log(uids)
    return uids;
    
}