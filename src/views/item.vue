<template>
  <div id="main">
    <div class="store-content item">
      <div class="item-box">
        <div class="gallery-wrapper">
          <div class="gallery">
            <div class="thumbnail">
              <ul>
                <li :class="{'on':index === imageIndex}" @click="tableImg(index)" :key="index" v-for="image, index in itemInfo.ali_images">
                  <img :src="image + '?x-oss-process=image/resize,w_54/quality,Q_90/format,webp'">
                </li>

              </ul>
            </div>
            <div class="thumb">
              <ul>
                <li :class="{'on':index === imageIndex}" v-for="image, index in itemInfo.ali_images">
                  <img :src="image + '?x-oss-process=image/resize,w_440/quality,Q_90/format,webp'">
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="sku-custom-title">
            <div class="params-price">
              <span><em>¥</em><i>{{itemInfo.price}}</i></span>
            </div>
            <div class="params-info">
              <h4>{{itemInfo.title}}</h4>
              <h6>{{itemInfo.sub_title}}</h6>
            </div>
          </div>
          <div class="sku-dynamic-params-panel">
            <div class="sku-dynamic-params clear">
              <span class="params-name">颜色</span>
              <ul class="params-colors">
                <li class="cur" v-for="color,index in itemInfo.sku_list" >

                  <!--<a :title="color.color"><img :src="'http://img01.smartisanos.cn/' + color.image +'/20X20.jpg'"></a>-->

                  <router-link :title="color.color" :to="{name:'Item', query:{itemId:color.id}}">
                    <img :src="'http://img01.smartisanos.cn/' + color.image +'/20X20.jpg'">

                  </router-link>


                  <!--<router-link :title="color.color" to="{name:'Item', query:{itemId:color.id}}" @click="tableImg(index)">-->
                    <!--<img :src="'http://img01.smartisanos.cn/' + color.image +'/20X20.jpg'">-->
                  <!--</router-link>-->

                </li>
              </ul>
            </div>
            <div class="sku-dynamic-params clear">
              <div class="params-name">数量</div>
              <div class="params-detail clear">
                <div class="item-num js-select-quantity">
                  <span class="down down-disabled">-</span>
                  <span class="num">1</span>
                  <span class="up up-disabled">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sku-status">
            <div class="cart-operation-wrapper clearfix">
              <span class="blue-title-btn js-add-cart"><a>加入购物车</a></span>
              <span class="gray-title-btn"><a>现在购买</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import itemsData from '../lib/newItemsData'
    export default {
        name: "item",
      data(){
          return{
            itemsData,
            itemId:this.$route.query.itemId,
            imageIndex: 0
          }
      },

      // 检视点击后变商品
      watch:{
          '$route.query.itemId'(){
            this.itemId = this.$route.query.itemId
          }
      },

      computed:{
          itemInfo(){
            let itemInfo = this.itemsData.filter((item) => {
              return Number(item.sku_id) === Number(this.itemId)
            })[0];
            return itemInfo
          }
      },

      methods:{
          tableImg(index){
            this.imageIndex = index
          }
      }
    }
</script>

<style scoped>
@import "../assets/css/item.css";
</style>
