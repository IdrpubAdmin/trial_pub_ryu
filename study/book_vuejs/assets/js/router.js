var Home = httpVueLoader('./components/home.vue')
var Product = httpVueLoader('./components/product.vue')
var ProductList = httpVueLoader('./components/productList.vue')
var ProductHome = httpVueLoader('./components/productHome.vue')
var ProductReview = httpVueLoader('./components/productReview.vue')
var ProductReviewDetail = httpVueLoader('./components/productReviewDetail.vue')

const database = [
    { id: 1, name: '상품A', price: 1000, content: '상품A 상세' },
    { id: 2, name: '상품B', price: 2000, content: '상품B 상세' },
    { id: 3, name: '상품C', price: 3000, content: '상품C 상세' }
]

function fetch(id) {
    return database
}

function find(id) {
    return database.find(el => el.id === id)
}
function asyncFind(id, callback) {
    setTimeout(() => {
        callback(database.find(el => el.id === id))
    }, 1000)
}

var router = new VueRouter({
    // URL 경로와 연결할 컴포넌트 맵핑하기
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/product',
            component: ProductList,

        },
        {
            path: '/product/:id', // ':id'가 매개 변수에 들어 있는 경우
            component: Product,
            // 함수로 지정하면 첫 번째 매개변수로 현재 라우트 객체를 사용할 수 있음
            props: route => ({
                id: Number(route.params.id)
            }),
            children: [
                // 상품 상세(디폴트 라우트)
                {
                    name: 'product-home',
                    path: '',
                    component: ProductHome
                },
                // 상품 리뷰 목록
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview
                },
                // 상품 리뷰 상세
                {
                    name: 'review-detail',
                    path: 'review/:rid', // 부모 라우트로 사용하지 않는 매개 변수 지정하기
                    component: ProductReviewDetail,
                    props: route => ({
                        rid: Number(route.params.rid)
                    })
                }
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log("savedPosition")
        console.log(savedPosition)
        if (savedPosition) {

            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

var app = new Vue({
    store, //vuex 등록하기
    router, // 애플리케이션 등록하기

}).$mount('#app')

// 라우터 네비게이션 전에 훅
router.beforeEach((to, from, next) => {
    // console.log("loading before")
    // console.log(to)
    // console.log(from)
    // console.log(next)
    store.commit('vuexview/start')
    next()
})
// 라우터 네비게이션 후에 훅
router.afterEach(() => {
    // console.log("loading after")
    store.commit('vuexview/end')
})

var auth = {
    loggedIn() {
        loginState = true //로그인상태
        return loginState
    }
}
//라우트 접근 제한
router.beforeEach((to, from, next) => {
    // 상위 라우트를 포함해서 인증이 필요한 라우트가 있는지 확인
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 인증 상태 확인
        if (!auth.loggedIn()) {
            // console.log("로그인 필요")
            // 인증되어 있지 않으면 로그인 페이지로 리다이렉트
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            // console.log("로그인 완료")
            next()
        }
    } else {
        next() // 인증이 필요하지 않은 라우트라면 next()로 이동
    }
})
