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

markup            <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src="..." class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Name</h5>
                                        <p class="card-text">Role</p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>

*/

// creare un array di oggetti del team con seguenti informazioni: nome, ruolo e foto

// Creare l’array di oggetti con le informazioni fornite

const team = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'https://github.com/MatteoNocera/js-our-team/blob/74d2bf72937fc5617a608e2662f2de4d041e1021/assets/img/barbara-ramos-graphic-designer.jpg'
    }

]

// console.log(team);

// Stampare su console nome, ruolo e la stringa della foto tramite ciclo

for (let i = 0; i < team.length; i++) {
    const figure = team[i];
    
    console.log(figure.name);
    console.log(figure['role']);
    console.log(figure.image);
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Trasformare la stringa foto in una immagine effettiva

// Organizzare i singoli membri in card/schede
