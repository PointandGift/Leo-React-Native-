import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Tabs from './tabs';
import { AppRegistry } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { text: 'Search' }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputHolder}>
          <TextInput style={styles.inputs} placeholder={this.state.text} />
          <View style={styles.scanButton}></View>
        </View>
        <Tabs>
          {/* First tab */}
          <View title="POINTS" style={styles.content}>
            <Text style={styles.header}>
              Points Page
            </Text>
          </View>
          {/* Second tab */}
          <View title="STAMP" style={styles.content}>
            <Text style={styles.header}>
              Stamp Page
            </Text>
          </View>

        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#D1175B',         // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
    backgroundColor: '#FFFFFF',         // Darker background for content area
  },
  // Content header
  header: {
    color: '#000000',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 22,                       // Bigger font size
  },
  // Content text
  text: {
    color: 'rgba(0, 0, 0, 0.75)', // Semi-transparent text
    textAlign: 'center',                // Center
    fontFamily: 'Avenir',
    fontSize: 18,
  },
  inputs: {
    width: 250,
    borderRadius: 3,
    backgroundColor: '#808080',
    color: '#FFFFFF',
    height: 24,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  inputHolder: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-between',
    paddingRight: 13,
    paddingLeft: 13,
    alignItems: 'center',
  },
  scanButton: {
    width: 24, 
    height: 24, 
    backgroundColor: 'cyan',
  }
});

AppRegistry.registerComponent('Tabs', () => App);
