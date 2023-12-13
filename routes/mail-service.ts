import express from "express";
import controller from "./../controllers";

const router = express.Router();

router.post("/mail-service/mailSender", controller.mailSender);

export default router;
