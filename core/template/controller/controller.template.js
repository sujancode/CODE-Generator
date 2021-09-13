class ControllerTemplate{
    constructor(schema_name){
        this.schema_name=schema_name
    }

    getTemplate(){
        return{
            post:this.buildPostController(),
            getAll:this.buildGetAllController(),
            getById:this.buildGetByIdController(),
            update:this.buildUpdateController(),
            delete:this.buildDeleteController()
        }
    }

    buildPostController(){
        return `export default function bulidMakePost${this.schema_name}() {
        
            return async function post${this.schema_name}(httpRequest) {
                throw new Error("Post Controller Funtion Not Implemented")
            }
        }`
    }

    buildGetByIdController(){
        return `export default function bulidMakeGet${this.schema_name}() {
        
            return async function get${this.schema_name}(httpRequest) {
                throw new Error("Get Controller Funtion Not Implemented")
            }
        }`
    }

    buildGetAllController(){
        return `export default function bulidMakeGetAll${this.schema_name}() {
        
            return async function getAll${this.schema_name}(httpRequest) {
                throw new Error("Get All Controller Funtion Not Implemented")
            }
        }`
    }

    buildUpdateController(){
        return `export default function bulidMakeUpdate${this.schema_name}() {
        
            return async function update${this.schema_name}(httpRequest) {
                throw new Error("Update Controller Funtion Not Implemented")
            }
        }`
    }

    buildDeleteController(){
        return `export default function bulidMakeDelete${this.schema_name}() {
            return async function delete${this.schema_name}(httpRequest) {
                throw new Error("Delete Controller Funtion Not Implemented")
            }
        }`    }
}

export default ControllerTemplate