<template>
  <section class="section">
    <section class="column is-4 section">
      <b-field class='is-3' label="Topic">
        <b-input v-model="query"></b-input>
      </b-field>
      <button class='button is-primary' @click='loadAdviceByTopic'>Search</button>
    </section>
    <section class="column is-9 section">
      <h2 v-for='advice in adviceList' :key="advice.id" class='title is-3'>
        "{{ advice.advice }}"
      </h2>
    </section>
  </section>

</template>

<script>
export default {
  name: 'Advice',
  data() {
    return {
      query: '',
      adviceList: {}
    }
  },
  mounted() {
  },
  methods: {
    async loadAdviceByTopic() {
      // Get the loading component
      const loadingComponent = this.$buefy.loading.open({
        container: null,
      })

      // Get the advice list
      this.adviceList = await this.$store.dispatch('advice/getAdviceSlipByTopic', this.query)

      if (this.adviceList.length === 0) {
        // Launch the snackbar
        this.$buefy.snackbar.open({
          message: 'No data returned for: ' + this.query,
          type: 'is-warning',
          position: 'is-top',
        })
      }

      // Close the loading component
      loadingComponent.close()
    }
  }
}
</script>
