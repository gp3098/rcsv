<template>
  <site-header />
  <site-body />
  <site-footer />
</template>

<script>
import SiteBody from "./components/SiteBody";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
export default {
  name: "Layout",
  components: { SiteHeader, SiteBody, SiteFooter },
};
</script>

<style></style>
