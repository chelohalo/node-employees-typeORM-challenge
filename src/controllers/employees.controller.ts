import { Request, Response } from "express";
import { Employee } from "../entity/employee.entity";
import { EmployeeType } from "../entity/employeeType.entity";
import { Shop } from "../entity/shop.entity";
import { In } from "typeorm";

export const createEmployee = async (req: Request, res: Response) => {
  const {
    employeeName,
    employeeTelephone,
    employeeAddress,
    employeeEmploymentDate,
    shops,
    employeeType,
  } = req.body;

  // Get shop ids to relate to employees and assign multiple shops to one employee
  const shopsFound = await Shop.find({
    where: { id: In(shops) },
  });
  if (!shopsFound) return res.status(404).json({ message: "Shop not found" });

  // et employee type id to relate to employees and assign employee type to employee
  const employeeTypeFound = await EmployeeType.findOne({
    where: { id: employeeType },
  });
  if (!employeeTypeFound)
    return res.status(404).json({ message: "Employee Type not found" });

  // EmployeeEntity
  const employee = new Employee();
  employee.name = employeeName;
  employee.telephone = employeeTelephone;
  employee.address = employeeAddress;
  employee.employmentDate = employeeEmploymentDate;
  employee.type = employeeTypeFound;
  employee.shops = [...shopsFound];
  await employee.save();

  return res.status(201).json({
    message: "employee created successfully",
    employee,
  });
};

export const getAllEmployees = async (req: Request, res: Response) => {
  const employees = await Employee.find();
  return res.status(200).json({
    message: "employees fetched successfully",
    employees,
  });
};

export const getEmployeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await Employee.findBy({ id: Number(id) });
  if (employee.length == 0) return res.status(404).json({ message: "Employee not found" });
  return res.status(200).json({
    message: "employee fetched successfully",
    employee,
  });
};

export const updateEmployee = async (req: Request, res: Response) => {
  const employee = await Employee.findOneBy({
    id: Number(req.params.id),
  });
  if (!employee) {
    return res.status(404).json({
      message: "employee not found",
    });
  }
  const results = Employee.merge(employee, req.body);

  await Employee.save(results);
  return res.status(200).json({
    message: "employee updated successfully",
    results,
  });
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await Employee.findOneBy({
    id: Number(id),
  });
  if (!employee) {
    return res.status(404).json({
      message: "employee not found",
    });
  }
  await Employee.remove(employee);
  return res.status(200).json({
    message: "employee deleted successfully",
    employee
  });
};
