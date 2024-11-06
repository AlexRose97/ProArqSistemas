import { subjectType } from "../types/types";

export const subjectsData: subjectType[] = [
    {
        code: '785',
        title: 'Análisis y Diseño de Sistemas 2',
        currentSituation: 'Se enfoca en el análisis y diseño tradicional de sistemas.',
        improvements: [
            'Añadir módulos sobre patrones avanzados de diseño.',
            'Incluir la creación de un Service Registry para la gestión de servicios en entornos distribuidos.',
            'Introducir prácticas de Microservicios para el diseño escalable de sistemas.',
            'Ampliar la diagramación de arquitectura con herramientas como PlantUML o Draw.io.',
        ]
    },
    {
        code: '975',
        title: 'Redes de Computadoras 2',
        currentSituation: 'Enfocado en redes físicas y auditoría de redes.',
        improvements: [
            'Introducir conceptos de Service Mesh para la comunicación segura entre microservicios.',
            'Incorporar prácticas de configuración de telemetría y monitoreo, usando herramientas como Prometheus y Grafana.',
        ]
    },
    {
        code: '725',
        title: 'Sistemas de Bases de Datos 2',
        currentSituation: 'Enfocado en bases de datos relacionales tradicionales.',
        improvements: [
            'Incluir bases de datos NoSQL, como MongoDB y Firebase, para abordar arquitecturas distribuidas.',
            'Introducir conceptos de Vaults para la gestión segura de datos sensibles en aplicaciones.',
        ]
    },
    {
        code: '755',
        title: 'Software Avanzado',
        currentSituation: 'Orientado a la creación de aplicaciones web básicas.',
        improvements: [
            'Incorporar el desarrollo de Microfrontends, permitiendo que los estudiantes trabajen en interfaces modulares.',
            'Incluir prácticas de despliegue de aplicaciones utilizando contenedores Docker y orquestación con Kubernetes.',
            'Implementar un proyecto donde los estudiantes integren frontend y backend a través de API Gateway.',
            'Incluir módulos sobre telemetría y monitoreo continuo para asegurar el rendimiento de sistemas.',
        ]
    }
];

