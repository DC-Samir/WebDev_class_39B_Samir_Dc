const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 10 / 100;
    }
    else {
        return salary * 5 / 100;
    }
};

const calculateTax = (salary) => {
    return salary * 5 / 100;
};
const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let bonus = bonusCallback(salary);
    let tax = taxCallback(salary);

    let netSalary = salary + bonus - tax;

    return netSalary;
};

const generatePayslip = (name, salary, callback) => {
    let bonus = calculateBonus(salary);
    let tax = calculateTax(salary);

    let netSalary = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", bonus);
    console.log("Tax: Rs.", tax);
    console.log("Net Salary: Rs.", netSalary);
};
generatePayslip("Raj", 78049, calculateNetSalary);