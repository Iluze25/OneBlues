$("#hhg").on("click", function() {
    // Saya belum mencoba code ini
    $("#edan").attr("src", "Figure/20180423WantotVsRouf.mp4")
    document.getElementById('edan').play()
    $('p').text('Hello World').hide().fadeIn(4000);
    setTimeout(function(){
        $("#edan").attr("src", "Figure/VID-20230315-WA0016.mp4")
        document.getElementById('edan').play()
    }, 30000)
})

$("#hhg").on("click", function(){
     
})

// setTimout untuk memberikan delay
// attr untuk ganti src, namun kekurangannya src asal jadi tergantikan