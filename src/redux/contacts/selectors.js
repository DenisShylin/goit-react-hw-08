import { createSelector } from "@reduxjs/toolkit";

const getContactsState = (state) => state.contacts;
const getFilterState = (state) => state.filter.name || "";

export const contactsSelectors = {
  getItems: (state) => getContactsState(state).items,
  getIsLoading: (state) => getContactsState(state).isLoading,
  getError: (state) => getContactsState(state).error,
  getFilter: () => getFilterState,
  getFilteredContacts: createSelector(
    [(state) => getContactsState(state).items, getFilterState],
    (contacts, filter) => {
      if (!filter) return contacts;
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
  ),
};
