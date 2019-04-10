window.addEventListener('load' ,()=>{
    const soundList= document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    // sounds 
    pads.forEach((pad,i )=>{
        pad.addEventListener('click',function(){
            soundList[i].currentTime = 0;
            soundList[i].play();
            createBubble(i);
        })
    });

    const createBubble = (index) => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
});