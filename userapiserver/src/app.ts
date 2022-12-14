import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser"
const helmet = require("helmet")
import {AppDataSource} from "./data-source"
import UserRoutes from "./routes/UserRoutes"
import AuthRoutes from "./routes/AuthRoutes"
import redisClient  from './scripts/Redis';



//Database Connection
AppDataSource.initialize()
    .then(() => {
      console.log("⚡️[DB]: CONNECT POSTGRESQL DB");
      
    })
    .catch(() => {
      console.log("ERROR!! CAN NOT CONNECT POSTGRESQL DB");
      
    })

dotenv.config();
redisClient

const app: Express = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cookieParser())


//Routes
app.use("/api/v1/users", UserRoutes)
app.use("/api/v1/auth", AuthRoutes)


app.listen(process.env.PORT || 8000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.APP_PORT}`);
});
