<template>
  <article>
    <div class="msg" v-if="data">{{data.title}} 으로 이동합니다.</div>
  </article>
</template>

<script>
export default {
  name: 'LinksView',
  data () {
    return {
      data: false
    }
  },
  methods: {
    get_content () {
      this.$http.get(this.api_url())
        .then((result) => {
          if (result.status === 200) {
            this.set_content(result.data)
          }
        })
    },
    api_url () {
      return [this.$api_root, 'links', this.$route.params.slug].join('/')
    },
    set_content (data) {
      this.data = data
      window.location.href = data.url
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.get_content())
  },
  beforeRouteUpdate (to, from, next) {
    this.content = []
    this.get_content()
    next()
  }
}
</script>

<style lang="scss">
nav {
    display:none;
}

.msg {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 98vw;
    transform: translateY(-50%);
    text-align: center;
}
</style>
