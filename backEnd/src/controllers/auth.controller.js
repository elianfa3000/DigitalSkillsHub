import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(400).json(["**the email already exists"]);
    }

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

export const signin = async (req, res) => {
  const { email, password } = req.body;
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
  if (!token) {
    return res.status(401).send(["**Unauthorized"]);
  }
  jwt.verify(token, "secret123", async (err, user) => {
    if (err) {
      console.log(err);
      return res.staus(200).send(["**Unauthorized"]);
    }
    const foundUser = await User.findById(user.id);
    if (!foundUser) {
      return res.status(401).send(["**Unauthorized"]);
    }
    return res.status(200).json({
      username: foundUser.username,
      email: foundUser.email,
      password: foundUser.password,
      token: token,
    });
  });
};
