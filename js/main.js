// // // // String, numbers, Boolean, null, undefined, Symbols

// // // const name = 'John';
// // // const age = 34;
// // // const isCool = true;
// // // const rating = 4.5;
// // // const x = null;
// // // const y = undefined;

// // // console.log(typeof y );

// // // // Concatination Old method
// // // const hello = `My name is ${name} and I am ${age} years old`;

// // // console.log(hello)


// // // // Arrays
// // // let hello = "Hello World";
// // // console.log(hello.split(""));

// // // const fruits = new Array("")

// // const fruits = ['Apples', 2, "oranges"]
// // console.log(fruits);
// // console.log(fruits[2])

// // fruits[3] = "Grapes"; //add an element to the end

// // console.log(fruits);

// // // Using push keyword add at the end
// // fruits.push('mangos')


// // // Add at the beginning Unshift keyword
// // fruits.unshift('strawberry');

// // // Popping
// // fruits.pop();

// // // Check sth is in array
// // console.log(Array.isArray('Apples'))


// // // using index of fruits.indexOf('oranges')

// // console.log(fruits) 



// // Objects
// const person = {
//     firstName: "John",
//     lastName: "Kaman",
//     address:
//     {
//         city: "Nairobi",
//         state: 'Kiambu'
//     }
// }

// // alert(person.address.city)
// person.email = "John@gmam.com";
// console.log(person)


// const todos = [
//   {
//       id: 1,
//       text: "Learn MERN",
//       isCompleted: true
//   },
//   {
//     id: 1,
//     text: "Learn Mongo DB",
//     isCompleted: true
// },
// {
//     id: 1,
//     text: "Learn React and React Native",
//     isCompleted: true
// }

// ];

// console.log(todos)

// console.log(todos[1].text);

// const todosJson = JSON.MERNstringify(todos)
// console.log(todosJson);for

// LOOPS
// for 
for(let i = 0; i <= 10; i++)
{
    console.log(`Current number ${i}`)
}