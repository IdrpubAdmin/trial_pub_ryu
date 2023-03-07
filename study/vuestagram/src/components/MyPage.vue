<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="chckInput($event)"/>
        <div class="post-header"  v-for="(item) in follower " :key="item.id">
            <div class="profile" :style="{backgroundImage:`url(${item.image})`}"></div>
            <span class="profile-name">{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, toRefs, computed } from 'vue'
import axios from "axios";
import { useStore } from 'vuex'
export default {
    name: 'MyPage',
    props : {
        testData: Number
    },
    setup(props) {
        console.log(`props : ${props}`)
        // console.log(`context : ${context}`)
        let follower = ref([]);
        // let test = reactive({name : 'kim'});

        let { testData }  = toRefs(props);
        console.log(testData.value)

        let tempComp = computed(()=>{
            return follower.value.length
        })
        console.log(tempComp.value)

        let store = useStore();
        console.log(store.state.name)

        onMounted(()=>{

            axios.get('/follower.json').then((res)=>{
                follower.value = res.data
            })
        })

        function chckInput(e) {
            let newFollower = follower.value.filter((a)=>{
                return a.name.indexOf(e.target.value) != -1
            });
            follower.value = [...newFollower]

        }

        return { follower, chckInput }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scope>

</style>
