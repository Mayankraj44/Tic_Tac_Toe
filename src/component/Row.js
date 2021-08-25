import React, { useEffect, useState } from 'react'
const Row = (props) => {
    const [data, setdata] = useState("");
    useEffect(() => {
        const  fetchData=async() => {
            let result=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res=>res.json())
            console.log(Object.keys(result.bpi));
            console.log(result)
            setdata(result)
            
            
        }
        setTimeout(()=>fetchData(),1000) ;
        return () => {
            
        }
    },[])
    return (  
        <>
       {data?
       <div>
           <div>Time of updation</div>
       <div>{data?.time?.updated}</div>
       <div>Currency = {data?.chartName}</div>
       <div>
           {Object.keys(data.bpi).map(item=>{
               console.log(data.bpi.item)
               return(
                   <div>
                    <div>Description {data?.bpi?.EUR?.description}</div>
                    <div>Rate {data?.bpi?.EUR?.rate}</div>
                    </div>
               )
           })}
       </div>
       </div>:
       null}

        </>
    );
}
 
export default Row;

