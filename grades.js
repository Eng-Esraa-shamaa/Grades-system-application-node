const fs=require('fs')

/////////////////////addStudents function////////////////////

////first without duplicate id//////
/*const addStudents=(id,username,grade,comment)=>{
    const students=loadStudents();
    students.push({
        id,
        username,
        grade,
        comment
    })
    saveStudents(students)
};*/
///second with duplicate id////

const addStudents = (id, username,grade,comment) => {
  const students = loadStudents();
  
  const duplicateId = students.filter(function (students){
       return students.id === id
  })
  if(duplicateId.length === 0){
      students.push({
          id,
          username,grade,comment
      })
      saveStudents(students)
      console.log('Id Saved Successfully')
  }
  else {
      console.log('Error Duplicate Id')
  }

};
////////////////////////////remove function/////////////////////////////
const removeStudent = (id) =>{
  const students= loadStudents()

  const studentsToKeep  = students.filter(function (students){
      return students.id !== id
  })
  

  if(students.length > studentsToKeep.length){
      console.log('student removed')
      saveStudents(studentsToKeep)
  }
  else{
      console.log('student not removed')
  }
}

const loadStudents = () => {
    
  try {
    const dataBuffer = fs.readFileSync("students.json").toString();
    
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveStudents = (students) =>{
const saveData =  JSON.stringify(students)
fs.writeFileSync("students.json",saveData)
}

/////////////////////////////////////////readStudents//////////////////
const readStudents = (id) =>{
  const students = loadStudents()
  const std = students.find((std)=>{
      return std.id === id
  })

  if(std){
      console.log(std.id)
      console.log('student name is ',std.username)
      console.log('student grade is',std.grade)
    
  }

}
////////////////////////////list students///////////////////////////////
const listStudents = () =>{
  const students =loadStudents()
  students.forEach(std => {
      console.log('student name is ',std.username)
      console.log('student grade is',std.grade)

  });
}
module.exports={
  addStudents ,removeStudent , readStudents ,listStudents

    
}