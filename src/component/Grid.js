import React, { useState } from 'react'

export const Grid = () => {
    const [status,setStatus]=useState(true);
    const [user,setUser]=useState("X");
    const [clicks,setClicks]=useState(0)
    const [array,setArray]=useState(["","","","","","","","",""])
    const winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    console.log(array)
    if(clicks==9&&status)
    {
        alert("draw")
        setStatus(false);
    }

    const click=(e)=>{
        console.log(e.target.className)
        if(e.target.className==="false"&&status)
        {
            e.target.className="true"
            // e.target.innerHTML=user;
            const arr=[...array];
            arr[Number(e.target.id)-1]=user;
            setArray(arr)
            if(user==="X")
            {
                setUser("O")

            }
            else
            setUser("X")
            setClicks(prev=>prev+1)
        }
    }
    const check=()=>{
        if(status)
       {
        for(let i=0;i<winning.length;i++)
        {
            if(!!(array[winning[i][0]])&&array[winning[i][0]]===array[winning[i][1]]&&array[winning[i][1]]===array[winning[i][2]])
            {
                setStatus(false);
                alert(array[winning[i][0]]+"wins")
            }
        }
       }
       
    }
    check();
    const reset=()=>{
        const grids=document.querySelectorAll(".true")
        console.log(grids)
        for(let i=0;i<grids.length;i++)
        {
            grids[i].className="false";
            grids.innerHTML=""
        }
        setStatus(true);
        setUser("X");
        setClicks(0);
        setArray(["","","","","","","","",""]);
    }

    return (
        <>
        <div id="grid" onClick={(e)=>click(e)}>
            {array.map((item,ind,arr)=>{
                return(
                    <div type="cell" id={ind+1}class="false">{array[ind]}</div>
                )
            })}
            {/* <div type="cell" class="false" value={array[0]}></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div>
            <div type="cell" class="false"></div> */}
            
            
        </div>
        <button onClick={reset}> reset</button>
        </>
    )
}
