
const url=`http://www.omdbapi.com/?s=don&apikey=9d39f6d9`

let moviesDAta = async () =>{

    let q = document.getElementById('query').value; 

    try{

        let res = await fetch(`http://www.omdbapi.com/?s=${q}&apikey=9d39f6d9`);
        let data = await res.json();
        console.log(data.Search)
        appendMovies(data.Search)
    }
    catch(err){
        console.log('err :', err)
    }
}

let movies_div =  document.getElementById('movies');

function appendMovies(data){
    // console.log(data);
    document.getElementById('movies').innerHTML = null;
  

    data.forEach(elem => {
      
        let box = document.createElement("div");
        box.setAttribute("id","box");

        let img = document.createElement("img");
        img.setAttribute("id","poster")
        img.src= elem.Poster

        let title = document.createElement("h3");
        title.setAttribute("class","titleh3")
        title.innerText = `Name : ${elem.Title}`

        let rele = document.createElement("p");
        rele.setAttribute("class","titleh3")
        rele.innerText= `Release Year : ${elem.Year}`;
        
        box.append(img, title, rele);

        movies_div.append(box);
        
    });
}
