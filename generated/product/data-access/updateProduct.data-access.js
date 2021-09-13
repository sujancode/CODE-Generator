export default async function update({
            id,
            ...updateItem
        }) {
            const db = await makeDb()
            const result = await db.collection(product).updateOne({
                _id: id
            }, {
                $set: {
                    ...updateItem
                }
            })
            
    
            return result.modifiedCount > 0 ? updateItem : null
    
        }