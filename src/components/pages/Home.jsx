import { Link } from "react-router-dom";

export default function Home() {
    const classOptions = ['Cooking', 'Gardening']

    return (
      <>
        <p>Welcome to Mel's Learning Garden</p>
        <div className="div-one">
          {/* <div className="flex-child">
            <div>Hiiiiii</div>
            </div>
            <div className="flex-child">
            <div>Helloooo</div>
        </div> */}
          <img
            src="./gardening_preschool.jpg"
            alt="preschooler gardening"
            className="img-one"
          />
          <div className="div-two">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Hands-On Learning & Activities
              </span>{" "}
              for Kids & Teens.
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              From creating beautiful music and reading the best literature, to
              cooking up culinary creations from homegrown garden-fresh fruits
              and vegetables, to building positive physical and mental health
              and confidence through connection and the practice of true
              principles, this is the place where hearts and minds are nurtured.
            </p>
          </div>
        </div>
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