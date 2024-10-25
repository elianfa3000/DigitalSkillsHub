export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    //console.log(err.errors);
    return res.status(400).json(
      err.errors.map((error) => {
        return error.message;
      })
    );
  }
};
