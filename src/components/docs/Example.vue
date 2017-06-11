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
  @import "../settings";
  @import "../tools";

  .dit-example {
    & + & {
      margin-top: 30px;
    }
  }

  .dit-example__header {
    padding: 10px;
    position: relative;

    @include media('>phone') {
      padding-left: 120px;
    }

    code {
      background: rgba(#fff, .7);
      padding: 1px 5px;
      color: #555;
      border-radius: 3px;
    }

    &::before {
      content: "Example";
      height: 31px;
      line-height: 31px;
      margin: auto auto 10px;
      font-weight: 500;
      color: #fff;
      background-color: #555;
      display: inline-block;
      letter-spacing: .05em;
      padding: 2px 10px 0;
      text-transform: uppercase;

      @include media('>phone') {
        margin-bottom: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }

    h2 {
      margin: 0;
    }
  }

  .dit-example__preview {
    background-color: #fff;
    padding: 20px;
  }

  .dit-example__toolbar {
    background: #fff;
    padding: 10px 20px;
    border-top: 1px solid #ddd;

    menu {
      padding: 0;
      margin: 0;
    }
  }

  .dit-example__code {
    background-color: #ccc;
    padding: 3px;

    pre {
      margin: 0;
    }

    code {
      font-size: .8em;
      background: #e3e3e3;
      margin: 0;
      display: block;
      padding: 17px;
      overflow: auto;
    }
  }

  .dit-example__code-selector {
    margin: 0;
    padding: 0;

    button {
      font-size: .8em;
      font-weight: 500;
      color: #444;
      border: 0;
      padding: 10px 17px;
      background-color: transparent;
      cursor: pointer;
      outline: 0;

      &:hover {
        color: #000;
      }

      &:active {
        background-color: #d7d7d7;
      }

      &:focus {
        box-shadow: inset 0 0 0 2px $outline-colour;
      }
    }

    .is-active {
      background-color: #e3e3e3;
      color: #000;
    }
  }
</style>
