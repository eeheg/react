import Word from "./Word"
import { Link, useParams } from "react-router-dom"; //url이 포함된 값을 얻을때 useParams사용
import useFetch from "../hooks/useFetch";

export default function Day() {
    const { day } = useParams(); /*const day = a.day*/
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>Day {day}</h2>
            {/* {words.length === 0 && <span>Loading...</span>} */}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
                <ul className="shift_day">
                    <li><Link to = {`/day/${Number(day)-1}`} style={{color:'white'}}>◀ Day {Number(day)-1}</Link></li>
                    <li><Link to = {`/day/${Number(day)+1}`} style={{color:'white'}}>Day {Number(day)+1} ▶</Link></li>
                </ul>
        </>
    );
};