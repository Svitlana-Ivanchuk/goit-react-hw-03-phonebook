import { StyledBtnDelete, StyledContact, StyledList } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <StyledList>
        {contacts.map(contact => (
          <StyledContact key={contact.id}>
            {contact.name} : {contact.number}
            <StyledBtnDelete onClick={() => onDeleteContact(contact.id)}>
              Delete
            </StyledBtnDelete>
          </StyledContact>
        ))}
      </StyledList>
    </>
  );
};
