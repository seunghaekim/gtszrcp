<template lang="html">
  <article class="post">
    <carousel :per-page="1" :loop="true" :autoplay="true" v-if="content.images" class="images">
      <slide v-for="(item, index) in content.images.images" :key="index">
        <img v-bind:src="item.image" v-bind:alt="item.name" />
      </slide>
    </carousel>
    <section class="content">
      <div class="postheader">
        <h1>{{content.title}}</h1>
      </div>
      <div class="entry" v-html="content.content"></div>
      <div class="date">{{content.pub_date}}</div>
    </section>
  </article>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import moment from 'moment'

export default {
  name: 'PostView',
  components: { Carousel, Slide },
  data () {
    return {
      content: []
    }
  },
  methods: {
    get_content: function () {
      this.$http.get(this.api_url())
        .then((result) => {
          if (result.status === 200) {
            result.data.content = this.$showdown.makeHtml(result.data.content)
            let m = moment(result.data.pub_date)
            result.data.pub_date = m.format('ll')
            this.content = result.data
          }
        })
    },
    api_url: function () {
      let cat = this.$route.name === 'PageView' ? 'page' : 'post'
      return [this.$api_root, cat, this.$route.params.slug].join('/')
    }
  },
  watch: {
    '$route': 'get_content'
  },
  created () {
    this.get_content()
  }
}
</script>

<style lang="sass">
</style>
