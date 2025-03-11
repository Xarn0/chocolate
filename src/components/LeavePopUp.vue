<template>
	<v-dialog max-width="500">
		<template v-slot:activator="{ props: activatorProps }">
			<div>
				<v-btn
					v-bind="$attrs"
					variant="flat"
					:="activatorProps"
					size="x-sm-small x-md-large"
					elevation="2"
					rounded
					class="text-body-1"
				>
					{{ props.title }}
				</v-btn>
			</div>
		</template>

		<template v-slot:default="{ isActive }">
			<v-card class="pt-3 pb-3"
				><v-card-item>
					<h3 class="main__title text-uppercase">
						LEAVE A REVIEW ABOUT<br />
						<span class="main__title-orange">OUR CHOCOLATE</span>
					</h3>

					<template #append>
						<v-icon class="close" @click="isActive.value = false"
							>mdi-close</v-icon
						>
					</template>
				</v-card-item>
				<v-container class="d-flex flex-column ga-4">
					<v-text-field
						placeholder="NAME"
						density="compact"
						rounded-xl
						variant="outlined"
						hide-details
						single-line
					></v-text-field>

					<v-text-field
						variant="outlined"
						hide-details
						type="email"
						placeholder="EMAIL"
						density="compact"
						rounded-xl
						single-line
					></v-text-field>
					<v-text-field
						flat
						placeholder="PHONE NUMBER"
						prefix="+7"
						single-line
						inputmode="numeric"
						density="compact"
						type="number"
						variant="outlined"
					>
						<template v-slot:prepend-inner>
							<v-avatar size="24">
								<img
									src="https://flagcdn.com/w40/ru.png"
									alt="russian Flag"
									width="48px"
								/>
								<!-- <v-spaser></v-spaser> -->
								<!-- <v-divider
									vertical
									width="30"
									class="mx-2 sep custom-divider"
								></v-divider> -->
							</v-avatar>
						</template>
					</v-text-field>
					<v-textarea
						single-line
						hide-details
						variant="outlined"
						clear-icon="mdi-close-circle"
						label="Text"
						model-value="Здесь комментарий"
					></v-textarea>
				</v-container>

				<v-card-actions class="d-flex justify-start pa-4"
					><v-btn
						size="large"
						left
						class="text-white bg-orange"
						@click="isActive.value = false"
						>send</v-btn
					>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
defineOptions({
	inheritAttrs: false // Отключаем автоматическую передачу атрибутов
});
let props = defineProps<{
	title?: string;
	classprop?: string;
}>();
</script>
<style scoped>
.custom-divider {
	height: 24px !important; /* Высота черточки */
	border-color: #bdbdbd !important; /* Цвет черточки */
}
.sep {
	height: 30px !important;
	width: 30px !important;
}
</style>
