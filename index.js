import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { productsRouter } from './Routers/product.js';
import { userRouter } from "./Routers/users.js";
import { isAuthenticated } from "./Authentication/auth.js";


//confgure the enviroment
dotenv.config();
const PORT = process.env.PORT
//initiating server

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/products", isAuthenticated, productsRouter)
app.use("/users",userRouter)

//starting ther server
app.listen(9020, ()=>console.log("server running in localhost:9020")) 