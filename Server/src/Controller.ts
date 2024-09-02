import config from "./Config"
import { Request, RequestHandler, Response } from "express"

export class AppController {
    createIssue: RequestHandler = async (
        req: Request,
        res: Response
    ) => {
        let issue = req.body.data
        console.log(issue)
        res.send("Created")
    }

    getIssue: RequestHandler = async (
        req: Request,
        res: Response
    ) => {
        res.json(config.RETURN_DATA)
    }

    updateIssue: RequestHandler = async (
        req: Request,
        res: Response
    ) => {
        let issue = req.body.data
        console.log(issue)
        res.send("Updated")
    }

    deleteIssue: RequestHandler = async (
        req: Request,
        res: Response
    ) => {
        let issue = req.body.data
        console.log(issue)
        res.send("Deleted")
    }
}
