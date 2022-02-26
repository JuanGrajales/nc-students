class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students=[]) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(newStudent){
      console.log(newStudent)
      // check if the new student email already existing in the current students
        const duplicateStudentsFound = this.students.filter((existingStudent) => {
            if(existingStudent.email === newStudent.email){
                return true
            }
        })

      // if the student is not registered then add to array of students
      if(duplicateStudentsFound.length === 0){
          this.students.push(newStudent)
      } else { // else show message that student is already registered
          console.log( `${newStudent.email} is already registered`)
      }
  }
}

const s1 = new Student('Ashley', 'a@a.com', 'TN')
const s2 = new Student('Marshal', 'm@m.com', 'CT')
const s3 = new Student('Belinda', 'b@b.com', 'TN')
const b1 = new Bootcamp('React', 1)

b1.registerStudent(s1)
b1.registerStudent(s2)
b1.registerStudent(s3)
b1.registerStudent(s1)