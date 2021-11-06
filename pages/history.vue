<template>
  <section class='section'>
    <h2 v-for='advice in adviceList' :key="advice.id" class='title is-3'>
      "{{ advice.advice }}"
    </h2>
  </section>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      adviceList: {}
    }
  },
  mounted() {
    this.loadAdviceHistory()
  },
  methods: {
    async loadAdviceHistory() {
      // Get the advice
      this.adviceList = await this.$store.getters['advice/getAdviceList']
    }
  }
}
</script>
