import React, {useEffect, useState} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfoMessage from "../../../Components/DeliveryInfo/DeliveryInfoMessage";
import axios from "axios";
import { mainURL } from "../../../Context/Route";

const s = StyleSheet.create({
    MessageView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default({ navigation }) => {
    const [msgDoneList, setMsgDoneList] = useState([]);

    const renderDeliveryInfo = ({item, index}) => {
        return (
            <DeliveryInfoMessage
                navigation={navigation}
                trackingNum={item.tracking_num}
                name={item.receiver}
                address={item.address}
                number={item.phone_num}
                request={item.user_request}
                orderNum={item.order_num}
            />
        );
    }

    useEffect(() => {
        const getData = async() => {
            const url = `${mainURL}/delivery/msg/done`;

            await axios.get(url).then((result) => {
                const response = JSON.parse(result.request._response);
                setMsgDoneList(response);
            })
        }
        getData();
    }, [msgDoneList]);

    return (
        <View style={s.MessageView}>
            <FlatList
                data={msgDoneList}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.tracking_num)}
            />
        </View>
    )
}