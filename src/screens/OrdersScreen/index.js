import { useRef } from 'react';
import { Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const OrdersScreen = () => {
    const bottomSheetRef = useRef(null);
    return (
        <BottomSheet ref={bottomSheetRef} snapPoints={["12%", "95%"]}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '600', letterSpacing: 0.2, paddingBottom: 5}}>Your online</Text>
                <Text>Available orders: 3</Text>
            </View>
        </BottomSheet>
    );
}

export default OrdersScreen;