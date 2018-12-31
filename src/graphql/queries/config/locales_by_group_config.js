const props = ({ data }) => {
  const { loading, error, localesByGroup } = data;

  if (loading || error) return { loading, error };

  return {
    locales: localesByGroup,
    loading,
    error,
  };
};

const options = ({ navigation }) => {
  const category = navigation.getParam('category');
  const group = navigation.getParam('group');

  return {
    variables: { category, group },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

const config = { props, options };

export default config;
