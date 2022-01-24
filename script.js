var character= document.getElementById("character");
var block=document.getElementById("block");
var counter=0;

function start(){
    block.classList.add("animateBlock");
    var checkDead=setInterval(function(){
        //calculate top position of the character et left position of the block
        //to see if they touch
        let characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        //if le block is under the character of if the character has jumped less than 20px, over than the block
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
            alert("Game Over. score: "+Math.floor(counter/100));
            counter=0;
            block.style.animation = "block 1s infinite linear";
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    },10);
}

function jump(){
    if(character.classList.contains("animateJump")) {return;}
    character.classList.add("animateJump");
    setTimeout(function(){
        character.classList.remove("animateJump");
    },300);
}

