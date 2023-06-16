import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard: React.FC<any> = ({
  item,
  selectedJob,
  handleCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item?.employer_logo
              : 'https://www.hatimeria.com/images/people/skills.jpg',
          }}
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
