const express = require("express");
const app = express();
const { sortContacts, filterContacts } = require("@jworkman-fs/asl");

app.use(express.json()); // Middleware to parse JSON requests

// Placeholder data for contacts
let contacts = [];

// Function to generate a unique ID for new contacts
function generateId() {
  return Math.floor(Math.random() * 10000) + 1;
}

// GET all contacts with sorting and filtering
app.get("/v1/contacts", (req, res) => {
  let processedContacts = [...contacts]; // Create a copy of contacts array to avoid mutation

  // Sorting
  const { sort, direction } = req.query;
  if (sort && direction) {
    processedContacts = sortContacts(processedContacts, sort, direction);
  }

  // Filtering
  const { filter } = req.query;
  if (filter) {
    processedContacts = filterContacts(processedContacts, filter);
  }

  res.json(processedContacts);
});

// GET single contact by ID
app.get("/v1/contacts/:id", (req, res) => {
  const contact = contacts.find((c) => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.json(contact);
});

// POST a new contact
app.post("/v1/contacts", (req, res) => {
  const newContact = req.body;
  newContact.id = generateId(); // Assign a unique ID
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// PUT update a contact by ID
app.put("/v1/contacts/:id", (req, res) => {
  const contactIndex = contacts.findIndex(
    (c) => c.id === parseInt(req.params.id),
  );
  if (contactIndex === -1)
    return res.status(404).json({ message: "Contact not found" });
  contacts[contactIndex] = { ...contacts[contactIndex], ...req.body };
  res.json(contacts[contactIndex]);
});

// DELETE a contact by ID
app.delete("/v1/contacts/:id", (req, res) => {
  const contactIndex = contacts.findIndex(
    (c) => c.id === parseInt(req.params.id),
  );
  if (contactIndex === -1)
    return res.status(404).json({ message: "Contact not found" });
  const deletedContact = contacts.splice(contactIndex, 1);
  res.json(deletedContact);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
