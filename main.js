


const rowEl = document.querySelector(".row")
const cardImgEl = document.querySelector(".card-img")



fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(res => res.json())
.then(data =>{
    console.log(data)
    data.forEach(scheda => {
        const {title, date, url} = scheda

    const markup = `<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                   <div class="card p-3 mt-4" style="width: 18rem;">
                   <a href="#img-full" class="open-link">
                   <img src=${url} class="card-img">
                   </a>
                   <img src="./img/pin.svg" class="pin">
                   <div class="card-body">
                   <p class="card-text data">${date}</p>
                   <p class="card-text titolo">${title}</p>
                   
                </div>
                </div>
                </div>`;

rowEl.insertAdjacentHTML('beforeend', markup)
    }); 
})



