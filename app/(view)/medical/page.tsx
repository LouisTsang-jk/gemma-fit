export default function Medical() {
  return (
    <div className="h-full bg-red-200 w-full flex justify-center items-center p-8">
      <div className="h-[400px] w-full grid grid-cols-2 gap-4 bg-blue-300">
        {/* Left side - 50% width */}
        <div className="w-full">Ask a Doctor</div>
        {/* Right side - 50% width */}
        <div className="grid grid-rows-2 gap-4">
          <div>Check Diseases</div>
          <div>Check Medicines</div>
        </div>
      </div>
    </div>
  );
}
