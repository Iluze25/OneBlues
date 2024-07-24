function clickMe() {
    document.getElementById('hello').style.display = "none"
    document.getElementById('moza').play()
    const intro = "Intro dulu yee";
    const introID = document.getElementById('h1');


    function showTextIntro() {
        for (let i = 0; i < intro.length; i++) {
            setTimeout(() => {
                introID.textContent += intro[i];

            }, 100 * i);
        }
    }

    const text2 = "ini adalah One Blues saat masih umur 12 tahun"
    const paragraph = document.getElementById('pad')

    function showText2(){
        for (let b = 0; b < text2.length; b++) {
            setTimeout(() => {
                paragraph.textContent += text2[b];
            }, 100 * b)
        }
    }


    showTextIntro()
    setTimeout(showText2, 1600);
    setTimeout(function(){
        
        document.getElementById('#video').play()
        
        
    }, 4270 + 1600)

    setTimeout(function(){
        
        $('video').css('display', "none")
    }, 4270 + 1600 + 24000)

    const text3 = "Anda adalah seorang blader yang keren, slalu memberikan kebahgiaan dimanapun anda berada. Lalu tidak pernah mencoba bermain slot"
    const paragraph3 = document.getElementById('pad')

    function showtext3(){
        paragraph3.textContent = ""
        introID.textContent = ""


        for (let b = 0; b < text3.length; b++) {
            setTimeout(() => {
                paragraph3.textContent += text3[b];
            }, 100 * b)
        }
    }

    setTimeout(showtext3, 4270 + 1600 + 24000)

    const text4 = "1 2 3 . . . . . . . . . . "
    const paragraph4 = document.getElementById('h1')

    function showtext4(){
        paragraph3.textContent = ""
        introID.textContent = ""
        for (let b = 0; b < text4.length; b++) {
            setTimeout(() => {
                paragraph4.textContent += text4[b];
            }, 500 * b)
        }
    }

    setTimeout(showtext4, 4270 + 1600 + 24000 + 16000)


    const text5 = "Happy Birthday Riswan Nugraha"
    const paragraph5 = document.getElementById('h1')

    function showtext5(){
        paragraph3.textContent = ""
        introID.textContent = ""
        for (let b = 0; b < text5.length; b++) {
            setTimeout(() => {
                paragraph5.textContent += text5[b];
            }, 500 * b)
        }
    }

    setTimeout(showtext5, 4270 + 1600 + 24000 + 16000 + 13000)

    const text6 = "Selamat ulang tahun yang ke 19 One Blues alias Risawan Nugraha, semoga tujuanmu tercapai dengan cepat. Sehat slalu blader"
    const paragraph6 = document.getElementById('pad')

    function showtext6(){
        paragraph3.textContent = ""

        for (let b = 0; b < text6.length; b++) {
            setTimeout(() => {
                paragraph6.textContent += text6[b];
            }, 100 * b)
        }
    }

    setTimeout(showtext6, 4270 + 1600 + 24000 + 16000 + 13000 + 2900)

    const text7 = "Panjang umur, teruslah menjadi orang yang slalu membrikan manfaat bagi orang lain"
    const paragraph7 = document.getElementById('pad2')

    function showtext7(){
    
        for (let b = 0; b < text7.length; b++) {
            setTimeout(() => {
                paragraph7.textContent += text7[b];
            }, 50 * b)
        }
    }

    setTimeout(showtext7, 4270 + 1600 + 24000 + 16000 + 13000 + 2900 + 12000)

    setTimeout(function(){
        document.getElementById('akhir').style.display = "flex";
    },4270 + 1600 + 24000 + 16000 + 13000 + 2900 + 12000 + 8100)

    function alertGorila(){
        document.getElementById('sial').style.display = "block"
    }

}