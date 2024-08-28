class Employee
{
    constructor(name)
    {
        this.name = name;
    }

greet()
{
    console.log(`Hello name is  ${this.name}`)
}

get Employee()
{
    return this.name;
}



set Employee(name)
{
    this.name = name
}

static Salary()
{
    console.log('Value of user is ${this.name} Salary for this user is'+ 1000)
}
}


let p1 = new Employee('Bharath')
let p2 = new Employee('Rajeev')


console.log(p1.name)
console.log(p2.name)
Employee.Salary()

class ContractorEMployee extends Employee{
    constructor(name,contractorEmpId)
    {
        super(name)
        this.contractorEmpId = contractorEmpId;
    }

     calculateSalary(){
        console.log(`This is the user salary caluclation ${this.name} salary may vary based on the value is 10000 and his empId \n is ${this.contractorEmpId}`)
    }
}





let c1 =new ContractorEMployee('Bharath',101);
c1.calculateSalary();
c1.greet();
c1.Employee = 'Raja';
c1.calculateSalary();
