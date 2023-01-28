let tiles = document.querySelectorAll('.tile');
let currentColor = 'red';
let aray = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ]
let gameRunning = true;
let restart =  document.querySelector('.res').addEventListener('click', () => {
    let modal = document.querySelector('.popUp').style.display = 'none';
     currentColor = 'red';
     aray = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ]
     gameRunning = true;
     tiles.forEach((tile) => {
        tile.style.backgroundColor = '#5c2dd5';
        tile.style.border = "2px solid #030300";
        tile.style.borderTop = "15px solid #030300";
     })
});
let winCon = [
    //Vertikalno cekiranje
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2,3,4,5],
    [3,4,5,6],
    [4,5,6,7],
    [5,6,7,8],
    [6,7,8,9],
    [7,8,9,10],
    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    [11,12,13,14],
    [12,13,14,15],
    [13,14,15,16],
    [14,15,16,17],
    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    [18,19,20,21],
    [19,20,21,22],
    [20,21,22,23],
    [21,22,23,24],
    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    [25,26,27,28],
    [26,27,28,29],
    [27,28,29,30],
    [28,29,30,31],
    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    [32,33,34,35],
    [33,34,35,36],
    [34,35,36,37],
    [35,36,37,38],
    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    //horizontalno cekiranje
    [0,7,14,21],
    [7,14,21,28],
    [14,21,28,35],
    [1,8,15,22],
    [8,15,22,29],
    [15,22,29,36],
    [2,9,16,23],
    [9,16,23,30],
    [16,23,30,37],
    [3,10,17,24],
    [10,17,24,31],
    [17,24,31,38],
    [4,11,18,25],
    [11,18,25,32],
    [18,25,32,39],
    [5,12,19,26],
    [12,19,26,33],
    [19,26,33,40],
    [6,13,20,27],
    [13,20,27,34],
    [20,27,34,41]
];


const checkWinner = () => {
    for(let i = 0; i < winCon.length; i++){
        let secIndex = winCon[i];
        
        let cellA = aray[secIndex[0]];
        let cellB = aray[secIndex[1]];
        let cellC = aray[secIndex[2]];
        let cellD = aray[secIndex[3]];

        if(cellA === 'Red' && cellB === 'Red' && cellC === 'Red' && cellD === 'Red' || cellA === 'Yellow' && cellB === 'Yellow' && cellC === 'Yellow' && cellD === 'Yellow'){
            let modal = document.querySelector('.popUp').style.display = 'block';
            let modalText = document.querySelector('.popUpDialog');
                modalText.innerText = `${cellA = aray[secIndex[0]]} is winner`;
                modalText.style.color = `${cellA = aray[secIndex[0]]}`
            gameRunning = false
            return;
        }
    }       
}

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        let position = tile.getAttribute('position');
            if(aray[position] === '' && gameRunning == true){
                if(currentColor === 'red'){
                    tile.style.backgroundColor = '#fe6c8b';
                    tile.style.border = "2px solid #863b51";
                    tile.style.borderTop = "15px solid #863b51";
                    currentColor = 'yellow';
                    aray[position] = 'Red';
                    checkWinner();
                   
                }else if(currentColor === 'yellow'){
                    tile.style.backgroundColor = '#fdce6e';
                    tile.style.border = "2px solid #a28a4c";
                    tile.style.borderTop = "15px solid #a28a4c";
                    currentColor = 'red';
                    aray[position] = 'Yellow';
                    checkWinner();
                } 
            }else{
                return;
            }
              
    })
})
