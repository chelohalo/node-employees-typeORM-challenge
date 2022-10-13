import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Shop } from "./shop.entity";
import { EmployeeType } from "./employeeType.entity";

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => EmployeeType, (employeeType) => employeeType.employees)
  type?: EmployeeType;

  @Column()
  telephone: string;

  @Column()
  address: string;

  @Column()
  employmentDate: string;

  @OneToMany(() => Shop, (shop) => shop.employee, {
    onDelete: "CASCADE",
  })
  shops?: Shop[];
}
