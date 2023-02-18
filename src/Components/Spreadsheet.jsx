import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const Spread = () => {
    const [data, setData] = useState([
        [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
         [{ value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }, { value: "BOI" }, { value: "AGAIN BOI" }],
        
    ]);
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Spreadsheet data={data} readOnly={true} onChange={setData} />
        </div>
    )
}

export default Spread;