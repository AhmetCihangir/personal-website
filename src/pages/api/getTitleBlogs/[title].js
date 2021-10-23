import { query, limit, collection, getDocs, where } from "firebase/firestore"
import db from "../../../../services/firebase"



export default async (req,res) => {
    const { title } = req.query

    const q = query(collection(db,"blogs"), where("title","array-contains",title))

    const qSnapshot = await getDocs(q)
    const datas = []
    qSnapshot.forEach(doc => {
        datas.push({ id : doc.id, data : doc.data() })
    })

    res.json(datas)

}