const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    return JSON.parse(await fs.readFile(contactsPath));
  } catch (error) {
    return console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    return (await listContacts()).find((item) => item.contactId === contactId);
  } catch (error) {
    return console.log(error);
  }
}

async function removeContact(contactId) {
  try {
  } catch (error) {
    return console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
  } catch (error) {
    return console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
