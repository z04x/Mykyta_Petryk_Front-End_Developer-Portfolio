function periodToMonths(period) {
    const [years, months] = period.split(' - ')[1].split(' ');
    return parseInt(years) * 12 + parseInt(months);
}

function monthsToString(totalMonths) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
}

export const FRONTEND_EXPERIENCE = [
    {
        period: '2023 - 3 months',
        company: 'Udemy',
        position: 'React Course',
        technologies: 'React, Redux, React Router',
        durationMonths: 3
    },
    {
        period: '2022 - 4 months',
        company: 'Personal Project',
        position: 'Vue.js Developer',
        technologies: 'Vue.js, Vuex, Vue Router',
        durationMonths: 4
    },
    {
        period: '2022 - 2 months',
        company: 'Tech Internship',
        position: 'Frontend Intern',
        technologies: 'HTML5, CSS3, SASS',
        durationMonths: 2
    },
    {
        period: '2021 - 3 months',
        company: 'Fiverr',
        position: 'Freelance Frontend Developer',
        technologies: 'JavaScript, jQuery, Bootstrap',
        durationMonths: 3
    },
];

const totalMonths = FRONTEND_EXPERIENCE.reduce((acc, exp) => acc + exp.durationMonths, 0);
export const TOTAL_EXPERIENCE = monthsToString(totalMonths);