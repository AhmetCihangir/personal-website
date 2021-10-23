import { query, limit, collection, getDocs, where } from "firebase/firestore"
import db from "../../../../services/firebase"



export default async (req,res) => {
    const { tag } = req.query

    const q = query(collection(db,"blogs"), where("tags","array-contains",tag),limit(20))

    const qSnapshot = await getDocs(q)
    const datas = []
    qSnapshot.forEach(doc => {
        datas.push({ id : doc.id, data : doc.data() })
    })

    res.json(datas)

}