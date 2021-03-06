
const Home = {
    template: `<div>
            <h1>Home</h1>
            <h1>Home페이지 입니다</h1>
    </div>`
}   

const About = {
    template: `<div>
        <h1>About</h1>
        <h1>Home페이지 입니다</h1>
    </div>`    
}

const Profile = {
    template: `<div>
        <h1>Profile</h1>
        <h1>Profile페이지 입니다.</h1>
    </div>`
}


//위에서 작성된 라우터 컴포넌트를 라우터에 설정

const routes = [
    {path: '/home', component: Home},
    {path: '/about', component: About},//about이라고 해서 오류남
    {path: '/profile', component: Profile}//profile 페이지 추가
]

//라우터 인스턴스를 생성하고 라우터를 설정

const router = new VueRouter({
    routes: routes
})


// 뷰 인스턴스를 생성하고 마운트 함
const app = new Vue({
    router: router,
    data:{
        header: '튜토리얼16 : Router 이아름',
        messages: ['Vue는 SPA(Single Page Application)를 구축하는 것이 가능합니다',
                '어플리케이션을 작성하면서 페이지 이동은 필요합니다',
                '어플리케이션 내의 페이지 이동을 라우팅이라고 합니다',
                '페이지 이동을 만들기 위해서는 Vue Router를 사용합니다',
                '기본적으로 HTML에서는 <a>태그를 사용하고, 페이지 전체의 DOM을 갱신합니다',
                'Vue Router에서는 router-link를 사용하고, 페이지 일부분의 DOM만을 갱신합니다',
            ],//messages 에서 's' 빠져서 오류
    }
}).$mount('#app-16')//el: '#app-16을 이렇게 표시하기도 함

