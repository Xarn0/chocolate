<template>
	<swiper
		:modules="[Pagination]"
		:slides-per-view="props.count"
		:space-between="50"
		@swiper="onSwiper"
		@slideChange="updateActiveSlide"
	>
		<swiper-slide v-for="(slide, index) in props.slidesList" :key="index">
			<slot :slide="slide"></slot>
		</swiper-slide>
	</swiper>

	<!-- Кастомные dots -->
	<div class="custom-pagination">
		<template v-if="props.count >= 4">
			<span
				v-for="(dot, index) in slides.length - props.count + 1"
				class="custom-dot"
				:class="{ active: activeIndex === index }"
				@click="goToSlide(index)"
			></span
		></template>
		<template v-else>
			<span
				v-for="(dot, index) in slides.length - props.count - 1"
				class="custom-dot"
				:class="{ active: activeIndex === index }"
				@click="goToSlide(index)"
			></span>
		</template>
	</div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperClass from "swiper";

const swiperRef = ref<SwiperClass | null>(null);

// Данные
type ListSlider = {
	title: string;
	subtitle?: string;
	img: string;
	price?: number;
};
type ListSlider2 = {
	title: string;
	img: string;
	text?: string;
};
type Slide5 = Array<ListSlider | ListSlider2>;
const props = defineProps<{
	count: number;
	slidesList: Slide5;
}>();
const slides = ref<ListSlider[]>([
	{ title: "orange", subtitle: "Dark chocolate", img: "orange", price: 104 },
	{
		title: "APPLE&CRANBERRY",
		subtitle: "Milk chocolate",
		img: "APPLE&CRANBERRY",
		price: 164
	},
	{
		title: "lime&sea salt",
		subtitle: "Dark chocolate",
		img: "lime&seasalt",
		price: 115
	},
	{
		title: "pineapple",
		subtitle: "Dark chocolate",
		img: "pineapple",
		price: 120
	},
	{ title: "Classic", subtitle: "Milk chocolate", img: "Classic", price: 110 },
	{ title: "honey", subtitle: "Milk chocolate", img: "honey", price: 150 },
	{
		title: "Roasted fruits",
		subtitle: "Dark chocolate",
		img: "Roastedfruits",
		price: 150
	},
	{ title: "Classic", subtitle: "White chocolate", img: "Classic2", price: 100 }
]);
// const swiperRef = ref(null);
const activeIndex = ref(0);

// ✅ Сохраняем экземпляр Swiper в `swiperRef`
const onSwiper = (swiper: any) => {
	swiperRef.value = swiper;
};

// Функция для обновления активного слайда
const updateActiveSlide = (swiper: any) => {
	activeIndex.value = swiper.activeIndex;
};

// ✅ Исправленная функция для перехода к слайду
const goToSlide = (index: number) => {
	if (swiperRef.value) {
		swiperRef.value.slideTo(index); // Теперь Swiper загружен и не будет ошибки
	}
};

// Заглушка для изображений
const getPlaceholderImage = (index: number) =>
	`https://via.placeholder.com/300?text=Slide+${index + 1}`;
</script>

<style scoped>
/* Контейнер для dots */
.custom-pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
	margin-top: 10px;
}

/* Обычная точка */
.custom-dot {
	width: 12px;
	height: 12px;
	background-color: #e0e0e0; /* Серый цвет */
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
}

/* Активная точка (увеличенная и с закруглёнными краями) */
.custom-dot.active {
	width: 32px;
	height: 12px;
	background-color: #ff9800; /* Оранжевый цвет */
	border-radius: 6px;
}
</style>
