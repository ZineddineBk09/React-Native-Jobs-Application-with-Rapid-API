import { Stack } from "expo-router";
import { useCallback } from "react";
// to create custom fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// make splash screen visible when the app is loading until hideAsync() is called
SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // keep splash screen displayed until all fonts are loaded (similar to useEffect)
  const onLayoutRootViewIsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootViewIsLoaded} />;
}
