/*
document.addEventListener("DOMContentLoaded", function () {
  const picture = document.getElementById("upicture");
  picture.addEventListener("change", infoOutput);
});
*/


function Input() {
  // 입력된 값을 각 변수에 값으로 넣음
  var name = document.getElementById("uname").value;
  var ddate = document.getElementById("uday").value;
  var date = new Date(ddate);

  // 입력받은 생일을 월과 일로 나눔
  var month = date.getMonth()+1;
  var day = date.getDate();

  
  //var color = document.getElementById("ucolor").value;
  var message = document.getElementById("ucomment").value;


  localStorage.setItem("name", name);
  localStorage.setItem("month", month);
  localStorage.setItem("date", day);
  localStorage.setItem("comment", message);

  window.location.href = "main2.html";

}

function infoOutput() {
    var name = localStorage.getItem("name");
    var month = localStorage.getItem("month");
    var date = localStorage.getItem("date");
    var comment = localStorage.getItem("comment");

    var outputSub = document.getElementById("sub");
    outputSub.textContent = name + "의 생일을 축하해 🎁";
    
    var outputName = document.getElementById("name");
    outputName.innerText = "안녕" + name + "!\r\n";

    var outputDate = document.getElementById("date");
    outputDate.innerText = month + "월 " + date + "일 너의 생일을 축하해!\r\n\r\n";

    var outputContent = document.getElementById("content");
    outputContent.innerText = "너의 생일을 기념해서 웹페이지를 만들어봤어.\r\n서프라이즈 선물이 마음에 들었으면 좋겠다!";

    //var outputElement = document.getElementById("output");
    //outputElement.innerText = "안녕 " + name + "!\r\n\r\n" +  month + "월 " + date + "일 너의 생일을 축하해!\r\n" + "너의 생일을 기념해서 웹페이지를 만들어봤어.\r\n" + "서프라이즈 선물이 마음에 들었으면 좋겠다!";
    
    var outputLetter = document.getElementById("letter");
    outputLetter.textContent = comment;
}
