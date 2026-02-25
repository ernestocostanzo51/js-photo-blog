


const rowEl = document.querySelector(".row")



        fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(res => res.json())
.then(data =>{
    console.log(data)
    data.forEach(photo => {
        const {title, date, url} = photo

    const markup = `<div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                   <div class="card p-3 mt-4" style="width: 18rem;">
                   <img src=${url} class="card-img">
                   <img src="./img/pin.svg" class="pin">
                   <div class="card-body">
                   <p class="card-text">${date}</p>
                   <p class="card-text">${title}</p>
                </div>
                </div>
                </div>`;
rowEl.insertAdjacentHTML('beforeend', markup)
    }); 
})



