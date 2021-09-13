const { writeFileSync, existsSync, mkdirSync, fstat } = require("fs");
const path = require("path");

import {
  EntityTemplate,
  UseCaseTemplate,
  DataAccessTemplate,
  ControllerTemplate,
} from "./template";

class Generator {
  constructor(schema_name = "", schema = []) {
    if (!schema_name) {
      throw new Error("Schema Name not defined");
    }
    if (!schema.length > 0) {
      throw new Error("Schema not provided");
    }

    this.schema_name = schema_name;
    this.schema = schema;

    this.base_dir = path.join(__dirname, "../", "generated", this.schema_name);
    this.entity_path = path.join(this.base_dir, "entity");
    this.controller_path = path.join(this.base_dir, "controller");
    this.usecase_path = path.join(this.base_dir, "usecase");
    this.data_access_path = path.join(this.base_dir, "data-access");

    this.entityTemplate = new EntityTemplate(schema_name, schema);
    this.controllerTemplate = new ControllerTemplate(schema_name);
    this.useCaseTemplate = new UseCaseTemplate(schema_name);
    this.dataAccessTemplate = new DataAccessTemplate(schema_name);

    //initial setup folder structure
    this._init();
  }

  _init() {
    if (!existsSync(this.base_dir))
      mkdirSync(this.base_dir, { recursive: true });

    if (!existsSync(this.entity_path)) mkdirSync(this.entity_path);

    if (!existsSync(this.controller_path)) mkdirSync(this.controller_path);

    if (!existsSync(this.usecase_path)) mkdirSync(this.usecase_path);

    if (!existsSync(this.data_access_path)) mkdirSync(this.data_access_path);
  }

  generate() {
    this.generateAppJS();
    this.generateController();
    this.generateDataAccess();
    this.generateEntity();
    this.generateUseCase();
  }

  generateEntity() {
    const { entityTemplateData } = this.entityTemplate.getTemplate();

    this.generateSingleFile({
      name: this.schema_name,
      file_type: "entity",
      save_path: this.entity_path,
      data: entityTemplateData,
    });
  }

  generateController() {
    const controller_template_files = this.controllerTemplate.getTemplate();

    Object.keys(controller_template_files).map((opName) => {
      this.generateSingleFile({
        name: `${opName}${
          this.schema_name[0].toUpperCase() + this.schema_name.slice(1)
        }`,
        file_type: "controller",
        save_path: this.controller_path,
        data: controller_template_files[opName],
      });
    });

    
  }

  generateUseCase() {
    const usecase_template_files = this.useCaseTemplate.getTemplate();

    Object.keys(usecase_template_files).map((opName) => {
      this.generateSingleFile({
        name: `${opName}${
          this.schema_name[0].toUpperCase() + this.schema_name.slice(1)
        }`,
        file_type: "usecase",
        save_path: this.usecase_path,
        data: usecase_template_files[opName],
      });
    });
  }

  generateDataAccess() {
    const data_access_template_files = this.dataAccessTemplate.getTemplate();

    Object.keys(data_access_template_files).map((opName) => {
      this.generateSingleFile({
        name: `${opName}${
          this.schema_name[0].toUpperCase() + this.schema_name.slice(1)
        }`,
        file_type: "data-access",
        save_path: this.data_access_path,
        data: data_access_template_files[opName],
      });
    });
  }

  generateAppJS() {
    this.generateSingleFile({
      name: "app",
      file_type: null,
      save_path: this.base_dir,
      data: "",
    });
  }

  generateSingleFile({ name, file_type, data, save_path }) {
    let filename = file_type?`${name}.${file_type}.js`:`${name}.js`;
    let file_path = path.join(save_path, filename);
    writeFileSync(file_path, data);
  }
}

export default Generator;
