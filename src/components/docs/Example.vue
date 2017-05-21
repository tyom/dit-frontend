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
      <menu class="dit-example__code-selector">
        <button :class="{'is-active': this.showCode === 'definition'}" @click="showCode = 'definition'">Definition</button>
        <button :class="{'is-active': this.showCode === 'rendered'}" @click="showCode = 'rendered'">Rendered</button>
      </menu>
      <div class="dit-example__definition" v-if="showCode === 'definition'">
        <pre><code class="html" v-html="originalCode"></code></pre>
      </div>
      <div class="dit-example__rendered" v-if="showCode === 'rendered'">
        <pre><code class="html" v-html="htmlCode"></code></pre>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import pretty from 'pretty'
  import highlight from 'highlight.js'
  import {kebabCase} from 'lodash'

  import 'highlight.js/styles/github.css'

  function reformatComponents (els) {
    if (!els || !els.length) {return null}

    return els.filter(c => c.tag).map(c => {
      const options = {}

      if (c.componentOptions) {
        options.tag = c.componentOptions.tag
        options.children = reformatComponents(c.componentOptions.children) || []
        options.props = c.componentOptions.propsData || {}
      } else {
        options.tag = c.tag
        options.children = reformatComponents(c.children) || []
        options.props = {}
      }

      return options
    })
  }

  function renderHtmlAttributes (attrs) {
    return Object.keys(attrs).map(k => {
      const value = attrs[k]
      return kebabCase(k) + (value !== '' ? `="${value}"` : '')
    }).join(' ')
  }

  function componentToHtml (children) {
    const string = children.map(c => {
      const tag = c.tag
      return `
        <${tag} ${renderHtmlAttributes(c.props)}>${c.children.length ? componentToHtml(c.children) : ''}</${tag}>
      `.trim()
    }).join('')

    return pretty(string)
  }

  export default {
    data() {
      return {
        originalCode: null,
        htmlCode: null,
        showCode: 'definition',
      }
    },
    props: {
      title: String,
    },
    mounted() {
      const reformatted = reformatComponents(this.$slots.default)
      const stringified = componentToHtml(reformatted)
      this.originalCode = highlight.highlight('html', stringified).value

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

  .dit-example__code-selector {
    margin: 0;
    padding: 5px 5px 0;
    background-color: #ccc;

    button {
      font-size: .8em;
      font-weight: 500;
      color: #444;
      border: 0;
      padding: 10px 15px;
      background-color: transparent;
      cursor: pointer;
      outline: 0;

      &:hover {
        color: #000;
      }

      &:active {
        background-color: #d7d7d7;
      }
    }

    .is-active {
      background-color: #e3e3e3;
      color: #000;
    }
  }
</style>
