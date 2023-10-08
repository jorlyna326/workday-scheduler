
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  const localeSettings = {};
  dayjs.locale(localeSettings);

$("#currentDay").text(`${dayjs().format("dddd MMMM, D")}`);
currentHour = dayjs().hour();


  function UpdateColors() {
    for (let i = 9; i <= 17; i++) {
      $(`#hour-${i}`).removeClass("past");
      $(`#hour-${i}`).removeClass("present");
      $(`#hour-${i}`).removeClass("future");
  
      if (i < currentHour) {
        $(`#hour-${i}`).addClass("past");
      } else if (i == currentHour) {
        $(`#hour-${i}`).addClass("present");
      } else {
        $(`#hour-${i}`).addClass("future");
      }
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

