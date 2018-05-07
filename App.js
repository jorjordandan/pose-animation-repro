import React from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'
import posed from 'react-native-pose'

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      visible: "visible"
    }
  }

  handleButton = () => {
    let current = this.state.visible;
    let newState = (current === "visible") ? "hidden" : "visible";
    this.setState({visible: newState })
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
         <Box style={styles.box} pose={this.state.visible} />
         <Button title="switch" onPress={this.handleButton}><Text>switch</Text></Button>
         <Text>{this.state.visible}</Text>
)
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
  }
})

const tweenBoth = ({ value, toValue, useNativeDriver, key }) => {
  useNativeDriver = true;
  switch(key) {
    case 'opacity':
      return Animated.timing(value, { toValue })
    case 'y':
      return Animated.spring(value, { toValue })
  }
}

const config = {
  visible: {
    opacity: 1,
    y: 0,
    transition: tweenBoth,
  },

  hidden: { 
    opacity: 0, 
    y: -50, 
    // transition: tweenBoth
  }
}


const Box = posed.View(config)
