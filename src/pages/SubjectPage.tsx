import { useNavigate, useParams } from 'react-router-dom';
import { subjectsData } from '../data/subjectsData';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import { ActivityType } from '../types/types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TitleText = styled(Typography)({
    color: "#333", // Gris oscuro para buena visibilidad
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Sombra sutil en el texto
    lineHeight: 1.2,
});
const TitleContainer = styled(Box)({
    padding: "16px 24px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra sutil
    textAlign: "center",
});

export const SubjectPage = () => {
    const { code } = useParams();
    const subject = subjectsData.find(sub => sub.code === code);
    const navigate = useNavigate();

    if (!subject) return <p>Asignatura no encontrada.</p>;

    return (
        <Container maxWidth="xl">
            <TitleContainer onClick={() => { navigate(`/`); }}>
                <TitleText variant="h2">
                    <KeyboardBackspaceIcon style={{ fontSize: "inherit", marginRight: "8px", verticalAlign: "middle" }} />
                    {subject.title}
                </TitleText>
            </TitleContainer>
            <TitleText variant="h6" paddingTop={3}>
                <strong>Situación Actual:</strong> {subject.currentSituation}
            </TitleText>
            <TitleText variant="h4" paddingTop={3}>
                Propuesta de Mejora
            </TitleText>
            <ul>
                {subject.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                ))}
            </ul>
            {/* Sección para renderizar la secuencia didáctica */}
            <TitleText variant="h4" paddingTop={3}>
                Secuencia Didáctica
            </TitleText>
            {subject.teachingSequence && (
                <>
                    {Object.entries(subject.teachingSequence).map(([stageName, stageData]) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <TitleText variant="h5">
                                    {stageName.charAt(0).toUpperCase() + stageName.slice(1)}
                                </TitleText>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box key={stageName}>
                                    <Typography variant="body1" paragraph>
                                        <strong>Objetivo:</strong> {stageData.objective}
                                    </Typography>
                                    <TitleText variant="h6">Actividades:</TitleText>
                                    <ol>
                                        {stageData.activities.map((activity: ActivityType, index: number) => (
                                            <li key={index}>
                                                <Typography variant="body1">
                                                    <strong>Título:</strong> {activity.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Descripción:</strong> {activity.description}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Duración:</strong> {activity.duration}
                                                </Typography>
                                                <Typography variant="body2" paragraph>
                                                    <strong>Propósito:</strong> {activity.purpose}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ol>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    ))}
                </>
            )}
        </Container>
    );
}
