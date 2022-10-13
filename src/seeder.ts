import { EmployeeType } from "./entity/employeeType.entity";
import { Employee } from "./entity/employee.entity";
import { Shop } from "./entity/shop.entity";
import { AppDataSource } from "./data-source";
import { faker } from "@faker-js/faker";

console.log("argv: ", process.argv[2]);

async function seeder(qty: number) {
  const EmployeeName = ["Manager", "Accountant", "Clerk"];

  for (let i = 0; i < qty; i++) {
    const EmployeeTypeEntity = new EmployeeType();
    EmployeeTypeEntity.name =
      EmployeeName[Math.floor(Math.random() * EmployeeName.length)];
    EmployeeTypeEntity.salary = faker.datatype.number({
      min: 50000,
      max: 150000,
    });
    await EmployeeTypeEntity.save();

    // Creating 1 employee
    const EmployeeEntity = new Employee();
    EmployeeEntity.name = faker.name.firstName() + " " + faker.name.lastName();
    EmployeeEntity.type = EmployeeTypeEntity;
    EmployeeEntity.telephone = faker.phone.phoneNumber();
    EmployeeEntity.address = faker.address.streetAddress();
    EmployeeEntity.employmentDate = faker.date.past().toDateString();
    await EmployeeEntity.save();

    // Creating 2 shops
    const ShopEntity1 = new Shop();
    ShopEntity1.name = faker.company.companyName();
    ShopEntity1.address = faker.address.streetAddress();
    ShopEntity1.telephone = faker.phone.phoneNumber();
    ShopEntity1.employee = EmployeeEntity;
    await ShopEntity1.save();

    const ShopEntity2 = new Shop();
    ShopEntity2.name = faker.company.companyName();
    ShopEntity2.address = faker.address.streetAddress();
    ShopEntity2.telephone = faker.phone.phoneNumber();
    ShopEntity2.employee = EmployeeEntity;
    await ShopEntity2.save();
  }
}
AppDataSource.initialize().then(() => {
  seeder(parseInt(process.argv[2]));
  console.log("Seeding complete");
});
