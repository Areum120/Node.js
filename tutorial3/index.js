
var app = new Vue({
    el: '#app-3',
    data: {
        header: '튜토리얼3 : v-html',
        message: 'v-html은 HTML를 렌더링하는 지시자 입니다',
        message1: 'v-text에서는 HTML텍스트를 사용할 수 없습니다',
        boldText: "<b>HTML-Bold 텍스트입니다</b>",
        italicText: "<i>HTML-Italic 텍스트입니다</i>",
        UnderlinedText: "<u>HTML-Underlined 텍스트입니다</u>"
    }
});
