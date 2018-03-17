<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag='ul' class='slide-ul' name='list'>
      <li v-for="(list,index) in slideList" :key='index' v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl">
          <img :src="list.image" :alt="list.desc" />
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
			<span v-for="(item,index) in slideList.length" :class="{'active':index === currentIndex}" @mouseover="change(index)">

			</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        slideList:[
          {
            'clickUrl' : '#',
            'desc' : '第一张图',
            'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768809049&di=db3755b56d5fc55ecffe158413ad067c&imgtype=0&src=http%3A%2F%2Fdigital.zol.com.cn%2F275_module_images%2F17%2F537dbbf398e85.jpg'
          },
          {
            'clickUrl' : '#',
            'desc' : '第二张图',
            'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768954029&di=bcfe0420283f1b6246098d145c45aa36&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D152895368%2C1538594464%26fm%3D214%26gp%3D0.jpg'
          },
          {
            'clickUrl' : '#',
            'desc' : '第三张图',
            'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515768831649&di=dd845cba7b09274f11ad11be9f597596&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D4000770372%2C1569155497%26fm%3D214%26gp%3D0.jpg'
          }
        ],
        currentIndex:0,
        timer: ''
      }
    },
    methods:{
      // 开始
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 2000)
      },
      //停止
      stop() {
        clearInterval(this.timer)
        this.timer = null
      },
      //改变
      change(index) {
        this.currentIndex = index
      },
      //自动
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      }
    },
    created() {
      //异步处理
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 2000)
      })
    }
  }
</script>

<style scoped>
  @import "../assets/css/slide.css";
</style>
