import { useState } from "react"
import {
    createIssue,
    getIssues,
    updateIssue,
    deleteIssue,
} from "./api"
import "./App.css"

const queryObject = {
    id: 3,
    title: "Third issue",
    description: "Issues one and two already exists",
}

const methods = [
    {
        method: "create",
        _fn: () => {
            createIssue(queryObject)
        },
    },
    {
        method: "read",
        _fn: () => {
            getIssues(queryObject)
        },
    },
    {
        method: "update",
        _fn: () => {
            updateIssue(queryObject)
        },
    },
    {
        method: "delete",
        _fn: () => {
            deleteIssue(queryObject)
        },
    },
]

function App() {
    const [action, setAction] = useState("read")
    const [data, setData] = useState([
        {
            id: "3",
            title: "Fix bug",
            description:
                "This is the description for issue 1234",
        },
        {
            id: "4",
            title: "Add feature",
            description:
                "This is the description for issue 2345",
        },
    ])

    return (
        <>
            <div>
                <div className="buttons-tray">
                    {methods.map((item) => {
                        return (
                            <button
                                key={item.method}
                                onClick={() => {
                                    item._fn()
                                }}
                            >
                                {item.method}
                            </button>
                        )
                    })}
                </div>
                <div className="heading">
                    <h1>Sitemate</h1>
                    <h2>Action: {action.toUpperCase()}</h2>
                </div>
                <div className="issues-list">
                    {data.map((data) => {
                        return (
                            <div
                                key={data.id}
                                className="issue-card"
                            >
                                <h5>
                                    <span>
                                        Issue {data.id}{" "}
                                    </span>
                                    <span>
                                        {data.title}
                                    </span>
                                </h5>
                                <p>{data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default App
