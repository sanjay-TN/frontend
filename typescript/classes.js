var employee = /** @class */ (function () {
    function employee(name, id) {
        this.name = name;
        this.id = id;
    }
    employee.prototype.display = function () {
        console.log("name of employee is: ".concat(this.name, ", with id: ").concat(this.id));
    };
    return employee;
}());
var e1 = new employee("abc", 1);
e1.display();
