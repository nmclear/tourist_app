import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

// import getEateriesByGroupQuery from '../../graphql/queries/eateries/get_eateries_by_group';
import MiniCard from '../MiniCard';

// import data from '../../dummyData/food';

class LocaleList extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.getParam('title'),
  // });

  renderItem = (locale) => {
    const { navigation } = this.props;

    const {
      id, name, groups, uri,
    } = locale;

    const onPress = () => navigation.navigate('LocalePage', { id });
    return (
      <MiniCard id={id} title={name} subtitle={groups.join(' - ')} uri={uri} onPress={onPress} />
    );
  };

  render() {
    // const {
    //   navigation, error, loading, eateries, locales,
    // } = this.props;

    const { locales } = this.props;

    // if (error) return <View />;
    // if (loading) return <View />;

    // const data = navigation.getParam('listData', []);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          // data={data}
          // data={eateries}
          data={locales}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

export default LocaleList;
// export default getEateriesByGroupQuery(LocaleList);
