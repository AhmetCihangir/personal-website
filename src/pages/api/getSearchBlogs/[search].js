import { query, orderBy, limit, collection, getDocs, where } from "firebase/firestore"
import db from "../../../../services/firebase"



export default async (req,res) => {
    const { search } = req.query

    // const q = query(collection(db,"blogs"),orderBy("time","desc"))
    // const q = query(collection(db,"blogs"), where("title",">=","selam1"),where("title", "<=","selam1" + "~"))
    const q = query(collection(db,"blogs"), where("title",">=",search),where("title", "<=",search + "~"))

    const qSnapshot = await getDocs(q)
    const datas = []
    qSnapshot.forEach(doc => {
        datas.push({ id : doc.id, data : doc.data() })
    })

    res.json(datas)

}