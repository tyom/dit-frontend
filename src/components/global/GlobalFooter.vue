<template>
  <div class="global-footer">
    <container>
      <div class="global-footer__links">
        <h2 class="u-visually-hidden">Support links</h2>
        <ul class="global-footer__links-list">
          <li>
            <a href="https://beta.nhs.uk/help/cookies">Cookies</a>
          </li>
        </ul>
        <div class="global-footer__open-government-licence">
          <a class="global-footer__ogl-logo" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a>
          All content is available under the
          <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>,
          except where otherwise stated
        </div>
      </div>
      <div class="global-footer__copyright">
        <a href="http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/" rel="Copyright">© Crown copyright</a>
      </div>
    </container>
  </div>
</template>

<script>
  import Container from '../layout/Container.vue'

  export default {
    name: 'global-footer',
    components: {
      Container
    }
  }
</script>

<style lang="scss">
  @import "../tools";

  .global-footer {
    padding: 32px 16px;
    background-color: #dee0e2;
    border-top: 1px solid #bfc1c3;
    font-size: .9em;
    color: #555;

    a:link,
    a:visited {
      color: inherit;
    }

    a:hover {
      color: #222;
    }

    &:focus {

    }
  }

  .global-footer__links,
  .global-footer__copyright {
    display: inline-block;
    margin-right: -4px;
  }

  .global-footer__links {
    width: 75%;
  }

  .global-footer__links-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .global-footer__open-government-licence {
    margin-top: 16px;
    padding-left: 50px;
  }

  .global-footer__ogl-logo {
    @include hide-text(41px, 17px);
    background: url("../../assets/open-government-licence_2x.png") no-repeat;
    background-size: 41px 17px;
    margin-bottom: 10px;
    margin-left: -50px;
    float: left;
  }

  .global-footer__copyright {
    width: 25%;
    text-align: right;

    a {
      display: inline-block;
      padding: 115px 5px 5px;
      width: 125px;
      text-decoration: none;
      font-size: .9em;
      text-align: center;
      background: url("../../assets/govuk-crest-2x.png") no-repeat 50% 0;
      background-size: 125px 102px;
    }
  }
</style>
