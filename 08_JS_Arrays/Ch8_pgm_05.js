// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);


var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday); 


var getVisitorReportExtended = function (visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitorsExtended = [354, 132, 210, 221, 481, 299, 178];

var reportSaturday = getVisitorReportExtended(visitorsExtended, 6);
console.log(reportSaturday); 

var getMonthlyVisitorReport = function (monthArray, week, dayInWeek) {
  var weekArray = monthArray[week - 1];
  return getVisitorReportExtended(weekArray, dayInWeek);
};

var week1 = [354, 132, 210, 221, 481, 299, 178];
var week2 = [123, 234, 345, 456, 567, 678, 789];
var week3 = [111, 222, 333, 444, 555, 666, 777];
var week4 = [101, 202, 303, 404, 505, 606, 707];

var month = [week1, week2, week3, week4];

var reportWeek2Tuesday = getMonthlyVisitorReport(month, 2, 2);
var reportWeek3Sunday = getMonthlyVisitorReport(month, 3, 7);
var reportWeek4Monday = getMonthlyVisitorReport(month, 4, 1);

console.log(reportWeek2Tuesday);
console.log(reportWeek3Sunday); 
console.log(reportWeek4Monday);


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */