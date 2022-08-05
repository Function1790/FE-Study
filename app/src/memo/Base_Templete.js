import "./style.css"
import { useState } from "react"


export default function () {
    const [write_mode, setWriteMode] = useState(true)
    const [content, setContent] = useState("")

    function changeWriteMode() {
        if (write_mode) {
            setWriteMode(false)
        } else { //Cancel을 누를때
            setWriteMode(true)
        }
    }

    function getWriteModeState() {
        if (!write_mode) {
            return "Cancel"
        }
        return "Write"
    }

    function saveText(text) {
        setContent(text)
        localStorage.setItem("content", text);
        //cancel 할때 복구
    }

    function loadText() {
        setContent(localStorage.getItem("content"))
    }

    return (
        <div class="memo-content">
            <textarea className="content" disabled={write_mode} onChange={(e) => { setContent(e.target.value)}} value={content}></textarea>
            <div class="tool_bar">
                <div class="tool1">
                    <button onClick={() => { changeWriteMode() }}>
                        {getWriteModeState()}
                    </button>
                    <button onClick={(e) => {saveText(content) 
                    }}> Save</button>
                    <button onClick={() => {loadText() 
                    }}>Load</button>
                </div>
            </div>
        </div>
    );
}