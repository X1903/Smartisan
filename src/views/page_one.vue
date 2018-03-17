<template>
  <!-- 手感膜系列 -->
  <div class="sku-box store-content">
    <div class='main'>
      <div class="store-content ng-scope">
        <div class="sku-box ">
          <div class="gray-box clearfix ">
            <div class="cover">
              <a href="#/item/100030901">
                <img src="https://resource.smartisan.com/resource/90063f11ceb49210bc3d4375b830f262.jpg?x-oss-process=image/resize,w_417/quality,Q_100/format,webp">
              </a>
            </div>
            <div class="story-content">
              <div class="share">
                <h2 class="hide-row"><a href="#" class="ng-binding">坚果 Pro 钢化玻璃手感膜“足迹系列” 公交车</a></h2>
                <h4 ng-if="item.subtitle" class="ng-binding ng-scope">进口钢化玻璃材质、提供高强度保护</h4>
              </div>
              <div class="story">
                <p class="ng-scope"><span  class="ng-binding">
													1947 年 5 月 28 日那天，37  岁的纽约公交车司机威廉·西米洛连同他的 No. 1310 公交车一同人间蒸发，没有人知道他去了哪里。他的老婆和孩子坐立不安，城中谣言四起，他们甚至认为西米洛十有八九出了意外。</span>
                </p>
                <p class="ng-scope"><span  class="ng-binding">
													然而所有人都猜错了。28 日的清晨，纽约阳光灿烂，西米洛像过去的 17 年一样，开着公交车，从车站驶出，看着眼前的场景，他觉得厌倦至极，他已经走了太多次同样的路，见过太多次同样的人、同样的站牌、同样的硬币。做点不一样的事情吧，有个念头在他脑中闪过。</span>
                </p>
                <p class="ng-scope">
													<span  class="ng-binding">
														在冲动还没有冷却的瞬间，西米洛改变了车的路线，在熟悉的路口，他选择了左转……
													</span>
                  <a ng-if="$last" href="#" class="ng-scope">阅读全文></a>
                </p>
              </div>
              <div class="info">
                <div class="price discount ng-scope">
                  <span class="normal">限时秒杀</span>
                  <span class="highlight">¥ <i class="ng-binding">49.00</i></span>
                  <span class="origin">¥ <i class="ng-binding">99.00</i></span>
                </div>
                <span class="jianguo-blue-main-btn big-main-btn" >
													<a href="#/item/100030901"  class="ng-scope">现在购买</a>
												</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      <server></server>
    </div>

  </div>
</template>

<script>
  import server from '../components/service'
    export default {
        name: "page_one",
        components: {
          server
        }

    }

</script>

<style scoped>
@import "../assets/css/three.css";
</style>
