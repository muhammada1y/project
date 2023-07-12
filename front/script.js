var imgbox = document.getElementById("imgbox");
var LoadFile = function (event) {
  imgbox.style.backgroundImage =
    "URL(" + URL.createObjectURL(event.target.files[0]) + ")";
};

function showot(event) {
  event.preventDefault();
  var name = document.getElementsByClassName("Name").value;

  alert("Name: " + name );

}

