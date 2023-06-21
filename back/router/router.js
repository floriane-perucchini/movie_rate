import express from "express";
import authRouter from "./authRouter.js";
import movieToSeeRouter from "./movieToSeeRouter.js";

const router = express.Router();

router.use(authRouter);
router.use(movieToSeeRouter)

export default router;