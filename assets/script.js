const { createApp, ref, onMounted, watch } = Vue;

const videos = [
  {
    url: "https://youtu.be/UWq_pucHgTE?si=wxGpxmleFjNq1oPW",
    thumbnail: "https://img.youtube.com/vi/UWq_pucHgTE/0.jpg",
    source: "https://github.com/refinedguides/country-search",
    demo: "https://refinedguides.com/country-search/",
    title: "Create a Country Search & Filter App with Javascript",
    date: "Aug 27, 2023",
  },
  {
    url: "https://youtu.be/hPDhOWkEXG4?si=fYo2S833Lo-Fnp8u",
    thumbnail: "https://img.youtube.com/vi/hPDhOWkEXG4/0.jpg",
    source: "https://github.com/refinedguides/image-editor",
    demo: "https://refinedguides.com/image-editor/",
    title: "Build an Image Editor using CSS Filters and Javascript",
    date: "Aug 16, 2023",
  },
  {
    url: "https://youtu.be/oAVkXa76lzw?si=LyOz-oRa8kp7U4wh",
    thumbnail: "https://img.youtube.com/vi/oAVkXa76lzw/0.jpg",
    source: "https://github.com/refinedguides/bmi-calculator",
    demo: "https://refinedguides.com/bmi-calculator/",
    title: "How to create a BMI Calculator in Javascript",
    date: "Aug 08, 2023",
  },
  {
    url: "https://youtu.be/vUTRNsT-Bv4?si=29QXdJa6-DUB3h2r",
    thumbnail: "https://img.youtube.com/vi/vUTRNsT-Bv4/0.jpg",
    source: "https://github.com/refinedguides/weather-app",
    demo: "https://refinedguides.com/weather-app/",
    title: "Build a Simple Weather App with JavaScript and OpenWeatherMap API",
    date: "Aug 02, 2023",
  },
  {
    url: "https://youtu.be/BYjzM4lhvsI?si=kKn4PVjgH-vYPPFD",
    thumbnail: "https://img.youtube.com/vi/BYjzM4lhvsI/0.jpg",
    source: "https://github.com/refinedguides/counter-app",
    demo: "https://refinedguides.com/counter-app/",
    title: "Learn JavaScript by Building a Counter App",
    date: "Jul 25, 2023",
  },
  {
    url: "https://youtu.be/zXdJN1nuxOA?si=06DXX6oEkwblgNEy",
    thumbnail: "https://img.youtube.com/vi/zXdJN1nuxOA/0.jpg",
    source: "https://github.com/refinedguides/shopping-list",
    demo: "https://refinedguides.com/shopping-list/",
    title: "Make a Shopping List with Vanilla Javascript",
    date: "Jul 13, 2023",
  },
  {
    url: "https://youtu.be/m6zq0MCt-Kc?si=mzRPyC8zss2IZ8lv",
    thumbnail: "https://img.youtube.com/vi/m6zq0MCt-Kc/0.jpg",
    source: "https://github.com/refinedguides/image-slider",
    demo: "https://refinedguides.com/image-slider/",
    title: "Build a Responsive Image Slider with Javascript",
    date: "Jun 24, 2023",
  },
  {
    url: "https://youtu.be/JeKduGZYBuw?si=eL4c3ExhKlqtqXPi",
    thumbnail: "https://img.youtube.com/vi/JeKduGZYBuw/0.jpg",
    source: "https://github.com/refinedguides/password-generator",
    demo: "https://refinedguides.com/password-generator/",
    title: "Create a Strong Password Generator with Javascript",
    date: "Jun 12, 2023",
  },
  {
    url: "https://youtu.be/nEf6VJvofjc?si=CSOm-SfQznP9gPc5",
    thumbnail: "https://img.youtube.com/vi/nEf6VJvofjc/0.jpg",
    source: "https://github.com/refinedguides/expense-tracker-js",
    demo: "https://refinedguides.com/expense-tracker-js/",
    title: "Create an Expense Tracker with JavaScript",
    date: "May 23, 2023",
  },
  {
    url: "https://youtu.be/TO89d2BQiN4?si=zah6AAW2t5Layf49",
    thumbnail: "https://img.youtube.com/vi/TO89d2BQiN4/0.jpg",
    source: "",
    demo: "",
    title: "Create a ToDo List Project with Javascript",
    date: "Apr 26, 2023",
  },
  {
    url: "https://youtu.be/v-y3B91Fhiw?si=2ileQHMTFT-XdIpa",
    thumbnail: "https://img.youtube.com/vi/v-y3B91Fhiw/0.jpg",
    source: "",
    demo: "",
    title: "Build A Simple Calendar Using Javascript",
    date: "Apr 15, 2023",
  },
  {
    url: "https://youtu.be/4VMZDh0Cxyo?si=PjtLqgr_6MCsY28C",
    thumbnail: "https://img.youtube.com/vi/4VMZDh0Cxyo/0.jpg",
    source: "",
    demo: "",
    title: "Dynamically Change Product Color | CSS + JS",
    date: "Feb 22, 2023",
  },
];

tailwind.config = {
  darkMode: "class",
};

createApp({
  setup() {
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
