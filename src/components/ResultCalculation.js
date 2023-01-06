import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const {capital, interes, months, total, errorMessage} = props;
    console.log(props);
// render
    return (
        <View style={styles.content}>
            {total && 
                (
                    <View style = {styles.boxResult}>
                        <Text style = {styles.title}>RESUMEN</Text>
                        <DataResult titulo = "Cantidad solicitada: " value = {`L. ${capital}`}/>
                        <DataResult titulo = "Interés %: " value = {`${interes} %`}/>
                        <DataResult titulo = "Plazos: " value = {`${months} meses`}/>
                        <DataResult titulo = "Pago mensual: " value = {`L. ${total.monthlyFee}`}/>
                        <DataResult titulo = "Total a pagar: " value = {`L. ${total.totalPayable}`}/>
                    </View>
                )
            }
            <View>
                <Text style = {styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {titulo, value} = props;
    return (
        <View style = {styles.value}>
            <Text>{titulo}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "#F00",
        fontWeight: "bold",
        fontSize: 20, 
    },
    content:
    {
        marginTop: 0,
        marginHorizontal:40,

    },
    boxResult: {
        padding: 30
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
    },
    value: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})
