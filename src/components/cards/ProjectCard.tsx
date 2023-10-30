import { useRef, useState } from "react"
import Button from "../button/Button"
import './ProjectCard.css'
import ProjectCardDialog from "./ProjectCardDialog";

export default function ProjectCard() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isBookmarked, setBookmarked] = useState(false);
   
    function showModal() {
        dialogRef.current?.showModal();
    }


    return <div className="project-card">
        <div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <h2>A beautify & handicrafted monitor stand to reduce neck and eye strain.</h2>
        </div>
        <ProjectCardDialog  passedRef = {dialogRef} />
        <div className="button-container">
            <Button onClick={() => showModal()} disabled={false} content="Back this project" />
            <button onClick={() => setBookmarked(!isBookmarked)} className="bookmark-btn">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill={isBookmarked ? "var(--clr-dark-cyan)" : "#2F2F2F"} cx="28" cy="28" r="28" /><path fill={isBookmarked ? "#fff" : "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z" /></g></svg>
                <span style={{
                    color:
                        !isBookmarked ? "var(--clr-dark-grey)" : "var(--clr-dark-cyan)",
                    fontWeight: isBookmarked ? "var(--fw-700)" : ""
                }}>Bookmark{isBookmarked ? "ed" : ""}</span>
            </button>
        </div>
    </div>
}