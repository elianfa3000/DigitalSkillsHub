import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  const token = req.cookies;
  console.log(token);
  try {
    /*const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(400).json(["**the email already exists"]);
    }
*/
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    //
    jwt.sign(
      { id: savedUser._id },
      "secret123",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.log(err);
          return res.status(500).send(["**Error creating token"]);
        }

        res.cookie("token", token);
        res.status(200).json({
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
          password: savedUser.password,
        });
      }
    );
  } catch (err) {
    res.status(500).send(["**error creating user"]);
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.bosy;
  try {
    const foundUser = await User.findOne({ email: email });
    if (!foundUser) {
      return res.status(400).send(["**user no found"]);
    }
    const isMatch = await bcrypt.compare(password, foundUser.password); //*****x
    if (!isMatch) {
      return res.status(400).send(["incorrect pasword"]);
    }
    jwt.sign(
      { id: foundUser._id },
      "secret123",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          console.log(err);
          return res.status(500).send(["**error creating token"]);
        }
        res.cookie("token", token);
        res.status(200).json({
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
          password: foundUser.password,
          //createdAt: foundUser.createdAt,
          //updatedAt: foundUser.updatedAt,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send(["**Error user login"]);
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "no autorizado*" });
  }
  jwt.verify(token, "secret123", async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "no autorizado*" });
    }
    console.log(user); //regresa id que guardamos
    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({ message: "no autorizado*" });
    }
    return res.status(200).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
