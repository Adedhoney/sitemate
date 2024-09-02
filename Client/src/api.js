import axios from "axios"
import config from "./config"

const createIssue = async (issue) => {
    try {
        const response = await axios.post(
            config.BACKEND_URL,
            {
                data: issue,
            }
        )
        return response
    } catch (error) {
        console.log(error)
    }
}
const getIssues = async () => {
    try {
        const response = await axios.get(config.BACKEND_URL)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
const updateIssue = async (issue) => {
    try {
        await axios.put(config.BACKEND_URL, { data: issue })
        return response
    } catch (error) {
        console.log(error)
    }
}
const deleteIssue = async (issue) => {
    try {
        await axios.delete(`${config.BACKEND_URL}/2`)
    } catch (error) {
        console.log(error)
    }
}

export { createIssue, getIssues, updateIssue, deleteIssue }
