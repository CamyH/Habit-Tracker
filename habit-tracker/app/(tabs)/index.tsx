// Components
import { Text, View } from "@/components/Themed"

// Constants
import Colors from "@/constants/Colors"
import PageText from "@/constants/PageText"

// Styles
import { useStyles } from "@/styles/index.styles"

export default function IndexScreen() {
  const styles = useStyles

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{PageText.index.pageHeader}</Text>
      <View
        style={styles.separator}
        lightColor={Colors.light.background}
        darkColor={Colors.dark.background}
      />
    </View>
  )
}
