export default function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      protocol: req.protocol,
      host: req.hostname,
      ip: req.ip,
      method: req.method,
      path: req.path,
      file: req.file,
      user: req.user,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
    };
    controller(httpRequest)
      .then((httpResponse) => {

        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");

        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) => res.status(500).send({ error: "Unknown Server Error" }));
  };
}
