import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import star from "../assets/estrela.png";
import grayStar from "../assets/estrelaCinza.png";

const Star: React.FC = ({
  onPress,
  isDisable = true,
  isFilled,
  isBig = false,
}) => {
  const styles = stylesFunction(isBig);
  const getImage = () => {
    if (isFilled) {
      return star;
    }
    return grayStar;
  };
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisable}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  );
};

const stylesFunction = (isBig: boolean) =>
  StyleSheet.create({
    star: {
      width: isBig ? 36 : 12,
      height: isBig ? 36 : 12,
      marginRight: 2,
    },
  });

export default Star;
