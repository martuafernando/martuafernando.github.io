export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid mx-auto mb-4"></div>
        <p className="text-lg font-medium text-gray-700">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
