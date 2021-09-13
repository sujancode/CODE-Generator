import { existsSync, readdirSync } from "fs";
import Generator from "./generator";

describe("Test File Creation", () => {
  let generator = null;
  beforeAll(() => {
    const schema = [
      {
        name: "name",
        type: "string",
      },
      {
        name: "price",
        type: "number",
      },
    ];
    generator = new Generator("user", schema);
  });

  it("Entity Creation", () => {
    generator.generateEntity();
    expect(existsSync(generator.entity_path)).toBe(true);
  });

  it("Controller File Creation", () => {
    generator.generateController();
    expect(existsSync(generator.controller_path)).toBe(true);
  });

  it("Usecase File Creation", () => {
    generator.generateUseCase();
    expect(existsSync(generator.usecase_path)).toBe(true);
  });

  it("Data Access File Creation", () => {
    generator.generateDataAccess();
    expect(existsSync(generator.data_access_path)).toBe(true);
  });

  afterAll(() => {});
});
