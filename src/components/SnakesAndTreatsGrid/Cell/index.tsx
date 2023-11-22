import "./Cell.css";

export default function Cell(props: any) {

    const { xCoord, yCoord, gridSize } = props;

    return (
        <div className="cell" style={{ height: `calc(100% / ${gridSize})`, width: `calc(100% / ${gridSize})` }} />
    );
}