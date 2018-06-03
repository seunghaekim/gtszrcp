<template lang="html">
  <article class="post">
    <header class="postheader">
      <h1>{{content.title}}</h1>
      <h2 v-if="content.subtitle">{{content.subtitle}}</h2>
    </header>
    <section v-if="content.images_related" class="images">
      <ul>
        <li v-for="(item, index) in content.images_related" :key="index">
          <img v-bind:src="item.url" v-bind:alt="item.name" />
        </li>
      </ul>
    </section>
    <section class="meta">
      <dl v-for="(item, index) in meta" :key="index">
          <dt>{{item.label}}</dt>
          <dd>{{item.value}}</dd>
      </dl>
    </section>
    <section v-if="content.summary" class="summary">
      <h2 id="summary">Summary</h2>
      <div class="content" v-html="content.summary"></div>
    </section>
    <section v-if="content.toc">
      <h2 id="table-of-contents">Table of Contents</h2>
      <div class="content" v-html="content.toc"></div>
    </section>
    <section v-if="content.figs" class="figs">
        <h2 id="list-of-figs">List of FIGs</h2>
        <div class="content" v-html="content.figs"></div>
    </section>
    <section v-if="content.distributor_related" class="distributor_related">
        <h2>Distributor</h2>
        <ul>
          <li v-for="(item, index) in content.distributor_related" :key="index"><a v-bind:href="item.website">{{item.name}}</a></li>
        </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'BibView',
  data () {
    return {
      content: [],
      meta: {
        writer_str: 'Writer',
        designer_str: 'Designer',
        publisher_str: 'Publisher',
        language: 'Written in',
        publisher_place: 'Place of Publication',
        medium: 'Medium of the Book',
        page_amt: 'Page Amount',
        binding_type: 'Binding Type',
        colorspace: 'Printed in',
        price: 'price'
      }
    }
  },
  methods: {
    get_content: function () {
      this.$http.get(`${this.$api_root}/book/${this.$route.params.slug}`)
        .then((result) => {
          if (result.status === 200) {
            this.content = this.set_content(result.data, this.$showdown)
            this.meta = this.set_meta(result.data)
          }
        })
    },
    set_content: function (data, converter) {
      let content = {}
      let contentKeys = ['summary', 'toc', 'figs', 'distributor_related', 'images_related']
      contentKeys.map(function (curr) {
        if(data[curr] === null) return
        if ((typeof data[curr] !== 'string' && data[curr].length < 1)) {
          return
        }
        if (typeof data[curr] === 'string') {
          content[curr] = converter.makeHtml(data[curr])
          return
        }
        content[curr] = data[curr]
      })
      return content
    },
    set_meta: function (data) {
      let meta = this.meta
      return Object.keys(this.meta).map(function (curr) {
        let value = data[curr]
        if (value !== null && value !== undefined) {
          return {
            value: value,
            label: meta[curr]
          }
        } else {
          return null
        }
      }).filter(function (curr) {
        return curr !== null
      })
    }
  },
  created () {
    this.get_content()
  }
}
</script>

<style lang="css">
</style>
