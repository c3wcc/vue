<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ schoolname }}</h3>

    <h5 @click="logout()">退出登录</h5>

</div>
</template>

<script>
export default {
    name: "aaa",
    data() {
        return {
            msg: "用户中心",
            schoolname: ''
        };
    },

    created() {
        console.log('created')
        this.schoolname = sessionStorage.getItem("schoolname");
        if (this.schoolname == 'null') {
            console.log('created空')
            this.$router.push({
                path: "/user/login"
            });
        }
    },

    mounted: function () {
        this.schoolname = sessionStorage.getItem("schoolname");
        console.log(this.schoolname)
    },

    methods: {
        logout() {
            sessionStorage.setItem("schoolname", null);
            this.$router.push({
                path: "/user/login"
            });
        }
    },
};
</script>
