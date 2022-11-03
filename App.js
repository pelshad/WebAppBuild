import { Platform, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return Platform.OS === "web" ? (
    // 넣을 홈페이지 주소
    <iframe src="http://localhost:8080/" height={'100%'} width={'100%'} style={{ border: "none" }} /> 
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://localhost:8080/" }} // 넣을 홈페이지 주소
      />
    </View>
  )
}
