import { StyleSheet } from "react-native"

const defaultMarginValue = 15

export const useStyles = (pressed?: boolean) =>
  StyleSheet.create({
    streakCounter: {
      marginLeft: defaultMarginValue,
    },
    modalLink: {
      marginRight: defaultMarginValue,
      opacity: pressed ? 0.5 : 1,
    },
  })
