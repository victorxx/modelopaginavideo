let indexe = 0;
const limiteporvez = 1;
const resultado = document.getElementById('video');
const botao = document.getElementById('btn');
let contador = 0;
const videos = [
    
            "https://www.youtube.com/embed/ZjU6Q3401eY",
            "https://www.youtube.com/embed/mS9vpO1Mfyg",
            "https://www.youtube.com/embed/DGy8HD6HKUw",
            "https://www.youtube.com/embed/3QoTnE-QFK8",
            "https://www.youtube.com/embed/jpn32739b3E",
            "https://www.youtube.com/embed/BQAguD8hs8c",
            "https://www.youtube.com/embed/xqh6ICvI_JE",
            "https://www.youtube.com/embed/kxhDtgOvSws",
            "https://www.youtube.com/embed/5WJNqAI0ihE",
            "https://www.youtube.com/embed/nl_6UNxaT-Q",
            "https://www.youtube.com/embed/SMAhp_IoaO4",
            "https://www.youtube.com/embed/db_6I9J1rmc",
            "https://www.youtube.com/embed/SWaSFoiRlE0",
            "https://www.youtube.com/embed/9RBAsHq1Ryk",
            "https://www.youtube.com/embed/hdXWQ7G860c",
            "https://www.youtube.com/embed/qcsjFUNLRKs",
            "https://www.youtube.com/embed/kOBviJJMgkM",
            "https://www.youtube.com/embed/ZYGTjv7d2hw",
            "https://www.youtube.com/embed/UY8kYxAZBws",
            "https://www.youtube.com/embed/UtwydpgSapI",
            "https://www.youtube.com/embed/mqgFxXvF8wA",
            "https://www.youtube.com/embed/iNZmC0dxZSI",
            "https://www.youtube.com/embed/et25TOlA5bk",
            "https://www.youtube.com/embed/G9v0esO5apg",
            "https://www.youtube.com/embed/YllaTQhqcNM",
            "https://www.youtube.com/embed/hJQ-M3syd20",
            "https://www.youtube.com/embed/4W3RA2zh0MA",
            "https://www.youtube.com/embed/sXH012kai3c",
            "https://www.youtube.com/embed/9Ht_aA8Netc",
            "https://www.youtube.com/embed/33vWoj3HrBk",
            "https://www.youtube.com/embed/0xgcUSUdv84",
            "https://www.youtube.com/embed/N6i6HASJf0c",
            "https://www.youtube.com/embed/BthGSlLHKeg",
            "https://www.youtube.com/embed/MWqUzGg_lCI",
            "https://www.youtube.com/embed/dPePKdqX_2M",
            "https://www.youtube.com/embed/ZpEI954Mz8Y",
            "https://www.youtube.com/embed/k8PDZlAGgAI",
            "https://www.youtube.com/embed/8nMkB1F6dFQ",
            "https://www.youtube.com/embed/xU99VKU1k6g",
            "https://www.youtube.com/embed/TyB578C4wQw",
            "https://www.youtube.com/embed/WORsQo5N6Yw",
            "https://www.youtube.com/embed/V-8xaNAV_K0",
            "https://www.youtube.com/embed/8jvE6rHoSAc",
            "https://www.youtube.com/embed/wzBWOu9129M",
            "https://www.youtube.com/embed/JYLS7ywLJQc",
            "https://www.youtube.com/embed/p1CwPAKvOYo",
            "https://www.youtube.com/embed/RDcHQiPadqs",
            "https://www.youtube.com/embed/V0aFn4H4-lc",
            "https://www.youtube.com/embed/ozVeNCLAHEc",
            "https://www.youtube.com/embed/nSyfb2Z7tO4",
            "https://www.youtube.com/embed/I1XBF5IqhtE",
            "https://www.youtube.com/embed/fM9-Usb4RMQ",
            "https://www.youtube.com/embed/IAUPGtEPtPw",
            "https://www.youtube.com/embed/fIy9LYCEJ0o",
            "https://www.youtube.com/embed/AWMhBnzJrl0",
            "https://www.youtube.com/embed/tx_AAlQQQm0",
            "https://www.youtube.com/embed/RVD7IG2FhZ8",
            "https://www.youtube.com/embed/1m8d5JyGVII",
            "https://www.youtube.com/embed/eijxeMS43WU",
            "https://www.youtube.com/embed/ngQwkDZcPwY",
            "https://www.youtube.com/embed/5ZCBYIWj_U4",
            "https://www.youtube.com/embed/j-nu9-S32Qo",
            "https://www.youtube.com/embed/lEgARXx5s9U"

];

function criaIframe(src, width = 300, height = 300) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.width = width;
    iframe.height = height;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
}

botao.onclick = function () {
    let final = indexe + limiteporvez;
    for (; indexe < final && indexe < videos.length; indexe++) {
        contador++;
        let iframe = criaIframe(videos[indexe]);
        resultado.appendChild(iframe);

        if (contador === 2) {
            const div = document.createElement('div');
            div.innerHTML = `
                <iframe src="https://modeloanuncio01.pages.dev/" width="350" height="250" frameborder="0" allowfullscreen></iframe>
                <iframe src="https://encurtadorko.pages.dev/" width="350" height="500" frameborder="0" allowfullscreen></iframe>
                <a href="http://www.espiritosanto-es.com.br/cloudflare" 
                    style="display: inline-block; background-color: red; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
                    CONFERIR
                    </a>

            `;
            resultado.appendChild(div);
            contador = 0;
        }
    }

    if (indexe >= videos.length) {
        botao.disabled = true;
        botao.textContent = 'Chegamos no limite já';
    }
}
