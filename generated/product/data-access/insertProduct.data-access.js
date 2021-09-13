export default async function insert({id:_id,...other}){
            const db=await makeDb()
            const result=await db.collection(product).insertOne({
                _id,
                ...other
            })

            const {_id:id,...insertedInfo}=result.ops[0]
            return {
                id,
                ...insertedInfo
            }
        }