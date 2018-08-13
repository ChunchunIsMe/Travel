<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入景点/游玩/主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.$store.state.city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display flex
        background $bgColor
        line-height $headerHeight
        color #fff
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            background-color #fff
            border-radius .1rem
            height .64rem
            line-height .64rem
            padding-left .2rem
            margin-top .12rem
            margin-left .2rem
            color #ccc
        .header-right
            width 1.24rem
            float right
            text-align center
            color #fff
            .arrow-icon
                font-size .24rem
                margin-left -.04rem
</style>
