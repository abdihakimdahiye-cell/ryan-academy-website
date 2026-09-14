let schoolName="Ryan academy";
let schoolLocation="Eastleigh,Nairobi";
let schoolYear=2005;
console.log(schoolName);
console.log(schoolLocation);
console.log(schoolYear);
let isSchoolOpen=true;
console.log(isSchoolOpen);
let learnMoreBtn=document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function() {
        alert("welcome to Ryan academy!");
    } );
}



    
// function 
// welcomeStudent( studentName) {
//     alert("welcome to Ryan Academy, " + studentName + " !");
// }
// welcomeStudent("Ahmed");
// welcomeStudent("Amina");
// welcomeStudent("Mohamed");
// welcomeStudent("Fatima");
// welcomeStudent("Abdi");
let students=["Ahmed","Mohamed", "Amina","Fatima", "Abdi"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
students.push("Abdi");
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);
students.unshift("Hassan");
console.log(students);
for (let i = 0; i< students.length; i++) {
    console.log(students[i]);
}

//Store student applications
let applications=[];

let admissionForm = document.getElementById("admissionForm");
let formMessage = document.getElementById("formMessage");

admissionForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let studentName = document.getElementById("studentName").value.trim();
    let studentAge = document.getElementById("studentAge").value;
    let parentName = document.getElementById("parentName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let grade = document.getElementById("grade").value;

    // Check student name
    if (studentName === "") {
        formMessage.textContent = "Please enter the student's name.";
        formMessage.style.color = "red";
        return;
    }

    // Check age
    if (studentAge === "" || studentAge < 3 || studentAge > 18) {
        formMessage.textContent = "Please enter a valid student age between 3 and 18.";
        formMessage.style.color = "red";
        return;
    }

    // Check parent name
    if (parentName === "") {
        formMessage.textContent = "Please enter the parent/guardian name.";
        formMessage.style.color = "red";
        return;
    }

    // Check phone number
    if (phone === "" || phone.length < 10) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "red";
        return;
    }

    // Check grade
    if (grade === "") {
        formMessage.textContent = "Please select the grade.";
        formMessage.style.color = "red";
        return;
    }

    // Successful submission
    formMessage.textContent = "Application submitted successfully!";
    formMessage.style.color = "green";
    let application= {
        name:studentName,
        age:studentAge,
        parent: parentName,
        phone:phone,
        grade:grade
    };
    applications.push(application);
    console.log(applications);

    alert("Application submitted successfully!");

    admissionForm.reset();
});
 
let galleryImages=document.querySelectorAll (" .gallery-image");
galleryImages.forEach(function (image) {
    image.addEventListener("click", function(){
        window.open(image.src ,"_blank");
    });
});

   let  menuButton = document.getElementById("menuButton");
let navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
}


