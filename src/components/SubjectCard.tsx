import { useNavigate } from 'react-router-dom';
import { SubjectType } from '../types/types';
import { styled } from '@mui/material/styles';
import {
    Typography,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    Box,
} from '@mui/material';

type SubjectCardProps = {
    subject: SubjectType;
};

const StyledCard = styled(Card)({
    maxWidth: '100%',
    border: "1px solid rgba(0, 0, 0, 0.1)", // Borde suave y gris
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Sombra inferior suave
    borderRadius: "8px", // Bordes redondeados opcionales
});

const CardActionsContainer = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px'
});

const AvatarBox = styled(Box)(({ bgColor }: { bgColor: string }) => ({
    backgroundColor: `#${bgColor}`, // Fondo en color aleatorio
    color: "#fff", // Color del texto blanco
    width: "100%", // Ancho completo del contenedor
    height: 240, // Altura del avatar
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem", // Tamaño grande para iniciales
    fontWeight: "bold",
}));

// Función para obtener iniciales de las palabras en el título
const getInitials = (text: string) => {
    return text
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 4) // Limita a 4 letras
        .toUpperCase();
};

// Función para generar color oscuro aleatorio en tonos de azul o verde
const getRandomDarkColor = () => {
    // Selección aleatoria del tono base
    const colorChoice = Math.floor(Math.random() * 4); // 0 = azul, 1 = verde, 2 = amarillo, 3 = rojo
    let red, green, blue;

    switch (colorChoice) {
        case 0: // Azul oscuro
            red = Math.floor(Math.random() * 30); // Bajo rojo
            green = Math.floor(Math.random() * 80); // Verde bajo a medio
            blue = Math.floor(Math.random() * 130 + 50); // Azul medio a oscuro
            break;
        case 1: // Verde oscuro
            red = Math.floor(Math.random() * 30); // Bajo rojo
            green = Math.floor(Math.random() * 130 + 50); // Verde medio a oscuro
            blue = Math.floor(Math.random() * 80); // Azul bajo a medio
            break;
        case 2: // Amarillo oscuro y apagado
            red = Math.floor(Math.random() * 130 + 80); // Rojo medio a oscuro
            green = Math.floor(Math.random() * 130 + 80); // Verde medio a oscuro
            blue = Math.floor(Math.random() * 30); // Bajo azul
            break;
        case 3: // Rojo oscuro
            red = Math.floor(Math.random() * 130 + 80); // Rojo medio a oscuro
            green = Math.floor(Math.random() * 30); // Bajo verde
            blue = Math.floor(Math.random() * 30); // Bajo azul
            break;
        default:
            red = 0;
            green = 0;
            blue = 0;
    }

    // Convertimos a hexadecimal
    return ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
};

export const SubjectCard = ({ subject }: SubjectCardProps) => {
    const navigate = useNavigate();

    // Genera las iniciales y el color de fondo
    const initials = getInitials(subject.title.toString());
    const backgroundColor = getRandomDarkColor();

    return (
        <StyledCard onClick={() => { navigate(`/subject/${subject.code}`); }}>
            <CardActionArea>
                <AvatarBox bgColor={backgroundColor}>
                    {initials}
                </AvatarBox>
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
        </StyledCard>
    );
}

export default SubjectCard;
