import peliculas from './peliculas.js'

const pelisAccion = document.getElementById('genero-28');

const pelisThriller = document.getElementById('genero-53');

const pelisAventura = document.getElementById('genero-12');


const accion = peliculas.filter((pelicula)=>pelicula.genre_ids.includes(28));

const thriller = peliculas.filter((pelicula)=>pelicula.genre_ids.includes(53));
  
const aventura = peliculas.filter((pelicula)=>pelicula.genre_ids.includes(12));



//peliculas.forEach(pelicula=>{console.log(`titulo:${pelicula.title}, genero:${pelicula.genre_ids}`);});


/*accion.forEach(pelicula=>{
    const li = document.createElement('li');
    li.innerText=pelicula.title;
    pelisAccion.appendChild(li);
});*/

accion.forEach(peliculas=> pelisAccion.innerHTML += `
    <div class='pelicula'>
    <img src=https://image.tmdb.org/t/p/w200${peliculas.poster_path}/>
    <h2>${peliculas.title}</h2>
    </div>
`
)

thriller.forEach(peliculas=> pelisThriller.innerHTML += `
    <div class='pelicula'>
    <img src=https://image.tmdb.org/t/p/w200${peliculas.poster_path}/>
    <h2>${peliculas.title}</h2>
    </div>
`
)

aventura.forEach(peliculas=> pelisAventura.innerHTML += `
    <div class='pelicula'>
    <img src=https://image.tmdb.org/t/p/w200${peliculas.poster_path}/>
    <h2>${peliculas.title}</h2>
    </div>
`
)
