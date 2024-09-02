import express, { Express } from "express"
import cors from "cors"
import router from "./Routes"
import config from "./Config"

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/issues", router)

app.get("/", (req, res) => res.json("Testing the endpoint"))

app.listen(config.PORT, () =>
    console.log(`This server is on port ${config.PORT}`)
)
