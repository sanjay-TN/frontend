class employee {
  name: String;
  id: number;
  constructor(name: String, id: number) {
    this.name = name;
    this.id = id;
  }

  display() {
    console.log(`name of employee is: ${this.name}, with id: ${this.id}`);
  }
}
var e1 = new employee("abc", 1);
e1.display();
