import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import apexcharts from "./plugins/apexcharts";

// import "leaflet/dist/leaflet.css";

new Vue({ vuetify, apexcharts, render: h => h(App) }).$mount("#app");
