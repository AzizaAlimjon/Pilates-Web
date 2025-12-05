document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var classChosen = document.getElementById("classSelect").value;
  var levels = document.getElementsByName("level");
  var level = "";
  for (var i = 0; i < levels.length; i++) {
    if (levels[i].checked) {
      level = levels[i].value;
    }
  }

  if (name === "" || email === "") {
    document.getElementById("message").innerText = "Please fill in all fields.";
  } else {
    document.getElementById("message").innerText =
      "Thanks " + name + "! You signed up for " + classChosen + " (" + level + ").";
  }
});

fetch("tips.json")
  .then(response => response.json())
  .then(data => {
    var tipsDiv = document.getElementById("tips");
    var list = document.createElement("ul");
    for (var i = 0; i < data.tips.length; i++) {
      var li = document.createElement("li");
      li.innerText = data.tips[i];
      list.appendChild(li);
    }
    tipsDiv.appendChild(list);
  });
