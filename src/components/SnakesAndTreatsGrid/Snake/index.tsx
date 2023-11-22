import "./Snake.css";

export default function Snake(props: any) {

    const { gridSize } = props;

    return (
        <div className="snake" style={{ height: `calc(50% / ${gridSize})`, width: `calc(50% / ${gridSize})` }}>

        </div>
    );
}