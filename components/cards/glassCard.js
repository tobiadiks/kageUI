export default function GlassCard() {
  return (
    <div
      className="mx-auto my-auto w-full p-4 md:w-1/3 flex
     flex-col justify-between shadow-xl hover:shadow-md
      backdrop-filter backdrop-blur-md z-10 font-mono
       uppercase font-bold text-gray-300 rounded-lg"
    >
      <div className="flex justify-between mb-8">
        <div>Membership</div>
        <div>#001</div>
      </div>
      <div>
        <div>Adeleke oluwatobi</div>
        <div className="text-xs">Kage.UI</div>
      </div>
    </div>
  );
}
