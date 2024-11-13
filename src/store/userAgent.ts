import { createSignal } from "solid-js";

const [isMobile, setIsMobile] = createSignal(false);

const isMobileCheck = () => {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/Android/i)
  ) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
};

isMobileCheck();

export { isMobile };
