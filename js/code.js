
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    dress.setAttribute("class","dress3");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===3){
    dress.setAttribute("class","dress4");
         state.i++;
         console.log(state.i);
    }
        else
     if(state.i===4){
    dress.setAttribute("class","dress5");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===5){
    dress.setAttribute("class","dress6");
         state.i++;
         console.log(state.i);
    }
    else
        if(state.i===6){
    dress.setAttribute("class","dress7");
         state.i=0;
    }
    
}

function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j=0;
    }
    
}

function nexthat()
{
    console.log("inside function nexthat");
    
    console.log(state.k);
    var hatf=document.getElementById("hatfront");
    var hatb=document.getElementById("hatback");
    hatb.setAttribute("class","hatback");
    
    if(state.k===0){
    hatf.setAttribute("class","hatfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hatf.setAttribute("class","hatfront2");
         state.k++;
         console.log(state.k);
    }
        else
     if(state.k===2){
    hatf.setAttribute("class","hatfront3");
         state.k++;
         console.log(state.k);
    }
        else
     if(state.k===3){
    hatf.setAttribute("class","hatfront4");
         state.k++;
         console.log(state.k);
    }
        else
     if(state.k===4){
    hatf.setAttribute("class","hatfront5");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===5){
    hatf.setAttribute("class","hatfront6");
         state.k=0;
    }
    
}