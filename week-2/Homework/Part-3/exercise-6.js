/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
////////////////////Part-1///////////////////////
let jobBarcelonaAndSkillReact = (listMentors) => {
  listMentors.forEach((obj)=>{
    let reactSkill = obj.skills.find((skill) => {
      return skill === 'React'
    })
    if (reactSkill === 'React' && obj.job.city === 'Barcelona'){
      console.log('Hi, my name is ' + obj.firstName + ' ' + obj.lastName + '. I work in Barcelona and i know React.');
    }
  })
}
jobBarcelonaAndSkillReact(mentors)
/////////////////ENd Part-1/////////////////////

//////////////////Part-2////////////////////////
let jobJustBarcelona = (listMentors) => {
  listMentors.forEach((obj) => {
    if (obj.job.city === 'Barcelona') {
      obj.class = "Jun1"
      obj.skills.push('SQL')
    }
  })
}
jobJustBarcelona(mentors)
// console.log(mentors);
/////////////////ENd Part-2/////////////////////

//////////////////Part-3////////////////////////
mentors.forEach((obj)=>{
  obj.addskill = (newSkill) => {
    obj.skills.push(newSkill)
  }
})
console.log(mentors)
/////////////////ENd Part-3/////////////////////

//////////////////Part-4////////////////////////
const addNewSkill = (newSkill) =>{
  mentors.forEach((obj)=>{
    obj.skills.push(newSkill)
  })
}
addNewSkill('Python')
console.log(mentors);
/////////////////ENd Part-4/////////////////////

//////////////////Part-5////////////////////////
const removeLastSkill = () =>{
  mentors.forEach((obj)=>{
    obj.skills.pop()
  })
}
removeLastSkill()
console.log(mentors[0]);
/////////////////ENd Part-5/////////////////////

//////////////////Part-6////////////////////////
let mentorWithMoreSkills = () =>{
  a=[]
  maxSkills = 0
  mentors.forEach((obj,index)=>{
    numberOfSkills = obj.skills.length
    console.log('The mentor ' + obj.firstName + ' ' + obj.lastName + ' have ' + numberOfSkills + ' skills');
    if (numberOfSkills >= maxSkills){
      maxSkills = numberOfSkills
      a.push(obj.firstName + ' ' + obj.lastName)
    }
  })
  return a.toString() + ' have higher number of skills: ' + maxSkills
}
console.log(mentorWithMoreSkills());
/////////////////ENd Part-6/////////////////////

/////////////////Part-7/////////////////////////
mentors.forEach((obj) => {
  obj.addStudentLikes = () => {
    obj.studentLikes = +1
  }
})
mentors[1].addStudentLikes()
console.log(mentors[1]);

/////////////////ENd Part-7/////////////////////

/////////////////Part-8/////////////////////////
const addStudent = (numberOfStudents) =>{
  mentors.forEach((obj)=>{
    obj.studentLikes = obj.studentLikes + numberOfStudents
  })
}
addStudent(2)
console.log(mentors);
/////////////////ENd Part-8/////////////////////