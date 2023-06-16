import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard: React.FC<any> = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://www.hatimeria.com/images/people/skills.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {/* Job title */}
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

         {/* Job type */}
         <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_employment_type}
        </Text>

        {/* Job location */}
        <Text style={styles.companyName} numberOfLines={1}>
          {job?.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
