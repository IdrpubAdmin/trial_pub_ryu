<template>
  <section class="comp-child">
    <slot name="header" txt="자식 컴포넌트에서 전달 받은 텍스트">
      <header>
        디폴트 타이틀
      </header>
    </slot>
    <div class="content">
      <slot>디폴트 콘텐츠</slot>
    </div>
    <slot name="footer">
      <!-- 없다면 아무 것도 출력하지 않습니다. -->
    </slot>
  </section>
</template>

<script>
module.exports = {
}
</script>

<style>
</style>
