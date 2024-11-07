import { Link, useNavigate } from 'react-router-dom';
import { subjectType } from '../types/types';
import { styled } from '@mui/material/styles';
import {
    Typography,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@mui/material';


type SubjectCardProps = {
    subject: subjectType;
};

const StyledCard = styled(Card)({
    maxWidth: '100%'
});

const CardActionsContainer = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px'
});
const Media = styled(CardMedia)({
    height: 240
});

export const SubjectCard = ({ subject }: SubjectCardProps) => {
    const navigate = useNavigate();
    return (
        <StyledCard onClick={() => { navigate(`/subject/${subject.code}`); }}>
            <CardActionArea>
                <Media
                    image={`https://picsum.photos/800/600?random=${subject.code}&blur`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {subject.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <p><strong>Situación Actual:</strong> {subject.currentSituation}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionsContainer>
            </CardActionsContainer>
        </StyledCard >
    );
}

export default SubjectCard;
