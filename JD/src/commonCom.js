import Vue from 'vue'

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);