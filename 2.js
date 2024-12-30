let students = ["Ali", "Ahmed", "Hassan", "Kamran", "Noman", "Omer", "Saad", "Talha", "Usman", "Zain"];

// students.push("Bilal"); Adds in the end

// students.pop(); Removes from the end

// students.shift(); Removes from the start

// students.unshift("Bilal"); Adds in the start

// students.splice(2, 2); Removes from the start index and the number of elements to remove and adds the elements in the place of removed elements

// students.splice(2, 0, "Bilal", "Farhan"); Adds elements from the start index and the number of elements to remove and adds the elements in the place of removed elements

// students.slice(2, 5); Returns the elements from the start index to the end index



// console.log(students);

// let str = "ghous";
// str = str.charAt(0).toUpperCase() + str.slice(1);

// console.log(str);

let arr = ["Karachi", "Lahore", "Islamabad"];
arr.splice(0, 1, "Islamabad");
arr.splice(2, 1, "Karachi");
// arr.shift();
// arr.unshift("Islamabad");
// arr.pop();
// arr.push("Karachi");
console.log(arr);

