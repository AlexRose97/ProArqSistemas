import { subjectsData } from '../data/subjectsData';
import SubjectCard from '../components/SubjectCard';

export const HomePage = () => {
    return (
        <div>
            <h1>Propuesta de Mejora para el Pensum de Ingeniería en Sistemas</h1>
            <div className="subjects-list">
                {subjectsData.map((subject) => (
                    <SubjectCard key={Number(subject.code)} subject={subject} />
                ))}
            </div>
        </div>
    );
}
