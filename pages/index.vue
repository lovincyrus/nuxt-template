<template>
  <main>
    <div class="section-hero">
      <div class="tm-section tm-container tm-wrapper tm-grid-base">
        <div class="text">
          <h1>Hello world!</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-hero .text
  grid-column 1/-1
  text-align center

@media $breakpoint-xl
  .section-hero .text
    grid-column 2/span 10
</style>
