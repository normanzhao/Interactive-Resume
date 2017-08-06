document.addEventListener('DOMContentLoaded', function () {
    printCommands()
    enterCommand();
}, false);

function addOutput(text) {
    var command = document.body;
    var newLine = document.createElement('div');
    newLine.className = "output";
    newLine.innerHTML = text;
    newLine.style.position = "relative";
    newLine.style.top = "75vh"
    command.appendChild(newLine);
}

function printCommands() {
    addOutput("To get started, please enter in one of the following: </br> \
        <table class='commands'> \
                    <tr><td class='first_cell'>Command</td><td>Description</td><tr> \
                    <tr><td class='first_cell'>coms</td><td>This list of commands</td><tr> \
                    <tr><td class='first_cell'>info</td><td>My basic information</td><tr> \
                    <tr><td class='first_cell'>contact</td><td>Ways to reach me</td><tr> \
                    <tr><td class='first_cell'>exp</td><td>My past positions and where I've worked at</td><tr> \
                    <tr><td class='first_cell'>skills</td><td>What I know and what I'm good at</td><tr> \
                    <tr><td class='first_cell'>resume</td><td>Print everything</td><tr> \
               </table></br> ");
}

function printError() {
    addOutput("The command you have entered is not available, please enter a valid command");
    printCommands();
}

function printInfo() {
    addOutput("My name is Norman Zhao. </br> \
        I am a Computer Engineering major at NYU Tandon Class of 2018.</br> \
        I currently reside in Brooklyn, New York.</br></br>");
}

function printContact() {
    addOutput("You can reach me via e-mail at <a href='mailto:normanlz.zhao@gmail.com' target='_blank' >normanlz.zhao@gmail.com</a>, </br> \
        via my <a href='https://www.linkedin.com/in/zhaonorman/' target='_blank'>Linkedin</a>, </br> \
        or visit my <a href='https://github.com/normanzhao/' target='_blank'>Github</a></br></br>");
}

function printExperiences() {
    addOutput("<table class='experiences'>\
                    <tr><td class='first_cell'>Title</td><td>Employer</td><td>Start Date</td><td>End Date</td><td>Location</td><tr>\
                    <tr><td class='first_cell'>Employee</td><td>NYU Athletics</td><td>September 2016</td><td>Present</td><td>Brooklyn, New York</td><tr> \
                    <tr><td class='first_cell'>Data Analyst Intern (Remote)</td><td>Bazaarvoice</td><td>August 2016</td><td>December 2016</td><td>Brooklyn, New York</td><tr> \
                    <tr><td class='first_cell'>Data Analyst Intern</td><td>Bazaarvoice</td><td>May 2016</td><td>August 2016</td><td>Austin, Texas</td><tr> \
               </table></br></br>");
}

function printSkills() {
    addOutput("Languages: Python, C++ </br> \               Data: SQL, numPy, pandas </br> \               Web: Javascript, HTML, CSS, PHP, ActionScript 3 </br> \               Design: Adobe Photoshop, Adobe Ilustrator, Adobe Flash, Autodesk Inventor, Multisim, Xilinx ISE, Blender </br> \               Microsoft: Word, Excel, Powerpoint</br></br>");
}

function enterCommand() {
    addOutput("<span id='caret'>> </span> <input id='commandInput' maxlength='150'></input>");
    commandInput = document.getElementById("commandInput");
    commandInput.focus();
    commandInput.addEventListener('keyup', function (e) {
        if (e.which == 13) {
            addOutput("> " + document.getElementById('commandInput').value);
            parseCommand(commandInput.value);
        }
    }, false);
}


function parseCommand(command) {
   document.getElementById("commandInput").remove();
   document.getElementById("caret").remove();
   switch (command.toLowerCase()) {
        default:
            printError();
            break;
       case "com":
       case "coms":
       case "command":
       case "commands":
       case "help":
           printCommands();
           break;
       case "inf":
       case "info":
       case "information":
           printInfo();
           break;
       case "con":
       case "contact":
       case "contacts":
           printContact();
           break;
       case "exp":
       case "experience":
       case "experiences":
           printExperiences();
           break;
       case "skill":
       case "skills":
       case "skillz":
           printSkills();
           break;
       case "resume":
           printInfo();
           printContact();
           printExperiences();
           printSkills();
           break;

    }
    enterCommand();
}

