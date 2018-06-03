<template lang="html">
  <article class="post">
    <div class="postheader">
      <h1>{{content.title}}</h1>
    </div>
    <div class="entry" v-html="content.content"></div>
    <div class="date">{{content.pub_date}}</div>
  </article>
</template>

<script>
const moment = require('moment')

export default {
  name: 'PostView',
  data () {
    return {
      content: []
    }
  },
  methods: {
    get_content: function () {
      this.$http.get(`${this.$api_root}/post/${this.$route.params.slug}`)
        .then((result) => {
          if (result.status === 200) {
            result.data.content = this.$showdown.makeHtml(result.data.content)
            let m = moment(result.data.pub_date)
            result.data.pub_date = m.format('ll')
            this.content = result.data
          }
        })
    }
  },
  created () {
    this.get_content()
  }
}
</script>

<style lang="sass">
</style>
