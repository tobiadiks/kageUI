import Image from "next/image";
export default function ProfileCard() {
  return (
    <div
      className="mx-auto my-auto w-full p-4 md:w-64 flex
       flex-row justify-between align-middle  shadow-xl hover:shadow-md
        bg-white z-10 font-mono
           rounded-lg"
    >
      <div className="h-16 w-16 ">
        <Image
          className="rounded-full h-14 w-14"
          alt="kage"
          src="/kage.jpg"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      <div className="ml-4 md:ml-0 my-auto">
        <div className="font-light text-sm">Written By</div>
        <div className="font-bold text-sm">Adeleke Oluwatobi</div>
        <div className="font-light text-gray-600 text-xs">
          Frontend Engineer.
        </div>
      </div>
    </div>
  );
}
