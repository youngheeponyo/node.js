<template>
    <div><!--if와 for을 함께 사용하면 if가 먼저 돌기때문에 for을 먼저 쓰고 싶다면 template안에 for문을 사용하고 그 안에 if문을 사용, template은 몇개를 써도 상관이 없기에 for문 돌리고 다시 쓰기-->
        <input type="number" v-model="grade" max="100" min="0">
        <p v-if="grade >= 90">성적 : A</p>
        <p v-else-if="grade >= 80">성적 : B</p>
        <p v-else-if="grade >= 70">성적 : C</p>
        <p v-else>성적 : D</p>
        <hr>
        <input type="checkbox" v-model="cdData">수강신청<br>
        <select v-model="selectObj" v-show="cdData">
            <option value="국어">국어</option>
            <option value="수학">수학</option>
            <option value="과학">과학</option>
        </select>
        <p v-show="cdData">수강신청 과목 : {{ selectObj }}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                grade : 80,
                cdData : false,
                selectObj:''
            }
        }
    }
</script>