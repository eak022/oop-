 class University{
    departments = [];
    constructor(name, location){
        this.name = name;
        this.location = location; 
    }
    addDepartment(department){
        this.departments.push(department);
    }
    addStudent(){
        this.departments.addStudent();
    }
    addProfessor(){
        this.departments.addProfessor();
    }
    removeDepartment(department){
        let index =this.departments.indexOf(department);
        this.departments.splice(index,1);
    }
    removeStudent(student){
        this.departments.removeStudent();
    }
    removeProfessor(professor){
        this.departments.removeProfessor();
    }
    getDepartment(){
        return this.departments;
    }
    getStudent(){
        return this.departments.getStudent();
    }
    getProfessor(){
        return this.departments.getProfessor();
    }
    toString(){
        console.log(`University : ${this.name}, \n
        \t Location : ${this.location},\n`);
        for(let i = 0; i < this.departments.length; i++){
        console.log(`\t Department : ${this.departments.name}`);;
        }
        for(let i = 0; i < this.departments.students.length; i++){
            console.log(`Student : ${this.departments.students.name}`);
        }
        for(let i = 0; i < this.departments.professor.length; i++){
            console.log(`\t Professor : ${this.departments.professor}`);
        };
        
    }
 }


 class Department{
    courses =[];
    professors = [];
    students = [];
    constructor(name){
        this.name = name;
    }

    addCourse(course){
        this.courses.push(course);
    }
    removeCourse(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
    }
    addStudent(student){
        this.students.push(student);
    }
    removeStudent(student){
        let index = this.students.indexOf(student);
        this.students.splice(index,1);
    }
    addProfessor(professor){
        this.professors.push(professor);
    }
    removeProfessor(professor){
        let index = this.professors.indexOf(professor);
        this.professors.splice(index,1);
    }
    getCourses(){
        return this.courses;
    }
    getStudent(){
        return this.students
    }
    toString(){
        for(let i = 0; i <this.length; i++){
        return `\t Department : ${this.name}\n
        \t Courses : ${this.courses.name}\n
        \t Students : ${this.students.name}\n
        \t Professors : ${this.professors.name}`;
    }
    }
 }

 class Course{
    professor = null;
    students = [];
    constructor(code, title){
        this.code = code;
        this.title = title;
    }
    addStudent(student){
        this.student.push(student);
    }
    removeStudent(student){
        let index = this.students.indexOf(student);
        this.students.splice(index,1);
    }
    setProFessor(professor){
        this.professor = professor;

    }
    getProfessor(){
        return this.professor;
    }
    getStudent(){
        return this.students;
    }
    toString(){
        for(let i = 0; i <this.length; i++){
        return `Course : ${this.code} Title : ${this.title},
        \t Professor ${this.professor.name} \n
        \t Student ${this.students.name}`;
    }
    }
 }

 class Professor extends Person{
    courses = [];
    constructor(name, address, email, staffId){
        super(name, address, email)
        this.staffId = staffId
    }
    teachCourse(course){
        this.courses.push(course);
    }
    stopTeachingCourse(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
    }
    getCourses(){
        return this.courses;
    }
    toString(){
        for(let i = 0; i <this.length; i++){
        return `Professor : ${this.name}, Staff ID : ${this.staffId},
        \t Courses : ${this.courses}`
    }
    }

 }


 class Student extends Person{
    courses = [];
    constructor(name, address, email,studentId, year){
        super(name, address, email)
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course){
        this.courses.push(course)
    }
    dropCourse(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
    }
    getCourses(){
        return this.courses;
    }
    toString(){
        for(let i = 0; i <this.length; i++){
            return `Student : ${this.name}, Year : ${this.year}, 
            \t Courses : ${this.courses}`
        }
        
    }
 }

 class Person{
    constructor(name, address, email){
        this.name = name;
        this.address = address;
        this.email = email;
    }
    tostring(){
        return `Name : ${this.name}  Address : ${this.address} Email : ${this.email}`;
    }
 }

 const main = () => {

    const student1 = new Student("Alice", "NPRU", "a@mail",S001, 1);
    const student2 = new Student("Bob", "NPRU", "b@mail",S002, 2);
    const professor1 = new Professor("Dr. Worachet", "NPRU", "w@mail","P001");
    
    

console.log();
 }