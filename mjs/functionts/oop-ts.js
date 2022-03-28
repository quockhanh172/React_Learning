var Person = (function () {
    function Person(id, name, classes) {
        id = this.id,
            name = this.name,
            classes = this.classes;
    }
    return Person;
}());
var person;
person.id = 1;
person.name = "khanh";
person.classes = "2A";
console.log(person);
