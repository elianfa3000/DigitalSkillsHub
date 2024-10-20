import { Router } from "express";
import {
  register,
  login,
  //verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.get("/login", validateSchema(loginSchema), login);
//router.get("/lo", verifyToken);
export default router;
