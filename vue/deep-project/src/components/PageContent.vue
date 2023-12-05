<template>
    <table >
        <tr>
            {{ $dateFormat('2023.12.05','yyyy년 MM월 dd일') }}
        </tr>
        <tr>
            <th>제목</th>
            <td>{{ title }}</td>
            <th>조회수</th>
            <td>{{ readInfo }}</td>
        </tr>
        <tr>
            <th>작성자</th>
            <td>{{ writer }}</td>
            <th>작성일자</th>
            <td>{{ regdate }}</td>
        </tr>
        <tr>
            <th>내용</th>
            <td>{{ content }}</td>
        </tr>
        <tr>
            <button @click="updateInfo">업데이트</button>
        </tr>
    </table>
</template>
<script>
// import mixin from '../mixin.js';
export default{
    //props : ['title','count','writer','regdate','content']
    // mixins : [mixin],
    props : {   //조건을 만족하지 않더라도 페이지는 만들어지지만 콘솔창에 오류가 뜸
        title : String,
        count : {
            type : Number,
            default : 0
        },
        writer : {
            type : [String, Object], //타입이 두가지인 경우 배열로 정의
            default : function(){       //object나 array 타입에는 함수형태에 return type이 객체 타입이 되어야함
                return {first : 'Adward', second : 'Lian'}
            }
        },
        regdate : {
            required : true,    //값이 반드시 필요한 경우
            validator : function(value){
                let format = /[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/     //yyyy-mm-dd의 형태를 체크하는 것
                return !(value.match(format)==null);    //match가 정해지 포맷을 가지지 않으면 null이 뜨기 때문에 null이 아니라고 표현
            }
        },
        content : String
    },
    computed : {
        readInfo(){
            return this.count + 1;
        }
    },
    methods : {
        updateInfo(){
            //내부에서 일어난 이벤트 내용을 전달할때
            this.$emit('update-info',this.readInfo);
        }
    },
    watch : {
        readInfo(){
            //데이터 전달
            this.$emit('update-info',this.readInfo);
        }
    }
}
</script>