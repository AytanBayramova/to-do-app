// todolarin secilmesi
const yeniVezife = document.querySelector('.input-vezife')
const yeniVezifeElaveBtn = document.querySelector('.btn-vezife-elaveet')

// todolarin oldugu siyahini secmek

const vezifeSiyahisi = document.querySelector('.vezife-siyahisi')


// addEventListener
yeniVezifeElaveBtn.addEventListener('click', vezifeElaveEt)
vezifeSiyahisi.addEventListener('click', vezifeTamamlaSil)


// event

function vezifeTamamlaSil(e) {
    const kliklenenElement = e.target;
   
    //contains 
    if(kliklenenElement.classList.contains('vezife-btn-tamamlandi')) {
        // eger 
        kliklenenElement.parentElement.classList.toggle('vezife-tamamlandi')
    }

    if(kliklenenElement.classList.contains('vezife-btn-sil')) {
        kliklenenElement.parentElement.classList.toggle('reddol')
    }

}
function vezifeElaveEt(e) {
    e.preventDefault()

    // div yaradacam 

    // <div class="vezife-item vezife-tamamlandi">
    //         <li class="vezife-tanitim">Idmana get</li>
    //         <button class="vezife-btn vezife-btn-tamamlandi" ><i class="fa fa-check" aria-hidden="true"></i></button>
    //         <button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>
    //     </div>

    const vezifeDiv = document.createElement('div');
    vezifeDiv.classList.add('vezife-item')
    // li yaradiriq

    const vezifeLi = document.createElement('li')
    vezifeLi.classList.add('vezife-tanitim')
    vezifeLi.innerText = yeniVezife.value 
    // appendChild(vezifeLi)
    vezifeDiv.appendChild(vezifeLi)

    // tamamlandi buttonu js DOM ile yaradacagiq
    //<button class="vezife-btn vezife-btn-tamamlandi" ><i class="fa fa-check" aria-hidden="true"></i></button>
    const vezifeTamamlandiBtn = document.createElement('button')
    vezifeTamamlandiBtn.classList.add('vezife-btn')
    vezifeTamamlandiBtn.classList.add('vezife-btn-tamamlandi')

    // innerHTML vs Innertext
    vezifeTamamlandiBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    vezifeDiv.appendChild(vezifeTamamlandiBtn)

    // silindi button js DOm ile yarat
    //<button class="vezife-btn vezife-btn-sil"><i class="fa fa-trash" aria-hidden="true"></i></button>
    const vezifeSilBtn = document.createElement('button')
    vezifeSilBtn.classList.add('vezife-btn')
    vezifeSilBtn.classList.add('vezife-btn-sil')
    vezifeSilBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

    vezifeDiv.appendChild(vezifeSilBtn)

    yeniVezife.value = '';

    vezifeSiyahisi.appendChild(vezifeDiv)

}
