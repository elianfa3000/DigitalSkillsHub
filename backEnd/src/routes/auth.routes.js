import { Router } from "express";
import {
  register,
  signin,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, signinSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/signin", validateSchema(signinSchema), signin);
router.get("/verifyToken", verifyToken);
export default router;
