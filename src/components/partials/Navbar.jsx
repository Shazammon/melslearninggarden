import { Link } from 'react-router-dom'

// tailwind styling for this comes from: https://tailwindcomponents.com/component/navbar from: https://flowbite.com/docs/components/navbar/

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
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="w-10 h-10"
                src="/logo.png"
                alt="Mels Learning Garden Logo"
              />
              <span className="self-center text-l font-semibold whitespace-nowrap dark:text-green hover:text-green-600 mr-4">
                Mel's Learning Garden
              </span>
            </div>
          </Link>

          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white-900 dark:border-gray-700">
                {navBarOptions.map((option) => {
                    return (
                    <li>
                        <Link
                        className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-800 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-green-700 md:dark:hover:bg-transparent dark:border-gray-700"
                        to={option.linkName}
                        >
                        {option.navBarName}
                        </Link>
                    </li>
                    );
                })}
            </ul>
          </div>
        </div>
      </nav>
    );
    }
 
    // <nav>
    //     <ul>
    //         <li>
    //             <Link
    //                 to="/"
    //             >
    //                 Mel's Learning Garden
    //             </Link>
    //         </li>
    //         {navBarOptions.map((option) => {
    //             return (
    //                 <li>
    //                     <Link
    //                         to={option.linkName}
    //                     >
    //                         {option.navBarName}
    //                     </Link>
    //                 </li>
    //             )
    //         })}
    //     </ul>
    // </nav>