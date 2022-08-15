import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: query,
          location: 'Lisbon',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onSubmit={searchApi}
      />
      <Text>{query}</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
