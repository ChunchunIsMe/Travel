<template>
    <div>
       <router-link 
        class="header-abs" 
        tag="div" 
        to="/"
        v-show="showAbs">
           <div class="iconfont header-abs-header">&#xe624;</div>
       </router-link>
       <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityStyle">
           景点详情
           <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
       </div>
    </div>
    
</template>

<script>

export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll (e) {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius .4rem
        background-color rgba(0, 0, 0, .8)
        .header-abs-header
            color #fff
            font-size .4rem
    .header-fixed
        position fixed
        overflow hidden
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        z-index 2
        .header-fixed-back
            width .64rem
            font-size .4rem
            color #fff
            text-align center
            position absolute
            top 0
            left 0
</style>
