class Human{
    //필드(생성자 내부에서 선언) 생성자 메소드
    constructor(){
        this._ssn;   // 자바랑 차이(생성자 안에 this를 이용하여 필드를 생성함)
        this._name = 'Hong';
        this._age;  //언더바를 넣으면 암묵적으로 값을 수정하지 말라는 의미
    }
    set ssn(ssn){
        this._ssn = ssn;
    }
    get ssn(){      //get만 선언이 되면 값을 넣을 수 없음(즉, 생성자에서 값을 넣어서 선언을 해도 오류가 남)-set도 함께 선언을 해야지 값을 지정할 수 있음
        return this._ssn;
    }
    set name(name){
        this._name = name;
    }
    get name(){     
        return this._name;
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }
    getInfo(){
        console.log(this._ssn,this._name,this._age);
    }
}

let hu = new Human();
hu.ssn = '990410';
hu.age = 25;
hu.name = 'Kang';
hu.getInfo();