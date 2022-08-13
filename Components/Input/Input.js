// 예쁘게 만들어보려는 시도... Presenter로 어떻게든 빼볼 수 있지 않을까ㅠ?

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const s = StyleSheet.create({
    InputContainer: {
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: '#F9F9F9',  
        paddingHorizontal: 9,
    },
    Input: {
        flex:1,
        fontSize: 14,
    },
    SendButton: {
        color: '#CFCFCF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default function Input({isMenuOpened, setIsMenuOpened}) {
    
    const [isKeyboardOn, setKeyboardOn] = useState(false);
    
    useEffect(()=> {
        
        const showKeyboardHandler = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardOn(true);
            setIsMenuOpened((prev) => {
                // If Menu is Opened and show keyboard -> Hide Menu
                if (prev) {
                    return !prev
                }
            })
        });
        
        const hideKeyboardHandler = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardOn(false);
        });

        return () => {
            showKeyboardHandler.remove();
            hideKeyboardHandler.remove();
        }
        
    }, []);
    

    const onMenuBtnPress = () => {
        setIsMenuOpened((prev)=>{
            // If Keyboard is Shown and press menuBtn -> Hide keyboard
            if (!prev && isKeyboardOn) {
            Keyboard.dismiss();
        }
            return !prev
        })
    }

    return <View style={s.InputContainer}>
                <TouchableOpacity onPress={onMenuBtnPress}>
                    <Icon name={isMenuOpened ? "close" : "add"} style={{ color: "#323232" }} size={34}/>
                </TouchableOpacity>
                <TextInput style={s.Input}/>
                <TouchableOpacity>
                    <Text style={s.SendButton}>전송</Text>
                </TouchableOpacity>
            </View>
}
