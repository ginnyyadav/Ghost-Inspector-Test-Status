document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems, options);
});

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
});

//Tabl Creation
var jsonData;
var testDataArray;
var dataTable;

$.getJSON(
  "https://api.ghostinspector.com/v1/tests/5dd442c4f7f9965b8a27620f/results/?apiKey=1d903bbbe266b0b560b80a5dff6659cfdf8aec8f",
  function (json) {
    jsonData = json;
    testDataArray = [];
    dataTable = "#dataTableOne"
    createArray();
  }
);

function createArray() {
  console.log(jsonData);
  var status = jsonData.data[0].passing;
  var testName = jsonData.data[0].name;
  var lastExecution = jsonData.data[0].dateExecutionFinished;
  var screenshot = jsonData.data[0].screenshot.original.defaultUrl;
  var video = jsonData.data[0].video.url;
  var testDataArray = [
    {
      testStatus: status,
      name: testName,
      dateExecutionFinished: lastExecution,
      screenshot: screenshot,
      video: video,
    },
  ];
  createTable();
  function createTable() {
    //create Tabulator on DOM element with id "example-table"
    var table = new Tabulator(dataTable, {
      maxHeight: "100%", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
      data: testDataArray, //assign data to table
      layout: "fitColumns", //fit columns to width of table (optional)
      columns: [
        //Define Table Columns
        { title: "Passing", field: "testStatus", width: 150, headerSort:false },
        { title: "Name", field: "name", headerSort: false },
        { title: "Last Execution", field: "dateExecutionFinished", headerSort: false,  },
        { title: "Screenshot", field: "screenshot", formatter: "link", headerSort: false },
        { title: "Video", field: "video", formatter: "link", headerSort:false },
      ],
    });
  }
};
//data table 2 
$.getJSON(
  "https://api.ghostinspector.com/v1/tests/5dd447344c362854996029e1/results/?apiKey=1d903bbbe266b0b560b80a5dff6659cfdf8aec8f",
  function (json) {
    jsonData = json;
    testDataArray = [];
    dataTable = "#dataTableTwo"
    createArray();
  }
);
//data table 2 
$.getJSON(
    "https://api.ghostinspector.com/v1/tests/5dd5a8b861dd6e0968cc5bac/results/?apiKey=1d903bbbe266b0b560b80a5dff6659cfdf8aec8f",
    function (json) {
      jsonData = json;
      testDataArray = [];
      dataTable = "#dataTableThree"
      createArray();
    }
  );