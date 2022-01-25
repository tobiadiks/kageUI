import Image from "next/image";
export default function ProfileSkeletonCard() {
  return (
    <div
      className="mx-auto my-auto w-full p-4 md:w-64 flex
       flex-row justify-between align-middle   shadow-xl hover:shadow-md
        bg-white z-10 font-mono
           rounded-lg"
    >
      <div className="h-16 w-16 ">
        <div className="rounded-full ring-1 h-14 w-14 bg-gray-200 animate-pulse"></div>
      </div>

      <div className="ml-4 my-auto  w-full animate-pulse">
        <div className="w-24 h-3 bg-gray-200"></div>
        <div className="w-32 h-3 bg-gray-200 mt-1"></div>
        <div className="w-full h-3 bg-gray-200 mt-1"></div>
      </div>
    </div>
  );
}
