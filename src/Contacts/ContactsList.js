import PropTypes from "prop-types";
import {ContactListItem} from "./ContactListItem"

const ContactList = ({contacts, handleDeleteContact}) => {
    return (
        <ul className="contact_list">
                    <ContactListItem
                        contacts={contacts}
                        handleDeleteContact={handleDeleteContact}
                    />
          </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
    handleDeleteContact: PropTypes.func.isRequired
}
export default ContactList