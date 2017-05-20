<template>
  <section class="dit-example">
    <header v-if="$slots.title || title" class="dit-example__header">
      <slot name="title">
        <h2>{{title}}</h2>
      </slot>
    </header>
    <div class="dit-example__preview" ref="preview">
      <slot></slot>
    </div>
    <div class="dit-example__toolbar" v-if="$slots.toolbar">
      <slot name="toolbar"></slot>
    </div>
    <div class="dit-example__code" v-if="htmlCode">
      <pre><code class="html" v-html="htmlCode"></code></pre>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import pretty from 'pretty'
  import highlight from 'highlight.js'

  import 'highlight.js/styles/github.css'

  export default {
    data() {
      return {
        htmlCode: null,
      }
    },
    props: {
      title: String,
    },
    mounted() {
      let rawHtml = this.$refs.preview.innerHTML
      if (rawHtml) {
        const pattern = new RegExp('<!--[\s\S]*?(?:-->)', 'g')
        const highlighted = highlight.highlight('html', pretty(rawHtml.replace(pattern, '')))
        this.htmlCode = highlighted.value
      }
    },
  }
</script>

<style lang="scss">
  .dit-example {
    & + & {
      margin-top: 30px;
    }
  }

  .dit-example__header {
    padding: 10px 140px 10px 0;
    position: relative;

    code {
      background: rgba(#fff, .7);
      padding: 1px 5px;
      color: #555;
      border-radius: 3px;
    }

    &::after {
      content: "Example";
      position: absolute;
      background-color: #fff;
      right: 0;
      bottom: 0;
      font-weight: 500;
      color: #aaa;
      display: block;
      font-size: 1.1em;
      letter-spacing: .01em;
      padding: 13px 20px;
      text-transform: uppercase;
    }

    h2 {
      margin: 0;
    }
  }

  .dit-example__preview {
    background-color: #fff;
    box-shadow: 0 5px 0 -3px #ddd;
    padding: 20px;
  }

  .dit-example__toolbar {
    background: #fff;
    border-top: 1px solid #ddd;
    padding: 10px 20px;
    box-shadow: 0 5px 0 -3px #ddd;

    menu {
      padding: 0;
      margin: 0;
    }
  }

  .dit-example__code {
    border-top: 2px solid #ddd;

    pre {
      margin: 0;
    }

    code {
      font-size: .8em;
      background: #e3e3e3;
      margin: 0;
      display: block;
      padding: 15px;
    }
  }
</style>
