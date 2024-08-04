import { Router } from "express";
import validateUser from "../middlewares/userAuth.middleware.js";
import { getQR, set2fa, twoFAValidate } from "../controllers/twoFA.controlelrs.js";

const router = Router();


router.get("/getqr", getQR);

router.post("/set2fa", set2fa)

router.post("/validate", twoFAValidate)

// router.post("verify",validateUser)

export default router;