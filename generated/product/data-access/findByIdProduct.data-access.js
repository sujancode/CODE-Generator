export default async function findById({id}) {
            const db = await makeDb()
            const result = await db.collection(product).findOne({_id: id})
            if (! result) 
                return null
    
            
    
            const {
                _id: _,
                ...obj
            } = result
    
            return {
                id,
                ...obj
            }
        }