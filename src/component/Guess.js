// Guess the gender probabilty of name
import { useState } from "react"

const Guess=()=>{
    const [spell,setSpell]=useState("")
    const [data, setdata] = useState()

   
        const  fetchData=async() => {
            let result=await fetch(`https://api.genderize.io/?name=${spell}`)
            .then(res=>res.json())
            console.log(result)
            setdata(result)
            
            
        }
        console.log(spell)
        
   
    return(
        <div>
             
        <input type="text" placeholder="Enter your name" value={spell} onChange={(ev)=>setSpell(ev.target.value)}/>
        <button onClick={fetchData}>Guess</button>
        {
            data?
            <div>
                <div>Details</div>
                <div>Name = {data.name}</div>
                <div>Gender = {data.gender}</div>
                <div>Probability = {data.probability}</div>
                <div>Count = {data.count}</div>

            </div>:
            null
        }

        </div>

    );
}
export default Guess