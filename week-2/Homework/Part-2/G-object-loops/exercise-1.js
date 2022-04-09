// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };

  const studentsWithMore18 = (obj =>{
    Object.values(obj).forEach(function (note, index){
      if (note > 18){
        console.log(Object.keys(obj)[index].toUpperCase() + ' - ' + Object.values(obj)[index]);
      }
    })
  })
  studentsWithMore18 (studentGrades)
  
  // Prints
  // TOM - 20
  // ABDUL - 19