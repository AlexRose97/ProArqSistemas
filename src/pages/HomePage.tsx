import { subjectsData } from '../data/subjectsData';
import SubjectCard from '../components/SubjectCard';
import { styled } from '@mui/material/styles';
import {
    Box,
    Container,
    Typography,
    Stack,
    Paper
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const HeroBox = styled(Box)(({ theme }) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
        height: 300,
        fontSize: '3em'
    },
    textAlign: "center"
}));

const BlogContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(3)
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
}));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
export const HomePage = () => {
    return (
        <Container>
            <Stack>
                {/* <StyledAppBar>
                    <Toolbar>
                        <Typography variant="h6" color="primary" >
                            Blog
                        </Typography>
                    </Toolbar>
                </StyledAppBar> */}
                <HeroBox>
                    <Box>Propuesta de Mejora para el Pensum de Ingeniería en Sistemas</Box>
                </HeroBox>
                <BlogContainer maxWidth="lg">
                    <BlogTitle variant="h4">
                        CURSOS
                    </BlogTitle>
                    <Grid container spacing={3}>
                        {subjectsData.map((subject) => (
                            <Grid size={{ xs: 12, md: 6, sm: 4 }}  key={Number(subject.code)} >
                                <Item>
                                    <SubjectCard subject={subject} />
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </BlogContainer>
            </Stack>
        </Container>
    );
}
