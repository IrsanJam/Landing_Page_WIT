let send = document.getElementById("kirim");
send.onclick = cek;

function showMassage() {
  alert("Terimakasih, untuk permintaanya akan kami proses");
}

let check1 = document.getElementById("inp1");
let check2 = document.getElementById("inp2");
let check3 = document.getElementById("inp3");
let check4 = document.getElementById("inp4");
function cek() {
  if ((check1 = "")) {
  } else if ((check2 = "")) {
    showMassage;
  } else if ((check3 = "")) {
    showMassage;
  } else if ((check4 = "")) {
  } else {
    showMassage;
  }
}
