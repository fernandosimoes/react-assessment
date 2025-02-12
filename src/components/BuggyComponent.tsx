import { useState } from "react";

const BuggyComponent = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Simulated user-triggered error!");
  }

  return (
    <button
      onClick={() => setHasError(true)}
      className="p-2 bg-red-500 text-white"
    >
      Click to force error screen
    </button>
  );
};

export default BuggyComponent;
