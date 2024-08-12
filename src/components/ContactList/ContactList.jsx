import { nanoid } from 'nanoid';
import { StyledList, StyledButton } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebook-slice';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <StyledList>
      {contacts.map(item => {
        return (
          <li key={nanoid()}>
            {item.name}: {item.number}{' '}
            <StyledButton
              type="button"
              onClick={() => {
                dispatch(removeContact(item.id));
              }}
            >
              Delete
            </StyledButton>
          </li>
        );
      })}
    </StyledList>
  );
};
