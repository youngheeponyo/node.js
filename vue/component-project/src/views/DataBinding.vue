<template>
    <div class>
        <h1>{{title + '!!!'}}</h1>  <!--{{}}이 안에 있는 부분은 자바스크립트 영역이 된다-->
        <h2 v-bind:name="'sample'" v-text="title"/>
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel" min=0>
        <p>{{ numberModel + 10000}}</p>
        <p>{{typeof numberModel}}</p>
        <select v-model="selectModel">
            <option value="1번">1번</option>
            <option value="2번">2번</option>
            <option value="3번">3번</option>
        </select>
        <p>선택 값 : {{selectModel}}</p>
        <textarea v-model="textModel" placeholder="내용을 입력하세요"></textarea>
        <hr>
        <input type="checkbox" v-model="chData" true-value="선택" false-value="미선택">
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" v-model="city" value="서울">서울
            <input type="checkbox" v-model="city" value="대구">대구
            <input type="checkbox" v-model="city" value="제주도">제주도
            <p>{{city}}</p>
        </div>
        <div> 
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>나의 취미는? {{ hobby }}</p>
        </div>
        <hr>
        <img v-bind:src="imgUrl" v-bind:style="styleData">  <!--style타입이 객체 형태-->
        <div class="container" v-bind:class="{'active':isActive,'text-red':isRed}">Class Binding First</div>
        <div class="container" v-bind:class="myClass">Class Binding Second</div>
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
                textModel : '',
                chData : '',
                city : ['제주도'],        //처음에 값을 지정해주고 싶으면 적으면 됨
                hobby : '',
                imgUrl : 'https://i.pinimg.com/originals/d2/11/77/d21177861d4c3ee30af8ee649a033b91.jpg',
                styleData : {
                    backgoundColor : 'pink',        //-을 사용하지 않고 대소문자로 구분
                    width : '300px',
                    height : '300px'
                },
                // backSetting : 'background-color:skyblue;width:300px',
                // addStyle : 'height:300px' 이렇게 사용하고 위에 스타일에 배열 형태로 주면 됨
                isActive : false,
                //isRed : !this.isActive,
                myClass : 'active'
            }
        },
        computed : {
            isRed(){
                return !this.isActive       //값을 계속 isActive와 반대로 주고 싶을 때, 초기값을 주는게 아니라 계속 연결성을 유지하고 싶으면 data가 아니라 computed속성에 넣어줘야함
            }
        }
    }
</script>
<style scoped>
    .container {
        width : 100%;
        height : 200px;
    }
    .active{
        background-color: rgb(245, 210, 216);
        font-weight: bold;
    }
    .text-red{
        color : red;
    }
</style>