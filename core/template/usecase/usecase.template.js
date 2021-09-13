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
        return null
    }

    buildGetByIdUsecase(){
        return null
    }

    buildGetAllUsecase(){
        return null
    }

    buildUpdateUsecase(){
        return null
    }

    buildDeleteUsecase(){
        return null
    }
}

export default UseCaseTemplate