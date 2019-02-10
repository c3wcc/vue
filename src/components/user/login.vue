<template>
<div class="hello">
    <h1>{{ msg }}</h1>

    <input v-model="username" ref="username" placeholder="用户名" />
    <input v-model="password" ref="password" placeholder="密码" />

    <br> <br>

    <wv-button @click="login()" type="primary" :mini="true">登录</wv-button>

</div>
</template>

<script>
export default {
    name: "aaa",
    data() {
        return {
            msg: "登录",
            username: 'zs',
            password: 'zs'
        };
    },
    methods: {
        login() {
            var username = this.$refs.username.value;
            console.log(username);
            var password = this.$refs.password.value;
            console.log(password);
            this.$ajax.get('api/school/admin/login?from=web&account=' + username + '&password=' + password + '&openid=web&address=no')
                .then((res) => {
                    // 请求成功回调
                    if (res.data.status == -1 || res.data.status == 0) {
                        alert(res.data.msg)
                    }
                    if (res.data.status == 1) {
                        console.log(res.data)
                        sessionStorage.setItem("schoolname", res.data.data.schoolname);

                        this.$router.push({
                            path: "/user/index"
                        });

                    }
                }, () => {
                    // 请求失败回调
                });

        }
    },
};
</script>
