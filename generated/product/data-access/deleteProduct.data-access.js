export default async function deleteById({id}){
            const db=await makeDb()
            const result=await db.collection(product).deleteOne({_id:id})
            return result
        }