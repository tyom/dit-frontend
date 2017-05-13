<template>
  <section class="dit-example">
    <header v-if="$slots.title" class="dit-example__header">
      <slot name="title"></slot>
    </header>
    <div class="dit-example__preview">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">
  .dit-example {
    border: 1px solid #ccc;
    background-color: #eee;

    & + & {
      margin-top: 30px;
    }
  }

  .dit-example__header {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
      content: "Example";
      font-weight: 500;
      color: #aaa;
      display: block;
      font-size: 1.1em;
      letter-spacing: .01em;
      text-transform: uppercase;
    }

    h2 {
      margin: 0;
    }
  }

  .dit-example__preview {
    background-color: #fff;
    padding: 20px;
  }
</style>
