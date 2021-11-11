import PropTypes from "prop-types";

const ContactListItem = ({ contacts, handleDeleteContact }) => {
    return contacts.map(({key,name,number}) => {
       return (
    <li key={key} className="contact_item">
      <span>{name}</span>: <span>{number}</span>
      <button className="contact_btn" onClick={() => handleDeleteContact(key)}>
        Delete
      </button>
    </li>
  );
   })
  
};

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    handleDeleteContact: PropTypes.func.isRequired
}


export { ContactListItem };
