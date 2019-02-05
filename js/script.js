const template = document.querySelector("#studentTemplate").content;
const baseLink = "http://petlatkea.dk/2019/students1991.json";

function getStudents() {
  fetch(baseLink)
    .then(pro => pro.json())
    .then(showStudents);
}

function showStudents(studentList) {
  console.log(studentList);
  studentList.forEach(student => {
    console.log(student.fullname);
    const clone = template.cloneNode(true);

    clone.querySelector("h2 span").textContent = student.house;
    clone.querySelector("h1 span").textContent = student.fullname;

    document.querySelector("ul").appendChild(clone);
  });
}

getStudents();
