const showCards = document.getElementById("showCards")
const hovers = document.getElementById("hovers");
const dots = document.getElementById("dots");
const dotsClass = document.getElementsByClassName("dot");
const spectacls = document.getElementById("spectalc")
const modal = document.getElementById("modal")
const info = document.getElementById("info")

const images = ["images/group_foto.jpg",
    "images/group1.jpeg",
    "images/IMG_4925.jpg",
    " images/IMG_4976.jpg",
    "images/5204418048629535091.jpg",
];

const presentations = [
    {
        title: "Երեք Տիկնիկների Գաղտնիքը",
        image: "images/ereq tiknikner.jpg",
        director: "ԱՐՄԵՆ ԱՐՇԱԼՈւՅՍՅԱՆ",
        cast: "Դավիթ Մարդոյան, Նարեկ Հարությունյան, Արմեն Արշալույսյան, Անահիտ Ղազարյան,Փառանձեմ Սահակյան,Սուսաննա Կարապետյան",
        dress_designer: "ԶԱՆԱՆ ՆՈՐԱՁԵՎՈւԹՅԱՆ ՏԱՆ",
        set_designer: "Կարինե ,,,ի եվ Ֆլորա նախշքարյանի",
        play_wright: "",
        description: "Երեք տիկնիկների գաղտնիքը» պիեսը գրվել է Սուրեն Քոչարյանի համանուն հեքիաթի մոտիվներով: Պիեսի հեղինակն ու բեմադրող ռեժիսորը Գյումրու երիտասարդական թատերախմբի հիմնադիր և ռեժիսոր Արմեն Արշալույսյանն է: Վերջինս Aravot.am-ի հետ զրույցում նշեց, որ հեքիաթը հիմք է հանդիսացել ուսուցողական պատմություն ներկայացնելու համար: Մեծերի ու փոքրերի համար այս ներկայացումն արդեն շուրջ 700 հանդիսատես է ունեցել:",
        schedule: "Ամեն ուրբաթ, ժ. 19:00"
    },
    {
        title: "Վայրի Երեխան",
        image: "images/Vayri erexa 25-03.png",
        director: "Նարեկ Հարությունյան",
        cast: "Նարեկ Հարությունյան, ԱՆԱՀԻՏ ՂԱԶԱՐՅԱՆ, ԱՐՄԵՆ ԱՐՇԱԼՈւՅՍՅԱՆ",
        dress_designer: "ՖԼՈՐԱ ՆԱԽՇՔԱՐՅԱՆ",
        set_designer: "ՖԼՈՐԱ ՆԱԽՇՔԱՐՅԱՆ",
        play_wright: "ՍԵԼԻՆ ԴԵԼԲԵՔ",
        description: "Ստեղծագործության հերոսուհին լքված, փողոցում հայտնված մի փոքրիկ աղջիկ է, որը ոչ մեկի հետ չի շփվում, խոսելու փոխարեն վայրի ձայներ է արձակում։ Պատկան մարմիններն էլ առանձնապես նրանով չեն հետաքրքրվում, և եթե չլիներ անցորդներից մեկի մտահոգ վերաբերմունքը, իր տանը նրան հյուրընկալելու, խնամելու պատրաստակամությունը,  նրան գուցե և սպառնար մահը։",
        schedule: "Ամեն ուրբաթ, ժ. 19:00"
    },
    {
        title: "Ռիչարդ",
        image: "images/richard.jpg",
        director: "ԱՆԱՀԻՏ ՂԱԶԱՐՅԱՆԻ",
        cast: "ԱՐՄԵՆ ԱՐՇԱԼՈւՅՍՅԱՆ",
        dress_designer: "ԶԱՆԱՆ ՆՈՐԱՁԵՎՈւԹՅԱՆ ՏԱՆ",
        set_designer: "ՖԼՈՐԱ ՆԱԽՇՔԱՐՅԱՆ",
        play_wright: "ԱՐՄԵՆ ԱՐՇԱԼՈւՅՍՅԱՆ",
        description: `Գործողությունները կատարվում են Շեքսպիրի «Ռոմեո և Ջուլիետ» պիեսի հորինված իրականությունում: Հերոսը Ռիչարդը, թունագործ է, ով վրեժով է լցված աշխարհի հանդեպ և ուզում է կատարյալ թույն ստեղծել՝ վրեժխնդիր լինելու համար: 
                      Ո՞րն է ավելի հզոր՝ վրեժի ծարավը, թե՞ սիրո աստվածային ուժը: `,
        schedule: "Ամեն ուրբաթ, ժ. 19:00"
    },
    {
        title: "Ցավը",
        image: "images/parush.jpg",
        director: "ԱՐՄԵՆ ԱՐՇԱԼՈւՅՍՅԱՆ",
        cast: "Փառանձեմ Սահակյան",
        dress_designer: "Նարեկ Հարությունյան",
        set_designer: "Նարեկ Հարությունյան",
        play_wright: "Նարեկ Հարությունյան",
        description: "Երեք տիկնիկների զավեշտալի ու խորհրդանշական պատմությունը․․․",
        schedule: "Ամեն ուրբաթ, ժ. 19:00"
    },

];

showCards.innerHTML = presentations.map((el, i) => `<button class="show-card" onclick="openModal(${i})">
        <img src="${el.image}" alt="Ներկայացում 1">
        <span>${el.title}</span>
      </button>`).join("")



hovers.innerHTML = images
    .map((_, i) => {
        return `<div id="div${i}"></div>`;
    })
    .join("");

dots.innerHTML = images
    .map((_, i) => {
        return `<div>
    <i class="dot" id="dot${i}"></i>
    </div>`;
    })
    .join("");

for (let i = 0; i < images.length; i++) {
    document.getElementById(`div${i}`).addEventListener("mouseover", () => {
        for (let i = 0; i < images.length; i++) {
            document.getElementById(`img${i + 1}`).style.zIndex = 0
        }
        [...dotsClass].forEach((el) => (el.style.backgroundColor = "black"));
        document.getElementById(`dot${i}`).style.backgroundColor = "white";
        for (let i = 0; i < images.length; i++) {

        }
        const image = document.getElementById(`img${i + 1}`);
        image.style.zIndex = 1;
    });
}

console.log(dotsClass);
console.log([...dotsClass]);

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.info-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoBlock = button.nextElementSibling;
            infoBlock.classList.toggle('visible');
        });
    });
});

const openModal = (i) => {
    console.log(presentations[i]);
    const spec = presentations[i]
    info.innerHTML = `
        <button class="close" onclick="closeModal()"><img width="30px" src="images/close.png" alt="x"></button>
      <img class="presImg" src="${spec.image}" alt="">
      <div class="infoText">
        <h3>${spec.title}</h3>
        <p>${spec.description}</p>
              <p> <strong>Ռեժիսոր: </strong>${spec.director}</p>
                <p><strong>դերասաններ։ </strong>${spec.cast}</p>
        <p><strong>Հագուստի դիզայներ: </strong>${spec.dress_designer}</p>


        <p> <strong>Բեմադրության նկարիչ: </strong>${spec.set_designer}</p>
        <p> <strong>Պիեսի հեղինակ: </strong>${spec.play_wright}</p>
        <a href="tel:098296296">Call Us</a>
      </div>`
    modal.classList.toggle("active");
}

const closeModal = () => {
    modal.classList.toggle("active")
}

  function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
  }

  function toggleDetails() {
    const modal = document.getElementById('aboutModal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
  }

  // Բաց տարածք սեղմելիս մոդալը փակելու համար
  window.onclick = function(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

