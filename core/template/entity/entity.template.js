class EntityTemplate {
  constructor(schema_name, schema) {
    this.schema_name = schema_name;
    this.schema = schema;
  }
  getTemplate() {
    return { entityTemplateData: this.buildEntities(this.schema_name, this.schema) };
  }

  buildEntities() {
    let arg=""
    let state_init=""
    for(let {name} of this.schema){
      arg+=`${name},`
      state_init+=`\nthis.${name}=${name}`
    }

    return `export default class ${this.schema_name}{
      constructor(${arg}){
        ${state_init}
      }
    }`
    
  }
}

export default EntityTemplate
