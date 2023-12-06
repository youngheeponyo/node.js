import {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state(){
        return{
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state)=>{
            return state.cart.length;
        }
    },
    mutations : {   //동기적 변이를 다룸
        increament(state){
            state.count++;
        },
        addProduct(state,info){  
            state.cart.push(info);
        }
    },
    actions : { //비동기적 변이름 다름
         addProduct(context,info){     //첫번째는 instance 전체가 넘어옴(정의해놓은 전체(state,getters,mutations)), 두번째는 컴포넌트가 넘기는 데이터가 들어가는 자리
            setTimeout(()=>{
                context.commit('addProduct',info);
            },1000);
        }
    },
    plugins : [
        createPersistedState({
            paths : ['cart']
        })
    ]
});

export default store;