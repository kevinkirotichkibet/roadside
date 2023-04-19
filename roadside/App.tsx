/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
@format





 */
// import React, { useState } from 'react';

// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

//   const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const handleLogin = () => {
//         // Perform login logic here
//     if (username === 'exampleuser' && password === 'examplepassword') {
//       // Successful login
//       Alert.alert('Login Successful', 'Welcome back, ' + username);
//       // Navigate to home screen after successful login
//       navigation.navigate('Home');
//     } else {
//       // Failed login
//       setError('Invalid username or password');
//     }
//   };



//   return (
// <View style={styles.container}>
// <TextInput
//         style={styles.input}
//         onChangeText={(text) => setUsername(text)}
//         value={username}
//         placeholder="Username"
//       />
// <TextInput
//         style={styles.input}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         placeholder="Password"
//         secureTextEntry
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
// <Button title="Login" onPress={handleLogin} />
// </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 16,
//   },
// });

// export default LoginScreen;


// const LoginScreen = () => {
// const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Perform login logic here
//     if (username === 'exampleuser' && password === 'examplepassword') {
//       // Successful login
//       Alert.alert('Login Successful', 'Welcome back, ' + username);
//       // Navigate to home screen after successful login
//       navigation.navigate('Home');
//     } else {
//       // Failed login
//       setError('Invalid username or password');
//     }
//   };

//

//   return (
// <View style={styles.container}>
// <TextInput
//         style={styles.input}
//         onChangeText={(text) => setUsername(text)}
//         value={username}
//         placeholder="Username"
//       />
// <TextInput
//         style={styles.input}
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         placeholder="Password"
//         secureTextEntry
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
// <Button title="Login" onPress={handleLogin} />
// </View>
//   );
// };

//

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 16,
//   },
// });

// export default LoginScreen;

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
