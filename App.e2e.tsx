import React, {useState} from 'react';
import {SafeAreaView, Button, Text, StyleSheet} from 'react-native';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={handlePress} testID="ClickBtn" />
      {isVisible && <Text style={styles.text}>Hello World</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default App;
