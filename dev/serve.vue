<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { CalderaSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  CalderaSample,
  // }
});
</script>

<template>
  <div id="app">
    <caldera-sample />
  </div>
</template>
