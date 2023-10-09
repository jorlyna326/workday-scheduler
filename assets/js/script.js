const localeSettings = {};
let currentHour= 0;
$(function(){
  dayjs.locale(localeSettings);

  $("#currentDay").text(`${dayjs().format("dddd MMMM, D")}`);
  currentHour = dayjs().hour();
  UpdateColors();
  $(".saveBtn").on("click", saveToLocalStorage);
})


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
    let textarea = $(`#hour-${i} textarea`);
    let text = localStorage.getItem(`hour-${i}`);
    textarea.val(text);
  }
}
function saveToLocalStorage(e) {
  let parent = $(this).parent()
  let thisData = {
    hour: parent.attr("id"),
    textContent: parent.children("textarea").val(),
  }
  localStorage.setItem(thisData.hour,thisData.textContent);
}






