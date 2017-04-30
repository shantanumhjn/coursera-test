//** Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

// child is a Prototypal inherited object of parent
var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.ojbValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();

//** Function constructors
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// not being used as a function constructor
Dog("Max2");

var student1 = {
  message: "I LOVE this course!"
};

var student2 = Object.create(student1);
student2.getMessage = function () {
  this.message = "Student 1 was paid off by Yaakov to say that!";
  return this.message;
};

// create object of function
var coverUp = new student2.getMessage();
console.log(coverUp);

// change the message for student2
var coverUp = student2.getMessage();
console.log(coverUp);
console.log(student2.message);
