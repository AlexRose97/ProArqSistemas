import { useParams } from 'react-router-dom';
import { subjectsData } from '../data/subjectsData';


export const SubjectPage = () => {
    const { code } = useParams();
    const subject = subjectsData.find(sub => sub.code === code);

    if (!subject) return <p>Asignatura no encontrada.</p>;

    return (
        <div>
            <h1>{subject.title}</h1>
            <p><strong>Situación Actual:</strong> {subject.currentSituation}</p>
            <h2>Propuesta de Mejora</h2>
            <ul>
                {subject.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                ))}
            </ul>
        </div>
    );
}
