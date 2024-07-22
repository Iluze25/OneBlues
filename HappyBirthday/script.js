$("#hhg").on("click", function () {
  // Saya belum mencoba code ini
  $("#edan").attr("src", "Figure/20180423WantotVsRouf.mp4");
  document.getElementById("edan").play();

  setTimeout(function () {
    $("#edan").attr("src", "Figure/VID-20230315-WA0016.mp4");
    document.getElementById("edan").play();
  }, 30000);
});

// setTimout untuk memberikan delay
// attr untuk ganti src, namun kekurangannya src asal jadi tergantikan
document.addEventListener("DOMContentLoaded", function () {
  const text = "Selamat Datang di Dunia Pemrograman!";
  const textElement = document.getElementById("typingText");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Setiap karakter muncul setiap 100ms
    }
  }

  typeText();
});
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
// Nyerah
