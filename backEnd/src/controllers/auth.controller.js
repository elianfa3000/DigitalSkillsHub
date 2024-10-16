import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  const passwordHash = await bcrypt.hash(password, 10);

  const 

  /*
  const jj = (req.body = {
    username: "elianm",
    email: "elianfa3000@gmail.com",
    password: "123456789",
  });

  console.log(jj);*/

  console.log(newUser);
  res.status(200).send({ message: "hola todo en orden" });
};
