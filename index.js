

//Intialization of an array, array of designerBoots. 
const designerBoots = [ { name: 'Helms Vs', cost: 570 }, { name: 'Timberlands Stompers', cost: 230 }, { name: 'Red Wings Mark Qs', cost: 345 }, { name: 'Grenson Dodgers', cost: 635 } ];
//You have an array designerBoots containing objects, where each object represents a pair of designer boots with a name and a cost.
function expensiveBoots (arr, funds) { 
//This function takes two parameters - arr (an array of designerBoots) and funds (the specific funds required). 
return arr.every((boots) => boots.cost <= funds); 
}; 
//The every method is used on the "arr" array. 
//It checks if every pair of boots in the array has a cost less than or equal to the specified funds. 
//The function returns the result of the every method, which is a boolean. It will be true if all boots are within the funds limit and false otherwise.

//Code Test Cases: function expensiveBoots checks if all pairs of designer boots in the given array are within the specified funds limit. If they are, it returns true; otherwise, it returns false.
console.log(expensiveBoots(designerBoots, 955)); //true
console.log(expensiveBoots(designerBoots, 215)); //false 
console.log(expensiveBoots(designerBoots, 335)); //false
console.log(expensiveBoots(designerBoots, 124)); //false
console.log(expensiveBoots(designerBoots, 629)); //true 


const allStudents = [ {gradelevel : 1 , countedStudents : 20}, {gradelevel : 2 , countedStudents : 36}, {gradelevel : 3 , countedStudents : 30}, {gradelevel : 4 , countedStudents : 40}, {gradelevel : 5 , countedStudents : 25}];
//An array allStudents, containing objects where each object represents a grade level and the corresponding number of students counted.
function ifTrueGoOnTrip(arr, studentCode) { 
// Function takes two parameters - arr, an array of students and studentCode, a threshold value for counting students.   
return arr.every((student) >= student.totalStudents >= studentCode);
};
//It uses the every method to check if every student's countedStudents property is greater than or equal to the specified studentCode. 

// Code Test Cases: function returns true if the condition holds for every student, and false otherwise. The arguements are allStudents array, and the specified numeric value.  
console.log(ifTrueGoOnTrip(allStudents,35)); //false 
console.log(ifTrueGoOnTrip(allStudents,40)); //false 
console.log(ifTrueGoOnTrip(allStudents,20)); //true 
console.log(ifTrueGoOnTrip(allStudents,10)); //true
console.log(ifTrueGoOnTrip(allStudents,100)); //false

////Intialization of an array, array of "elements". 
const elements = ['hydrogen', 'oxygen', 'nitrogen', 'carbon', 'sodium', 'calcium', 'potassium', 'chloride', 'iron'];
// "elements" is an array containing strings, where each string represents the name of a chemical element.
let elementsBooleanValue = elements.every((ele) => ele.length >= 4 && ele.length <= 9); 
//The every method is used on the "elements" array. 
//The callback function (ele) => ele.length >= 4 && ele.length <= 9 is applied to each element in the array. 
//The condition checks if the length of each element is greater than or equal to 4 and less than or equal to 9. 


//The variable elementsBooleanValue will be true if every element in the array satisfies the condition, and false otherwise. 
//Logs the resulting boolean value.
console.log(elementsBooleanValue); 






