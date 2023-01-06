import React, {useState, useRef, useEffect} from "react";
import 
{StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  TouchableOpacity, 
  YellowBox,
  Button} from "react-native";
import Form from './src/components/Forms';
import Picker from "./src/components/Picker";
import Footer from "./src/components/Footer";
import ResultCalculation from "./src/components/ResultCalculation";
import colors from './src/utils/colors';

YellowBox.ignoreWarnings(['React.jsx: type is invalid', 
'YellowBox has been replaced',
'Cannot update a component']);


export default function App()
{
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMesssage] = useState('');

  useEffect(() => {
    if(capital && interes && months) calculate();
    else reset();
    
  }, [capital, interes, months]);

  const calculate = () => {
    reset();
    console.log(total);
    if(!capital)
    {
      setErrorMesssage("Añade la cantidad que quieres solicitar.")
    }
    else if (!interes)
    {
      setErrorMesssage("Añade el interes del préstamo.")
    }
    else if(!months)
    {
      setErrorMesssage("Añade la cantidad de meses de duración del préstamo.")
    }
    else
    {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i+1, -months))/i);
      console.log(fee.toFixed(2).replace(".", ","));
      console.log((fee * months).toFixed(2).replace(".", ","));
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2)
      })
    }
  }

  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
  pickerRef.current.focus();
  }

  function close() {
  pickerRef.current.blur();
  }

  const reset = () => {
    setErrorMesssage("");
    setTotal(null);
  }

  return(
    <>
    <StatusBar barStyle= "light-content"/>  
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form setCapital = {setCapital} setInteres = {setInteres} setMonths={setMonths}/>
      </SafeAreaView>
      <View>
         <ResultCalculation 
              errorMessage = {errorMessage}
              capital = {capital}
              interes = {interes}
              months = {months}
              total = {total}/>
      </View>
      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 15,
  },

  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    width: "100%",
    position: "absolute",
    zIndex: -1,
   },

  viewInputs:{
      flexDirection: "row",
  },

  inputs:{
      height: 50,
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: colors.PRIMARY_COLOR,
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

  inputAndroid: {
    backgroundColor: "#fff",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "grey",
    color: "black",
    paddingRight: 30,
  },
})