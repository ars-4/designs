const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const ClassNames = [
    'Nursery',
    'Prep',
    'One',
    'Two',
    'Three',
    'Four',
]

const Studentsdata = {
    labels: days,
    datasets: [{
        label: 'Students',
        backgroundColor: '#242424',
        borderColor: 'teal',
        data: StudentsCount,
    }]
};

const TeachersData = {
    labels: days,
    datasets: [{
        label: 'Teachers',
        backgroundColor: 'teal',
        borderColor: 'teal',
        data: TeachersCount,
    }]
};

const ClassesData = {
    labels: ClassNames,
    datasets: [{
        label: 'Class Students Count',
        backgroundColor: [
            '#0d6efd',
            '#6f42c1',
            '#fd7e14',
            '#dc3545',
            'cyan',
            '#f44336',
        ],
        borderColor: '#242424',
        data: ClassCount,
    }]
}


const StudentsAttendanceChart = new Chart(
    document.getElementById('StudentsAttendanceChart'),
    {
        type: 'line',
        data: Studentsdata,
        options: {}
    }
);
const TeachersAttendanceChart = new Chart(
    document.getElementById('TeachersAttendanceChart'),
    {
        type: 'bar',
        data: TeachersData,
        options: {}
    }
);
const ClassList = new Chart(
    document.getElementById('ClassList'),
    {
        type: 'pie',
        data: ClassesData
    }
);