<template>
  <section class='section'>
    <h2 v-for='advice in computedAdviceHistory' :key="advice.id" class='title is-3'>
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
  computed: {
    computedAdviceHistory() {
      // Get the advice
      return  this.$store.getters['advice/getAdviceList']
    }
  },
  mounted() {
    // this.loadAdviceHistory()
  },
  methods: {
    async loadAdviceHistory() {
      // Get the advice
      this.adviceList = await this.$store.getters['advice/getAdviceList']
    }
  }
}
</script>
