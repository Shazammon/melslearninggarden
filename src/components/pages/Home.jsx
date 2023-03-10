import { Link } from "react-router-dom";

export default function Home() {
    const classOptions = ['Cooking', 'Gardening']

    return (
      <>
        <p>Welcome to Mel's Learning Garden</p>
        <img

            src='./gardening_preschool.jpg'
            alt='preschooler gardening'
            style={height:'300px'}
        />
        <h3>Hands-On Learning & Activities for Kids & Teens</h3>
        <p>
          From creating beautiful music and reading the best literature, to
          cooking up culinary creations from homegrown garden-fresh fruits and
          vegetables, to building positive physical and mental health and
          confidence through connection and the practice of true principles,
          this is the place where hearts and minds are nurtured.
        </p>
        <h2>Classess Offered</h2>
        <ul>
          {classOptions.map((option) => {
            return (
              <li>
                <Link>{option}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
}