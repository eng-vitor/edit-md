const { remote, app } = require('electron');
const win = remote.getCurrentWindow();

var x = document.querySelector('#closeinit');
x.addEventListener('click', function () {
    win.close();
},false);

var a = document.querySelector('#newmd');
a.addEventListener('click', function () {
      win.close();
},false);

const appImages = document.querySelectorAll('img');
appImages.forEach(image => {
  image.ondragstart = () => false;
});

var evtbclose = document.querySelector('#closeinit');
evtbclose.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#closeinit").src = "../src/assets/init/closeinitfocus.png";
},false);
evtbclose.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#closeinit").src = "../src/assets/init/closeinit.png";
},false);

var evtbabout = document.querySelector('#aboutinit');
evtbabout.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#aboutinit").src = "../src/assets/init/aboutinitfocus.png";
},false);
evtbabout.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#aboutinit").src = "../src/assets/init/aboutinit.png";
},false);

var evtbnewmd = document.querySelector('#newmd');
evtbnewmd.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#newmd").src = "../src/assets/init/newfilefocus.png";
},false);
evtbnewmd.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#newmd").src = "../src/assets/init/newfile.png";
},false);

var evtbopenmd = document.querySelector('#openmd');
evtbopenmd.addEventListener('mouseover', function (event) {
    event.preventDefault();
   document.querySelector("#openmd").src = "../src/assets/init/openfilefocus.png";
},false);
evtbopenmd.addEventListener('mouseout', function (event) {
    event.preventDefault();
   document.querySelector("#openmd").src = "../src/assets/init/openfile.png";
},false);
