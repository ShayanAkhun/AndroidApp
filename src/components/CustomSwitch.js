import React, { useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function CustomSwitch ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) {
    const [ getSelectionMode, setSelectionMode ] = useState(selectionMode)
    const updatedSwitchData =(value)=> {
        setSelectionMode(value);
        onSelectSwitch(value);
    }
    return (
        <View style={{
            height:44,
            width: '100%',
            backgroundColor: '#222',
            borderRadius:10,
            flexDirection:'row',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=>updatedSwitchData(1)}
            style={{
                flex:1,
                backgroundColor: getSelectionMode == 1 ?  '#2c5825' : '#e4e4e4',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}> 
            <Text style={{ 
                fontFamily:'Poppins-Medium',
                color: getSelectionMode ==1 ? '#e4e4e4' : '#2c5825',
                fontSize:14
            }}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=>updatedSwitchData(2)}
            style={{
                flex:1,
                backgroundColor: getSelectionMode ==  2 ?  '#2c5825' : '#e4e4e4',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}> 
            <Text style={{
                fontFamily:'Poppins-Medium',
                color: getSelectionMode == 2 ? '#e4e4e4' : '#2c5825',
                fontSize:14
            }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}