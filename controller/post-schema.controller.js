export default function makePostSchemaController({ generateSchema }) {
  return async function postSchemaController(httpRequest) {
    try {
      const { schema, schema_name } = httpRequest.body;
      await generateSchema({ schema, schema_name });
      return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: 200,
        body: {
            message:"success"
        }
    }
    } catch (e) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: {
          error: e.message,
        },
      };
    }
  };
}
