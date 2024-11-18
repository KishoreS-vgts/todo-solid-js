import { Component, onMount, Show } from "solid-js";
import { dismissMobileCheck, isMobile } from "../store/userAgent";

const Header: Component = () => {
  let deferredPrompt: any | null = null;
  let installButtonRef: HTMLButtonElement | undefined;

  onMount(() => {
    window.addEventListener("beforeinstallprompt", (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Cast the event as BeforeInstallPromptEvent
      deferredPrompt = e as any;
      // Show the install button
      if (installButtonRef) {
        installButtonRef.style.display = "block";
      }
    });

    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      if (installButtonRef) {
        installButtonRef.style.display = "none";
      }
    });
  });

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(
        `User ${
          outcome === "accepted" ? "accepted" : "dismissed"
        } the install prompt`
      );
      if (outcome === "dismissed") {
        dismissMobileCheck();
      }
      // Clear the deferred prompt variable
      deferredPrompt = null;
      // Hide the install button after prompt is shown
      if (installButtonRef) {
        installButtonRef.style.display = "none";
      }
    }
  };

  return (
    <>
      <Show when={isMobile()} fallback={null}>
        <button
          ref={installButtonRef}
          onClick={handleInstallClick}
          class="banner"
          style={{ display: "none" }}
        >
          Install the app
        </button>
      </Show>

      <div class="max-w-screen-sm mx-auto p-4">
        <h1 class="text-3xl underline font-medium capitalize">
          Todo you'r daily tasks assistant
        </h1>
      </div>
    </>
  );
};

export default Header;
