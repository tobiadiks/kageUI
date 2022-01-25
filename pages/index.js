import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex font-mono flex-col px-2  justify-center h-screen bg-blue-50">
      <div className="text-center mx-auto">
        
        <h2 className=" font-bold text-2xl bg-blue-500 text-transparent bg-clip-text md:text-5xl">
          Welcome to Kage UI
        </h2>
<<<<<<< HEAD
        <h3 className=" font-light text-base md:text-2xl text-blue-800">
=======
        <h3 className=" font-bold text-lg md:text-2xl text-blue-500">
>>>>>>> b7a8e030511af544a5a4a81b8634645a57a4bf57
          The Weekly Custom Tailwind Component Newsletter
        </h3>
       
        <div className="mt-4">
          <a
            href="https://www.getrevue.co/profile/kage-ui"
            target={"_blank"}
            rel="noreferrer"
            className="text-sm p-3 mt-4 bg-blue-500 ease-in-out transition-all cursor-pointer delay-300 hover:bg-blue-400 font-bold md:w-1/2 mx-auto text-white rounded"
          >
            Browse Issues
          </a>
        </div>

<<<<<<< HEAD
        <div className="mt-4 font-light animate-pulse hover:text-blue-700">
=======
        <div className="mt-4 font-bold animate-pulse hover:text-blue-500">
>>>>>>> b7a8e030511af544a5a4a81b8634645a57a4bf57
          Join The Weekly Newsletter
        </div>

        <div
          className="bg-blue-500 p-4 rounded-md mx-auto"
          id="revue-embed"
        >
          <form
            action="https://www.getrevue.co/profile/kage-ui/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <div className="revue-form-group">
              {/* <label htmlFor="member_email">Email address</label> */}
              <input
                className="revue-form-field p-3 rounded-md"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>

            <div className="revue-form-actions mt-2">
              <input
                className="p-2 bg-white rounded-md font-bold cursor-pointer hover:shadow-md"
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div className="revue-form-footer text-xs mt-2 text-white">
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
          </form>
        </div>
      </div>
      <div className="text-gray-900 text-center text-xs mt-8">
          Made with &#10084;&#65039; &{" "}
          <span className="font-bold text-blue-500">Tailwind CSS</span>
        </div>
    </div>
  );
}
