<template>
    <ul class="list">
        <li class="item" 
            v-for="item of letters" 
            :key="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item" 
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let key in this.cities) {
                letters.push(key)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart (e) {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            
            if (this.touchStatus) {
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY - 79
                    const index =Math.floor((touchY - this.startY)/21.6)
                    // console.log(index);
                    if(index>=0 && index<this.letters.length) {
                        this.$emit('change', this.letters[index])
                    } 
                },16)
            }
        },
        handleTouchEnd (e) {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width .4rem
        .item
            line-height .44rem
            color $bgColor
            text-align center
</style>
