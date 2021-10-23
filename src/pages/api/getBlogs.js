// import firebase from "../../../services/firebase"
import { getDocs,collection,query,orderBy,limit } from "firebase/firestore"
import db from "../../../services/firebase"



export default async (req,res) => {
    const qCurrent = query(collection(db,"blogs"),orderBy("time","desc"),limit(15))
    const qMostWatched = query(collection(db,"blogs"),orderBy("watches","desc"),limit(10))


    const currentSnapshot = await getDocs(qCurrent)
    const mostWatchedSnapshot = await getDocs(qMostWatched)
    
    const datas = {
        current : [],
        mostWatched : []
    }


    currentSnapshot.forEach(doc => {
        datas.current.push({ id : doc.id, data : doc.data() })
    })

    mostWatchedSnapshot.forEach(doc => {
        datas.mostWatched.push({ id : doc.id, data : doc.data() })
    })

    res.send(datas)



    
    

}