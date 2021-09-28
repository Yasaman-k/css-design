let cx = document.querySelector("canvas").getContext("2d")
cx.beginPath();
cx.fillStyle="red";
cx.moveTo(0, 0);


// control=(60,10) goal=(90,90)
cx.quadraticCurveTo(60, 160, 120, 0);
// cx.lineTo(0, 10);
cx.closePath();
cx.strokeStyle="red"
cx.stroke();
cx.fill()

