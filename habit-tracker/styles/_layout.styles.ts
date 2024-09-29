import { StyleSheet } from "react-native"

export const useStyles = (pressed?: boolean) =>
  StyleSheet.create({
    modalLink: {
      opacity: pressed ? 0.5 : 1,
    },
  })
