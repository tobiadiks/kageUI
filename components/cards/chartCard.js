export default function ChartCard() {
  return (
    <div
      className="mx-auto my-auto w-full p-4 md:w-1/3 flex
       flex-col justify-between shadow-xl hover:shadow-md
        bg-white z-10 font-mono
         uppercase font-bold text-black rounded-lg"
    >
      <div className="flex justify-between mb-8">
        <div>
          <div className="font-bold">Daily Stats</div>
          <div className="text-xs font-light text-gray-500">
            This are overall summary
          </div>
        </div>
        <div className="h-12 w-12 bg-blue-100 rounded-full flex justify-center align-middle">
          <span className="my-auto mx-auto text-blue-700 font-bold">16</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[20%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[45%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[30%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[60%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[80%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[50%]  bg-blue-700"></div>
        </div>
        <div className="h-32 w-3 relative bg-gray-300 rounded-md">
          <div className="absolute bottom-0 rounded-md z-10 w-full h-[30%]  bg-blue-700"></div>
        </div>
      </div>
    </div>
  );
}
