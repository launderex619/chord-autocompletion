function launchToast(text) {
  //fires a toast with a message from the UI
  var toast = document.getElementById("toast");
  //Change the text
  toast.innerHTML = text;
  //Set toast visible
  toast.className = "show";
  //Hide it back afer 5 seconds
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

downloadImageSong = function(el) {
  var canvas = document.getElementById("myCanvas");
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

function showDownloadSong(){
  var downloadSong = document.getElementById("downloadSong");
  downloadSong.classList.remove("d-none");
  downloadSong.classList.add("d-block");
}