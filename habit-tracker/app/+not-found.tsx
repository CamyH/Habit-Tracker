// Hooks
import { Link, Stack } from "expo-router"

// Components
import { Text, View } from "@/components/Themed"

// Styles
import { useStyles } from "@/styles/not-found.styles"

export default function NotFoundScreen() {
  const styles = useStyles

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href='/' style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}
