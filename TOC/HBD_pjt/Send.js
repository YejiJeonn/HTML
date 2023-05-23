// 정보를 입력받아서 로컬스토리지에 저장하는 js

function Input(){
  var name = document.getElementById("uname").value;
  var ddate = document.getElementById("uday").value;
  var date = new Date(ddate);
  var message = document.getElementById("ucomment").value;
  var ucenter = document.getElementById("ucenter");
  var ubottom = document.getElementById("ubottom");
  // var value = (picture.options[picture.selectedindex].value);
  var center = {}
  center.ucenter = ucenter.options[ucenter.selectedIndex].value;
  var bottom = {}
  bottom.ubottom = ubottom.options[ubottom.selectedIndex].value;

  //console.log(value);
  
  // 입력받은 생일을 월과 일로 나눔
  var month = date.getMonth()+1;
  var day = date.getDate();
  
  // console.log(name, month, day, message, value);
  
  const userInfo = {
    name : name,
    month : month,
    day : day,
    message : message,
    center : center.ucenter,
    bottom : bottom.ubottom,
  }

  localStorage.setItem("userInfo",JSON.stringify(userInfo));
}
