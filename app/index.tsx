import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    style={{
      backgroundColor: '#696969',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text
      style={{
        color: 'white',
        fontSize: 50
      }}
      >Hello World</Text>
    </View>
    
  );
}