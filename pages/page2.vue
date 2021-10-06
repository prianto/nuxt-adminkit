<template>
  <main class="content">
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">Page 2</h1>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Empty card</h5>
            </div>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: `Page 2 - ${process.env.APP_NAME}`,
      bodyAttrs: {
        class: 'page2',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('sidebar/setCurrentPage', 'page2')
    })
  },
}
</script>
