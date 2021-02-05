import { SocialIcon } from "react-social-icons";
const Contacts = ({ contacts }) => {
  return (
    <div id="contact" className="container mx-auto py-7">
      <div className="divider div-transparent"></div>
      <h1 className="text-4xl greenText flex justify-center">Contact</h1>
      <div className="text-2xl greenText flex justify-center py-6">
        {contacts.contactMessage}
      </div>
      <div className="text-2xl greenText flex justify-center py-6">
        <ul>
          {Object.keys(contacts.social).map((key) => (
            <li key={key}>
              <SocialIcon
                url={contacts.social[key]}
                className="m-2"
                target="_blank"
                fgColor="#fff"
              />
              <a href={contacts.social[key]} target="_blank" rel="noreferrer">
                {contacts.social[key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
