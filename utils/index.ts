import { Image } from "react-native";

export const checkImageURL = (url: string) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

import axios from "axios";

export async function isImageValid(imageUrl: string): Promise<boolean> {
  try {
    const response = await axios.head(imageUrl);
    const contentType = response.headers["content-type"];
    return contentType.startsWith("image/");
  } catch (error) {
    return false;
  }
}
