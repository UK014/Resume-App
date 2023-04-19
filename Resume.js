function start() {
    window.open("/MIU/Resume");
}
document.getElementById("skillsbtn").addEventListener("click", addskills);
function addskills() {
    var skills = document.createElement("li");
    skills.innerHTML = document.getElementById("Skills").value;
    document.getElementById("skillslist").appendChild(skills);
}
document.getElementById("languagebtn").addEventListener("click", addlanguages);
function addlanguages() {
    var languages = document.createElement("li");
    languages.innerHTML = document.getElementById("Language").value;
    document.getElementById("languagelist").appendChild(languages);
}
function Degree() {
    if (document.getElementById("Degree").value == "Bachelor") {
        document.getElementById("masterdiv").style.visibility = "hidden";
        document.getElementById("PhDdiv").style.visibility = "hidden";
        document.getElementById("phdhr").style.visibility = "hidden";
    }
    if (document.getElementById("Degree").value == "Master") {
        document.getElementById("masterdiv").style.visibility = "visible";
        document.getElementById("PhDdiv").style.visibility = "hidden";
        document.getElementById("phdhr").style.visibility = "hidden";
    }
    if (document.getElementById("Degree").value == "Ph.D") {
        document.getElementById("masterdiv").style.visibility = "visible";
        document.getElementById("PhDdiv").style.visibility = "visible";
        document.getElementById("phdhr").style.visibility = "visible";
    }

}
function experience() {
    if (document.getElementById("workexperience").value == "jobone") {
        document.getElementById("jobexperience2").style.visibility = "hidden";
        document.getElementById("")
    }
    else if (document.getElementById("workexperience").value == "jobtwo") {
        document.getElementById("jobexperience2").style.visibility = "visible";
    }
}


