
const maxWidthCanvas = (window.screen.width * 100)/100;
const maxHeightCanvas = (window.screen.height * 70)/100;

function addPlayer(){
    const totalOfCanvas = document.getElementsByTagName("canvas").length;
    const totalPlayer = totalOfCanvas + 1;
    var widthByCanvas = maxWidthCanvas/totalPlayer;
    
    document.getElementById("PeopleInRoom").innerHTML = "Nbr Of PLayer : " + totalPlayer;


    createCanvas(widthByCanvas, maxHeightCanvas, totalPlayer);
}

function removePlayer(){
    const totalOfCanvas = document.getElementsByTagName("canvas").length;
    const totalPlayer = totalOfCanvas - 1;
    var widthByCanvas = maxWidthCanvas/totalPlayer;
    
    document.getElementById("PeopleInRoom").innerHTML = "Nbr Of PLayer : " + totalPlayer;


    createCanvas(widthByCanvas, maxHeightCanvas, totalPlayer);
}

function createCanvas(width, height, totalPlayer)
{
    var row = document.getElementsByClassName("row")[0];

    //Clear all canvas
    while(row.childNodes.length){
        row.removeChild(row.childNodes[0]);
    }

    //Create all the needed canvas
    for(var i = 0; i < totalPlayer; i++)
    {
        var canvas = document.createElement('canvas');
        
        canvas.id = "canvas" + i;
        canvas.width = width;
        canvas.height =  height;

        //Style -----------------------
        canvas.style.paddingLeft = 0;
        canvas.style.paddingRight = 0;
        canvas.style.marginTop = "1%";
        canvas.style.marginLeft = 0;
        canvas.style.marginRight = 0;
        canvas.style.display = "block";
        //------------------------------

        row.appendChild(canvas);
        cursorLayer = document.getElementById("canvas" + i);
        init("canvas" + i, totalPlayer);
    }

}



rollDice = function(){
    var value = document.getElementsByClassName("text_dice_thrower")[0].value;
    console.log(value);

}
