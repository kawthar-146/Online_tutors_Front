import React, {useEffect} from 'react'
import {View,Text,TouchableOpacity, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

export const Button1 = ({ onPress }) => {
    let animation = React.createRef();

    useEffect(() => {
        animation.current.play()
    }, [])

    return(
        <View>
        <TouchableOpacity onPress={onPress} >
           <LottieView
                ref={animation}
                loop={true}
                style={{
                   width: 90,
                   height: 90,
                   marginBottom:50,
  
                }}
                source={require('../assets/button.json')}
           />
              <Text style={styles.btnText}>Login</Text>
           
           </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 0.2,
    width: 270, 
  },
  btnText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    top: "20%",
    left:"37%",
    position:"absolute",
  },
});

