export default function Loading() {
  return (
    <div className="bg-dark90 flex space-x-2 justify-center items-center h-[100dvh] w-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s] sm:h-8 sm:w-8"></div>
      <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s] sm:h-8 sm:w-8"></div>
      <div className="h-4 w-4 bg-white rounded-full animate-bounce sm:h-8 sm:w-8"></div>
    </div>
  );
}
