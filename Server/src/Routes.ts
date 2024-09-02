import { AppController } from "./Controller"
import { Router } from "express"

const controller = new AppController()

const router = Router()

router.post("/", controller.createIssue)

router.get("/", controller.getIssue)
router.put("/", controller.updateIssue)
router.delete("/", controller.deleteIssue)

export default router
