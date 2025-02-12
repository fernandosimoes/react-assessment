const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse "
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CardSkeleton;
