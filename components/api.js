const processContact = (contact) => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
});

export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=50&nat=us");
  if (response.ok) {
    const { results } = await response.json();
    // console.log(results.map(processContact));
    //   return results.map(contact => processContact(contact));
    return results.map(processContact);
  }

  const errMessage = await response.text();
  // console.log(errMessage);
  throw new Error(errMessage.detail);
};

export const login = async (username, password) => {
  const response = await fetch("http://localhost:5555/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const { token } = await response.json();

    return token;
  }
  const errMessage = await response.json();
  // console.log(errMessage);
  throw new Error(errMessage.detail);
};
