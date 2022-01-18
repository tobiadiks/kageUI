import GlassCard from "@components/cards/glassCard";

export default function GlassMorphismPage() {
  return (
    <div className="flex justify-center align-middle text-sm md:text-base px-2 md:p-0 h-screen bg-gradient-to-br from-gray-800  to-gray-900 relative">
      <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-600 absolute top-1/2 rounded-full right-1/3 transform translate-x-12"></div>
      <GlassCard />
    </div>
  );
}
