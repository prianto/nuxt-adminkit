/**
 * * Dapat diakses melalui $store.state.sidebar.*
 */
export const state = () => ({
  collapsed: false,
  currentPage: 'index',
})

export const mutations = {
  toggle(state) {
    state.collapsed = !state.collapsed
  },
  setCurrentPage(state, data) {
    state.currentPage = data
  },
}
