import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CoinMarketCap from './api';

const apiKey = 'f4ffe871-1251-43a1-af9f-600bfa664b0b';
const client = new CoinMarketCap(apiKey)

const onclick = () => {
  console.log(client.getQuotes({id: '1'}).then(console.log).catch(console.error)  )
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button accessibilityLabel="Learn more about this purple button"/> */}
      <Text>123w</Text>
      <Button
        onPress={onclick}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
