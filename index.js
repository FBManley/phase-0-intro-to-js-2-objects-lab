const employee = {
    name: "Johnson",
    streetAddress: "313",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {["name"]: "Sam"}, {["streetAddress"]: "11 Broadway"});
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
};
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee[key]}
    delete newEmployee[key]
    return newEmployee
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
};
