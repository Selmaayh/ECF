
// JS SECTION DIAPO


// declarartion de la functioon avec parametre name 
function changeStory(name) {
    
    // variable contenant lobjet stories
    let stories = {

        
        'Luna': {
            img: 'Images/photo-1601758228041-f3b2795255f1.webp',

        },


        'Oscar': {
            img: 'Images/photo-1526336024174-e58f5cdd8e13.webp',

        },
        'Max': {
            img: 'Images/photo-1583511655857-d19b40a7a54e.webp',
        }
    };

// getElementById pour la recuperation de l'element par son id 
    const mainStory = document.getElementById('mainStory');

    // on stock lelement dans la varbiable mainstory

// queryselector pour la selection de limage 
    mainStory.querySelector('img').src = stories[name].img;


// queryselector pour selectionner tout les vignettes dans la class .thumbnail
// foreach pour parcourir chaque une des vignette 
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));

// 
    document.querySelector(`.thumbnail[onclick="changeStory('${name}')"]`).classList.add('active');
}



// JS SECTION QUIZZ

       // selection toutes les boîtes de quiz

const quizBoxes = document.querySelectorAll('.quizBox');// selectionne tous les elements avec la classe 'quizBox'

quizBoxes.forEach(quizBox => {// parcourt les option de reponses

    const options = quizBox.querySelectorAll('.option'); // selectionne toutes les options de réponse dans la boite de quiz

     const correctAnswer = quizBox.getAttribute('data-correct'); //recupere la bonne reponse a laide de id data-correct

    options.forEach(option => {
         option.addEventListener('click', () => { //ajout d'un clique a chaque option


            // verifie si la réponse est bonne 
            if (option.textContent.toLowerCase().includes(correctAnswer)) {
                option.style.backgroundColor = 'green'; //  réponse vrai en vert
                option.style.color = 'white';  //met le text en blac 
            } else {
                option.style.backgroundColor = 'red'; // mets en rouge la reponse faux 
                option.style.color = 'white';  // mets le texte en blanc 

                // affiche la bonne réponse
                options.forEach(opt => {
                    if (opt.textContent.toLowerCase().includes(correctAnswer)) {// parcourt toutes les options pour trouver la bonne réponse
                         opt.style.backgroundColor = 'green';  //mets en vert la bonne reponse 
                        opt.style.color = 'white';  //met en blanc le texte 
                    }
                });
            }
        });
    });
});
