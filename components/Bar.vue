<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle" v-on:click="toggleNav">
      <i class="hamburger align-self-center"></i>
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle d-none d-sm-inline-block"
            data-bs-toggle="dropdown"
            v-on:click="toggleConf"
            :class="{ show }"
          >
            <span class="text-dark">
              <i class="las la-user-tie la-fw"></i>
              User
            </span>
          </a>

          <div class="dropdown-menu dropdown-menu-end" :class="{ show }">
            <a class="dropdown-item" href="#">
              <i class="las la-circle la-fw"></i>
              Menu 1
            </a>
            <a class="dropdown-item" href="#">
              <i class="las la-circle la-fw"></i>
              Menu 2
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <i class="las la-circle la-fw"></i>
              Log out
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      this.$store.commit('sidebar/toggle')
    },
    toggleConf() {
      this.show = !this.show
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
