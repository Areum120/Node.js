var app = new Vue({
    el: '#app-11',
    data: {
        
        header: '튜토리얼11 : v-model 이아름',
        message: 'v-model은 양방향 데이터 바인딩을 위한 지시자입니다 v-model은 뷰 오브젝트의 데이터 값과 HTML요소의 값에 쌍방으로 영향이 미칩니다 HTML요소의 값이 변하면 뷰 오브젝트의 데이터 값도 같이 변합니다. 한편, V-bind는 뷰 오브젝트의 데이터 값을 HTML 요소에만 반영합니다. ',

        message1:'v-bind의 경우', 
        message2:'v-model의 경우',
        
        value1:'입력해주세요',
        value2:'입력해주세요'


    },
    
    

});