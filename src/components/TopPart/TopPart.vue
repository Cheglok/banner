<template>
    <Transition>
        <Weather v-show="currentComponent === 'weather'" />
    </Transition>
    <Transition>
        <Currency v-show="currentComponent === 'currency'" />
    </Transition>
    <Transition>
        <Traffics v-show="currentComponent === 'traffics'" />
    </Transition>
</template>

<script setup lang="ts">
import Currency from '@/components/TopPart/Currency.vue';
import Traffics from '@/components/TopPart/Traffics.vue';
import { computed, onMounted, ref } from 'vue';
import Weather from '@/components/TopPart/Weather.vue';
import { TopData } from '@/App.vue';

const props = defineProps<{
    topData: TopData;
}>();

const currentComponent = computed(() => props.topData.componentsList[currentIndex.value]);

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.topData.componentsList.length;
    }, props.topData.animationDuration);
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
