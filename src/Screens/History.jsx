import { View , Text} from 'react-native'

const History = () => {
    return(
        <View>
            <<Text style={styles.centeredText}>>
            History
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredText: {
        textAlign: 'center',
        margin: 15,
        fontSize: 23,

    },
    
  });
export default History