
class Department{
    // id:number;
    // private readonly name: string;
    // private employees:  string[] = []
    protected employees:  string[] = []
    constructor(public id:number, private readonly name:string){
        // this.name = n;
        // this.id = id;
    }
    describe(this:Department){
        console.log('name :'+this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ItDepartment extends Department{
    admins : string[]
    constructor(id:number, admins:string[]){
        super(id, "IT");
        this.admins = admins;
    }
    addEmployee(name: string){
        if(name=="max"){
            return 
        }
        this.employees.push(name);
    }
}

const accounting = new Department(16, "Accounting")

const itDepartment = new ItDepartment(56, ["sam"])

itDepartment.addEmployee("Karbon")
console.log(itDepartment)

itDepartment.describe();

console.log(accounting);

accounting.describe();

accounting.addEmployee("max")
accounting.addEmployee("tokyo")
// accounting.addEmployee[2] = "tiger"

accounting.printEmployeeInformation();

// const accountingCopy = {name:"dummy",describe:accounting.describe}

// accountingCopy.describe();

