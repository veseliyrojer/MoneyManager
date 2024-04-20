import { View , Text , StyleSheet} from "react-native"


const InOutCome = () => {

    return(
        <View style={styles.wrapcont}>
            <View style={styles.container}>

                <View style={styles.come}>
                    <View style={styles.wrapper}>
                        <Text style={styles.textalign}>InCome</Text>
                        <Text style={styles.textalign}>1548$</Text>
                        <Text style={styles.textalign}>694$</Text>
                        <Text style={styles.textalign}>43$</Text>
                        <Text style={styles.textalign}>52$</Text>
                    </View>
                </View>
                <View style={styles.come}>
                    <View style={styles.wrapper}>
                        <Text style={styles.textalign}>OutCome</Text>
                        <Text style={styles.textalign}> -694$</Text>
                        <Text style={styles.textalign}> -43$</Text>
                        <Text style={styles.textalign}> -52$</Text>
                        <Text style={styles.textalign}> -125$</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {

            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        wrapcont: {
            
        },
        come: {
            width: "41%",
            
            margin: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'white',

            

        },
          wrapper: {
              alignSelf: 'center',
              
          },
          textalign: {
            textAlign: 'center',
            padding: 8,
            fontSize: 20,
            color: 'white'
          }
  });
export default InOutCome