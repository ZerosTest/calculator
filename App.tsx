import React, {  useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stack from './Stack';
const stack =new Stack([]);
const stackAuxiliar = new Stack([]);
export default function App () {
  const [input, setInput] = useState<string>('0')
  const [resetInput, setResetInput] = useState<boolean>(false)
  const [resetEqual, setResetEqual] = useState<boolean>(false)
  const operation=(operator: string)=>{
      stack.push(input);
      stack.push(operator);
      stack.view();
      setResetInput(true)
      stackAuxiliar.clearArray();
  }
  const execute = () => {
    setResetEqual(true)
    console.log('i execute')
    stackAuxiliar.push(input);
    let resultOperation :number=0;
    let valueOne : string;
    let valueTwo : string;
    let operator : string;
    while (stack.size() > 0 ) {
      console.log(stack.size())
      stackAuxiliar.push(stack.pop() || '0');
      if(stackAuxiliar.peek() === '*'||stackAuxiliar.peek() === '/') {
        operator = stackAuxiliar.pop() || '+';
        valueOne = stack.pop() || '0';
        valueTwo = stackAuxiliar.pop() || '0';
        resultOperation = executeOperation(parseFloat(valueOne), parseFloat(valueTwo), operator);
        stackAuxiliar.push(resultOperation + '');
      };
    };
    while (stackAuxiliar.size() > 1){
      console.log('****' + stackAuxiliar.size())
      valueOne = stackAuxiliar.pop() || '+';
      operator = stackAuxiliar.pop() || '0';
      valueTwo = stackAuxiliar.pop() || '0';
      resultOperation = executeOperation(parseFloat(valueOne),parseFloat(valueTwo), operator);
      console.log('$' + resultOperation)
      stackAuxiliar.push(resultOperation + '');
    };
    setInput(resultOperation+'');
  }
  const executeOperation = (number1: number,number2: number, operator: string)=>{
    let result = 0;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result= number1 - number2;
        break;
      case '*':
        result= number1 * number2;
        break;
      case '/':
        result= number1 / number2;
        break;    
    }
    return result;
  }
  const onPress =(number: string)=>{
    if(resetEqual){
      setInput(number)
      setResetEqual(false)
    }else{
    setInput( input === '0' || resetInput? number: (input + number))
    setResetInput(false)
          }
  }
  const simbol =()=>{
    const value = parseFloat(input) * (-1) 
    setInput(value + '')
    
  }
  const clear = () => {
    setInput('0'); 
    stack.clearArray();
    stackAuxiliar.clearArray();
    stack.view();
    stackAuxiliar.view();
  }
  const dot =()=>{
    if(input.includes('.')){
      setInput(input);
    }else{
      setInput(input + '.');
    }
  }
    return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.textColor}>{input}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={clear} style={styles.containerRed}>
              <Text style={styles.textColor}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>{
              console.log('I set equal')
              execute()
              }} style={styles.containerRed}>
              <Text style={styles.textColor}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('7')} style={styles.containerGreen}>
              <Text style={styles.textColor}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('8')} style={styles.containerGreen}>
              <Text style={styles.textColor}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('9')} style={styles.containerGreen}>
              <Text style={styles.textColor}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>operation('/')} style={styles.containerBlue}>
              <Text style={styles.textColor}>÷</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('4')} style={styles.containerGreen}>
              <Text style={styles.textColor}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('5')} style={styles.containerGreen}>
              <Text style={styles.textColor}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('6')} style={styles.containerGreen}>
              <Text style={styles.textColor}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>operation('*')} style={styles.containerBlue}>
              <Text style={styles.textColor}>×</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('1')} style={styles.containerGreen}>
              <Text style={styles.textColor}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('2')} style={styles.containerGreen}>
              <Text style={styles.textColor}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('3')} style={styles.containerGreen}>
              <Text style={styles.textColor}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>operation('-')} style={styles.containerBlue}>
              <Text style={styles.textColor}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={()=>simbol()} style={styles.containerGreen}>
              <Text style={styles.textColor}>+/-</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>onPress('0')} style={styles.containerGreen}>
              <Text style={styles.textColor}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={()=>dot()} style={styles.containerGreen}>
              <Text style={styles.textColor}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>operation('+')} style={styles.containerBlue}>
              <Text style={{ color: "#fff", fontSize: 40 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerRed: {
    backgroundColor: "red",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  containerBlue: {
    backgroundColor: "blue",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  containerGreen: {
    backgroundColor: "green",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  textColor: {
    color: "#fff",
    fontSize: 55,
  },
});
