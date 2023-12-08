<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">사원번호</th>
          <td class="text-center">
            <input type="number" v-model="empInfo.emp_no">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.first_name">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.last_name">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="empInfo.gender"> 남
            <input type="radio" value="F" v-model="empInfo.gender"> 여
          </td>
        </tr>
         <tr>
          <th class="text-right table-primary">입사일자</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.hire_date">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">
            <input type="number" min="0" v-model="empInfo.salary" v-bind:readonly="isUpdated">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">소속부서</th>
          <td class="text-center">
            <select v-model="empInfo.dept_no" v-bind:disabled="isUpdated">
                <option :key="idx" v-for="(info, idx) in deptList" v-bind:value="info.dept_no">
                  {{info.dept_name}}
                </option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <!-- 첫번째 -->
      <button class="btn btn-success" @click="saveInfo(searchNo)">저장</button>
      <!-- 두번째 -->
      <!-- <button class="btn btn-success" @click="isUpdated ? empUpdate() : empInsert()">저장</button> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            isUpdated : false,
            searchNo: '',
            empInfo: {
                emp_no : '',
                first_name : '',
                last_name : '',
                gender : '',
                hire_date : '',
                salary : 0,
                dept_no : ''
            },
            deptList : []
        };
    },
    created() {
        this.searchNo = this.$route.query.eno;
        this.getDeptlist();

        if(this.searchNo > 0){
            this.getEmpInfo();
            this.isUpdated = true;
        }else{
            this.empInfo.hire_date = this.getToday();
        }
        
    },
    methods: {
        async getEmpInfo() {
            let result = await axios.get(`/api/emp/${this.searchNo}`)
                              .catch(err => console.log(err));
            this.empInfo = result.data;
            this.empInfo.hire_date = this.$dateFormat(this.empInfo.hire_date, 'yyyy-MM-dd');
        },
        async getDeptlist(){
            let result = await axios.get(`/api/depts`)
                              .catch(err => console.log(err));
            this.deptList = result.data;
        },
        getToday(){
            return this.$dateFormat('', 'yyyy-MM-dd');
        },
        /* 첫번째 */
        async saveInfo(no){
            let info = this.getInfo(no);

            let result = await axios(info);
            if(result.data.affectedRows > 0){
                alert('정상적으로 처리되었습니다.');
            }else{
                alert('정상적으로 처리되지 않았습니다.');
            }
        },
        getInfo(eno){
            let method 
            = '';
            let url = '';
            let data = null;
                     
            if(eno > 0 ){
                method = 'put';
                url = `/api/emp/${eno}`;
                data = {
                    param : {
                      first_name : this.empInfo.first_name,
                      last_name : this.empInfo.last_name,
                      gender : this.empInfo.gender,
                      hire_date : this.empInfo.hire_date
                    }
                };   
            }else{
                method = 'post';
                url = '/api/emp';
                let info = this.empInfo;  
                info.from_date = this.empInfo.hire_date;
                info.to_date = '9999-01-01'
                data = {
                    param : this.empInfo
                };
            }

            return {
                method,
                data,
                url
            }
        },
        /* 두번째 */
        async empInsert(){
          let info = this.empInfo;  
          info.from_date = this.empInfo.hire_date;
          let data = {
                  param : this.empInfo
              };
          let result = await axios.post('/api/emp',data);
          if(result.data.affectedRows > 0){
            alert('정상적으로 처리되었습니다.');
          }else{
            alert('정상적으로 처리되지 않았습니다.');
          }
        },
        async empUpdate(){
          let data = {
                    param : {
                      first_name : this.empInfo.first_name,
                      last_name : this.empInfo.last_name,
                      gender : this.empInfo.gender,
                      hire_date : this.empInfo.hire_date
                    }
                };
          let result = await axios.put(`/api/emp/${this.empInfo.emp_no}`,data);
          if(result.data.changedRows > 0){
              alert('정상적으로 수정되었습니다.');
          }else{
              alert('정상적으로 수정되지 않았습니다.');
          }
        }
    }
}
</script>
