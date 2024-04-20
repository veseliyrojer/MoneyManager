import {useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rotation = new Animated.Value(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(rotation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <TouchableOpacity onPress={toggleMenu}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.iconWrapper, {transform: [{rotate: spin}]}]}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 30,
    height: 5,
    justifyContent: 'space-between',
  },
  line: {
    margin: 5,
    width: '100%',
    height: 3,
    backgroundColor: 'white',
  },
});

export default Menu;
