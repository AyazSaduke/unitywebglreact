//import React from "react";
import React, { useEffect, useState, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
//import { HODO } from "./components/HODO/HODO";
import "./HODO/hudis.css"
import { Onboarding } from "./Onboarding/Onboarding";
export function UnityPageComp() {

    const [score, setScore] = useState(0);
    const [isShowOnboarding, setOnboarding] = useState(true);

    const { unityProvider, addEventListener, removeEventListener, isLoaded } = useUnityContext({
        loaderUrl: "./build/55.loader.js",
        dataUrl: "./build/55.data.unityweb",
        frameworkUrl: "./build/55.framework.js.unityweb",
        codeUrl: "./build/55.wasm.unityweb",
    });

    const handleScoreUpdate = useCallback((score) => {
        setScore(score);
    }, []);

    useEffect(() => {
        addEventListener("OnScoreUpdate", handleScoreUpdate);
        return () => {
            removeEventListener("OnScoreUpdate", handleScoreUpdate);
        };
    }, [addEventListener, removeEventListener, handleScoreUpdate]);

    function handleStartButton() {
        setOnboarding(false);
    }

    return (<div>
        <Unity unityProvider={unityProvider} style={{ width: "100vw", height: "100vh", overflow: "hidden", zIndex: 0 }} />
        {isShowOnboarding ? <Onboarding isActive={!isLoaded} startCallback={handleStartButton} /> : ""}
        <div className="hud-score">Your click Score is: {score}</div>
    </div>);
}