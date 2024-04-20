import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'react-native'
import Menu from '../menu/index'

const Header = () => {



    return(
        <View style={styles.container}>
            <Menu />
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    Good Luck!
                </Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    +
                </Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      height: 65,
      flexDirection: 'row',
      backgroundColor: 'black',
      justifyContent: 'space-between',
      
    },
    wrapper: {
        alignSelf: 'center'
    },
    text: {
        fontSize: 35,
        color: 'white',
    }
  });

export default Header