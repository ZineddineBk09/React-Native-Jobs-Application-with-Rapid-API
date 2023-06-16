import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard: React.FC<any> = ({
  item,
  selectedJob,
  handleCardPress,
}) => {
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item?.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Company */}
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>
      <View style={styles.companyName}>
        {/* Job title */}
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item?.job_title}
        </Text>

        {/* Job location */}
        <Text style={styles.companyName} numberOfLines={1}>
          {item?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
