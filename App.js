import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import  Count from './components/Count';


const SESSION_LIMIT = 1800000;  // 30 min session
const BREAK_LIMIT = 300000;     // 5 min break

export default class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      isCounting: false,
      isResting: false,
      count: 0,
      session: SESSION_LIMIT,
      breakLimit: BREAK_LIMIT
    }
  }
componentDidMount(){  
  this.sessionInterval = setInterval(this.increment, 1000);
}
componentWillUnmount(){
  clearInterval(this.sessionInterval);
}
checkCount = () => {

  if ( (this.state.count === this.state.session) || (this.state.isResting && this.state.count === this.state.breakLimit) ){
    this.setState(prevState => ({
      isResting: !prevState.isResting,
      count: 0
    }))
  } 
}

toggleSession = () => this.setState(prevState => ({
  isCounting: !prevState.isCounting,
  isResting: false,
  count: 0,
  sessions: 0
}));

increment = () => {
  this.setState( prevState => ({
    count: prevState.count + 1
  }))
}
  render(){
    if (this.state.isCounting){
      this.checkCount();
      return <Count status={this.state.isResting} count={this.state.count} timer={this.state.session} breakLimit={this.state.breakLimit} stopSession={()=> this.toggleSession()}/>
    }  else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}> Welcome to Pomodoro</Text>
          <Button title="Start Session" onPress={() => this.toggleSession()}/>
        </View>
      )
    }
  }
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#70a3ef'
  },
  text : {
    fontFamily: "Arial",
    fontSize: 34,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

