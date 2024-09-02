import dotenv from "dotenv"

dotenv.config()

const envs = ["PORT"]

envs.forEach((value, index) => {
    if (!process.env[envs[index]]) {
        const message =
            "Fatal Error: env " +
            envs[index] +
            " not defined"

        throw new Error(message)
    }
})

export default {
    PORT: Number(process.env.PORT),
    RETURN_DATA: [
        {
            id: 1,
            title: "First issue",
            description: "I think this is the first issue",
        },
        {
            id: 2,
            title: "Second issue",
            description:
                "Second issue is worse than the first one",
        },
    ],
}
