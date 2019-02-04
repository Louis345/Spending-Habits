import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Ticker from './components/Ticker/Ticker';
import Row from './components/Row/Row.js';
import Column from './components/Column/Column.js';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { ORANGE_RED } from './styles/common';
export default class App extends Component {
  state = {
    secondTimer: false
  };
  onComplete = () => {
    this.setState({
      secondTimer: true
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.profile}>
          <Text style={styles.profileText}>Saori Taylor</Text>
          <Text style={styles.profileText}>Spending Habits</Text>
        </SafeAreaView>
        <Row title={'AMOUNT SPENT'} backgroundColor={'#FFF'} dollarSign>
          <Ticker
            value={4}
            startTimer
            onComplete={this.onComplete}
            tickerColor={'#FF4806'}
          />
          <Ticker value={9} startTimer={true} tickerColor={'#FF4806'} />
          <Ticker value={9} startTimer={true} tickerColor={'#FF4806'} />
        </Row>
        <Row
          title={'NUMBER OF PURCHASES'}
          body={'ITEMS'}
          backgroundColor={ORANGE_RED}
          body={'ITEMS'}
          bodyTextColor={'#FFF'}
        >
          <Ticker
            value={2}
            startTimer
            onComplete={this.onComplete}
            tickerColor={'#FFF'}
          />
          <Ticker value={7} startTimer={true} tickerColor={'#FFF'} />
        </Row>
        <Row
          title={`TOP 3 CATEGORIES`}
          bottomTitle={`OF YOUR PURCHASES`}
          backgroundColor={'#FFF'}
          bodyTextColor={'#FFF'}
          titleFont={ORANGE_RED}
        />
        <View style={styles.row}>
          <Column>
            <MaterialCommunityIcons
              name="shoe-heel"
              size={100}
              color={ORANGE_RED}
            />
            <View
              style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
            >
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
            </View>
          </Column>
          <Column>
            <Feather name="watch" size={90} color={ORANGE_RED} />
            <View
              style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
            >
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
            </View>
          </Column>
          <Column>
            <MaterialCommunityIcons
              name="shoe-heel"
              size={100}
              color={ORANGE_RED}
            />
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
              <Ticker value={6} startTimer={true} tickerColor={ORANGE_RED} />
            </View>
          </Column>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 0.1,
    backgroundColor: '#FF4806',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    color: '#fff',
    fontSize: 20
  },
  spentColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  purchasesColumn: {
    flex: 0.2,
    backgroundColor: '#FF4806',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  spentFont: {
    marginTop: 20,
    fontSize: 25,
    color: '#FEC0A9'
  },
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'space-evenly',

    flex: 0.3
  },
  spentText: {
    fontSize: 70,
    marginBottom: 100,
    color: '#FF4806'
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconColumn: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
