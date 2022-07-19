/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FirstComponent from './FirstComponent';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  //flex-direction : column , row , row-reverse, column-reverse
  //justify-content : flex-start, flex-end, center, space-between, space-around
  //flexWrap: nowrap, wrap
  //align-items: flex-start, flex-end

  constructor() {
    super();
    this.state = {
      name: 'Berat Tatli',
      year: 1998,
    };
  }

  //State nasıl oluşturulur?
  changeState = () => {
    this.setState(
      {
        name: 'Dilara',
        year: 1990,
      },
      () => {
        alert('Bilgiler Güncellendi');
      },
    );
  };

  render() {
    // return (
    //   /* flex direction örneği
    //         <View style={{flex: 1}}>
    //     <View style={{flex: 5, flexDirection: 'row'}}>
    //       <View style={[berat.welcome_area, {backgroundColor: 'blue'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'yellow'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'pink'}]} />
    //     </View>
    //     <View style={{flex: 1, flexDirection: 'row-reverse'}}>
    //       <View style={[berat.welcome_area, {backgroundColor: 'black'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'red'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'green'}]} />
    //     </View>
    //   </View>
    //    */
    //   <View style={{flex: 1}}>
    //     <View
    //       style={{flex: 5, flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}> {/*buradaki justify contente flex-start,flex-end, center be space-between, space around verip deneyebiliriz*/}
    //       <View style={[{backgroundColor: 'blue', width: 50, height: 50}]} />
    //       <View style={[{backgroundColor: 'blue', width: 50, height: 50}]} />
    //     </View>
    //     <View style={{flex: 1, flexDirection: 'row-reverse'}}>
    //       <View style={[berat.welcome_area, {backgroundColor: 'black'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'red'}]} />
    //       <View style={[berat.welcome_area, {backgroundColor: 'green'}]} />
    //     </View>
    //   </View>
    // )
    const {name, year} = this.state;
    //STATE KULLANIM ÖRNEĞİ
    // return (
    //   <View style={[{flex: 1, paddingTop: 100}]}>
    //     <Text>
    //       {name} {year}{' '}
    //     </Text>
    //     <TouchableOpacity onPress={this.changeState}>
    //       <Text>Değiştir</Text>
    //     </TouchableOpacity>
    //   </View>
    // );
    return (
      <View style={[{flex: 1, paddingTop: 100}]}>
        <FirstComponent name={name} year={year} />
      </View>
    );
  }
}

const berat = StyleSheet.create({
  welcome_area: {backgroundColor: 'red', flex: 1},
  welcome_text: {color: 'white', fontSize: 20},
});
