import { SocialIcon } from "react-social-icons";
const Contacts = ({ contacts }) => {
  return (
    <div id="contact" className="container mx-auto py-7">
      <h1 className="text-4xl text-gray-700 flex justify-center">
        My Contacts
      </h1>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        {contacts.contactMessage}
      </div>
      <div className="text-2xl text-gray-600 flex justify-center py-6">
        <ul>
          {Object.keys(contacts.social).map((key) => (
            <li key={key}>
              <SocialIcon
                url={contacts.social[key]}
                className="m-2"
                target="_blank"
                fgColor="#fff"
              />
              {contacts.social[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
