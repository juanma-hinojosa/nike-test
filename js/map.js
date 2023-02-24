let http = new XMLHttpRequest();

http.open("get", "grid.json", true);

http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);

        let output = "";

        for (let item of products) {
            output += `
                <div class="card-grid">
                        <div class="image-grid">
                            <img src="${item.image}" alt="" srcset="">
                        </div>
    
                        <div class="title-grid">
                            <h3>${item.titulo} <span class="name">${item.name}</span></h3>
                        </div>
    
                        <div class="parra-grid">
                            <p>${item.texto}</p>
                        </div>
                </div>
            `;
        }

        document.querySelector(".grid-content").innerHTML = output;
    }
}