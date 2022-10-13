import { Router } from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controller";
//Create, GetAll, GetById, Update, Delete

const router = Router();

router.post("/employees", createEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployeeById);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
