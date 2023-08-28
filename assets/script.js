const { createApp, ref, onMounted, watch } = Vue;
import videoData from "./videos.js";

createApp({
  setup() {
    const videos = ref(videoData);
    const theme = ref(localStorage.getItem("color-theme"));

    const changeTheme = () => {
      theme.value = theme.value !== "dark" ? "dark" : "light";
    };

    const updateLayout = () => {
      const isDarkMode = theme.value === "dark";

      document.documentElement.classList.toggle("dark", isDarkMode);
    };

    watch(theme, (newValue) => {
      localStorage.setItem("color-theme", newValue);

      updateLayout();
    });

    onMounted(() => {
      const prefersDarkMode =
        !("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (prefersDarkMode) {
        theme.value = "dark";
      }

      updateLayout();
    });

    return { videos, theme, changeTheme };
  },
}).mount("#app");
