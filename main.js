const url = 'https://baza-filmova.herokuapp.com/filmovi/';

let godina;
let naziv;
let slika;
let id;

fetch(url)
    .then( response => response.json() )
    .then( function(response) {
        console.log(response);

        let prostorUpisaFilma = document.getElementById('filmska_baza');
        let sablonUpisaFilma = ``;

        for (let i = 0; i < response.length; i++) {         

            godina = response[i].godina;
            naziv = response[i].naziv;
            slika = response[i].slika;
            id = response[i].id;

            sablonUpisaFilma += `
                <div class="movie">
                    <img src=${slika} alt="Movie poster" width="100px" height="150px" class="movie-img">
                    <div class="movie-body">
                        <h3>${naziv}</h3>
                        <p>${godina}</p>
                        <p>${id}</p>
                    </div>
                </div>
            `;

            console.log(sablonUpisaFilma);
        }
        prostorUpisaFilma.innerHTML = sablonUpisaFilma;
    } )