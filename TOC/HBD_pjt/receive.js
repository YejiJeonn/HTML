// localStorage에 저장된 정보를 출력하는 js

function infoOutput(){
  var obj = JSON.parse(localStorage.getItem('userInfo'))

  var name = obj.name;
  var month = obj.month;
  var day = obj.day;
  var message = obj.message;
  var center = obj.center;
  var bottom = obj.bottom;

  //console.log(picture);

  var outputSub = document.getElementById("sub");
    outputSub.textContent = name + "의 생일을 축하해 🎁";

  var outputDate = document.getElementById("date");
  outputDate.innerText = month + "월 " + day + "일 너의 생일을 축하해!\r\n\r\n";

  document.getElementById("center").src=center;

  var outputContent = document.getElementById("content");
  outputContent.innerText = "너의 생일을 기념해서 웹페이지를 만들어봤어.\r\n서프라이즈 선물이 마음에 들었으면 좋겠다!";

  var outputLetter = document.getElementById("letter");
  outputLetter.textContent = message;

  document.getElementById("bottom").src=bottom;
}
