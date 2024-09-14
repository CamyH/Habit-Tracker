// Components
import EditScreenInfo from "@/components/EditScreenInfo"
import { Text, View } from "@/components/Themed"
import Colors from "@/constants/Colors"

// Styles
import { useStyles } from "@/styles/index.styles"

export default function TabOneScreen() {
  const styles = useStyles

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor={Colors.light.background}
        darkColor={Colors.dark.background}
      />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
    </View>
  )
}
