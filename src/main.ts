import { createApp } from "vue";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";
// @ts-ignore
import { registerSW } from "virtual:pwa-register";
import "./index.css";
import App from "./App.vue";
// @ts-ignore
import posthogPlugin from "../plugins/posthog";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueApexCharts);
app.use(posthogPlugin);
registerSW({ immediate: true });
app.mount("#app");
