# Independent Study Project - The Every Method (Is it true or is it false?)
Class Project: Native Array Method ---  Every 

## Introduction Every Method"

The every() method is an native array method used to iterate over arrays. It is a higher order function when it calls a provided callbackFn once for each element in an array. Importantly, the callbackFn returns a boolean value. In particular,  if an element is found to not meet the conditions of the callback, the  method (.every()) immediately returns false (boolean value) and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true (boolean value). Please read the specific cases further below for more information about how this method works. 



"Case # 1" 

Hi, my name is Derrick, I'm in need of some boots for a winter party this weekend. I will be going to the "TopDollar" store to shop during the "New Beginnings Special Event". Note, the condition of the event is: all customers must have the funds to be able to purchase the highest set of pair of boots, even if your into another kind of boots. This is an exclusive event with limited inventory, first granted access first served. 
Recently, I've learned in class a new native array method known as ".every()". I hope to use this method to determine if I'll  be able to purchase boots from the "New Beginnings Special Event". Please see code below:




"Case # 2"

Hello, my name is Justin, I'm currently working as an elementry assistant administrator. Its coming to the end of the school year and many students are expressing an interest in taking a field trip to the "New York State Zoo". I've been givin a direct order by the principal that there must be 20 students per grade level to receieve funding for the trip. In addition, the principal requested for an admin supervisor to create the "studentCode" for the field trip to occur. To ensure the the "studentCode" is accounted for, I've been givin the assignment to use the code to determine if on the day of the event, the bus can leave the school for the field trip by the code conditions being met.    



"Case # 3"

Howdy, my name is Mayers, I'm currently studying chemisty, particularly elements. I've created a list of different elements to help me memorize essential elements from the periodic table. If the elements provided in the list are truly essential, the every method will return a true boolean value, otherwise false.





## Algorithm Description
 
 Case # 1 

1.  Intialization of an array, array of designerBoots. 
```js
const designerBoots = [ { name: 'Helms Vs', cost: 570 }, { name: 'Timberlands Stompers', cost: 230 }, { name: 'Red Wings Mark Qs', cost: 345 }, { name: 'Grenson Dodgers', cost: 635 } ];
```
2.  Function takes two parameters - arr (an array of designerBoots) and funds (the maximum funds required). You have an array designerBoots containing objects, where each object represents a pair of designer boots with a name and a cost.The every method is used on the arr array. It checks if every pair of boots in the array has a cost less than or equal to the specified funds. The function returns the result of the every method, which is a boolean. It will be true if all boots are within the funds limit and false otherwise.
```js
function expensiveBoots (arr, funds) { 
return arr.every((boots) => boots.cost <= funds);  
}
```
3.  Code Test Cases: your function expensiveBoots checks if all pairs of designer boots in the given array are within the specified funds limit. If they are, it returns true; otherwise, it returns false. The arguements are designerBoots array, and the specified numeric value.  
```js
console.log(expensiveBoots(designerBoots, 955)); //true
console.log(expensiveBoots(designerBoots, 215)); //false 
console.log(expensiveBoots(designerBoots, 335)); //false
console.log(expensiveBoots(designerBoots, 124)); //false
console.log(expensiveBoots(designerBoots, 629)); //true 
```
Case # 2

1.  Intialization of an array allStudents, containing objects where each object represents a grade level and the corresponding number of students counted.
```js
const allStudents = [ 
     {gradelevel : 1 , countedStudents : 20}, 
     {gradelevel : 2 , countedStudents : 36}, 
     {gradelevel : 3 , countedStudents : 30},
     {gradelevel : 4 , countedStudents : 40},
     {gradelevel : 5 , countedStudents : 25}];
 ```
2.  Function takes two parameters - arr, an array of students and studentCode, a threshold value for counting students. It uses the every method to check if every student's countedStudents property is greater than or equal to the specified studentCode. 
```js
function ifTrueGoOnTrip(arr, studentCode) { 
return arr.every((student) >= student.totalStudents >= studentCode);  
}
```
 3.  Function returns true if this condition holds for every student, and false otherwise. The arguements are allStudents array, and the specified numeric value.  
```js
console.log(ifTrueGoOnTrip(allStudents,35)); //false 
console.log(ifTrueGoOnTrip(allStudents,40)); //false 
console.log(ifTrueGoOnTrip(allStudents,20)); //true 
console.log(ifTrueGoOnTrip(allStudents,10)); //true
console.log(ifTrueGoOnTrip(allStudents,100)); //false
```
Case # 3
1. Elements is an array containing strings, where each string represents the name of a chemical element.
```js
const elements = ['hydrogen', 'oxygen', 'nitrogen', 'carbon', 'sodium', 'calcium', 'potassium', 'chloride', 'iron'];
```
2. The every method is used on the elements array. The callback function (ele) => ele.length >= 4 && ele.length <= 9 is applied to each element in the array. The condition checks if the length of each element is greater than or equal to 4 and less than or equal to 9. The variable elementsBooleanValue will be true if every element in the array satisfies the condition, and false otherwise. 
```js
let elementsBooleanValue = elements.every((ele) => ele.length >= 4 && ele.length <= 9); 
```
3. Logs the resulting boolean value.
```js
console.log(elementsBooleanValue); 
```

## Big "O" Evaluation

Big-O notation is a form of measuring the algorithmic complexity of a function or algorithm in the worst-case scenario. This can either analyze the maximum amount of possible time or memory space needed to solve a particular problem.

In summary, for (Case # 1), (Case # 2), & (Case # 3); the time complexity is O(n), and the space complexity is O(1) for each indiviual code.

### Time Complexity

The time complexity of the code is determined by the every method, which iterates over each element in the array and applies the provided callback function. 0(n) --> operation remains the same regardless of how many elements(size length) is given to the specific function. 
Worst Case: In the worst case, if the entire array needs to be traversed (all elements are within the condition), the time complexity is O(n), where n is the number of elements in the array. 

```js
// operation remains the same regardless of how many elements(size length) is given to the specific function.
let boolean = arr.every((boots) => boots.cost <= funds) - 0(n);
let anotherBoolean = arr.every((student) >= student.totalStudents >= studentCode) - 0(n); 
let sameBoolean = elements.every((ele) => ele.length >= 4 && ele.length <= 9) - 0(n); 
```

### Space Complexity

The space complexity highly the highly efficient --> O(1)
The space complexity of the codes is constant, O(1), because the algorithms do use any additional data structures that grow with the input size. The only memory used is for the parameters, and or the internal variables (like boots in the callback function), and these remain constant regardless of the array size.
 
## Use Cases
The every method can be used not only in Javascipt, but also in real life situations similar to the cases used for this project. The every method on an array has proven the capabilites and the magnitude at which how vital it can be when testing certain conditions to be true of false. e.g(purchasing items within a limit, checking if count set of people meet a specific condition , and checking a list for accuracy). 

## Edge Cases and Concerns
The callbackFn depending on how its being conditioned can mutate the original inputed array. The slice method when used with every method can alter the position of the array by removing elements and causing shift in element position(s) as well creating a new length of an array.    

## Citations

[mdn - Every Method] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

[Code Academy] (https://www.codecademy.com/resources/docs/javascript/arrays/every)