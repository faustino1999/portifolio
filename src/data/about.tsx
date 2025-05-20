import {
    RiGraduationCapFill,
    RiCalendarFill,
    RiMailFill,
    RiPhoneFill,
    RiHomeFill,
    RiUserFill
} from "react-icons/ri";

export const infoData = [
    {
        icon: <RiUserFill size={20} />,
        text: "Faustino Moura",
    },
    {
        icon: <RiMailFill size={20} />,
        text: "faustinomoura1999@gmail.com",
    },
    {
        icon: <RiGraduationCapFill size={20} />,
        text: "Desenvolvedor full stack",
    },
    {
        icon: <RiHomeFill size={20} />,
        text: "Benguela - Angola",
    },
];

export const qualificationData = [
    {
        title: "education",
        data: [
            {
                school: "Cod3r Academy",
                qualification: "Desenvolvedor full stack",
                years: "mar de 2020",
            },
            {
                school: "NWL",
                qualification: "Desenvolvedor full stack",
                years: "mar de 2024",
            },
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Carrinho Industria",
                role: "Programador de Sistemas de Automação Logística",
                years: "fevereiro de 2024 - o momento",
            },
            {
                company: "PetroHost",
                role: "Desenvolvedor de front-end e Gestor de servidor",
                years: "março de 2022 - fevereiro de 2024",
            },
            {
                company: "Kromylook Technlolgies",
                role: "Desenvolvedor full-stack",
                years: "set de 2020 - fev de 2022",
            },
        ],
    },
];

export const skillsData = [
    {
        title: "skills",
        data: [
            {
                icons: [
                    "HTML",
                    "CSS",
                    "TailwindCSS",
                    "Figma",
                ],
            },
            {
                icons: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "NextJs",
                ],
            },
            {
                icons: [
                    "NodeJS",
                    "Express",
                    "Git",
                    "Docker",
                ],
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "Windows",
            },
            {
                imgPath: "Linux",
            },
            {
                imgPath: "Vscode",
            },
            {
                imgPath: "Insomnia",
            },
            {
                imgPath: "Notion",
            },
            {
                imgPath: "Trello",
            },
        ],
    },
];