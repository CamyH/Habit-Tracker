// Components
import { Text, View } from "@/components/Themed"

// Constants
import PageText from "@/constants/PageText"
import Colors from "@/constants/Colors"

// Styles
import { useStyles } from "@/styles/stats.styles"

export default function StatsScreen() {
  const styles = useStyles
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{PageText.stats.pageHeader}</Text>
      <View
        style={styles.separator}
        lightColor={Colors.light.background}
        darkColor={Colors.dark.background}
      />
    </View>
  )
}
