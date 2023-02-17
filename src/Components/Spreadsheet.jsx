import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const Spread = () => {
    const [data, setData] = useState([
        [{ value: "BOI" }, { value: "AGAIN BOI" }],
        [{ value: "Boi part2" }, { value: "AGAIN BOI3" }]
    ]);
    return (
        <Spreadsheet data={data} readOnly={true} onChange={setData} />
    )
}

export default Spread;