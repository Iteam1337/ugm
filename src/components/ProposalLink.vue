<template>
  <a href="#" class="link">
    <div class="row topborder">
      <span class="text">{{title}}</span>
      <arrow />
    </div>
    <div class="botborder">
      <span class="text">{{desc}}</span>
    </div>
  </a>
</template>

<script>
import Arrow from '@/components/Arrow.vue'

export default {
  props: {
    title: String,
    desc: String,
  },
  components: {
    arrow: Arrow,
  }
}
</script>