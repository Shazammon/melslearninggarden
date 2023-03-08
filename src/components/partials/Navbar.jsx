import { Link } from 'react-router-dom'

export default function Navbar() {
    const navBarOptions = [
        {
            'navBarName': 'Classes', 
            'linkName': 'classes'
        },
        {
            'navBarName': 'Schedule',
            'linkName':'schedule'
        },
        {
            'navBarName': 'Tuition Cost',
            'linkName':'tuition'
        },
        {
            'navBarName': 'About Me',
            'linkName':'about'
        },
        {
            'navBarName': 'Make a Payment',
            'linkName':'payment'
        },
    ]

    return (
        <nav>
            <ul>
                <li>
                    <Link
                        to="/"
                    >
                        Mel's Learning Garden
                    </Link>
                </li>
                {navBarOptions.map((option) => {
                    return (
                        <li>
                            <Link
                                to={option.linkName}
                            >
                                {option.navBarName}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}