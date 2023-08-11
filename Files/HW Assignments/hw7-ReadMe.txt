Name: Gandhar Kulkarni
Student Id : 20702101
# User Registration Web Application

This is a Node.js Express web application designed to register users. The application consists of multiple parts that work together to create a functional user registration system. Below is a summary of the features and components implemented in the application:

- Created an Express web server in the `HW7.js` file.
- Defined constants for the host and port, set to "localhost" and 3000 respectively.
- Implemented two routes:
  - "/" route: Returns a test string to verify the route.
  - "/addname" route: Also returns a test string to verify the route.
- Utilized the Express body parser with extended property set to true for form processing.
- Integrated Handlebars as the template engine.
- Set the default layout to `basic_layout.hbs`.
- Designed the `get_request.hbs` view to render a user registration form.
- Developed the `post_request.hbs` view to display submitted user data.
- Implemented database connectivity using MongoDB and Mongoose.
- Created `db.js` and `credentials.js` modules for database connection.
- Created `data.js` file to define the database schema and perform data operations.
- Defined a Mongoose schema (`userSchema`) with fields: firstName, lastName, and DateTime.
- Created a Mongoose model (`User`) based on the userSchema.
- Modified the "/addname" route to accept POST requests.
- Integrated the Mongoose User model and mongoose library into the web application.
- Utilized the body of the POST request to create a new user using the User model.
- Added the current date and time to the DateTime property of the user data.
- Rendered the `post_request.hbs` view with the user data merged into the template.

Resources used: Lecture slides