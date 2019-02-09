<template>
<div class="hello">
    <h1>{{ msg }}</h1>

    <input v-model="username" ref="username" placeholder="用户名" />
    <input v-model="password" ref="password" placeholder="密码" />

    <br>
    <img src="https://account.c3w.cc/login/yzm" />
    <br>
    <input ref="code" placeholder="验证码 " />
    <br>

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

            var code = this.$refs.code.value;
            console.log(code);
            if (!code) {
                alert('验证码不能为空');
                return false;
            }

            this.$ajax.post('/account/login/index/login_chk', {
                    yzm: code,
                    username: username,
                    password: password
                })
                .then((res) => {
                    // 请求成功回调
                    console.log(res)
                    console.log(res.data)
                    if (res.data.status == -1 || res.data.status == 0 ) {
                        alert(res.data.msg)
                    }
                }, () => {
                    // 请求失败回调
                });

        }
    },
};
</script>
