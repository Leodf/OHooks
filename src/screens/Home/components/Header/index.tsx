import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../../assets/logo.png';
import {loadHeader} from '../../../../services/loadData';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      legend: '',
    },
  };

  updateHeader() {
    const data = loadHeader();
    this.setState({header: data});
  }

  componentDidMount(): void {
    this.updateHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcome}>{this.state.header.welcome}</Text>
        <Text style={styles.legend}>{this.state.header.legend}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Header;
