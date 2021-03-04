
var app = new Vue({
    el: '#app-7',
    data: {
        value:0,
        header:'튜토리얼7: v-else-if',
        message : 'v-else-if는 렌더링을 제어하는 지시자입니다 ',
        message2 : 'v-if와 같이 사용하는 지시자입니다 ',
        message3 : '좋아하는 과일을 선택하세요',
        label1:'',
        label1:'',
        label1:'',
        label1:'',
        text1:'',
        text1:'',
        text1:'',
        text1:'',


    },
    methods: {
        onClickCheckButton: function (e) {
            this.isChecked = e.target.checked
        }
    }
});
