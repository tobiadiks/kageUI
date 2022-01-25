import ProfileCard from "@components/cards/profileCard";
import ProfileSkeletonCard from "@components/cards/profileSkeletonCard";
export default function Issue3Page() {
    return (
        <div className="flex flex-col justify-center align-middle text-sm md:text-base px-2 md:p-0 h-screen bg-gradient-to-br from-gray-800  to-gray-900 relative">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-600 absolute top-1/2 rounded-full right-1/3 transform translate-x-12"></div>
          <ProfileCard/>
          
          <ProfileSkeletonCard/>
        </div>
      );
}