import { useParams } from "react-router-dom";
import { info } from "../../data";
import './InfoPage.css'

export default function InfoPage() {
    const { name } = useParams(); 
    const currentInfo = info.find((item) => item.name === name); 

    console.log(name); // Проверка значения name
    console.log(currentInfo); // Проверка найденной информации

    if (!currentInfo) {
        return <h2>Информация не найдена</h2>;
    }
    
    return (
        <div className="info-page">
            <h1>{currentInfo.name}</h1>
            <p>{currentInfo.description}</p>
        </div>
    );
}
