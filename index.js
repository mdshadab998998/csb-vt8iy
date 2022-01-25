document.getElementById("btnnn1").onclick = function () {
  // console.log("dh")
  document.getElementById("hidden_clic").style.display = "none";
  document.getElementById("lead").style.display = "block";
  document.getElementById("lead1").style.display = "block";
  // a="punchuation"
  vv = document.getElementById("exampleFormControlTextarea1").value;
  // console.log(vv)
  op = "";
  // puncutaion="!@#$%^&*(){}[]:;/'?,\<>"

  for (var i = 0; i <= vv.length - 1; i++) {
    if (
      vv[i] != "!" &&
      vv[i] != "@" &&
      vv[i] != "#" &&
      vv[i] != "$" &&
      vv[i] != "%" &&
      vv[i] != "^" &&
      vv[i] != "&" &&
      vv[i] != "*" &&
      vv[i] != "(" &&
      vv[i] != ")" &&
      vv[i] != "_" &&
      vv[i] != "{" &&
      vv[i] != "}" &&
      vv[i] != "[" &&
      vv[i] != "]" &&
      vv[i] != ":" &&
      vv[i] != ";" &&
      vv[i] != "/" &&
      vv[i] != "'" &&
      vv[i] != "?" &&
      vv[i] != "<" &&
      vv[i] != ">"
    ) {
      op = op + vv[i];
    }
  }
  document.getElementById("lead").innerHTML = op;
};
document.getElementById("btnnn2").onclick = function () {
  // console.log("dh")
  document.getElementById("lead1").style.display = "block";

  document.getElementById("hidden_clic").style.display = "none";
  document.getElementById("lead").style.display = "block";
  vv = document.getElementById("exampleFormControlTextarea1").value;

  // a="newline"
  op = "";

  // document.getElementById("lead").innerHTML=a
  p = vv.replace("\n", " ");
  document.getElementById("lead").innerHTML = p;
};
document.getElementById("btnnn3").onclick = function () {
  // console.log("dh")
  document.getElementById("hidden_clic").style.display = "none";
  document.getElementById("lead1").style.display = "block";

  vv = document.getElementById("exampleFormControlTextarea1").value;

  document.getElementById("lead").style.display = "block";
  up = vv.toUpperCase();
  // a="upper"
  document.getElementById("lead").innerHTML = up;
};
document.getElementById("btnnn4").onclick = function () {
  // console.log("dh")
  document.getElementById("hidden_clic").style.display = "none";
  document.getElementById("lead1").style.display = "block";

  document.getElementById("lead").style.display = "block";
  vv = document.getElementById("exampleFormControlTextarea1").value;
  sp = "";
  for (var i = 0; i <= vv.length - 1; i++) {
    if (vv[i] != " ") {
      sp = sp + vv[i];
    }
  }
  // a="space"
  document.getElementById("lead").innerHTML = sp;
};
// document.getElementById("btnnn5").onclick = function(){
//     // console.log("dh")
//     document.getElementById("hidden_clic").style.display="none"
//     document.getElementById("lead").style.display="block"
//     a="counter"
//     document.getElementById("lead").innerHTML=a
// }
document.getElementById("lead1").onclick = function () {
  document.getElementById("lead1").style.display = "none";
  document.getElementById("lead").style.display = "none";
  document.getElementById("hidden_clic").style.display = "block";
};
