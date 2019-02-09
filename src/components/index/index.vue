<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <wv-button @click="aaa()" type="primary" :mini="true">跳转aaa</wv-button>

    <wv-button @click="login()" type="primary" :mini="true">去登录</wv-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "首页"
    };
  },
  methods: {
    aaa() {
      console.log("44444");
     
      var obj = {
        pageSize: 20
      };
      // this.$http.get({url: '/api/ershou/my/delete_post' , params: obj })
      // .then((res) => {
      //   // 请求成功回调
      //     console.log(res)
      // }, () => {
      //   // 请求失败回调
      // });
      this.$ajax.get('/api/ershou/my/delete_post',{
            params: obj
        })
       .then((res) => {
         // 请求成功回调
           console.log(res)
           console.log(res.data)
           if(res.data.status == -1){
             alert(res.data.msg)
           }
       }, () => {
         // 请求失败回调
       });
      console.log("44444");
    },
    login() {
     this.$router.push({
        path: "/user/login"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>