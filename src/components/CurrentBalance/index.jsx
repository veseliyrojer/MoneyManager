import { View , Text , StyleSheet} from "react-native"


const CurrentBalance = () => {

    return(
        <View style={styles.container}>
           <View style={styles.balance}>
                <View style={styles.pad15}>
                    <Text style={styles.text}>
                        Current Balance 
                    </Text>
                </View>
                <View style={styles.pad15}>
                    <Text style={[styles.text , styles.sum]}>
                        4000$
                    </Text>
                </View>
                <View style={styles.pad15}>
                    <Text style={[styles.text , styles.right]}>
                        Goal: 10 000$
                    </Text>
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {

            height:200,
            backgroundColor: 'black',
            // flexDirection: 'row',
            // justifyContent: 'space-around',
        },
        pad15:{
            padding: 8
        },
        balance: {
            margin: 20,
            borderWidth: 1 ,
            borderColor: 'white',
            borderRadius: 20,
            padding: 15,
            height:150,
        },
        text: {
            color: 'white',
            fontSize: 16,
        },
        sum: {
            fontSize: 30,
            textAlign: 'center',
        },
        right: {
            textAlign: 'right',
        },
        come: {
            width: '47%',
            height:100,
            margin: 10,
            backgroundColor: 'green',
            

        },
          wrapper: {
              alignSelf: 'center',
              
          },
          textalign: {
            textAlign: 'center',
            padding: 10,
            fontSize: 20
          }
  });
export default CurrentBalance