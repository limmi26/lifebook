// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>

    <imageBackground source{{uri :'apoa.jpg'}}
    //   <Text style={style.container}>Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'orange'
  }
});
