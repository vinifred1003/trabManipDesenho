import React from 'react';
import {StyleSheet, Platform } from 'react-native';
import { Canvas, Circle, Group,useImage,Image, Blur, ColorMatrix } from '@shopify/react-native-skia';

export default function HomeScreen() {
  const width = 256;
  const height = 256;
  const ringSize = width * 0.2;

  const colors = ['#0085CA', '#F7E300', '#EF006C', '#00A859', '#F49A3B'];

  const positions = [
    { x: width * 0.25, y: height * 0.25 },
    { x: width * 0.50, y: height * 0.25 },
    { x: width * 0.75, y: height * 0.25 },
    { x: width * 0.375, y: height * 0.50 },
    { x: width * 0.625, y: height * 0.50 },
  ];
  const image = useImage(require('@/assets/images/icon.png'));

  return (
    <Canvas style={{ width:'100%',height:'100%' }}>
      <Group>
        {positions.map((pos, index) => (
          <Circle
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={ringSize}
            color={colors[index]}
            style="stroke"
            strokeWidth={ringSize * 0.2}
          />
        ))}
      </Group>
      <Image image={image} fit="contain" x={0} y={300} width={256} height={256} >
      <Blur blur={2} mode="clamp">
          <ColorMatrix
            matrix={[
              -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
            ]}
          />
        </Blur>
      </Image>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});