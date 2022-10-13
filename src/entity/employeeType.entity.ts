import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Employee } from "./employee.entity";
@Entity()
export class EmployeeType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  salary: number;

  @OneToMany(() => Employee, (employee) => employee.type)
  employees: Employee[];
}
