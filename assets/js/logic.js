// *DONE  THEN the current day is displayed at the top of the calendar

// *DONE THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
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

updateDate.textContent = nowDate;

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
  setInterval(time, 1000);

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function loadTasks(){
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
        nineAm: [],
        tenAm: [],
        elevenAm: [],
        twelvePm: [],
        onePm: [],
        twoPm: [],
        threePm: [],
        fourPm: [],
        fivePm: [],
        };
    }
    // loop over object properties
    $.each(tasks, function(list, arr) {
        console.log(list, arr);
        // then loop over sub-array
         arr.forEach(function(task) {
         createTask(list, task.text);
         document.getElementById("appendingDiv").className = "height-full-row no-left-margin padding-left-some ml-2";
         });
    });
    console.log(tasks);
}
loadTasks();

function createTask(list, taskText){
    
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
    
    
}

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
    tempArr.push({
    text: text,
    });
    
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



