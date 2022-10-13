import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Employee } from "./entity/employee.entity";
import { EmployeeType } from "./entity/employeeType.entity";
import { Shop } from "./entity/shop.entity";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Employee, EmployeeType, Shop],
  subscribers: [],
  migrations: [],
});
