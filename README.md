# Project Documentation

## Overview
This project is a simple Todo application built using React. It allows users to add, update, and delete tasks, as well as mark them as complete. The application uses React Context API for state management and follows modern React best practices.

## Installation
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Usage
Once the project is running, you can access the Todo application in your web browser. You can add new tasks using the input field at the top, mark tasks as complete by clicking the checkbox, edit tasks by clicking the edit icon, and delete tasks by clicking the delete icon.

## File Structure
The project's file structure is organized as follows:
- `src/`: Contains all source code files.
  - `components/`: Contains React components used in the application.
  - `context/`: Contains files related to React Context API for state management.
  - `index.js`: Entry point of the application.
  - `App.jsx`: Main component of the application.
- `public/`: Contains static assets and HTML template files.

## Components
1. **TodoForm**: Component for adding new tasks.
2. **TodoItem**: Component for displaying individual tasks.
3. **index.js**: Exports all components from the components directory.

## Context
The project uses React Context API for managing state. The `TodoContext` provides state and actions related to todo items, such as adding, updating, deleting, and toggling completion status.

## External Dependencies
- React: JavaScript library for building user interfaces.
- ReactDOM: React package for DOM rendering.

## Known Issues
- No known issues at this time.

## Contributing
Contributions to the project are welcome! If you encounter any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Credits
- Developed by Varun Thakur

## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Context API Documentation](https://reactjs.org/docs/context.html)
- [GitHub Repository](https://github.com/varunthakur-io/)
