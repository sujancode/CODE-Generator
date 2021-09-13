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
        return null
    }

    buildGetByIdController(){
        return null
    }

    buildGetAllController(){
        return null
    }

    buildUpdateController(){
        return null
    }

    buildDeleteController(){
        return null
    }
}

export default ControllerTemplate