
var app = new Vue({
    el: '#app-12',
    data: {
        value:0,//처음 초기화
        isChecked: true,
        header: '데이터분석 스터디 모집 신청 안내',
        message: '안녕하세요 데이터분석에 관심 있는 분들의 스터디 회원을 모집하고 있습니다.',
        message1: '사용할 수 있는 프로그래밍 언어와 통계지식, 보유한 경력과 지원하고 싶은 이유 등을 체크 및 작성해주세요.',
        message2: '2. 데이터 분석 교육기간은 어떻게 되십니까?',
        message3: '3. 원하시는 스터디 방향성은 있으실까요?',
        message4: '4. 현재 자신의 데이터 분석 레벨은 어느정도라고 보십니까?',

        text1: '체크박스가 체크되어 있습니다.',
        text2: '체크박스가 체크되어 있지 않습니다.',
        text3:'아쉽지만 다음 번 기회에 참여해주세요',
        text4:'아쉽지만 다음 번 기회에 참여해주세요',
        text5:'3번 질문으로 가주세요',
        text6:'3번 질문으로 가주세요',

        boldText: "<b>(최소 3개월 이상 교육 필요)</b>",
       
        label1:'1개월 미만',
        label2:'1~3개월 ',
        label3:'6개월 이상',
        label4:'1년 이상',

        label5:'실무 중심',
        label6:'프로그래밍 언어 공부',
        label7:'통계 지식 공부',
        label8:'인공지능',

        label9: '-level1 down',
        label10: '+level up',

        
        DataLevel: 7,
        up: 1,
        down: 1,
     
        workList:['빅데이터 트렌드 조사','캐글 대회 참여','빅데이터 공모전 참여','기업 프로젝트 참여','프로그래밍 언어 공부'],
        programmingList:['Python','R','SQL','Java','하둡'],
        statisticsList:['기초 통계학','선형대수','지도학습/비지도학습','분류/회귀 분석','카이제곱검정'],
        AIList:['AI 모델링','관련 해외 논문 서치', '강의 듣기 및 토론','딥러닝','AI 트렌드 및 직무 조사'],

     


    },
methods: {
    onClickCheckButton: function (e) {
        this.isChecked = e.target.checked
    }
},
methods: {
    onClickUp:function(){
    this.DataLevel-= this.down;

    if(this.DataLevel<=0)
    {
        this.DataLevel =0;
    }
    },
    onClickDown:function(){
        this.DataLevel+=this.up;
    }

},

});
