import express from "express";
import cors from "cors";
import employeesRoutes from "./routes/employees.routes";

const app = express();

//middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Routes
app.use(employeesRoutes);

export default app; // export app to be used in index.ts
