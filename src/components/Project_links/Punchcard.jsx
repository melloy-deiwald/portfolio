import React, {useState} from "react";

function Punchcard () {
    const [cells, setCells] = useState(
        Array.from({ length: 10 * 80 }, () => Math.random() >= 0.7)
    );

    function handleCellClick(index) {
        const newCells = [...cells];
        newCells[index] = !newCells[index];
        setCells(newCells);
    }

    return(
        <div className="pl-punchcard">
        {Array.from({ length: 80 }).map((_, rowIndex) => (
            <div key={rowIndex} className="punchcard-row">
                {Array.from({ length: 10 }).map((_, colIndex) => {
                    const index = rowIndex * 10 + colIndex;
                    const isActive = cells[index];
                    return (
                    <div
                        key={colIndex}
                        className={`punchcard-cell ${isActive ? 'active' : ''}`}
                        onClick={() => handleCellClick(index)}
                    >
                        {colIndex}
                    </div>
                    );
                })}
            </div>
        ))}
        {Array.from({ length: 80 }, (_, index) => index + 1).map(index => (
            <div className="punchcard-cell pcellnumber">{index}</div>
        ))}
        </div>
    );
}

export default Punchcard