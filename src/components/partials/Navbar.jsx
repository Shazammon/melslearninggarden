import { Link } from 'react-router-dom'

export default function Navbar() {
    const navBarOptions = [
        {
            'navBarName': 'Classes', 
            'linkName': 'class'
        },
        {
            'navBarName': 'Schedule',
            'linkName':'schedule'
        }
        //  'Tuition Cost', 'About Me', 'Make a Payment'
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