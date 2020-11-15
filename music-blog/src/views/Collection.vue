<template>
  <div class="collection">
    <div class="heading">
      <h1>my collection:</h1>
    </div>
    <CollectionList :collection="collection"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CollectionList from '@/components/CollectionList.vue'

export default {
  name: 'Collection',
  components: {
    CollectionList
  },
  computed: {
    collection() {
      return this.$root.$data.collection;
    }
  }
}
</script>

<style scoped>
.collection {
  background-color: #dddddd;
}

.heading {
  padding:200px 25px;
}

.heading h1 {
  font-size: 36pt;
  color: #2c3e50;
}
</style>
