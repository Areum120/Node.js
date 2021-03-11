var app = new Vue({
    el: '#app-10',
    data: {
        
        header: '튜토리얼10 : v-bind 이아름',
        message: 'v-bind는 HTML 태그 속성을 변경하는 지시자입니다',

        message1:'v-bind', 
        message2:'기본태그',
        
        websiteList:
        [
            'Google',
            'Naver',
        ],
        urlList:
        [
            'https://www.google.com',
            'https://www.naver.com'
        ],
        color:'blue',
        colorMessage:"파란색 입니다"
    },
    
    

});