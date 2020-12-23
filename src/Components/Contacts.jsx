const Contacts = ({ contacts }) => {
  return (
    <div className="">
      <h3>Contacts Section</h3>
      <div>{contacts.contactMessage}</div>
      <div>
        <ul>
          {Object.keys(contacts.social).map((key) => (
            <li key={key}>{`${key}: ${contacts.social[key]}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
