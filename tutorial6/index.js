
var app = new Vue({
    el: '#app-6',
    data: {
        isChecked: true,
        header: '튜토리얼6 : v-else 이아름',
        message: 'v-if는 렌더링을 제어하는 지시자입니다.',
        message1: 'v-if와 같이 사용하는 지시자입니다.',
        message2: 'v-if가 true이면 v-else는 false이면 v-else는 true입니다.',

        text1: '체크박스가 체크되어 있습니다.',
        text2: '체크박스가 체크되어 있지 않습니다.',

    },
    methods: {
        onClickCheckButton: function (e) {
            this.isChecked = e.target.checked
        }
    }
});
