export default function makeGenerateSchema({generator}){
    
    return function generateSchema({schemaName,schema}){

        return generator.generate({schemaName,schema})
    }
}