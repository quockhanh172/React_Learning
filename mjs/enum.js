var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 100] = "created";
    STATUS[STATUS["process"] = 101] = "process";
    STATUS[STATUS["finish"] = 102] = "finish";
})(STATUS || (STATUS = {}));
;
var todoStatus = STATUS.created;
console.log(todoStatus);
var student = {
    id: 1,
    name: "khanh",
    "class": "2A"
};
console.log(student);
var studentList = [1, 2];
console.log(studentList);
