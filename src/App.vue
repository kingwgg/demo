<template>
  <!-- <van-button  type="primary">123</van-button> -->
  <van-button @click="counter.increment" type="primary">{{
    counter.count
  }}</van-button>
  <van-button @click="changeLocale('en')">English</van-button>
  <van-button @click="changeLocale('zh')">中文</van-button>
  <p>{{ $t("hello") }}</p>
  <div>
    <Demo></Demo>
  </div>
</template>
<script setup>
import { useCounterStore } from "./stores/counter.js";
import { alovaInstance } from "./alova/index.js";
import { ref, onMounted } from "vue";
// import Demo from './components/dmeo.vue'
// import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const changeLocale = (newLocale) => {
  locale.value = newLocale
}
onMounted(() => {
  const response = alovaInstance.Get("https://alovajs.dev/user/profile");
  console.log(response);
});
const counter = useCounterStore();
</script>

<style scoped></style>
