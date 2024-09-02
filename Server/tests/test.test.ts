import axios from "axios"

const url = "http://localhost:4000/issues"
const queryObject = {
    id: 3,
    title: "Third issue",
    description: "Issues one and two already exists",
}

describe("issue tests", () => {
    test("create issue", async () => {
        try {
            const response = await axios.post(url, {
                data: queryObject,
            })

            expect(response.status).toBe(200)
        } catch (error) {
            console.log((error as Error).message)
        }
    })
    test("get issue", async () => {
        try {
            const response = await axios.get(url)
            console.log(response.data)

            expect(response.status).toBe(200)
        } catch (error) {
            console.log((error as Error).message)
        }
    })
    test("update issue", async () => {
        try {
            const response = await axios.put(url, {
                data: queryObject,
            })

            expect(response.status).toBe(200)
        } catch (error) {
            console.log((error as Error).message)
        }
    })
    test("delete issue", async () => {
        try {
            const response = await axios.delete(`${url}/3`)

            expect(response.status).toBe(200)
        } catch (error) {
            console.log((error as Error).message)
        }
    })
})
