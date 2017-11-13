import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator, DrawerView } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={20}
        style={{ color: 'rgb(69, 94, 182)' }}
      />
    ),
  };

  render(){
    return(
      <View style = {styles.view}>
        <Text>Home Screen</Text>
      <Button
          onPress={() => navigation.navigate('DrawerToggle')}
          title="Drawer Button"
        ></Button>

      <FontAwesome.Button
        name={'navicon'}
        size={20}
        style={{
          backgroundColor: 'rgb(55, 130, 177)',
          color: 'rgb(69, 94, 182)'
        }}
      />

      </View>
    );
  }
}
  const styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
});

// const HomeScreen = ({navigation}) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//       <Button
//         onPress={() => navigation.navigate('DrawerToggle')}
//         title="Open Drawer"
//       />
//   </View>
// );

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

// navigationOptions: {
//   drawerLabel: 'Home',
//   drawerIcon: ({ tintColor, focused }) => (
//     <Ionicons
//       name={focused ? 'ios-home' : 'ios-home-outline'}
//       size={20}
//       style={{ color: tintColor }}
//     />
//   ),
// },

const MainDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,

  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
},
//Config
{
  drawerWidth: 200,
  drawerPosition: 'left',
  drawerBackground: 'transparent'
}

);

export default MainDrawer;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> </Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//
//         <Button> Test </Button>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
