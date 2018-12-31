const props = (props) => {
  const { data } = props;
  const { loading, error, locale } = data;

  if (loading || error) return { loading, error };
  return {
    locale,
    loading,
    error,
  };
};

const options = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

const config = { props, options };

export default config;
