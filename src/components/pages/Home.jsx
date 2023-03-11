import { Link } from "react-router-dom";

export default function Home() {
    const classOptions = ['Cooking', 'Gardening']

    return (
      <>
        <p>Welcome to Mel's Learning Garden</p>
        <div className="flex-testing">
          {/* <div className="flex-child">
            <div>Hiiiiii</div>
            </div>
            <div className="flex-child">
            <div>Helloooo</div>
        </div> */}
            <img
            src="./gardening_preschool.jpg"
            alt="preschooler gardening"
            className="yes"
            />
            <div>
                <h3>Hands-On Learning & Activities for Kids & Teens</h3>
                <p>
                From creating beautiful music and reading the best literature, to
                cooking up culinary creations from homegrown garden-fresh fruits and
                vegetables, to building positive physical and mental health and
                confidence through connection and the practice of true principles,
                this is the place where hearts and minds are nurtured.
                </p>

            </div>
        </div>
        <h2>Classess Offered</h2>
        <ul>
          {classOptions.map((option) => {
            return (
              <li>
                <Link>{option}</Link>
                <Link>{option}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
}