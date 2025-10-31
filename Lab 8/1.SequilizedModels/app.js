const { Student } = require('./models');

async function createStudent() {
    await Student.create({
        name: 'John Doe',
        age: 20,
        email: 'johndoe@gmail.com',
    })
}

function getAllStudents() {
    return Student.findAll();
}

async function run() {
    const studentsOld = await getAllStudents();
    console.log(studentsOld);
    await createStudent();
    const studentsNew = await getAllStudents();
    console.log(studentsNew);
}

run()