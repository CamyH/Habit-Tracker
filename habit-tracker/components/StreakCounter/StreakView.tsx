// Hooks
import { useState } from "react"

// Components
import { FontAwesome5 } from "@expo/vector-icons"
import { Text, View } from "react-native"

// Styles
import { useStyles } from "./StreakView.styles"
import { useStreakLookup } from "../../app/hooks/useStreakLookup"

export const StreakView = () => {
    const styles = useStyles()

    const [streakState, setStreakState] = useState<string>()
    // Load the streak count from local storage AsyncStorage API
    // Will be defaulted to 0 if there is not an active counter
    useStreakLookup().then((streak) => setStreakState(streak))

    return (
        <View>
            <Text>{streakState}</Text>
            <FontAwesome5
                name='fire'
                size={24}
                color='black'
                style={styles.fireIcon}
            />
        </View>
    )
}
