# React Assessment

## Description

This is a React project developed with Vite, TypeScript, Zustand, and React Router. It features a responsive user list fetched from the `https://randomuser.me/api`. The project includes an efficient filtering system using Zustand and unit tests with Jest and React Testing Library.

## Technologies Used

- **React 18**
- **Vite**
- **TypeScript 5**
- **Zustand 4** (state management)
- **React Router DOM 6** (navigation)
- **Axios 1.6** (HTTP requests)
- **Tailwind CSS 3** (styling)
- **Jest and React Testing Library** (unit testing)

## Features

- Display of a responsive user list.
- Filtering system using Zustand:
  - Filter by **gender** (male/female).
  - Filter by **name** (partial search).
  - Filter by **age range**.
- Global state management with Zustand.
- Unit tests for core components.

## Installation and Usage

### 1️⃣ Clone the repository:

```sh
 git clone https://github.com/your-username/react-assessment.git
 cd react-assessment
```

### 2️⃣ Install dependencies:

```sh
npm install
```

### 3️⃣ Run the application in development mode:

```sh
npm run dev
```

Access [http://localhost:5173](http://localhost:5173) to view the application in the browser.

### 4️⃣ Run tests

```sh
npm run test
```

## Project Structure

```
react-assessment/
│── src/
│   ├── services/      # APi configuration file and specific services http requests
│   ├── components/    # Reusable components, test files is together with the property file
│   ├── pages/         # Main pages, test files is together with the property file
│   ├── store/         # Global state with Zustand, test files is together with the property file
│   ├── App.tsx        # Main component and router handling
│   ├── main.tsx       # React entry point
│── public/
│── tsconfig.json      # TypeScript configuration
│── tailwind.config.js # Tailwind CSS configuration
│── vite.config.ts     # Vite configuration
│── package.json       # Dependencies and scripts
```

## Future Improvements

- Implement pagination.
- Improve UI design using Tailwind CSS.
- Expand test coverage for edge cases.
