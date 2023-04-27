/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { OriginContextProvider, DestinationContextProvider } from './src/contexts/contexts';
// import RoootNavigator from './src/navigations/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
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
  },
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
