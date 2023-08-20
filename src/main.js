import Vue from "vue";
import CustomChat from "@/components/CustomChat.vue";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
// import { FFmpeg } from "@ffmpeg/ffmpeg";

export default {
  // FFmpeg,
  CustomChat,
};
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(CustomChat),
}).$mount("#app");
