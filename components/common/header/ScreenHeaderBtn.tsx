import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import styles from "./screenheader.style";
import { TouchableOpacity } from "react-native";

const ScreenHeaderBtn: React.FC<{
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress: () => void;
}> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
