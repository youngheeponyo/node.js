<template>
    <div>
        <h1>{{title + '!!!'}}</h1>  <!--{{}}이 안에 있는 부분은 자바스크립트 영역이 된다-->
        <h2 v-bind:name="'sample'" v-text="title"/>
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel" min="0">
        <p>{{ numberModel + 10000}}</p>
        <p>{{typeof numberModel}}</p>
        <select v-model="selectModel">
            <option value="1번">1번</option>
            <option value="2번">2번</option>
            <option value="3번">3번</option>
        </select>
        <p>선택 값 : {{selectModel}}</p>
        <textarea v-model="textModel"></textarea>
        <hr>
        <input type="checkbox" v-model="chData" true-value="선택" false-value="미선택">
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" v-model="city" value="서울">서울
            <input type="checkbox" v-model="city" value="대구">대구
            <input type="checkbox" v-model="city" value="제주도">제주도
            <p>{{city}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                title : 'Hello,Vue.js',
                tagList : '<strong>Today is ... </strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selectModel : '',
                textModel : '내용을 입력하세요',
                chData : '',
                city:''
            }
        }
    }
</script>