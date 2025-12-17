// cats for adoption
const cats =[
    {
        id: 1,
        name: "Kevin",
        gender: "Male",
        pic: "img/Cats/Cat-Kevin.jpg",
        age: "7 months",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    { 
        id: 2,
        name: "Kiara",
        gender: "Female",
        pic: "img/Cats/Cat-Kiara.jpg",
        age: "4 months",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"        
    },
    { 
        id: 3,
        name: "Michael",
        gender: "Male",
        pic: "img/Cats/Cat-Michael.jpg",
        age: "3",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    { 
        id: 4,
        name: "Roger",
        gender: "Male",
        pic: "img/Cats/Cat-Roger.jpg",
        age: "2",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quam cupiditate fuga assumenda dolorem natus quos libero eveniet asperiores est"
    },
    {
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
    status.style.border = "2px solid black";
}

// placing cats on adopt.html list
cats.forEach(cat => {
    const ul = document.querySelector('ul');
    const listofcat = document.createElement("li");
    const imgofcat = document.createElement("img");
    const h2name = document.createElement("h2");
    imgofcat.src = cat.pic;
    imgofcat.classList.add("catListImg");
    h2name.innerText = cat.name;
    listofcat.id = cat.id;
    listofcat.classList.add("clickableList");
    ul.appendChild(listofcat);
    listofcat.appendChild(imgofcat);
    listofcat.appendChild(h2name);
});

// Modal for cats Bio

const modalBioCatt = document.getElementsByClassName("modalBioCat")[0];


function createModalBiocat(cat, a){

    //creating elements
    const img = document.createElement("img");
    const pName = document.createElement("p");
    const pAge = document.createElement("p");
    const pGender = document.createElement("p");
    const pBio = document.createElement("p");

    //setting the elements with the cat's info
    img.src = cat[a].pic;
    img.classList.add("imgCatModal");
    pName.innerText = cat[a].name;
    pAge.innerText = cat[a].age+" years old";
    pGender.innerText = cat[a].gender;
    pBio.innerText = cat[a].bio;

    //getting the the id's from the table
    const tblimg = document.getElementById("tblImg");
    const tblName = document.getElementById("tblName");
    const tblAge = document.getElementById("tblAge");
    const tblGender = document.getElementById("tblGender");
    const tblBio = document.getElementById("tblBio");

    //adding the cat's info in the table
    tblimg.appendChild(img);
    tblName.appendChild(pName);
    tblAge.appendChild(pAge);
    tblGender.appendChild(pGender);
    tblBio.appendChild(pBio);


}

//opening modal
const clickableList = document.getElementsByClassName("clickableList");

for (let i = 0 ; i < clickableList.length; i++) {
   clickableList[i].addEventListener("click", () => createModalBiocat(cats, i)); 
   clickableList[i].onclick = function() {
        modalBioCatt.style.display = "block";
}
}


function deletingCatBio(){
  
    //getting the the id's from the table
    const tblimg = document.getElementById("tblImg");
    const tblName = document.getElementById("tblName");
    const tblAge = document.getElementById("tblAge");
    const tblGender = document.getElementById("tblGender");
    const tblBio = document.getElementById("tblBio");

    //deleting the previous cat's info 
    tblimg.removeChild(tblimg.firstElementChild);
    tblName.removeChild(tblName.firstElementChild);
    tblAge.removeChild(tblAge.firstElementChild);
    tblGender.removeChild(tblGender.firstElementChild);
    tblBio.removeChild(tblBio.firstElementChild);
}

//closing button for modal
const spanClose = document.getElementsByClassName("close")[0];

spanClose.onclick = function() {
  modalBioCatt.style.display = "none";
  deletingCatBio();
}
