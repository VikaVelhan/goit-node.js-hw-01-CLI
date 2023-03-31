const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const delContact = await removeContact(id);
      console.log(delContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

//const name = "Anny May";
//const email = "annyMay@mail.com";
//const phone = "(145)741-7475";

const id = "f433aec9-c4c2-4b7d-b5a4-b6e07d4fe7de";

invokeAction({ action: "remove", id });
