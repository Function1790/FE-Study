import { useEffect } from "react";

export default function Local_Stro() {
    useEffect(() => {
        document.title = localStorage.getItem("key");
    })
    return (
        <div>
            <h2>localStorage is {localStorage.getItem("key")}</h2>
            <input type="text" onChange={e => localStorage.setItem('key', e.target.value)} />
        </div>
    );
}