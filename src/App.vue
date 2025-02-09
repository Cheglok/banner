<template>
<div class="frame">
    <Weather/>
<!--    <Advertisement/>-->
</div>
</template>


<script setup>
import Weather from "@/components/Weather.vue";
import Advertisement from "@/components/Advertisement.vue";
</script>


<style>
.frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: black;
    position: relative;
    overflow: hidden;
}
</style>
