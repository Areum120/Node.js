
var app = new Vue({
    el: '#app-8',
    data: {
        value:0,//처음 초기화
        header:'튜토리얼8: v-for 이아름',
        message : 'v-for는 배열이나 리스트를 연속해서 보여주는 렌더링 지시자입니다',
        message3 : '카테고리를 선택하세요',
        label1:'꽃',
        label2:'음식',
        label3:'국가',
        label4:'색',

        foodList:['파스타','샐러드','샌드위치','탕수육','연어롤','김밥','우동'],
        flowerList:['장미','민들레','국화','튤립','백합','칸나','해바라기'],
        nationList:['한국','미국','일본','캐나다','중국','프랑스','호주'],
        colorList:['빨간색','파란색','보라색','노란색','검은색','초록색','흰색'],
    },
    methods: {
        onClickCheckButton: function (e) {
            this.isChecked = e.target.checked
        }
    }
});
