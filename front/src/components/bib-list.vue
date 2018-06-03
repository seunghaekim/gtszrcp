<template lang="html">
  <article class="page">
    <div class="postheader">
      <h1>Bibliography</h1>
    </div>
    <div class="entry">
      <ul>
        <li v-for="item in lists" :key="item.id" class="citation">
          {{item.writer_str}}.<router-link :to="{name: 'BibView', params: {slug: item.slug}}">{{item.title}}</router-link>. {{item.publisher_str}}: {{item.publisher_place}}, {{date_format(item.pub_date)}}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
const moment = require('moment')

export default {
  name: 'BibView',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    get_lists: function () {
      this.$http.get(`${this.$api_root}/book`)
        .then((result) => {
          if (result.status === 200) {
            this.lists = result.data
          }
        })
    },
    date_format: function (dateStr) {
      let m = moment(dateStr)
      return m.format('Y')
    }
  },
  created () {
    this.get_lists()
  }
}
</script>

<style lang="css">
</style>
