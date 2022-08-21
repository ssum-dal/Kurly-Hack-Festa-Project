import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const s = StyleSheet.create({
    BubbleView: {
        backgroundColor: '#eee6f2',
        maxWidth: '50%',
        margin: '3%',
        padding: '3%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    ImageBubbleView: {
        backgroundColor: '#eee6f2',
        width: '60%',
        margin: '3%',
        padding: '3%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    ImageView: {
        alignItems: 'center',
        marginTop: '8%'
    },
    Image: {
        width: '60%',
        aspectRatio: 1/1,
    },
    MessageText: {
        color: '#000000',
        fontSize: 15
    }
});

function SpeechBubble({ content, uri }) {
    return (
        <View style={uri ? s.ImageBubbleView : s.BubbleView}>
            <Text>{content}</Text>
            {uri &&
                <View style={s.ImageView}>
                    <Image
                        style={s.Image}
                        source={{uri: uri}}
                    />
                </View>
            }
        </View>
    );

}

export default SpeechBubble; 