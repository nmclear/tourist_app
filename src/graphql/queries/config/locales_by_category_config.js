const props = ({ data }) => {
  const { loading, error, localesByCategory } = data;

  if (loading || error) return { loading, error };

  return {
    localesByCategory,
    loading,
    error,
  };
};

const options = ({ navigation }) => {
  const category = navigation.getParam('category');

  return {
    variables: { category },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

const config = { props, options };

export default config;
