import React, {useState, useRef} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Picker} from '@react-native-picker/picker';
import color from '../utils/colors';

export default function Form(props) {
    const {setCapital, setInteres, setMonths} = props;
    const [meses, setMeses] = useState();
    const pickerRef = useRef();
    setMonths(meses);
    function open() {
        pickerRef.current.focus();
    }
  
    function close() {
        pickerRef.current.blur();
    }
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.inputs}
                    onChange={e => setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                    placeholder="Interés %"
                    keyboardType="numeric"
                    style={[styles.inputs, styles.inputPercentage]}
                    onChange={e => setInteres(e.nativeEvent.text)}
                />
            </View>
            <Picker 
                style = {pickerSelectStyle.inputAndroid}
                selectedValue={meses}
                onValueChange={((itemValue, itemIndex) =>
                setMeses(itemValue))
                }
                >
                <Picker.Item label="Seleccione un valor" value="" />
                <Picker.Item label="3 meses" value="3" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
            </Picker>
        </View>
    
    );
} 

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0, 
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: color.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },

    viewInputs:{
        flexDirection: "row",
    },

    inputs:{
        height: 50,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: color.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },

    inputPercentage:{
        width: "40%",
        marginLeft: 5,
    }
});


const pickerSelectStyle = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: "grey",
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
    },
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
      backgroundColor: '#fff',
      marginLeft: -5,
      marginRigh: -5,
    },
  });