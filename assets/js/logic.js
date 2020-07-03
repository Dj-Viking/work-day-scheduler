// *DONE  THEN the current day is displayed at the top of the calendar

// *DONE THEN I am presented with time blocks for standard business hours
// *DONE WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// *DONE  WHEN I click into a time block
// *DONE  THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



//display current date at the top of the page
var tasks = {};

var tempArr = []


var nowDate = moment().format('MMMM Do YYYY');
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
        // arr.forEach(function(task) {
        // createTask(task.text);
        // });
    });
    // console.log(tasks);
}
loadTasks();

/*************** EDIT TASKS START **************** */
/************************************************ */
//select the element we want to edit by clicking it
// clicking <p> element makes it <textarea> to edit inside
$(".task-info").on("click", "p", function(){
    console.log(this);
    console.log("<p> element was clicked");

    var text = $(this)
        .text()
        .trim();
    console.log("displaying the text inside <p>");
    console.log(text);

    var id = $(this)
        .attr("id");//getting the id of the element clicked
    console.log("displaying the id of <p>");
    console.log(id);

    var textInput = $("<textarea>")
        .addClass("form-control")
        .attr("id", id)//setting the id of <textarea> to the same as <p>
        .val(text);
    $(this).replaceWith(textInput);
    console.log("<p> got converted into <textarea>!!!");
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
    var taskP = $("<p>")
        .addClass("ml-2")
        .attr("id", key)
        .text(text);
    
    $(".form-control").replaceWith(taskP);
    console.log("converted <textarea> back into <p>");

});
/*************** EDIT TASKS END **************** */
/************************************************ */



