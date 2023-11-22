import "./SnakesAndTreatsGrid.css";

//Component Imports
import Cell from "./Cell";

export default function SnakesAndTreatsGrid(props: any) {
    const { gridSize } = props;

    return (
        <section className="main-grid" data-grid-size={gridSize}>
            {
                [...Array(gridSize).keys()].map((_, rowIndex) => {
                    return [...Array(gridSize).keys()].map((_, columnIndex) => {
                        return (<Cell gridSize={gridSize} xCoord={rowIndex} yCoord={columnIndex} />);
                    })
                })
            }
        </section>
    );
}

