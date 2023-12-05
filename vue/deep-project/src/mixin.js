//mixin 특정 모듈이 필요하면 import를 통해 불러옴
export default {
 methods : {
    $dateFormat(value,format){
        let today = new Date(value);
        let year = today.getFullYear();
        let month = ('0'+(today.getMonth()+1)).slice(-2);
        let day = ('0'+today.getDate()).slice(-2);
        let result = format.replace('yyyy',year).replace('MM',month).replace('dd',day);
        return result;
    }
 },
 mounted(){
    console.log('DOM에 마운트');
 },
 created(){
    console.log('컴포넌트 생성');
 }
}