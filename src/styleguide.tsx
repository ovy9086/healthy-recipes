import { StyleSheet } from 'react-native';

const themeColors = {
  white: '#fff',
  black: '#111',
  green: '#649b26',
  lightGreen: '#a2f2b1',
  gray: '#f2f2f2',
  shadowGray: '#999'
};

const paddings = {
  padding_8: 8,
  padding_16: 16,
  padding_24: 24,
  padding_32: 32,
  padding_40: 40,
  padding_48: 48,
  padding_64: 64
};

const heading = StyleSheet.create({
  h1: { fontSize: 32, letterSpacing: 1.5, color: themeColors.black },
  h2: { fontSize: 24, letterSpacing: 1.1, color: themeColors.black },
  h3: { fontSize: 18, color: themeColors.black },
  h4: { fontSize: 14, color: themeColors.black }
});

const body = StyleSheet.create({
  body: { fontSize: 12, color: themeColors.black }
});

const general = StyleSheet.create({
  shadowCard: {
    shadowColor: themeColors.shadowGray,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.7,
    elevation: 2
  }
});

export const branding = {
  paddings,
  themeColors,
  heading,
  body,
  ...general
};
