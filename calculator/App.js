import React, {Component} from 'react';
import { StyleSheet,
          Text,
          View,
          Alert,
          TouchableOpacity,
          TextInput
        } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { val: ''};
    this._onPressEvalButton = this._onPressEvalButton.bind(this);
    this._onPressClearButton = this._onPressClearButton.bind(this);
    this._onPressClearButtonFull = this._onPressClearButtonFull.bind(this);
  }

  _onPressButton(i) {
    this.setState((prevState) => ({
      val: prevState.val + i
    }))
  }

  _onPressClearButtonFull() {
    this.setState({
      val: ''
    })
  }

  _onPressClearButton(){
    var str = this.state.val;
    str = str.toString().substring(0, str.length-1);
    this.setState({
      val: str
    })
  }

  _onPressEvalButton() {
    this.setState((prevState) => ({
      val: eval(prevState.val)
    }), () => {
      val: this.state.val;
    })
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.output}>
          <Text style={styles.textOutput}>{this.state.val}</Text>
        </View>

        <View style={styles.keypad}>

          <View style={styles.rows}>
            <TouchableOpacity
                style={styles.button}
                onPress={this._onPressClearButtonFull}>
                <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this._onPressClearButton}>
                <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('%')}>
                <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('/')}>
                <Text style={styles.buttonText}>÷</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('7')}>
                <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('8')}>
                <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('9')}>
                <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('*')}>
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('4')}>
                <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('5')}>
                <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('6')}>
                <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('-')}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('1')}>
                <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('2')}>
                <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('3')}>
                <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('+')}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rows}>
            <TouchableOpacity
                style={styles.buttonZeroAC}
                onPress={() => this._onPressButton('0')}>
                <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._onPressButton('.')}>
                <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this._onPressEvalButton}>
                <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  output: {
    flex: 1,
    backgroundColor: '#000000',
  },
  textOutput: {
    flex: 1,
    fontSize: 35,
    paddingTop: 180,
    paddingRight: 10,
    textAlign: 'right',
    backgroundColor: 'grey',
  },
  keypad: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 10,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'red',//#A9A9A9
  },
  buttonText: {
    fontSize: 35,
    textAlign: 'center',
    padding: 15,
  },
  buttonZeroAC: {
    margin: 10,
    width: 180,
    borderRadius: 40,
    backgroundColor: 'red',//#A9A9A9
  }
});
