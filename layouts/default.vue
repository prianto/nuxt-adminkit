<template>
  <div class="wrapper">
    <Nav />
    <div class="main">
      <Bar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${process.env.APP_NAME}`,
      bodyAttrs: {
        class: 'layout-default',
      },
    }
  },
}
</script>
