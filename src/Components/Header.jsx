// import logo from "../logo.svg";
import { SocialIcon } from "react-social-icons";
import Navbar from "./Navbar";

const Header = ({ contacts }) => {
  return (
    // <header className="bg-gradient-to-b from-green-700 to-green-100">
    <header className="w-full bg-green-700">
      <div className="container mx-auto flex justify-between">
        <div className="text-green-100 text-3xl rounded p-3 m-3">
          /** Yulian Zyakun **/
        </div>

        {/* <img src={logo} className="App-logo" alt="Logo" /> */}
        <Navbar />
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon
            url={contacts.social.linkedin}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
          />
          <SocialIcon
            url={contacts.social.github}
            className="mr-4"
            target="_blank"
            fgColor="#fff"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
