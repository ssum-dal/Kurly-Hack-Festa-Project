import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../../../Components/Header/Header";
import Input from "../../../Components/Input/Input";
import Menu from "../../../Components/Input/Menu";

const s = StyleSheet.create({
    ChattingViewContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    ChattingViewInner: {
        flex: 1,
    },
    ChattingHistoryView: {
        flex: 1,
    }
});

export default() => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <View style={s.ChattingViewContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={s.ChattingViewInner}>
                    <Header title={'메시지 발송'}/>
                    <View style={s.ChattingHistoryView}>
                        <Text>이전 메세지 내역 보이는 창</Text>
                    </View>
                    <Input isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
                    {isMenuOpened ? <Menu /> : null}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}