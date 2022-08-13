import React, {useState} from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import Header from "../../../Components/Header/Header";
import Input from "../../../Components/Input/Input";
import Menu from "../../../Components/Input/Menu";

const s = StyleSheet.create({
    ChattingView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    ChattingHistoryView: {
        flex: 1,
    }
});

export default() => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <KeyboardAvoidingView style={s.ChattingView}>
            <Header title={'메시지 발송'}/>
            <View style={s.ChattingHistoryView}>
                <Text>이전 메세지 내역 보이는 창</Text>
            </View>
            <Input isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
            {isMenuOpened ? <Menu /> : null}
        </KeyboardAvoidingView>
    )
}