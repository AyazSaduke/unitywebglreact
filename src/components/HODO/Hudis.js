import "./components/hudis.css"

export function Hudis(props) {
    return <div className="hudis">
        <div className="hud-score">���� {props.score}</div>
    </div>
}