import { ReactNode, useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      console.error("ErrorBoundary caught an error:", event.error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold">Something went wrong.</h1>
        <p>
          Please try{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => location.reload()}
          >
            refreshing
          </button>{" "}
          the page.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
