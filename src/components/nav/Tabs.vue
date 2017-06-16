<template>
  <ul :class="className">
    <li class="is-active">
      <a href="#">Nav #1</a>
    </li>
    <li>
      <a href="#">Nav #2</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      variant: String,
    },
    data () {
      return {
        className: {
          'tabs': true,
          'tabs--stacked': this.variant === 'stacked',
          'tabs--justified': this.variant === 'justified',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../tools";

  .tabs {
    @include clearfix;
    padding: 0 5px;
    margin: 0;
    list-style: none;
    border: solid #ccc;
    border-width: 0 0 1px;
    box-sizing: border-box;
    font-weight: 500;
    text-align: center;

    > li {
      float: left;
      padding-right: 3px;

      &:last-child {
        padding-right: 0;
      }

      &.is-active {
        a,
        a:hover {
          background-color: #fff;
          position: relative;
          border-bottom-color: #fff;
          color: #000;
        }
      }

      a {
        display: block;
        background-color: #eee;
        border: 1px solid #ccc;
        padding: 10px 20px;
        margin-bottom: -1px;
        text-decoration: none;
        color: #555;

        &:hover {
          background-color: #f6f6f6;
          color: #000;
        }
      }
    }
  }

  .tabs--justified {
    width: 100%;
    display: table;

    > li {
      display: table-cell;
      float: none;
    }
  }

  .tabs--stacked {
    border-width: 0;
    padding: 0 0 10px;
    text-align: left;

    > li {
      float: none;
      padding-right: 0;

      a {
        margin-right: -1px;
      }
    }
  }
</style>
