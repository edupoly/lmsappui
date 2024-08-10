
---

# LMS App UI

This repository is for the frontend of the **EduPoly LMS App**. It includes a React-based application that leverages Redux for state management, Bootstrap for styling, and WebSocket for real-time updates.

<div align="center" style="margin:4px">
  <img src="https://edupoly.in/common/assets/edupoly-logo-light.png" width="300px">
</div>

## Project Structure

The project is organized as follows:

- **`/src`**: Contains the source code for the application.
  - **`components`**: Contains reusable UI components.
  - **`features`**: Contains feature-specific code, such as slices, APIs, and feature components.
  - **`common`**: Contains shared components and utilities.
  - **`services`**: Contains API service definitions using `@reduxjs/toolkit/query`.
  - **`theme`**: Contains theme-related context and styles.
  
## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js (v14 or later).
- **npm**: Node package manager (npm) should be installed.

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lmsappui.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lmsappui
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.
- **`npm run eject`**: Ejects the app configuration (not recommended unless necessary).

## Dependencies

The project uses the following main dependencies:

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: The official, recommended way to write Redux logic.
- **[React Redux](https://react-redux.js.org/)**: Official React bindings for Redux.
- **[React Router DOM](https://reactrouter.com/)**: Declarative routing for React applications.
- **[Bootstrap](https://getbootstrap.com/)**: Frontend component library for responsive design.
- **[MDB React UI Kit](https://mdbootstrap.com/docs/react/)**: Material Design Bootstrap components.
- **[Formik](https://formik.org/)**: Form handling in React.
- **[Yup](https://github.com/jquense/yup)**: JavaScript schema builder for value parsing and validation.
- **[Socket.IO Client](https://socket.io/)**: Enables real-time, bidirectional, and event-based communication.
- **[Bootstrap Icons](https://icons.getbootstrap.com/)**: Free, high-quality, open-source icon library.

## Usage

After installation, you can start the development server by running:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- **State Management**: Handled using Redux Toolkit.
- **Real-Time Updates**: Enabled using WebSockets (Socket.IO).
- **Responsive Design**: Leveraging Bootstrap for responsive UI components.
- **Form Handling**: Managed with Formik and Yup for validation.
- **Theme Support**: Supports both light and dark themes.

## Contributing

Sai Babu Dasari<br>Harsha Vignyan Ayaluri<br>Murari

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out.

---
