
class Render {
    constructor(fightersContainerEl, fighters) {
        this.fightersContainerEl = fightersContainerEl;
        this.fighters = fighters;
    }

    display = ()=> {        
        // this.fightersContainer.remove();
        removeAllChildNodes(this.fightersContainer);
        this.fighters.forEach(f => {
            const fighterDiv = document.createElement('div');
            const fighterImg = document.createElement('img');
            const fighterName = document.createElement('h4');
            const fighterRecord = document.createElement('h2');
            fighterName.innerText =f.name ;
            fighterRecord.innerText =f.record ;
            fighterImg.src =f.img ;

            fighterDiv.appendChild(fighterImg);
            fighterDiv.appendChild(fighterName);
            fighterDiv.appendChild(fighterRecord);

            this.fightersContainerEl.appendChild(fighterDiv);
        })
    }
}

const fighters =
 [
    {
        name: 'Khabib Nurmagomedov',
        img: './images/kabib.jpg',
        record:30
    },
    {
        name: 'Amanda Nunes',
        img: './images/amandaNunes.jpg',
        record:21
    },
    {
        name: 'Jon Jones',
        img: './images/jons.jpg',
        record:26
    },
    {
        name: 'Conor McGregor',
        img: './images/mcgregor.jpg',
        record:22
    },
    {
        name: 'Ronda Rousey',
        img: './images/RouseyRonda.jpg',
        record:12
    },
]

const fightersContainer = document.getElementById('fightersContainer');


const render = new Render(fightersContainer, fighters)

render.display();

// console.log(render);