import { View , Text} from 'react-native'

const Home = () => {
    return(
        <View>
            <<Text style={styles.centeredText}>>
                Home
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
export default Home