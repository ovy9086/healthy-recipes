import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { branding } from '../../styleguide';
import { PressableCard } from '../PressableCard';

export const HomeHeader: FunctionComponent<ViewProps> = props => (
  <Animated.View style={[styles.header, props.style]}>
    <SafeAreaView>
      <Text style={styles.title}>Eat</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {['Recipes', 'Meal plans', 'Visual guides'].map((it, idx) => {
          return (
            <PressableCard key={`card-${idx}`} style={styles.card}>
              <Text style={branding.heading.h4}>{it}</Text>
            </PressableCard>
          );
        })}
      </View>
    </SafeAreaView>
  </Animated.View>
);

const styles = StyleSheet.create({
  header: { width: '100%', padding: branding.paddings.padding_16 },
  title: { ...branding.heading.h1, marginBottom: branding.paddings.padding_8 },
  card: {
    height: 100,
    width: 100,
    backgroundColor: branding.themeColors.white,
    padding: branding.paddings.padding_8,
    justifyContent: 'flex-end',
    borderRadius: 12
  }
});
