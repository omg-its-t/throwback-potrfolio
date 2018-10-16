
  var i = 0;
  var status = document.getElementById("statusDisplayArea");

  function start()
  {
    if(i < 5){
      document.getElementById("statusDisplayArea").textContent += ". ";
      i++;
      setTimeout(start, 500);
    }
    else{
      document.getElementById("statusDisplayArea").textContent = "Loading";
      i = 0;
      setTimeout(start, 500);
    }
  }
