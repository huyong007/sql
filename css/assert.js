function assert(value, desc) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}
window.onload = function() {
  assert(true, "the test suite is running");
  assert(false, "fail!");
};

function report(text) {
  assert(true, text);
}
