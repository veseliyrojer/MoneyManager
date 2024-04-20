import { View , Text} from 'react-native'

const TopList = () => {
    return(
        <View>
            <Text style={styles.centeredText}>
            TopList
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
export default TopList