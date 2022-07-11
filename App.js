
import { StyleSheet, Text, View } from 'react-native';
import ListContainer from './Components/ListContainer/ListContainer';

export default function App() {
  return (
    <View style={styles.container}>  
      <ListContainer/>
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
