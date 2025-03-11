<template>
	<div style="height: 200">
		<v-img class="img" :src="getImg(img)"></v-img>
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>{{ subtitile }}</v-card-subtitle>
		<v-card-actions>
			<v-btn class="ma-auto bg-grey rounded-xl" border="thin solid whiteOpacity"
				>{{ price }}<v-icon size="13">mdi-currency-rub</v-icon></v-btn
			></v-card-actions
		>
	</div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps({
	title: String,
	subtitile: String,
	img: String,
	price: Number
});

function getImg(value: string | undefined): string {
	if (value) {
		return `/img/sliders/${value}.svg`;
	}

	return "";
}
</script>
<style scoped>
.img {
	align-self: center;
	text-align: center;
	margin: 0 auto;
	width: 400px;
}
@media (max-width: 768px) {
	.img {
		width: 300px;
	}
}
</style>
