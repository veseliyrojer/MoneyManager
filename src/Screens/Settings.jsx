import { View , Text} from 'react-native'
import StyleSheet from 'styled-components/dist/sheet/Sheet'

const Settings = () => {
    return(
        <View>
            <Text style={styles.centeredText}>
                Settings
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
export default Settings