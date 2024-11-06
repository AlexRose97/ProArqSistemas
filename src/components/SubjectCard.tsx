import { Link } from 'react-router-dom';
import { subjectType } from '../types/types';

type SubjectCardProps = {
    subject: subjectType;
};

export const SubjectCard = ({ subject }: SubjectCardProps) => {
    return (
        <div className="subject-card">
            <h2>{subject.title}</h2>
            <p><strong>Situación Actual:</strong> {subject.currentSituation}</p>
            <Link to={`/subject/${subject.code}`}>Ver más detalles</Link>
        </div>
    );
}

export default SubjectCard;
