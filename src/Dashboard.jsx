import { useEffect, useRef, useState } from "react";
import { useToken } from "./App"
import savingAnimation from "./assets/saving.gif";
import UtilityBar from "./UtilityBar";
import {
    Normal,
    Heading,
    Bold,
    Underline,
    Crossed,
    Link,
    Code,
    Image,
    Video,
    File,
    List
} from "./Markdown";

export default function Dashboard() {
    const [token, setToken] = useToken();

    const [saving, setSaving] = useState(false);

    const [type, setType] = useState('normal');
    const [align, setAlign] = useState('left');

    const headingRef = useRef();
    const contentRef = useRef();

    const [content, setContent] = useState([<Normal />]);

    function save(cb = () => { }) {
        setSaving(true);
        localStorage.setItem("heading", headingRef.current.value);
        localStorage.setItem("content", contentRef.current.innerHTML);
        setTimeout(() => {
            setSaving(false)
            cb();
        }, 1000);
    }

    useEffect(() => {
        headingRef.current.value = localStorage.getItem('heading');
        contentRef.current.textContent = localStorage.getItem('content');
    }, [])

    function clear() {
        const choice = confirm("Are you sure you want to delete the content?");
        if (choice) contentRef.current.textContent = "";
        localStorage.setItem('content', "");
    }

    useEffect(() => {
        const types = {
            normal: <Normal />,
            heading: <Heading align={align} />,
            underline: <Underline />,
            bold: <Bold />,
            crossed: <Crossed />,
            code: <Code />,
            link: <Link />,
            list: <List />
        }

        setContent(oldContent => {
            const newContent = [...oldContent, types[type]];
            return newContent;
        })
    }, [type, align])

    function submit() {
        contentRef.current.querySelectorAll('*').forEach(node => {
            node.setAttribute("contenteditable", false);
        });
        console.log(contentRef.current.innerHTML);
    }

    return (
        <div className="w-screen px-5 py-4 overflow-x-hidden">
            {saving ? <img className="block h-7 w-7 absolute top-2 left-2 z-20" src={savingAnimation} alt="" /> : <></>}
            <input type="text" className="py-3 px-2 text-[56px] bg-transparent w-full" placeholder="Enter Heading" ref={headingRef} />
            <UtilityBar type={type} setType={setType} align={align} setAlign={setAlign} clear={clear} save={save} submit={submit} />
            <div className="w-full py-1 border-l-2 border-[var(--primary-light-color)] px-2 my-5">
                <div className="focus-within:outline-none focus:outline-none text-2xl empty:before:content-['Enter_Content'] empty:before:inline-block empty:before:text-gray-400" ref={contentRef}>
                    {/* Here Things will be inserted */}
                    {content}
                </div>
            </div>
            {/* <button className="rounded bg-gray-700 px-3 py-1 text-xl" onClick={compile}>Insert</button>
            <div className="w-full py-1 border-l-2 border-[var(--primary-light-color)] px-2 my-5">
                <div className="focus-within:outline-none focus:outline-none text-2xl empty:before:content-['Output_will_be_displayed_here'] empty:before:inline-block empty:before:text-gray-400" ref={resultRef}>{content}</div>
            </div> */}
        </div>
    )
}
