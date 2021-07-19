<template>
    <lottie :width="100" :height="100" :options="lottieOptions" v-on:animCreated="handleAnimation" />
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/globe.json";
export default {
  components: {
    lottie
  },
  data() {
    return {
      anim: null,
      lottieOptions: { animationData: animationData.default }
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>
