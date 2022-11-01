import { useToken } from "./App";
import Logo from "./assets/kalpanacaps.png";
import { useRef } from "react";

export default function Authentication() {
    const [token, setToken] = useToken();

    const passwordRef = useRef();
    const errRef = useRef();

    function login() {
        const password = passwordRef.current.value;
        if (password === import.meta.env.VITE_PASSWORD) {
            setToken(true);
            errRef.current.textContent = "";
        }
        else errRef.current.textContent = "Incorrect Password!";
    }

    function checkEnter(e) {
        if (e.key === 'Enter' || e.keyCode === 13) login();
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-evenly">
            <img className="block h-64 w-64" src={Logo} alt="" />
            <div>
                <div>
                    <input className="rounded-l-md py-2 px-3 bg-gray-300 text-black" type="password" name="password" id="password" placeholder="Enter Password" autoFocus ref={passwordRef} onKeyDown={checkEnter} />
                    <button className="rounded-r-md py-2 px-3 bg-gray-700" onClick={login}>Login</button>
                </div>
                <div className="text-red-600" ref={errRef}></div>
            </div>
        </div>
    )
}
