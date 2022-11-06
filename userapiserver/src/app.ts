import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan"
const helmet = require("helmet")
import {AppDataSource} from "./data-source"
import UserRoutes from "./routes/UserRoutes"

AppDataSource.initialize()
    .then(() => {
      console.log("CONNECT POSTGRESQL DB");
      
    })
    .catch(() => {
      console.log("ERROR!! CAN NOT CONNECT DB");
      
    })
dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())



app.use("/api/v1/users", UserRoutes)


app.listen(process.env.PORT || 8000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});