var flag=true;
var user1=0,user2=0;
var states=[1,0,1,0,1,0,0,1,0];
var winnerDiv=document.querySelector("#winner");

document.querySelector(".container").addEventListener('click',function(e){
   if(e.target.id)
    setVal(e.target);
})

function setVal(curDiv)
{
    id=curDiv.id;
    if(flag)
    {
        if(states[id]==1 || states[id]==0)
        {
            curDiv.innerHTML='X';
            states[id]='X';
            flag=!flag;
            checkWinner(!flag);
        }
        
    }
    else
    {
        if(states[id]==1 || states[id]==0)
        {
            curDiv.innerHTML='O';
            states[id]='O';
            flag=!flag;
            checkWinner(!flag);
        }
    }
    
    
    
}

function setDisable()
{
    for(let i=0;i<states.length;i++)
    {
        if(states[i]==0 || states[i]==1)
        {
            states[i]=null;
        }
    }
}
function checkWinner(type)
{
    const winIndex=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let x=0;x<winIndex.length;x++)
    {
        let [a,b,c]=winIndex[x];//array destructing
        if(states[a]==states[b] && states[b]==states[c])
        {
            winnerDiv.innerHTML=type?"Winner X ":"winner O";
            setWinner(winIndex[x]);
            setDisable();
            setCount(type);
            break;
        }
    }

    
}

function setWinner(index)
{
    for(let i=0;i<index.length;i++)
    {
        document.getElementById(index[i]).style.backgroundColor="green";
    }
}
function gameReset()
{
    var choice=confirm("Are you Sure Want to Reset The Game ?")
    if(choice)
    {
        flag=true;
        states=[1,0,1,0,1,0,0,1,0];
        divCollection=document.querySelectorAll(".container DIV");
        for(let i=0;i<divCollection.length;i++)
        {
            divCollection[i].innerHTML="";
            divCollection[i].style.backgroundColor="#ff8080";
        }   
    }
}

function setCount(type)
{
    (type)?user1++:user2++;
    document.querySelector("#user1").innerHTML=user1;
    document.querySelector("#user2").innerHTML=user2;
}