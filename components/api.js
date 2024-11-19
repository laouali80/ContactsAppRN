const processContact = (contact) => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
});

export const fetchUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=50&nat=us");
  const { results } = await response.json();
  // console.log(results.map(processContact));
  //   return results.map(contact => processContact(contact));
  return results.map(processContact);
};
