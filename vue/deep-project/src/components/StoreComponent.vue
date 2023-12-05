<template>
    <div>
        <form>
            <br><label>제품Id : <input type="text" v-model="productInfo.product_id"></label><br>
            <label>제품명 : <input type="text" v-model="productInfo.product_name"></label><br>
            <label>카테고리 : 
                <input type="radio" value="A" v-model="productInfo.category">A
                <input type="radio" value="B" v-model="productInfo.category">B
                <input type="radio" value="C" v-model="productInfo.category">C
            </label><br>
            <button type="button" @click="addCart">추가</button><hr>
        </form>
        <table border="1">
            <caption>total : {{ total }}</caption>
            <thead>
                <th><tr>카테고리</tr></th>
                <th><tr>제품ID</tr></th>
                <th><tr>제품명</tr></th>
                
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info,idx) in productList">
                    <td>{{ info.category }}</td>
                    <td>{{ info.product_id }}</td>
                    <td>{{ info.product_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            productInfo : {
                product_id : '',
                product_name : '',
                category : 'A'
            }
        }
    },
    computed : {
        productList(){
            return this.$store.state.cart;
        },
        total(){
            return this.$store.getters.cartCount;
        }
    },
    methods : {
        addCart(){
            let obj = {
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            this.$store.commit('addProduct',obj);      //넘겨야할 정보는 두번째 매개변수로 보내주면 됨
        }
    }
}
</script>