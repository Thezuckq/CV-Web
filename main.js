function topNavResponsive() {
    var x = document.getElementById("myListMenu");
    if (x.className === "list-menu") {
      x.className += " responsive";
    } else {
      x.className = "list-menu";
    }
  }
