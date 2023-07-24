import React, { useState } from "react";

const Page2 = () => {
  const [contacts, setContacts] = useState([
    { email: "", label: "", type: "" },
  ]);

  const addContact = () => {
    if (contacts.length < 3) {
      setContacts([...contacts, { email: "", label: "", type: "" }]);
    } else {
      alert("You have reached the limit of 3 contacts");
    }
  };

  const handleChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"></h1>
      <form>
        {contacts.map((contact, index) => (
          <div key={index} className="mb-4">
            <div>
              <label
                htmlFor={`email${index}`}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Contacto {index + 1}:
              </label>
              <input
                type="email"
                id={`email${index}`}
                value={contact.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor={`label${index}`}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Etiqueta Contacto {index + 1}:
              </label>
              <input
                type="text"
                id={`label${index}`}
                value={contact.label}
                onChange={(e) => handleChange(index, "label", e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                htmlFor={`type${index}`}
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tipo Contacto {index + 1}:
              </label>
              <select
                id={`type${index}`}
                value={contact.type}
                onChange={(e) => handleChange(index, "type", e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="option1">Receptor</option>
                <option value="option2">Validator</option>
                <option value="option3">Receptor y Validator</option>
              </select>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addContact}
          className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-70"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default Page2;
