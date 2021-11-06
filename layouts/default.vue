<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <h1 class='title'>RandomAdviceApp</h1>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-3 section">
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
          <br/>
          <a @click='clearAdviceList'><b-icon :icon="'delete-outline'" /> Reset</a>
        </ul>
      </aside>

      <div class="container column is-9">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<style>
.title {
  color: white
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Advice',
          icon: 'lightbulb',
          to: { name: 'advice' }
        },
        {
          title: 'History',
          icon: 'view-dashboard',
          to: { name: 'history' }
        }
      ]
    }
  },
  methods: {
    async clearAdviceList(){

      // Clear the advice list
      await this.$store.dispatch('advice/clearAdviceList')

      // Launch the toast
      this.$buefy.snackbar.open({
        message: 'Advice list has been cleared',
        type: 'is-warning',
        position: 'is-top',
      })
    }
  }
}
</script>
