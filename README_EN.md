# Regular Food Order

For Turkish [click it](README.md) out.

An online food ordering application built with ReactJS, Redux, React-router-dom, TailwindCss, NodeJS, Express, Cors, Mongoose, Nodemon, and MongoDB.

## Features

- Users can sign up and sign in to the app.
- Users can browse and order food items from different categories.
- Users can add and remove items from their cart before checking out.
- Users can track their order status.

## Technologies Used

Front-end: ReactJS, Redux, React-router-dom, TailwindCss

Back-end: NodeJS, Express, Cors, Mongoose, Nodemon

Database: MongoDB

## Prerequisites

- Node.js 10.0.0 or newer
- MongoDB 4.0 or newer

## Installation

1.  Firstly, clone the repository
    `git clone https://github.com/keparlak/regularFoodOrder.git`
2.  Navigate to the Backend directory: `cd server`
3.  Install the dependencies: `npm install`
4.  Copy the configuration file: `cp .env.example .env`
    Edit the .env file and enter the required settings (for example, MongoDB connection string).
5.  Start the development server: `npm start`
6.  The back-end server will run at `http://localhost:5000`.
7.  Now, go to the front-end folder: `cd ../client`
8.  Install the dependencies: `npm install`
9.  Don't forget to configure Stripe PK in `src/pages/CheckOutPage.jsx`.
10. Start the application: `npm start`
11. The application will run at `http://localhost:3000`

## Usage

### Users

1. To create a new account, visit the `Sign Up` page.
2. Sign in with your account.
3. To view the menu, visit the `Menu` page.
4. To place an order, select the desired food and click the `Add to Cart` button.
5. You can view your current orders on the `My Orders` page. You can also cancel an order from here.

### Administrators

1. Sign in as an administrator.
2. To edit the menu, visit the `Menu Manager` page.
3. To view current orders, visit the `Orders`page.
4. Select an order to approve or reject it.
5. You can view statistics on current orders and order history on the `Statistics` page.

## Contributing

1.  Fork the project.
2.  Create a new branch (git checkout -b feature/fooBar)
3.  Make your changes.
4.  Verify your changes (git commit -am 'Add some fooBar')
5.  Merge your branch with the main branch (git merge develop)
6.  Delete your branch (git branch -d feature/fooBar)
7.  Push your changes (git push origin develop)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions and feedback, please contact me at kemreparlak@gmail.com
