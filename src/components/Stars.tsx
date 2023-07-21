import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";

export default function Stars({
  quantity: oldQuantity,
  isEditable = false,
  isBig = false,
}) {
  const [quantity, setQuantity] = useState(oldQuantity);
  const StarsRender = () => {
    const starsList = [];
    for (let i = 0; i < 5; i++) {
      starsList.push(
        <Star
          key={i}
          onPress={() => setQuantity(i + 1)}
          isDisable={!isEditable}
          isFilled={i < quantity}
          isBig={isBig}
        />
      );
    }
    return starsList;
  };
  return (
    <View style={styles.stars}>
      <StarsRender />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
  },
});
