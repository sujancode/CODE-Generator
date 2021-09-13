class EntityTemplate {
  constructor(schema_name, schema) {
    this.schema_name = schema_name;
    this.schema = schema;
  }
  getTemplate() {
    return { entityTemplateData: this.buildEntities(this.schema_name, this.schema) };
  }

  buildEntities() {
    return null;
  }
}

export default EntityTemplate
