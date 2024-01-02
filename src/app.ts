import express from "express"
import routes from "./routes/index"

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () =>{
    console.log("API typescript rodando na porta 3000, nando")
})