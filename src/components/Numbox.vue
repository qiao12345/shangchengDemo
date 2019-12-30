<template>
  <div>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='60'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="box" class="mui-input-numbox" type="number" value="1" @change="numboxList" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    numboxList () {
      this.$emit('getcount', parseInt(this.$refs.numbox.value))
    }
  }
}
</script>

<style lang="scss" scoped>
    .mui-numbox{
      height: 24px;
    }
</style>
