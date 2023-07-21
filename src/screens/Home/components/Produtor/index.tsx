import React, { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../../components/Stars";

const distanceInMeter = (distance: number) => {
  return `${distance}m`;
};

const Produtor: React.FC = ({ name, image, distance, stars }) => {
  const [selected, inverseSelected] = useReducer(
    (selected) => !selected,
    false
  );
  const textDistance = useMemo(() => distanceInMeter(distance), [distance]);
  return (
    <TouchableOpacity style={styles.card} onPress={inverseSelected}>
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.description}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantity={stars} isEditable={selected} isBig={selected} />
        </View>
        <Text style={styles.distance}>{textDistance}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F6F6F6",
    marginVertical: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    // Android
    elevation: 4,
    // IOS
    shadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Produtor;
