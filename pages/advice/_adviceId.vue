<template>
  <section class='section'>
    <h2 class='title is-3'>
      "{{ advice.advice }}"
    </h2>
  </section>
</template>

<script>
export default {
  name: 'AdviceId',
  data() {
    return {
      adviceId: this.$route.params.adviceId,
      advice: {}
    }
  },
  mounted() {
    this.loadAdviceById()
  },
  methods: {
    async loadAdviceById() {
      // Get the advice
      this.advice = await this.$store.dispatch('advice/getAdviceSlipById', this.adviceId)
    }
  }
}
</script>

<style scoped>

</style>
