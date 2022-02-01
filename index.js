const db = [
    { 
        title: 'Haider',
        description: 'Indian crime tragedy film',
        img:'https://internship.suvenconsultants.com/projects/365webproject/365mov/nano1.jpg',
        category: 'Action'
    },
    { 
        title: 'Dream 2',
        description: 'Thriller, Mystery & Comedy',
        img:"https://internship.suvenconsultants.com/projects/365webproject/365mov/nano2.jpg",
        category: 'thriller'

    },
    { 
        title: 'Batman',
        description: 'A DC Comics superhero team.',
        img:"https://internship.suvenconsultants.com/projects/365webproject/365mov/nano3.jpg",
        category: 'Action'
    },
    { 
        title: 'Monster Manav',
        description: 'Japanese manga series written by Tsugumi.',
        img:"https://internship.suvenconsultants.com/projects/365webproject/365mov/nano4.jpg",
        category: 'Drama'
    },
    { 
        title: 'Interstellar',
        description: 'A Marvel Comics superhero team.',
        img:"https://internship.suvenconsultants.com/projects/365webproject/365mov/nano19.jpg",
        category: 'Sci-fi'
    },
    { 
        title: 'Star Wars',
        description: 'A Marvel Comics superhero team.',
        img:"https://internship.suvenconsultants.com/projects/365webproject/365mov/nano20.jpg",
        category: 'Sci-fi'
    },

]

let newdb;
function myfn(){
    let k = document.getElementById("main");
    k.classList.toggle("hide");
    let l = document.getElementById("main2");
    // l.style.display = "block";
    l.classList.toggle("show");
}

function displayMovies(db1 = db){
    let str = '';
    
    for (let i = 0; i < db1.length; i++){
        let oldstr = `<div class="card">
        <div class="chead">
            <img class="cimg" src="${db1[i].img}" alt="">
        </div>
        <div class="cbody">
            <h1>${db1[i].title}</h1>
        </div>
    </div>`;
        str+=oldstr;
    }
document.getElementById("demo").innerHTML=str;
}
displayMovies(db);

function filterobs(){
    let c = document.getElementById("category").value;
    if (c == 'All'){
        displayMovies();
    }
    else{
        newdb = db.filter(item => {
            return item.category == c;
        })
        displayMovies(newdb);
    }
}

function searchobs(){
    let s = document.getElementById("search").value;
    newdb = db.filter(item => {
        return item.title.toUpperCase().indexOf(s.toUpperCase()) > -1;
    })
    displayMovies(newdb);
}