import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, StatusBar, ToolbarAndroid } from 'react-native';
import { DrawerNavigator, DrawerView, StackNavigator } from 'react-navigation';

import {Header, Icon, Divider } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
<View>

  <StatusBar
    translucent
    backgroundColor="rgba(0, 0, 0, 0.20)"
    animated
    />
  <View style = {{height:24}}>

    <Text>Hello, Chat App!</Text>
    <Button
      onPress={() => navigate('Chat')}
      title="Chat with Lucy"
      />
  </View>
</View>

            );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',

  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const MenuButton = () => (
  <Ionicons.Button
    onPress={() => this.props.navigation.navigate('DrawerToggle')}
    name={'md-menu'}
    size={30}
    backgroundColor = 'transparent'
    color = 'white'
    style = {styles.menuButton}
    />
);
const MainDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={20}
            style={{color:tintColor}}
            />
        ),
      }
    },

    // {{styles.drawIcon}}

    Chat: {
      screen: ChatScreen,
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
    drawerWidth: 300,
    drawerPosition: 'left',
    drawerBackground: 'transparent'
  }

);

// <ToolbarAndroid
// style={{
// height: 56,
// backgroundColor: "#673AB7",
// elevation: 4,
// }}
// titleColor="white"
// title="CheeseSquare"
// />

 const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default MainDrawer;



// const MenuButton = () => (
//   <Ionicons.Button
//     onPress={() => this.props.navigation.navigate('DrawerToggle')}
//     name={'md-menu'}
//     size={30}
//     backgroundColor = 'transparent'
//     color = 'white'
//     style = {styles.menuButton}
//     />
// );
//
// const SettingsButton = () => (
//   <Ionicons.Button
//     onPress={() => navigation.navigate('DrawerToggle')}
//     name={'md-settings'}
//     size={30}
//     backgroundColor = 'transparent'
//     color = 'white'
//     style = {styles.menuButton}
//     />
// );
//
// const MainHeader = ({nav}) => (
//   <Header
//
//     statusBarProps={{ backgroundColor: 'black', barStyle: 'light-content' }}
//
//     leftComponent = {
//       <Ionicons.Button
//         onPress={() => nav.navigate('DrawerToggle')}
//         name={'md-menu'}
//         size={30}
//         backgroundColor = 'transparent'
//         color = 'white'
//         style = {styles.menuButton}
//         />
//     }
//
//     centerComponent = {<Text style={{color: 'white'}} h1>Favent</Text>}
//
//     rightComponent = {
//       <Ionicons.Button
//         onPress={() => nav.navigate('DrawerToggle')}
//         name={'md-settings'}
//         size={30}
//         backgroundColor = 'transparent'
//         color = 'white'
//         style = {styles.menuButton}
//         />
//     }
//
//     backgroundColor = 'rgb(35, 170, 51)'
//     style = {styles.mainHeader}
//     />
// );
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//     headerMode: 'float',
//     header: ({ navigate }) => ({
//     left: (
//       <IconToggle
//         onPress={() => navigate('DrawerOpen')}
//       />
//     ),
//     })
//   }
//
//   render() {
//     return (
//         <View style = {styles.view}>
//           <StatusBar backgroundColor="blue" barStyle="light-content" />
//           <Text>Home Screen</Text>
//             <Divider style={{ backgroundColor: 'blue' }} />
//         </View>
//     );
//   }
// }
//
// // const HomeScreen = ({navigation}) => (
// //   <View>
// //    <MainHeader nav = {navigation} />
// //     <View style = {styles.view}>
// //       <StatusBar backgroundColor="blue" barStyle="light-content" />
// //       <Text>Home Screen</Text>
// //         <Divider style={{ backgroundColor: 'blue' }} />
// //
// //     </View>
// //
// //   </View>
// //
// // );
//
// const ProfileScreen = ({navigation}) => (
//   <View>
//
//
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//
//       <Text>Profile Screen</Text>
//     </View>
//
//   </View>
//
// );
//
// const MainStack = StackNavigator({
//   Home: {screen: HomeScreen},
//   ProfileScreen: {screen: ProfileScreen}
// }, {
//   headerMode: 'float',
//   header: MainHeader,
// });
//
// const MainDrawer = DrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions:{
//         drawerLabel: 'Home',
//         drawerIcon: ({ tintColor, focused }) => (
//           <Ionicons
//             name={focused ? 'ios-home' : 'ios-home-outline'}
//             size={20}
//             style={{color:tintColor}}
//             />
//         ),
//       }
//     },
//
//     // {{styles.drawIcon}}
//
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         drawerLabel: 'Profile',
//         drawerIcon: ({ tintColor, focused }) => (
//           <Ionicons
//             name={focused ? 'ios-person' : 'ios-person-outline'}
//             size={20}
//             style={{ color: tintColor }}
//             />
//         ),
//       },
//     },
//   },
//   //Config
//   {
//     headerMode: 'float',
//     header: MainHeader,
//     drawerWidth: 300,
//     drawerPosition: 'left',
//     drawerBackground: 'transparent'
//   }
//
// );
//
// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//
//   drawIcon: {
//     // color: 'rgb(0,0,0)',
//     tintColor: 'rgb(0,122,255)'
//   },
//
//   menuButton: {
//     //position:
//   },
//
//   mainHeader:{
//     backgroundColor: 'rgb(35, 170, 51)',
//     color: 'rgb(35, 170, 51)'
//   }
// })
//
// export default MainDrawer;
