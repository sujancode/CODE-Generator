import makePostSchemaController from "./post-schema.controller";
import {generateSchema} from '../usecase'

const postSchemaController=makePostSchemaController({generateSchema})

export {
    postSchemaController
}