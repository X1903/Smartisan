// 第一步,引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 第二部创建一个store
let store = new Vuex.Store({
  state: {
    // 存储数据
    carPanelData: [],

    // 是否最大值
    maxOff: false,

    // 控制隐藏显示
    carShow: false,

    // 创建小球
    ball:{
      show: false, //显示
      el: null, //点击的哪一个
      img: '',
    }

  },
  getters:{
    // 计算数量
    totleCount(state){
      let count=0;
      state.carPanelData.forEach(goods => {
        count += goods.count
      });
      return count
    },
    // 价格
    totlePrice(state){
      let price=0;
      state.carPanelData.forEach(goods => {
        price += goods.count * goods.price
      });
      return price
    }
  },

  // 添加到购物车
  mutations: {
    addCarpanelData(state, data) {

      let bOff = true;

      // 判断购物车是否添加过
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === data.sku_id) {
          goods.count++;

          // 判断是否大于最大值
          if (goods.count > goods.limit_num){
            goods.count --;
            state.maxOff = true
          }
          bOff = false;
          // 添加购物车显示购物车
          state.carShow = true;

          // 设置添加购物车物品,小球运动,
          state.ball.show = true;
          state.ball.img = data.ali_image;
          state.ball.el = event.path[0];
        }
      });
      if (bOff) {
        state.carShow = true;
        let goodsData = data;
        Vue.set(goodsData, 'count', 1);
        state.carPanelData.push(goodsData);

        // 设置添加购物车物品,小球运动,
        state.ball.show = true;
        state.ball.img = data.ali_image;
        state.ball.el = event.path[1];
        state.ball.img = data[0].ali_image;
      }
    },



    // 删除物品
    delCarPanelData (state,id) {
      state.carPanelData.forEach((goods,index) => {
        if(goods.sku_id === id){
          state.carPanelData.splice(index,1);
          return
        }
      })
    },

    // 关闭提示
    closePrompt(state){
      state.maxOff = false
    },

    // 隐藏显示购物车
    showCar(state){
      state.carShow = true
    },
    // 定时隐藏
    hideCar(state){
      setTimeout(() => {
        state.carShow = false
      }, 500)
    }
  }
});

// 第三布, 将store暴露
export default store
