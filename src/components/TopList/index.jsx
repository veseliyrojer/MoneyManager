import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'react-native'


const TopList = () => {



    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    Top List
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    //   height: 65,
    //   flexDirection: 'row',
      backgroundColor: 'black',
    //   margin: [0 , 'auto'],
    //   justifyContent: 'space-between',
      
    },
    wrapper: {
        margin: 20,
        padding:10,
        borderWidth: 1,
        borderRadius: 20, 
        borderColor: 'white',
        // alignSelf: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    }
  });

export default TopList