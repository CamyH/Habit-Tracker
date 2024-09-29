// Hooks
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function useStreakLookup(): Promise<string> {
    // If the user does not have a streak, then we initialise to 0
    return (await AsyncStorage.getItem("streak")) ?? "0"
}
