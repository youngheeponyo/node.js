<template>
    <h2>{{ title }}</h2>
</template>
<script>
// PageTitle.vue
export default{
    props : ['title']   //유효성 검사를 하지 않고 정해진 데이터를 다 받겠다는 의미[](default)
}
</script>