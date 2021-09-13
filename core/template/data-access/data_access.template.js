class DataAccessTemplate{
    constructor(schema_name){
        this.schema_name=schema_name
    }

    getTemplate(){
        return {
            insert:this.buildInsert(),
            findById:this.buildFindById(),
            findAll:this.buildFindAll(),
            update:this.buildUpdate(),
            delete:this.buildDelete()
        }
    }
    
    buildInsert(){
        return `export default async function insert({id:_id,...other}){
            const db=await makeDb()
            const result=await db.collection(${this.schema_name}).insertOne({
                _id,
                ...other
            })

            const {_id:id,...insertedInfo}=result.ops[0]
            return {
                id,
                ...insertedInfo
            }
        }`
    }

    buildFindById(){
        return `export default async function findById({id}) {
            const db = await makeDb()
            const result = await db.collection(${this.schema_name}).findOne({_id: id})
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
        }`
    }

    buildFindAll(){
        return `export default async function findAll() {
            const db = await makeDb()
            const result = await db.collection(${this.schema_name}).find()
    
            return(await result.toArray()).map(({
                _id: id,
                ...obj
            }) => ({
                id,
                ...obj
            }))
        }`
    }

    buildUpdate(){
        return `export default async function update({
            id,
            ...updateItem
        }) {
            const db = await makeDb()
            const result = await db.collection(${this.schema_name}).updateOne({
                _id: id
            }, {
                $set: {
                    ...updateItem
                }
            })
            
    
            return result.modifiedCount > 0 ? updateItem : null
    
        }`
    }

    buildDelete(){
        return `export default async function deleteById({id}){
            const db=await makeDb()
            const result=await db.collection(${this.schema_name}).deleteOne({_id:id})
            return result
        }`
    }
}

export default DataAccessTemplate