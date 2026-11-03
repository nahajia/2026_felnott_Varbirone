import { useState,useEffect } from "react"
import Toltes from "../toltes.gif"
const Talalatok=({id})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const letoltes=async ()=>{
        try {
            let response=await fetch(`http://localhost:3000/idKerdez/${id}`,
                {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                       
                }
            )
            let data=await response.json()
            //alert(JSON.stringify(data))
             if (response.ok){
                setAdatok(data)
                setHiba(false)
                setTolt(false)
            }
            else 
                setHiba(true)
        } catch (error) {
            setTolt(false)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        letoltes()
    },[id])

    if (tolt){
        return (
            <div>
                <p>Töltés</p>
                <img src={Toltes} alt="" />
            </div>
        )
    }
    else if (hiba){
        return (
            <div>
                <p>Hiba történt</p>
            </div>
        )
    }
    else
    return (
        <div className="keret">
            <p>{id}</p>
            <ul>
            {
                adatok.map((elem)=>(
                    <li key={elem.kerdes_id}>{elem.kerdes_szoveg}</li>
                ))
            }
            </ul>
        </div>
    )
}
export default Talalatok