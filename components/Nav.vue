<template>
  <nav id="sidebar" class="sidebar js-sidebar" :class="{ collapsed }">
    <div class="sidebar-content js-simplebar">
      <a class="sidebar-brand" href="index.html">
        <span class="align-middle">Project Name</span>
      </a>

      <ul class="sidebar-nav">
        <li class="sidebar-header">Pages</li>

        <li
          v-for="(item, i) in nav"
          class="sidebar-item"
          :class="{ active: item.id == currentPage }"
        >
          <NuxtLink class="sidebar-link" :to="item.to">
            <i class="las la-snowflake"></i>
            <span class="align-middle">{{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    toggle() {
      return this.$store.state.sidebar.collapsed
    },
    setCurrent() {
      return this.$store.state.sidebar.currentPage
    },
  },
  watch: {
    toggle(newVal, oldVal) {
      this.collapsed = newVal
    },
    setCurrent(newVal, oldVal) {
      this.currentPage = newVal
    },
  },
  data() {
    return {
      collapsed: this.$store.state.sidebar.collapsed,
      currentPage: this.$store.state.sidebar.currentPage,
      nav: [
        {
          id: 'index',
          title: 'Page 1',
          active: false,
          to: '/',
        },
        {
          id: 'page2',
          title: 'Page 2',
          active: false,
          to: '/page2',
        },
      ],
    }
  },
}
</script>
