import { useState } from "react"
import TemaLenyilo from "../tema/TemaLenyilo"

const KerdesTemara=()=>{
    const [tema_id,setTemaID]=useState(1)
    return (
        <div style={{border:"5px solid green"}}>
            <p>Kérdések témánként</p>
            <div>
                <TemaLenyilo vissza={setTemaID} />
            </div>
            <div>
                <p>A kiválasztott id-ja: {tema_id}</p>
            </div>
        </div>
    )
}
export default KerdesTemara


