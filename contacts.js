const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

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
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    if (!result) {
      return null;
    }
    return result;
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
    const contacts = await listContacts();
    const newContact = { id: v4(), name, email, phone };

    const updatedContacts = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return newContact;
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
