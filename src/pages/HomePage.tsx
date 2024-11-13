import { subjectsData } from '../data/subjectsData';
import SubjectCard from '../components/SubjectCard';
import { styled } from '@mui/material/styles';
import {
    Box,
    Container,
    Typography,
    Stack
} from '@mui/material';
import Grid from '@mui/material/Grid2';


const BlogContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10)
}));

const TitleContainer = styled(Box)({
    padding: "16px 24px",
    // backgroundColor: "rgba(230, 230, 230, 0.4)", // Fondo gris suave y transparente
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra sutil
    textAlign: "center",
});

const TitleText = styled(Typography)({
    color: "#333", // Gris oscuro para buena visibilidad
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Sombra sutil en el texto
    lineHeight: 1.2,
});
export const HomePage = () => {
    return (
        <Container maxWidth="xl">
            <Stack>
                <TitleContainer>
                    <TitleText variant="h2">
                        Propuesta de Mejora para el Pensum de Ingeniería en Sistemas
                    </TitleText>
                </TitleContainer>
                <BlogContainer>
                    <TitleText variant="h4" gutterBottom>
                        Cursos
                    </TitleText>
                    <Grid container spacing={3}>
                        {subjectsData.map((subject) => (
                            <Grid size={{ xs: 12, md: 6, sm: 6, lg: 4, xl: 3 }} key={Number(subject.code)}>
                                <SubjectCard subject={subject} />
                            </Grid>
                        ))}
                    </Grid>
                </BlogContainer>
            </Stack>
        </Container>
    );
}
