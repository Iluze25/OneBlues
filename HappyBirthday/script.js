$("#hhg").on("click", function() {
    // Saya belum mencoba code ini
    $("#edan").attr("src", "/HappyBirthday/Figure/20180423WantotVsRouf.mp4")
    document.getElementById('edan').play()
    setTimeout(function(){
        $("#edan").attr("src", "Figure/VID-20230315-WA0016.mp4")
        document.getElementById('edan').play()
    }, 29000)
})

$("#hhg").on("click", function(){
     
})

// setTimout untuk memberikan delay
// attr untuk ganti src, namun kekurangannya src asal jadi tergantikan