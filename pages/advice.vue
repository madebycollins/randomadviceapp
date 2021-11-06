<template>
  <section class="section">
    <h2 class="title is-3">
      "{{ advice.advice }}"
    </h2>
  </section>
</template>

<script>
export default {
  name: 'Advice',
  data() {
    return {
      advice: {}
    }
  },
  mounted() {
    this.loadAdvice()
  },
  methods: {
    async loadAdvice() {
      // Get the advice
      this.advice = await this.$store.dispatch('advice/getAdviceSlip')
    }
  }
}
</script>
