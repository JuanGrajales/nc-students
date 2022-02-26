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
}

const s1 = new Student('Ashley', 'a@a.com', 'TN')
const s2 = new Student('Marshal', 'm@m.com', 'CT')
const s3 = new Student('Belinda', 'b@b.com', 'TN')
const b1 = new Bootcamp('React', 1, [s1])