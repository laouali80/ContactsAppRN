import { View, Text } from "react-native";
import React from "react";
import { SectionList } from "react-native-web";
import Row from "./Row";
import PropTypes from "prop-types";

const SectionListContacts = ({ contacts }) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));

  const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>;

  return (
    <SectionList
      renderItem={(obj) => <Row {...obj.item} />}
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
