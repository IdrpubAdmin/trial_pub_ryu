<template>
    <div>
        <div class="post" v-for="(item, idx) in postDb" :key="idx">
            <div class="post-header">
                <div class="profile" :style="{backgroundImage:`url(${item.userImage})`}"></div>
                <span class="profile-name">{{ item.name }}</span>
            </div>
            <div class="post-body" :style="{backgroundImage:`url(${item.postImage})`}"></div>
            <div class="post-content">
                <p>{{ item.likes }} Likes</p>
                <p><strong>글쓴이아이디</strong> {{ item.content }}</p>
                <p class="date">{{ item.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostBx',
    props: {
        postDb: Array,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.post {
    width: 100%;
}

.profile {
    background-image: url("https://placeimg.com/100/100/arch");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}

.post-header {
    height: 30px;
    padding: 10px;
}

.post-body {
    background-image: url("https://placeimg.com/640/480/animals");
    height: 450px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}

.date {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}
</style>
