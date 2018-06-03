<template>
  <article class="post">
    <div class="postheader"></div>
    <ul>
      <li v-for="item in lists" :key="item.id" class="citation">
        {{item.author}}. "<router-link :to="{ name: 'PostView', params: {slug: item.slug} }">{{item.title}}</router-link>" {{item.pub_date}}. Web.
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    get_lists: function () {
      this.$http.get(`${this.$api_root}/post`)
        .then((result) => {
          if (result.status === 200) {
            this.lists = result.data
          }
        })
    }
  },
  created () {
    this.get_lists()
  }
}
</script>

<style lang="sass">
</style>
