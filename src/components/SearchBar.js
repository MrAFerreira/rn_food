import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={query}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newQuery) => onQueryChange(newQuery)}
        onEndEditing={() => onSubmit()}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'gainsboro',
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 16,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 16,
  },
});
