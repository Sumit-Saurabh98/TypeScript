"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // id:number;
        // private readonly name: string;
        // private employees:  string[] = []
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log('name :' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    addEmployee(name) {
        if (name == "max") {
            return;
        }
        this.employees.push(name);
    }
}
const accounting = new Department(16, "Accounting");
const itDepartment = new ItDepartment(56, ["sam"]);
itDepartment.addEmployee("Karbon");
console.log(itDepartment);
itDepartment.describe();
console.log(accounting);
accounting.describe();
accounting.addEmployee("max");
accounting.addEmployee("tokyo");
// accounting.addEmployee[2] = "tiger"
accounting.printEmployeeInformation();
// const accountingCopy = {name:"dummy",describe:accounting.describe}
// accountingCopy.describe();
