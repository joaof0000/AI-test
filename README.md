AI Blog
This AI Blog Platform is a web application that allows users to create, read, update, and delete blog articles. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Semantic UI React for the user interface. The application provides a clean and intuitive interface for users to publish their articles and interact with others' posts. Users can create an account, log in, and access their own profile page to manage their articles. The platform also supports features like liking on articles.

The backend of the application is implemented using Express.js, which serves as the RESTful API for handling user requests. The data is stored in a MongoDB database using Mongoose for data modeling. The API endpoints handle CRUD (Create, Read, Update, Delete) operations for articles, allowing users to perform various actions on their posts. Authentication and authorization are managed using JWT (JSON Web Tokens) to ensure that only authorized users can create, edit, or delete their articles.

The frontend is developed using React.js, providing a smooth and responsive user experience. The application utilizes components from the Semantic UI React library for a visually appealing design. Users can view articles in a grid layout, with options to like, comment, edit, and delete their own articles. The application makes API calls to interact with the backend and fetch or update article data.

The AddedArticles component is a reusable React component that renders individual articles on the user interface. It handles actions like adding likes, removing likes, and deleting articles through button clicks. The ArticleBlog component displays a collection of articles in a Card Group layout and uses AddedArticles to render each article. Users can view articles on their profile and interact with them accordingly.

The updateApi.js file contains utility functions to interact with the backend API for CRUD operations. The functions use fetch to make HTTP requests to the appropriate API endpoints, passing data in JSON format and handling JWT-based authentication.

To get started with the AI Blog Platform, users need to have Node.js and MongoDB installed on their machines. They can clone the repository, install the necessary dependencies, and run both the frontend and backend servers. The README.md file in the repository provides detailed instructions on how to set up and run the application. Additionally, the package.json files in the frontend and backend directories list all the required dependencies and scripts for running the application.

Overall, the AI Blog Platform provides an accessible and user-friendly interface for users to showcase their writing skills and engage with a community of bloggers. The MERN stack ensures a robust and scalable architecture, making it easy to extend the functionality of the application in the future. With features like user authentication, article management, and interaction with other users' posts, the AI Blog Platform is a comprehensive solution for anyone looking to create their own blog and share their thoughts with the world.

![Image](Login.png)
![Image](EnterBlog.png)
![Image](MyBlogs.png)




