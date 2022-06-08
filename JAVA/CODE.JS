let smartPeople = ["Shane", " Reagan", " Monique", " Marshalino", " Jamie", " Justine", " K-li", " Jeff"];

  var ul = document.createElement("ul");

  document.getElementById("myList").appendChild(ul);
  
  smartPeople.forEach(function (name) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += name;
  });