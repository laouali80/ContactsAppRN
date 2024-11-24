import { View, Text, SectionList } from "react-native";
import React from "react";
import Row from "./Row";
import PropTypes from "prop-types";

const SectionListContacts = ({ contacts, onSelectContact }) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const renderItem = ({ item }) => {
    // console.log("contacssss", { ...item });
    return <Row {...item} onSelectContact={onSelectContact} />;
  };

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));

  const renderSectionHeader = (obj) => (
    <View>
      <Text style={{ padding: 5 }}>{obj.section.title}</Text>
    </View>
  );

  return (
    //
    <SectionList
      // renderItem={(obj) => <Row {...obj.item} />}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      //   sections={[
      //     {
      //       title: "A",
      //       data: contacts,
      //     },
      //   ]}
      sections={sections}
    />
  );
};

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListContacts;
