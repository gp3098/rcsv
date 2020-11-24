<template>
  <a-config-provider :getPopupContainer="getPopupContainer" :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ConfigProvider as AConfigProvider } from "ant-design-vue";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
  components: {
    AConfigProvider,
  },
  methods: {
    getPopupContainer(el, dialogContext) {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    },
  },
};
</script>
<style lang="less"></style>
