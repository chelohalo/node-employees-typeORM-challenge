import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Shop extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  telephone: string;

  @ManyToOne(() => Employee, (employee) => employee.shops, {
    onDelete: "CASCADE",
  })
  employee: Employee;
}
