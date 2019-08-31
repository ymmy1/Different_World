<template>
  <!-- Our slot component -->
  <div class="slot">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.slot {
  h1 {
    margin-top: 1%;
    font-size: 2.5em;
  }

  p {
    font-style: italic;
    color: grey;
  }
}

</style>
