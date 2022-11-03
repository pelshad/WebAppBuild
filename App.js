import { Platform, View } from 'react-native';
import { WebView } from "react-native-webview";

export default function App() {
  return Platform.OS === "web" ? (
    <iframe src="http://localhost:8080/" height={'100%'} width={'100%'} style={{ border: "none" }} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://localhost:8080/" }}
      />
    </View>
  )
}