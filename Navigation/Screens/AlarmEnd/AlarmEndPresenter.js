import React, {useEffect, useState} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfo from "../../../Components/DeliveryInfo/DeliveryInfo";
import axios from "axios";
import { mainURL } from "../../../Context/Route";

const s = StyleSheet.create({
    AlarmView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default({ navigation }) => {
    const [csDoneList, setCsDoneList] = useState([]);

    const renderDeliveryInfo = ({item, index}) => {
        return (
            <DeliveryInfo
                navigation={navigation}
                trackingNum={item.tracking_num}
                name={item.receiver}
                number={item.phone_num}
                address={item.address}
                category={item.request_category}
                title={item.request_title}
                detail={item.request_content}
                uri={item.img_uri}
                orderNum={item.order_num}
                csId={item.cs_id}
                isDone={true}
            />
        );
    }

    useEffect(() => {
        const getData = async() => {
            const url = `${mainURL}/delivery/cs/done`;

            await axios.get(url).then((result) => {
                const response = JSON.parse(result.request._response);
                setCsDoneList(response);
            })
        }
        getData();
    }, []);

    return (
        <View style={s.AlarmView}>
            <FlatList
                data={csDoneList}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.cs_id)}
            />
        </View>
    )
}