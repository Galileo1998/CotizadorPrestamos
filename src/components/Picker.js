import React, {useState, useRef} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function Form() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }
    return(
        <View>
            <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
        
    );
} 