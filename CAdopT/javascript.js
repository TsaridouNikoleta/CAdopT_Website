// cats for adoption
const cats =[
    cat1={
        id: 1,
        name: "Kevin",
        gender: "Male",
        pic: "img/Cats/Cat-Kevin.jpg",
        age: "7 months",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    cat2={ 
        id: 2,
        name: "Kiara",
        gender: "Female",
        pic: "img/Cats/Cat-Kiara.jpg",
        age: "4 months",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"        
    },
    cat3={ 
        id: 3,
        name: "Michael",
        gender: "Male",
        pic: "img/Cats/Cat-Michael.jpg",
        age: "3",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    cat4={ 
        id: 4,
        name: "Roger",
        gender: "Male",
        pic: "img/Cats/Cat-Roger.jpg",
        age: "2",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    cat5={
        id: 5,
        name: "Zara",
        gender: "Female",
        pic: "img/Cats/Cat-Zara.jpg",
        age: "1",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est" 
    }    
];
//cats availability status
const status = document.getElementById("catsAvailabilityStatus");

if (cats.length > 0){
    status.innerText = "CATS that are available:";
    status.style.fontSize = "50px";
    status.style.color = "#28ad85";
    status.style.border = "2px solid black"
}

// placing cats on adopt.html list
cats.forEach(cat => {
    const ul = document.querySelector('ul')
    const listofcat = document.createElement("li");
    const imgofcat = document.createElement("img");
    const h2name = document.createElement("h2");
    imgofcat.src = cat.pic;
    h2name.innerText = cat.name;
    ul.appendChild(listofcat);
    listofcat.appendChild(imgofcat);
    listofcat.appendChild(h2name)
});
