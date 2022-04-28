const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//  MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// Con ciclo for prelevo tutti gli oggetti della stringa
for (let i = 0; i < team.length; i++) {
    const person = team[i];
    console.log(person);

    // Con ciclo for in scorro tutte le chiavi e i valori
    for (let key in person) {
        console.log(key);
        console.log(person[key]);
    }
}


