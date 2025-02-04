// redux/filters/selectors.js
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.name.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
