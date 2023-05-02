/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { OriginContextProvider, DestinationContextProvider } from './src/contexts/contexts';
// import RoootNavigator from './src/navigations/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from 'react-native-elements';
import { parameters } from './src/global/styles';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: colors.blue,
    paddingTop: parameters.statusBarHeight,
    height: parameters.headerHeight,
    alignItems: 'flex-start',
  },
  image1: {
    height: 100,
    width: 100,
  },
  image2: { height: 100, width: 100, borderRadius: 30 },
  home: { backgroundColor: colors.blue, paddingLeft: 20 },
  text1: { color: colors.white, fontSize: 20, paddingBottom: 20, paddingTop: 20 },
  text2: { color: colors.white, fontSize: 16 },
  view1: { flexDirection: row, flex: 1, paddingTop: 30 },
  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button1Text: { color: colors.white, fontSize: 17, marginTop: -2 },
  card: { alignItems: 'center', margin: ScreenWidth / 22 },
  view2: { marginBottom: 5, borderRadius: 20, backgroundColor: colors.grey5 },
  title: { color: colors.black, fontSize: 16 },
  view3: {
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: colors.grey5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  text3: { marginLeft: 20, fontSize: 15, color: colors.black },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 25,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    flex: 1,
  },
  view6: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
  },
  view7: {
    backgroundColor: colors.grey5,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  map: { height: 150, width: ScreenWidth * 0.92 },
  text4: { fontSize: 20, color: colors.black, marginLeft: 20, marginBottom: 20 },
  icon1: { marginLeft: 10, marginTop: 5 },
  view8: { flex: 4, marginTop: -25 },
  carsAround: { width: 28, height: 14 },
  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view9: { width: 4, height: 4, borderRadius: 2, backgroundColor: colors.white },
});

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
// import { Icon } from 'react-native-elements';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // handle login logic here
//     ToastAndroid.show('Toasted Default Message', ToastAndroid.SHORT);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Icon name="email" type="material" color="#777" size={20} />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#777"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Icon name="lock" type="material" color="#777" size={20} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#777"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     marginVertical: 10,
//     width: '80%',
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     height: 40,
//   },
//   loginButton: {
//     backgroundColor: '#007AFF',
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;
