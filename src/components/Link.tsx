import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ReactNode} from 'react';

type LinkProps = {
  url: string;
} & ({text: string; children?: never} | {text?: never; children: ReactNode});

export const Link = ({children, url, text}: LinkProps) => {
  const handlePress = () => {
    Linking.openURL(url);
  };
  return (
    <>
      {text ? (
        <Text style={styles.link} onPress={handlePress}>
          {text}
        </Text>
      ) : (
        <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#007AFF',
  },
});
