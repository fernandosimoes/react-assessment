# React Assessment

## Description

This is a React project developed with Vite, TypeScript, Zustand, and React Router. It features a responsive user list fetched from [randomuser.me API](https://randomuser.me/api). The project includes an efficient filtering system using Zustand and unit tests with Jest and React Testing Library.

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
- Performance optimization using `useMemo` and `useEffect`.
- Error handling with proper fallback UI.

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
│   ├── services/      # API configuration and service functions
│   ├── components/    # Reusable components, with test files included
│   ├── pages/         # Main pages, with test files included
│   ├── store/         # Global state with Zustand, with test files included
│   ├── App.tsx        # Main component and router handling
│   ├── main.tsx       # React entry point
│── public/
│── tsconfig.json      # TypeScript configuration
│── tailwind.config.js # Tailwind CSS configuration
│── vite.config.ts     # Vite configuration
│── package.json       # Dependencies and scripts
```

## Assumptions and Decisions

- **API Choice:** The project uses the [randomuser.me API](https://randomuser.me/api) to generate a dynamic user list instead of a static dataset.
- **State Management:** I believe that Zustand was recommended for this project because its lightweight and efficient state management capabilities, enabling easy filtering without unnecessary re-renders.
- **Filtering Approach:** Filtering is done on the frontend using Zustand and `useMemo`, ensuring performance optimization.
- **Component Composition:** Components are modular, with separation of concerns to enhance reusability and maintainability.
- **Testing Strategy:** Jest and React Testing Library are used to cover rendering and filtering logic.

## Implementation Details

- **Data Fetching:** `getUsers` function fetches data from the API using Axios and stores it in local state.
- **Filtering Logic:** The `useMemo` hook is used to filter the list based on user selections (gender, name, and age range), preventing unnecessary computations.
- **State Management:** Zustand is used to manage filter state globally, reducing prop drilling.
- **Error Handling:** The app includes an error boundary to catch and display errors gracefully.
- **Performance Considerations:** Skeleton loaders are used to improve UX during data fetching, and `useMemo` helps prevent unnecessary re-renders.
