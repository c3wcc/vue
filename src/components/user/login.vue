<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <wv-button type="primary" :mini="true">按钮</wv-button>
    <wv-button type="default" :mini="true">按钮</wv-button>
    <wv-button type="warn" :mini="true">按钮</wv-button>
   
  </div>
</template>


<script>
export default {
  name: "aaa",
  data() {
    return {
      msg: "登录"
    };
  }
};
</script>