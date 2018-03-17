<template>
  <div id="main">

    <div class="sku-box store-content ">

      <div class="sort-option">
        <ul class="line clear">
          <li><a href="javascript:;" class="active">综合排序</a></li>
          <li><a href="javascript:;" class="">销量排序</a></li>
          <li><a href="javascript:;" class="">价格低到高</a></li>
          <li><a href="javascript:;" class="">价格高到低</a></li>
        </ul>
      </div>

      <slide>

      </slide>

      <!--手机配件-->
      <div class="gray-box" style="margin-top: 20px">
        <header class="title-header">
          <h5 class="title">热门商品</h5>
        </header>


        <div class="item-box" >


          <shopItem v-for="(item, index) in goodsData" :key="index" :item="item"></shopItem>

        </div>

      </div>


      <div class="gray-box" style="margin-top: 20px">
        <header class="title-header">
          <h5 class="title">大牌商品</h5>
        </header>


        <div class="item-box" >


          <shopItem v-for="(item, index) in goodsData" :key="index" :item="item"></shopItem>

        </div>

      </div>


      <div class="gray-box" style="margin-top: 20px">
        <header class="title-header">
          <h5 class="title">大牌商品</h5>
        </header>


        <div class="item-box" >


          <shopItem v-for="(item, index) in goodsData" :key="index" :item="item"></shopItem>

        </div>

      </div>

    </div>

    <prompt></prompt>
  </div>

</template>

<script>
  import goodsData from '../lib/newGoodsData'
  import shopItem from '../components/shop-item'
  import prompt from '../components/prompt'
  import slide from '../components/slide'
  export default {
    data (){
      return {
        goodsData
      }
    },
    components: {
      shopItem,
      prompt,
      slide
    }
  }
</script>

<style scoped>
  @import "../assets/css/goodsList.css";

</style>
