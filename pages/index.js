import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex font-mono flex-col px-2  justify-center h-screen bg-gradient-to-r from-red-100 to-yellow-100">
      <div className="text-center mx-auto">
        <h2 className=" font-bold text-2xl text-yellow-300 md:text-5xl">
          Hi! there
        </h2>
        <h2 className=" font-bold text-2xl text-green-300 md:text-5xl">
          Welcome to Kage UI
        </h2>
        <div className="text-gray-900 text-xs">
          Made with &#10084;&#65039; &{" "}
          <span className="font-bold text-blue-800">Tailwind CSS</span>
        </div>
        <div className="text-sm p-3 mt-8 bg-gradient-to-r from-red-400 to-yellow-400 ease-in-out transition-all cursor-not-allowed delay-300 hover:to-red-400 hover:from-yellow-400 font-bold md:w-1/2 mx-auto text-white rounded">
          Browse Components
        </div>
        <div className="mt-8 font-bold animate-pulse hover:text-blue-700"><a href="https://www.getrevue.co/profile/kage-ui" target={"_blank"} rel="noreferrer" >Join The Weekly Newsletter</a></div>
      </div>
    </div>
  );
}
