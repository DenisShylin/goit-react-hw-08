import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

// Utility для токена
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// Auth API
const register = async (credentials) => {
  const { data } = await axios.post("/users/signup", credentials);
  token.set(data.token);
  return data;
};

const logIn = async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  token.set(data.token);
  return data;
};

const logOut = async () => {
  await axios.post("/users/logout");
  token.unset();
};

const refreshUser = async (persistedToken) => {
  token.set(persistedToken);
  const { data } = await axios.get("/users/current");
  return data;
};

// Contacts API
const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

const addContact = async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
};

const deleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

const updateContact = async (contactId, update) => {
  const { data } = await axios.patch(`/contacts/${contactId}`, update);
  return data;
};

const api = {
  token,
  auth: { register, logIn, logOut, refreshUser },
  contacts: { fetchContacts, addContact, deleteContact, updateContact },
};

export default api;
