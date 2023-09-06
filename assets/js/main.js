/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!

Dati:
Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg
Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg
Walter Gordon
Office Manager
walter-gordon-office-manager.jpg
Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg
Scott Estrada	
Developer	
scott-estrada-developer.jpg
Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg

Tools :
- array
- object
- concole.log
- const/let
- for
- querySelector
- insertAdiacentHTML

*/

// Seleziono il punto della DOM
const rowElement = document.querySelector('.team .row')

// Creo una funzione per stampare in pagina le cards
function stampMarkups(img, name, role) {

    // Organizzare i singoli membri in card/schede
    // Trasformare la stringa foto in una immagine effettiva
    const markupCards = `
        <div class="col">
            <div class="card h-100">

            <div class="card text-bg-dark">
                <img src="./assets/img/${img}" class="card-img" alt="profile foto">
                <div class="card-img-overlay position-absolute top-50 start-0 bg-secondary bg-opacity-50">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                    <p class="card-text"><small>Team MyBusiness</small></p>
                </div>
            </div>`

    rowElement.insertAdjacentHTML('beforeend', markupCards);
}


    
    
    

const newFigureElement = document.querySelector('form');

// creare un array di oggetti del team con seguenti informazioni: nome, ruolo e foto
// Creare l’array di oggetti con le informazioni fornite

const team = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }

]

// console.log(team);

// Stampare su console nome, ruolo e la stringa della foto tramite ciclo

for (let i = 0; i < team.length; i++) {
    const figure = team[i];
    
    //console.log(figure.name);
    //console.log(figure['role']);
    //console.log(figure.image);

    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    
    stampMarkups(figure.image, figure.name, figure.role)
    
    // console.log(markupCards);
}


// Creo una funzione collegata al submit per inserire e stampare un nuovo membro
newFigureElement.addEventListener('submit', function (ev) {

    ev.preventDefault();
    
    let userName = document.getElementById("your_name").value;
    let userRole = document.getElementById("role").value;
    let userImg = document.getElementById("insert_file").files[0].name;

    //console.log(userName);
    //console.log(userRole);
    //console.log(userImg);

    const newFigure = {
        name : userName,
        role : userRole,
        image : userImg
    }

    team.push(newFigure);

    console.log(team);
    stampMarkups(userImg, userName, userRole);
})

