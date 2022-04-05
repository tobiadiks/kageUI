import Image from "next/image";

export default function IndexPage() {
  return (
    <div className=" font-mono relative  px-2 py-8 md:py-12 md:min-h-screen  justify-center h-full bg-gradient-to-br from-gray-800  to-gray-900">
            <div className="md:w-48 w-16 h-16 md:h-48 hover:scale-150 opacity-40 z-0 bg-gradient-to-r from-yellow-400 to-red-600 fixed bottom-0 rounded-full left-0 transform translate-y-1/2 -translate-x-1/2 "></div>
      <div className="text-center mx-auto z-40">
        
        <h2 className=" font-bold text-2xl z-40 bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text md:text-5xl">
          Welcome to Kage UI
        </h2>
        <h3 className=" font-bold text-lg z-40 md:text-2xl text-gray-100">
          The Weekly Custom Tailwind Component Newsletter
        </h3>
       
        <div className="mt-4 z-40">
          <a
            href="https://www.getrevue.co/profile/kage-ui"
            target={"_blank"}
            rel="noreferrer"
            className="text-base p-3 mt-4 bg-gradient-to-r from-yellow-400 to-red-600 ease-in-out transition-all cursor-pointer delay-300 hover:to-red-500 font-light md:w-1/2 mx-auto text-white rounded"
          >
            Browse Issues
          </a>
        </div>

        <div className="mt-8 font-bold z-40 animate-pulse  text-blue-500">
          Join The Weekly Newsletter
        </div>

        <div
          className="z-40 p-4 rounded-md mx-auto"
          id="revue-embed"
        >
          <form
            action="https://www.getrevue.co/profile/kage-ui/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
            className="md:flex z-40 justify-center"
          >
            <div className="revue-form-group z-40">
              {/* <label htmlFor="member_email">Email address</label> */}
              <input
                className="revue-form-field p-3 rounded-md md:rounded-l-md md:rounded-r-none border outline-none bg-white"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>

            <div className="revue-form-actions z-40">
              <input
                className="p-3 bg-gradient-to-r border from-yellow-400 to-red-600 text-white mt-2 md:mt-0 md:rounded-l-none rounded-md md:rounded-r-md font-light cursor-pointer hover:to-red-600"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            
          </form>
          <div className="revue-form-footer text-xs z-40 mt-2 text-gray-400">
              By subscribing, you agree with Revue’s{" "}
              <a
                target="_blank"
                href="https://www.getrevue.co/terms"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.getrevue.co/privacy"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </div>
        </div>
      </div>
      <div className="text-gray-100 z-40 text-center text-xs mt-8">
          Made with &#10084;&#65039; &{" "}
          <span className="font-bold text-blue-500">Tailwind CSS</span>
        </div>
    </div>
  );
}
