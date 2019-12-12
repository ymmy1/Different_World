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
    margin-top: 2%;
    font-size: 3em;
    font-weight: bold;
  }

  p {
    font-style: italic;
    color: grey;
    font-size: 1.4em;
  }
}

@media only screen and (max-width: 880px) {
  .slot {
    h1 {
      font-size: 2.4em;
    }
  }

}

</style>
