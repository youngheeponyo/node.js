<template>
    <Layout>
        <template v-slot:header>
            <h1>팝업 제목</h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </Layout>
</template>
<script>
import Layout from './modalLayout.vue'

export default {
    components :{
        Layout
    }
}
</script>