import Generator from "../core/generator"

export default function makeGenerateSchema(){
    
    return function generateSchema({schema_name,schema}){
        const generator=new Generator(schema_name,schema)
        return generator.generate({schema_name,schema})
    }
}