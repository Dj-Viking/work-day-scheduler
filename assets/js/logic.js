// *DONE  THEN the current day is displayed at the top of the calendar

// *DONE THEN I am presented with time blocks for standard business hours
// *DONE  WHEN I view the time blocks for that day
// *DONE  THEN each time block is color-coded to indicate whether it is in the past, present, or future
// *DONE  WHEN I click into a time block
// *DONE  THEN I can enter an event
// *DONE  WHEN I click the save button for that time block
// *DONE  THEN the text for that event is saved in local storage
// *DONE  WHEN I refresh the page
// *DONE  THEN the saved events persist



//display current date at the top of the page
var tasks = {};

var tempArr = []

//instantiating the div we are appending with the info from local storage
var loadDiv = document.createElement("div");


var nowDate = moment().format('dddd MMMM Do YYYY');
var nowTime = moment().format('h:mm:ss a');

var updateDate = document.querySelector("#live-date");
var updateTime = document.querySelector("#live-time");

console.log(nowDate);
console.log(nowTime);

function updateTheDate(){
    updateDate.textContent = nowDate;
}
setInterval(updateTheDate, (1000 * 60)* 30)
updateTheDate();


function time() {
    var d = new Date();
    var s = ('0'+ d.getSeconds()).slice(-2);
    var m = ('0'+ d.getMinutes()).slice(-2);
    var h = d.getHours(); 
    if(h >= 12){
        updateTime.textContent = h + ":" + m + ":" + s + " pm";
    } else if (h <= 11){
        updateTime.textContent = h + ":" + m + ":" + s + " am";
    }
}
  setInterval(time, 100);
//   setInterval(auditTasks, 1000);

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

/**************** LOAD TASK START ***************** */
/************************************************* */

function loadTasks(){
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
        nineAm: [""],
        tenAm: [""],
        elevenAm: [""],
        twelvePm: [""],
        onePm: [""],
        twoPm: [""],
        threePm: [""],
        fourPm: [""],
        fivePm: [""],
        };
    }
    //hard code each object into the list until i can figure out how to loop
    //check if the value is falsy create an empty set of text for each object array
    // if (tasks.nineAm[0].text === undefined || tasks.nineAm[0].text === null){
    //     tasks.nineAm[0].text = "";
    // } 

    createTask("nineAm", tasks.nineAm[0].text);
    createTask("tenAm", tasks.tenAm[0].text);
    createTask("elevenAm", tasks.elevenAm[0].text);
    createTask("twelvePm", tasks.twelvePm[0].text);
    createTask("onePm", tasks.onePm[0].text);
    createTask("twoPm", tasks.twoPm[0].text);
    createTask("threePm", tasks.threePm[0].text);
    createTask("fourPm", tasks.fourPm[0].text);
    createTask("fivePm", tasks.fivePm[0].text);

    console.log(tasks);
}

// auditTasks();
loadTasks();

/**************** LOAD TASK END ***************** */
/************************************************* */

/************** CREATE TASK START***************** */
/************************************************* */
function createTask(list, taskText){
    if (!taskText){
        taskText = "";
    }
    
    //select the area to append to loops through each element with the list array name
    var appendHere = document.querySelector(".row-" + list + "Append");
    //create the element to append
    var loadDiv = document.createElement("div");
    //give it an id, doesn't work without it for some reason
    loadDiv.id = "appendingDiv";
    //push the text into the innerText area of the element
    loadDiv.innerText = taskText;
    //add the classes for each iteration of the loadTask loop above
    loadDiv.className += "height-full-row no-left-margin padding-left-some ml-2";
    //append the new div with the localStorage info on it to the part of the document we want to append to.
    appendHere.appendChild(loadDiv);
    // auditTasks();
    
}
/************** CREATE TASK END ***************** */
/************************************************* */

