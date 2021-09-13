export default async function findAll() {
            const db = await makeDb()
            const result = await db.collection(product).find()
    
            return(await result.toArray()).map(({
                _id: id,
                ...obj
            }) => ({
                id,
                ...obj
            }))
        }