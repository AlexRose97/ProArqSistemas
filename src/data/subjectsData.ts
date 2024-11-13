import { SubjectType } from "../types/types";

export const subjectsData: SubjectType[] = [
    {
        "code": "785",
        "title": "Análisis y Diseño de Sistemas 2",
        "currentSituation": "Se enfoca en el análisis y diseño tradicional de sistemas.",
        "improvements": [
            "Añadir módulos sobre patrones avanzados de diseño.",
            "Incluir la creación de un Service Registry para la gestión de servicios en entornos distribuidos.",
            "Introducir prácticas de Microservicios para el diseño escalable de sistemas.",
            "Ampliar la diagramación de arquitectura con herramientas como PlantUML o Draw.io."
        ],
        "teachingSequence": {
            "introduction": {
                "objective": "Familiarizar a los estudiantes con los patrones avanzados de diseño y sus aplicaciones en entornos distribuidos.",
                "activities": [
                    {
                        "title": "Clase Expositiva sobre Patrones Avanzados de Diseño",
                        "description": "Introducir conceptos clave de patrones avanzados de diseño, como Event Sourcing, CQRS, y Saga.",
                        "duration": "1 hora",
                        "purpose": "Dar a los estudiantes una base teórica sólida sobre patrones avanzados, sus usos y ventajas en sistemas complejos."
                    },
                    {
                        "title": "Análisis Comparativo (Arquitectura Tradicional vs. Microservicios)",
                        "description": "Realizar una clase comparativa entre arquitecturas monolíticas y de microservicios, destacando la escalabilidad y flexibilidad de los microservicios.",
                        "duration": "45 minutos",
                        "purpose": "Ayudar a los estudiantes a entender las diferencias, beneficios y desafíos de cada arquitectura."
                    },
                    {
                        "title": "Lectura Guiada sobre Service Registry",
                        "description": "Asignar una lectura sobre la creación y función de un Service Registry en sistemas distribuidos.",
                        "duration": "30 minutos (en casa)",
                        "purpose": "Preparar a los estudiantes para la siguiente etapa y dar contexto sobre la comunicación y registro de servicios en microservicios."
                    }
                ]
            },
            "desarrollo": {
                "objective": "Capacitar a los estudiantes en el uso de patrones avanzados, la creación de un Service Registry, y el diseño de sistemas escalables utilizando microservicios.",
                "activities": [
                    {
                        "title": "Taller de Patrones de Diseño Avanzado",
                        "description": "Dividir a los estudiantes en equipos para que apliquen patrones avanzados (como CQRS y Saga) en la resolución de un problema de diseño específico.",
                        "duration": "1.5 horas",
                        "purpose": "Fomentar el aprendizaje práctico de patrones de diseño y su aplicación en un contexto de sistemas distribuidos."
                    },
                    {
                        "title": "Laboratorio de Creación de un Service Registry",
                        "description": "Configurar un Service Registry utilizando herramientas como Consul o Eureka y conectar varios microservicios para simular un sistema distribuido.",
                        "duration": "2 horas",
                        "purpose": "Enseñar a los estudiantes a implementar y gestionar la comunicación entre microservicios, usando el Service Registry para registrar y localizar servicios."
                    },
                    {
                        "title": "Diagramación de Arquitectura con PlantUML y Draw.io",
                        "description": "Introducir a los estudiantes a herramientas de diagramación como PlantUML y Draw.io para documentar arquitecturas de sistemas.",
                        "duration": "1.5 horas",
                        "purpose": "Capacitar a los estudiantes en el uso de herramientas de diagramación para documentar de forma clara la arquitectura de microservicios, facilitando la comunicación de diseño."
                    }
                ]
            },
            "cierre": {
                "objective": "Consolidar el aprendizaje mediante la creación de un proyecto final y reflexión sobre la importancia de patrones de diseño avanzados y microservicios.",
                "activities": [
                    {
                        "title": "Proyecto Final de Implementación de Microservicios",
                        "description": "Los estudiantes, en equipos, diseñarán y documentarán un sistema distribuido con microservicios, aplicando los patrones de diseño avanzados aprendidos y utilizando un Service Registry.",
                        "duration": "2.5 horas",
                        "purpose": "Evaluar la capacidad de los estudiantes para aplicar patrones de diseño, implementar microservicios y documentar su arquitectura de manera profesional."
                    },
                    {
                        "title": "Presentación y Discusión de Proyectos",
                        "description": "Cada equipo presentará su proyecto, detallando los patrones de diseño aplicados, la arquitectura de microservicios y el uso del Service Registry.",
                        "duration": "1 hora",
                        "purpose": "Fomentar el intercambio de ideas y retroalimentación, y permitir que los estudiantes analicen diferentes enfoques de diseño."
                    },
                    {
                        "title": "Informe de Reflexión",
                        "description": "Asignar un informe individual en el que cada estudiante reflexione sobre el aprendizaje, desafíos y ventajas de aplicar patrones de diseño y microservicios en sistemas distribuidos.",
                        "duration": "1 hora (en casa)",
                        "purpose": "Incentivar la autoevaluación y consolidar el aprendizaje, promoviendo la capacidad de reflexionar críticamente sobre la experiencia práctica."
                    }
                ]
            }
        }
    },
    {
        "code": "975",
        "title": "Redes de Computadoras 2",
        "currentSituation": "Enfocado en redes físicas y auditoría de redes.",
        "improvements": [
            "Introducir conceptos de Service Mesh para la comunicación segura entre microservicios.",
            "Incorporar prácticas de configuración de telemetría y monitoreo, usando herramientas como Prometheus y Grafana."
        ],
        "teachingSequence": {
            "introduction": {
                "objective": "Comprender los conceptos de Service Mesh y su importancia en la comunicación segura entre microservicios.",
                "activities": [
                    {
                        "title": "Clase Expositiva sobre Service Mesh",
                        "description": "Explicación de Service Mesh y cómo facilita la comunicación entre microservicios.",
                        "duration": "1 hora",
                        "purpose": "Familiarizar a los estudiantes con los principios de Service Mesh y su relevancia en redes de microservicios."
                    },
                    {
                        "title": "Demostración de Istio",
                        "description": "Demostración práctica del uso de Istio para manejar la comunicación y seguridad en redes de microservicios.",
                        "duration": "1 hora",
                        "purpose": "Mostrar cómo Istio facilita el enrutamiento, seguridad y monitoreo en entornos de microservicios."
                    }
                ]
            },
            "desarrollo": {
                "objective": "Implementar una solución básica de telemetría y monitoreo en redes de microservicios.",
                "activities": [
                    {
                        "title": "Laboratorio de Configuración de Prometheus y Grafana",
                        "description": "Instalación y configuración de Prometheus y Grafana para monitorear métricas en una red de microservicios.",
                        "duration": "2 horas",
                        "purpose": "Enseñar a los estudiantes cómo configurar herramientas de monitoreo para observar el rendimiento de redes de microservicios."
                    },
                    {
                        "title": "Creación de Paneles de Monitoreo",
                        "description": "Cada estudiante creará un panel personalizado en Grafana para visualizar métricas clave.",
                        "duration": "1 hora",
                        "purpose": "Permitir que los estudiantes identifiquen métricas relevantes y configuren visualizaciones personalizadas."
                    }
                ]
            },
            "cierre": {
                "objective": "Evaluar la comprensión de los estudiantes mediante un proyecto final.",
                "activities": [
                    {
                        "title": "Proyecto Final de Monitoreo en Redes de Microservicios",
                        "description": "Desarrollar un proyecto en el que los estudiantes implementen Service Mesh y telemetría en una red de microservicios.",
                        "duration": "2.5 horas",
                        "purpose": "Evaluar la capacidad de los estudiantes para aplicar conceptos de Service Mesh y monitoreo en una configuración práctica."
                    }
                ]
            }
        }
    },
    {
        "code": "725",
        "title": "Sistemas de Bases de Datos 2",
        "currentSituation": "Enfocado en bases de datos relacionales tradicionales.",
        "improvements": [
            "Incluir bases de datos NoSQL, como MongoDB y Firebase, para abordar arquitecturas distribuidas.",
            "Introducir conceptos de Vaults para la gestión segura de datos sensibles en aplicaciones."
        ],
        "teachingSequence": {
            "introduction": {
                "objective": "Introducir los conceptos de bases de datos NoSQL y su aplicación en arquitecturas distribuidas.",
                "activities": [
                    {
                        "title": "Clase sobre Bases de Datos NoSQL",
                        "description": "Explicación de las características de bases de datos NoSQL y comparación con bases de datos relacionales.",
                        "duration": "1 hora",
                        "purpose": "Dar a los estudiantes una comprensión básica de las bases de datos NoSQL y sus aplicaciones."
                    },
                    {
                        "title": "Exploración de Firebase y MongoDB",
                        "description": "Exploración guiada de Firebase y MongoDB como ejemplos de bases de datos NoSQL.",
                        "duration": "1 hora",
                        "purpose": "Familiarizar a los estudiantes con el uso de Firebase y MongoDB en entornos distribuidos."
                    }
                ]
            },
            "desarrollo": {
                "objective": "Capacitar a los estudiantes en la gestión de datos sensibles utilizando Vaults.",
                "activities": [
                    {
                        "title": "Laboratorio de Integración con Vault",
                        "description": "Configurar un sistema para la gestión de datos sensibles utilizando Vault.",
                        "duration": "2 horas",
                        "purpose": "Mostrar cómo proteger datos sensibles y gestionar permisos de acceso en aplicaciones distribuidas."
                    }
                ]
            },
            "cierre": {
                "objective": "Evaluar los conocimientos adquiridos en bases de datos NoSQL y gestión de datos sensibles.",
                "activities": [
                    {
                        "title": "Proyecto Final de Bases de Datos NoSQL y Seguridad de Datos",
                        "description": "Desarrollar una aplicación que integre bases de datos NoSQL y utilice Vault para gestionar datos sensibles.",
                        "duration": "2.5 horas",
                        "purpose": "Evaluar la capacidad de los estudiantes para implementar bases de datos NoSQL y técnicas de seguridad de datos."
                    }
                ]
            }
        }
    },
    {
        "code": "755",
        "title": "Software Avanzado",
        "currentSituation": "Orientado a la creación de aplicaciones web básicas.",
        "improvements": [
            "Incorporar el desarrollo de Microfrontends, permitiendo que los estudiantes trabajen en interfaces modulares.",
            "Incluir prácticas de despliegue de aplicaciones utilizando contenedores Docker y orquestación con Kubernetes.",
            "Implementar un proyecto donde los estudiantes integren frontend y backend a través de API Gateway.",
            "Incluir módulos sobre telemetría y monitoreo continuo para asegurar el rendimiento de sistemas."
        ],
        "teachingSequence": {
            "introduction": {
                "objective": "Introducir el concepto de Microfrontends y sus ventajas en el desarrollo de interfaces modulares.",
                "activities": [
                    {
                        "title": "Clase sobre Microfrontends",
                        "description": "Explicación de Microfrontends y cómo se utilizan en aplicaciones grandes.",
                        "duration": "1 hora",
                        "purpose": "Proporcionar una base teórica sobre Microfrontends y sus beneficios."
                    }
                ]
            },
            "desarrollo": {
                "objective": "Desarrollar habilidades en despliegue de aplicaciones utilizando Docker y Kubernetes.",
                "activities": [
                    {
                        "title": "Laboratorio de Contenedores y Orquestación",
                        "description": "Configuración de contenedores Docker y despliegue en un clúster de Kubernetes.",
                        "duration": "2 horas",
                        "purpose": "Enseñar a los estudiantes cómo gestionar aplicaciones en contenedores y orquestarlas con Kubernetes."
                    },
                    {
                        "title": "Integración con API Gateway",
                        "description": "Implementación de un API Gateway para comunicar frontend y backend en un proyecto de equipo.",
                        "duration": "1.5 horas",
                        "purpose": "Proporcionar experiencia en el uso de API Gateways para facilitar la comunicación en sistemas distribuidos."
                    }
                ]
            },
            "cierre": {
                "objective": "Evaluar la comprensión de los estudiantes mediante un proyecto final.",
                "activities": [
                    {
                        "title": "Proyecto Final Integrado de Microfrontends y Backend",
                        "description": "Desarrollar un sistema donde los estudiantes apliquen Microfrontends y desplieguen servicios en contenedores.",
                        "duration": "2.5 horas",
                        "purpose": "Evaluar la capacidad de los estudiantes para integrar tecnologías avanzadas en el desarrollo y despliegue de aplicaciones."
                    }
                ]
            }
        }
    }
];