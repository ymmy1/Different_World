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
  </div>
</template>

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
</style>
