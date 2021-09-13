class UseCaseTemplate{
    constructor(schema_name){
        this.schema_name=schema_name
    }

    getTemplate(){
        return {
            add:this.buildAddUsecase(),
            getAll:this.buildGetAllUsecase(),
            getById:this.buildGetByIdUsecase(),
            update:this.buildUpdateUsecase(),
            delete:this.buildDeleteUsecase()
        }
    }
    
    buildAddUsecase(){
        return `export default function bulidMakeAdd${this.schema_name}({${this.schema_name}Db}) {
        
            return async function add${this.schema_name}(${this.schema_name}Info) {
                throw new Error("Add Funtion Not Implemented")
            }
        }`
    }

    buildGetByIdUsecase(){
        return `export default function bulidMakeGetById${this.schema_name}({${this.schema_name}Db}) {
        
            return async function getById${this.schema_name}({${this.schema_name}Id}) {
                throw new Error("Get By Id Funtion Not Implemented")
            }
        }`    }

    buildGetAllUsecase(){
        return `export default function bulidMakeGetAll${this.schema_name}({${this.schema_name}Db}) {
        
            return async function getAll${this.schema_name}() {
                throw new Error("Get All Funtion Not Implemented")
            }
        }`    }

    buildUpdateUsecase(){
        return `export default function bulidUpdate${this.schema_name}({${this.schema_name}Db}) {
        
            return async function update${this.schema_name}({${this.schema_name}Id}) {
                throw new Error("Update Funtion Not Implemented")
            }
        }`    }

    buildDeleteUsecase(){
        return `export default function bulidMakeDelete${this.schema_name}({${this.schema_name}Db}) {
        
            return async function delete${this.schema_name}({${this.schema_name}Id}) {
                throw new Error("Delete Funtion Not Implemented")
            }
        }`    }
}

export default UseCaseTemplate