import { isMobile } from "../../utils/utils";
import "./Onboarding.css"
export function Onboarding(props) {
    return <div className="onboarding">
        <div className="onboarding-text">{isMobile.any() ? "Simple Unity WebGL + React" : "Click Cube for CallBack from Unity"}</div>
        <button disabled={props.isActive} onClick={props.startCallback}>Start</button>
    </div>
}