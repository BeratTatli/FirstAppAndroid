import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const FirstComponent = ({name, year, changeState}) => {
  return (
    <View>
      <Text>
        {name} {year}
      </Text>
      <TouchableOpacity onPress={changeState}>
        <Text>Değiştir</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FirstComponent;

// export default class FirstComponent extends Component {
//   render() {
//     return (
//       <View>
//         <Text>First Component</Text>
//       </View>
//     );
//   }
// }