/**************** AUDIT TASK START ***************** */
/************************************************* */
function auditTasks(){
    
    
    var d = new Date();
    var h = d.getHours(); 
    //add the styles to the selected row by data hour if
    //they are before, during, or after a certain hour
    var dataHour = $(".task-info9").attr("data-hour");
    if (dataHour < h){
        $(".task-info9").addClass("past");
    } else if (dataHour == h){
        $(".task-info9").addClass("present");
    } else {
        $(".task-info9").addClass("future");
    }
    var dataHour = $(".task-info10").attr("data-hour");
    if (dataHour < h){
        $(".task-info10").addClass("past");
    } else if (dataHour == h){
        $(".task-info10").addClass("present");
    } else {
        $(".task-info10").addClass("future");
    }
    var dataHour = $(".task-info11").attr("data-hour");
    if (dataHour < h){
        $(".task-info11").addClass("past");
    } else if (dataHour == h){
        $(".task-info11").addClass("present");
    } else {
        $(".task-info11").addClass("future");
    }
    var dataHour = $(".task-info12").attr("data-hour");
    if (dataHour < h){
        $(".task-info12").addClass("past");
    } else if (dataHour == h){
        $(".task-info12").addClass("present");
    } else {
        $(".task-info12").addClass("future");
    }
    var dataHour = $(".task-info13").attr("data-hour");
    if (dataHour < h){
        $(".task-info13").addClass("past");
    } else if (dataHour == h){
        $(".task-info13").addClass("present");
    } else {
        $(".task-info13").addClass("future");
    }
    var dataHour = $(".task-info14").attr("data-hour");
    if (dataHour < h){
        $(".task-info14").addClass("past");
    } else if (dataHour == h){
        $(".task-info14").addClass("present");
    } else {
        $(".task-info14").addClass("future");
    }
    var dataHour = $(".task-info15").attr("data-hour");
    if (dataHour < h){
        $(".task-info15").addClass("past");
    } else if (dataHour == h){
        $(".task-info15").addClass("present");
    } else {
        $(".task-info15").addClass("future");
    }
    var dataHour = $(".task-info16").attr("data-hour");
    if (dataHour < h){
        $(".task-info16").addClass("past");
    } else if (dataHour == h){
        $(".task-info16").addClass("present");
    } else {
        $(".task-info16").addClass("future");
    }
    var dataHour = $(".task-info17").attr("data-hour");
    if (dataHour < h){
        $(".task-info17").addClass("past");
    } else if (dataHour == h){
        $(".task-info17").addClass("present");
    } else {
        $(".task-info17").addClass("future");
    }
    
}
setInterval(auditTasks, 100);     
   
/**************** AUDIT TASK END ***************** */
/************************************************* */

/*************** EDIT TASKS START **************** */
/************************************************ */
//select the element we want to edit by clicking it
// clicking <p> element makes it <textarea> to edit inside
$(".task-info").on("click", "div", function(){
    console.log(this);
    console.log("<div> element was clicked");

    var text = $(this)
        .text()
        .trim();
    console.log("displaying the text inside <div>");
    console.log(text);

    var id = $(this)
        .attr("id");//getting the id of the element clicked
    console.log("displaying the id of <div>");
    console.log(id);

    var textInput = $("<textarea>")
        .addClass("form-control")
        .attr("id", id)//setting the id of <textarea> to the same as <p>
        .val(text);
    $(this).replaceWith(textInput);
    console.log("<div> got converted into <textarea>!!!");
    textInput.trigger("focus");
});

//clicking save task button converts <textarea> back into <p>
//have to target the row here i guess
$(".row").on("click", ".save-button", function(){
    //this is the .save-button
    console.log(this);
    console.log("the button was clicked");

    var text = $(".form-control")
        .val()
        .trim();//get the text from the <textarea>
    var key = $(".form-control")
        .attr("id");//get the id attribute of <textarea>
    console.log("getting text and id attr from <textarea> by clicking .save button")
    console.log(text);//text
    console.log(key);//id
    
    //save the text and the key into the localStorage array

    // //initializing a temp array to place task data as objects inside the array
    // //after the child element was updated
    var tempArr = []

//   //add task data to the temp array as an object
    tempArr.push({text: text,});
    
    // console.log("text content of updated children were stored in a temp array as objects")
    console.log(tempArr);
    // //trim down list's id to match the parent's id
    // //so that we can save it in the array with the same name as
    // //the id hence list-toDo or list-inProgress or list-inReview or list-done
     var arrName = $(".row-" + key)//key is specific to which task we are saving
       .attr("id")
       .replace("row-", "");//whatever is in the quotes we are using for the name of the array that we are storing this task in

    // //update array and tasks object and save
     tasks[arrName] = tempArr;
     saveTasks();
    // //$(this).children() refers to the parent of the children
    // //and displays the array of children element objects inside.
    // //console.log($(this).children());
    
    //convert back into <p> element after saving
    var taskP = $("<div>")
        .addClass("height-full-row no-left-margin padding-left-some")
        .attr("id", key)
        .text(text);
    
    $(".form-control").replaceWith(taskP);
    console.log("converted <textarea> back into <div>");

});
/*************** EDIT TASKS END **************** */
/************************************************ */



