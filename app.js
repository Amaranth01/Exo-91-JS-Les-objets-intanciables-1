let perso1 = document.getElementById('perso1');

let Personne = function (nom, prenom, age, sexe, metier, hobbie) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        this.metier = metier;
        this.hobbie = hobbie;

        this.getPers = function () {
                return nom + ' ' + prenom + ' ' + "âgée de " + age + " ans de sexe " + sexe + " elle est " + metier + " et aime " + hobbie
        }

        this.setName = function (NewName, NewJob) {
                this.nom = NewName;
                this.metier = NewJob;
        }
}
let gertrude = new Personne ('Cacahuète','Gertrude' ,50, 'non-binaire', 'flemmarde', 'dormir');
let Michel = new Personne('Ducon', 'Michel', 65, 'homme', 'chasseur', 'boire');
document.getElementById('method1').innerHTML = "Cette dame se nomme " + gertrude.getPers() + '<br>';

gertrude.setName('Martin', 'Couturière');
document.getElementById('method2').innerHTML = "Le nouveau nom et métier de Gertrude sont " + gertrude.nom +' ' + gertrude.metier;

document.getElementById('name').innerHTML = gertrude.nom;
document.getElementById('prénom').innerHTML = gertrude.prenom;
document.getElementById('age').innerHTML = gertrude.age;
document.getElementById('sexe').innerHTML = gertrude.sexe;
document.getElementById('metier').innerHTML = gertrude.metier;
document.getElementById('hobbie').innerHTML = gertrude.hobbie;

document.getElementById('name1').innerHTML = Michel.nom
document.getElementById('firstname1').innerHTML = Michel.prenom;
document.getElementById('age1').innerHTML = Michel.age;
document.getElementById('sexe1').innerHTML = Michel.sexe;
document.getElementById('metier1').innerHTML = Michel.metier;
document.getElementById('hobbie1').innerHTML = Michel.hobbie;