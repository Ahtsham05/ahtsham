const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'GC University Faisalabad',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from GC University Faisalabad.",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'Aspire College Faisalabad',
                degree: 'HSSC, ICS (Physics)',
                detail: "Completed ICS (Physics) part 1 and part 2 from Aspire College Faisalabad.",
                year: '2019-2021'
            },
            {
                id: 2,
                title: 'Madina Public High School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Madina Public High School.",
                year: '2017-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Frontend Developer',
                role: 'Frontend Developer',
                url: '',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2024 - Present',
                location: 'Faisalabad, Pakistan'
            },
            {
                id: 2,
                title: 'Backend Developer',
                role: 'Backend Developer',
                url: '',
                desc: 'As a backend developer, I use Node, Express & MongoDB to build server-side logic for web applications.',
                year: '02/2024 - Present',
                location: 'Faisalabad, Pakistan'
            },
            {
                id: 3,
                title: 'Full Stack Developer',
                role: 'Mern Stack / NextJS',
                url: '',
                desc: 'As a full stack developer, I use Mern Stack & NextJS to build web applications from scratch.',
                year: '02/2024 - Present',
                location: 'Faisalabad, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
