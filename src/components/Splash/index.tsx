import { useEffect } from "react";

import { IconContainer, Overlay } from "./styles";
import { useSplashScreen } from "@/stores/useSplashScreen";

const SplashScreen = () => {
  const isShown = useSplashScreen((state) => state.showSplash);
  const setIsShown = useSplashScreen((state) => state.setSplash);

  const isVisible = isShown ? `visible` : `invisible`;
  const opacity = isShown ? `opacity-100` : `opacity-0`;

  useEffect(() => {
    const time = setTimeout(() => {
      setIsShown(false);
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [setIsShown]);

  return (
    <Overlay
      className={`fixed w-screen h-screen z-50 top-0 left-0 flex justify-center items-center bg-primary ${isVisible} ${opacity}`}
    >
      <IconContainer>
        <p className="text-2xl font-bold text-primary">SFMA</p>
      </IconContainer>
    </Overlay>
  );
};

export default SplashScreen;
