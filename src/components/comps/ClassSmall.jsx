export default function ClassSmall() {
    const classData = [
        {
            'id': 1,
            'name': 'Cooking',
            'nav_name': 'cooking',
            'tagline': 'Take your child\'s creativity to the max in our children\'s cooking classes!',
            'description':'Learn culinary skills and the basics of balanced nutrition while cooking up a storm, often using fresh, homegrown fruits and vegetables. (Don\'t worry! We will make plenty of goodies too!) Sign up now for a culinary adventure they will never forget!',
            'day': 'Thursdays',
            'schedule_elementary': '4:15pm',
            'schedule_teens': '5:30pm',
            'cost': '$60',
            'class_photos': []
        }
    ]

    return (
        <>
            <div>{classData[0].name}</div>
            <div>{classData[0].tagline}</div>
            <div>{classData[0].description}</div>
            <div>{classData[0].day}</div>
            <div>{classData[0].schedule_elementary}</div>
            <div>{classData[0].schedule_teens}</div>
            <div>{classData[0].cost}</div>
            <div>{classData[0].class_photos}</div>
            <div>{classData[0].class_photos}</div>
        </>
    )
}