<template>
    <div>
        <PageTitle title="Hello, World~!!!"/>
        <!--특정 데이터 타입으로 넘겨야 하는 경우나 페이지에서 직접 설정하는 경우 v-bind를 써야함-->
        <!-- <PageContent :title="header" :count="10" :writer="['Adward']" :regdate="'2023-12-05'" :content="{first : 'Node.js',second : 'Vue.js'}"/> -->
        <PageContent :="info" @update-info="handler"/> <!--내용이 많으면 밑에서 정의를 해줌-->
        <RefComponent ref="child"/>
        <button @click="childHandler">자식 제어</button>
    </div>
</template>
<script>
import PageTitle from './PageTitle.vue'
import PageContent from './PageContent.vue'
import RefComponent from './RefComponent.vue'

export default {
    data(){
        return{
            // header : '',
            info : {
                title : 'Today is',
                count : 0,
                writer : 'Adward',
                regdate : '2023-12-05',
                content : '내용 없음'
            }
        }
    },
    components : {
        PageTitle,
        PageContent,
        RefComponent
    },
    methods : {
        handler(value){
            alert(value)
        },
        childHandler(){
            //this.$refs.child.content = 1;
            //this.$refs.child.plusCount();
            this.$refs.child.$refs.cBtn.click();
        }
    }
}
</script>