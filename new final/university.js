class University {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.departments = [];
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    addStudent(student) {
        this.departments.forEach(department => department.addStudent(student));
    }
    addProfessor(professor) {
        this.departments.forEach(department => department.addProfessor(professor));
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }
    removeStudent(student) {
        this.departments.forEach(department => department.removeStudent(student));
    }
    removeProfessor(professor) {
        this.departments.forEach(department => department.removeProfessor(professor));
    }
    getDepartments() {
        return this.departments;
    }
    toString() {
        let info = `University: ${this.name}\nLocation: ${this.location}\n`;
        this.departments.forEach(department => {
            info += department.toString() + '\n';
        });
        return info;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.courses = [];
        this.professors = [];
        this.students = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    toString() {
        let info = `Department: ${this.name}\n`;
        info += `Courses: ${this.courses.map(course => course.code).join(', ')}\n`;
        info += `Students: ${this.students.map(student => student.name).join(', ')}\n`;
        info += `Professors: ${this.professors.map(professor => professor.name).join(', ')}`;
        return info;
    }
}

class Course {
    constructor(code, title, professor) {
        this.code = code;
        this.title = title;
        this.professor = professor;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    toString() {
        return `Course: ${this.code}, Title: ${this.title}\nProfessor: ${this.professor.name}\nStudents: ${this.students.map(student => student.name).join(', ')}`;
    }
}

class Person {
    constructor(name, address, email) {
        this.name = name;
        this.address = address;
        this.email = email;
    }
    toString() {
        return `Name: ${this.name}, Address: ${this.address}, Email: ${this.email}`;
    }
}

class Professor extends Person {
    constructor(name, address, email, staffId) {
        super(name, address, email);
        this.staffId = staffId;
        this.courses = [];
    }
    teachCourse(course) {
        this.courses.push(course);
    }
    stopTeachingCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    toString() {
        return `Professor: ${this.name}, Staff ID: ${this.staffId}, Courses: ${this.courses.map(course => course.code).join(', ')}`;
    }
}

class Student extends Person {
    constructor(name, address, email, studentId, year) {
        super(name, address, email);
        this.studentId = studentId;
        this.year = year;
        this.courses = [];
    }
    registerCourse(course) {
        this.courses.push(course);
    }
    dropCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    toString() {
        return `Student: ${this.name}, Year: ${this.year}, Courses: ${this.courses.map(course => course.code).join(', ')}`;
    }
}

function main() {
    const myUniversity = new University(
        "Nakhon Pathom Rajabhat University",
        "85 Malaiman Road, Nakhon Pathom, Thailand"
    );

    const department1 = new Department("Computer Science");
    const department2 = new Department("Software Engineering");

    myUniversity.addDepartment(department1);
    myUniversity.addDepartment(department2);

    const student1 = new Student(
        "Alice",
        "123 Kanchanaburi",
        "alice@example.com",
        "S001",
        1
    );
    const student2 = new Student(
        "Bob",
        "456 Ratchaburi",
        "bob@example.com",
        "S002",
        2
    );

    myUniversity.addStudent(student1);
    myUniversity.addStudent(student2);

    const professor1 = new Professor(
        "Dr. Worachet Uttha",
        "789 Phetchakaseam road",
        "wuttha@example.com",
        "P001"
    );
    const professor2 = new Professor(
        "Dr. Udsanee Pakdeetrakulwong",
        "101 Wangtaku",
        "udsanee@example.com",
        "P002"
    );

    myUniversity.addProfessor(professor1);
    myUniversity.addProfessor(professor2);

    department1.addProfessor(professor1);
    department2.addProfessor(professor2);

    const course1 = new Course(
        "CS101",
        "Introduction to Programming",
        professor1
    );
    const course2 = new Course(
        "SE101",
        "Introduction of Database Design",
        professor2
    );

    course1.addStudent(student1);
    course2.addStudent(student2);

    student1.registerCourse(course1);
    student2.registerCourse(course2);

    professor1.teachCourse(course1);
    professor2.teachCourse(course2);

    department1.addCourse(course1);
    department2.addCourse(course2);

    console.log(myUniversity.toString());
    console.log(department1.toString());
    console.log(department2.toString());
    console.log(course1.toString());
    console.log(course2.toString());
    console.log(student1.toString());
    console.log(student2.toString());
    console.log(professor1.toString());
    console.log(professor2.toString());

    console.log("Students in the University:");
    myUniversity.getDepartments().forEach(department => {
        department.students.forEach(student => {
            console.log(student.toString());
        });
    });

    console.log("Professors in the University:");
    myUniversity.getDepartments().forEach(department => {
        department.professors.forEach(professor => {
            console.log(professor.toString());
        });
    });

    console.log("Departments in the University:");
    myUniversity.getDepartments().forEach(department => {
        console.log(department.toString());
    });
}

main();
