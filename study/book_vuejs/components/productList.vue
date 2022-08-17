<template>
  <div class="product-list">
    <h1>상품 목록</h1>
    <ul>
      <li v-for="{ id, name } in list2" :key="id">
        <router-link :to="`/product/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  props: {
    
  },
  computed: {
    list2: function(){
      return fetch()
    }
  },
  methods: {
    
  }
}
</script>