<template>
	<v-dialog max-width="400">
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
				color="orange text-white	"
				variant="flat"
				v-bind="activatorProps"
				rounded
				>Subscribe</v-btn
			>
		</template>

		<template v-slot:default="{ isActive }">
			<v-card class="pb-4">
				<v-img aspect-ratio="16/9" src="/public/img/Subcribe1.jpg"></v-img>
				<v-card-text>
					<h3 class="main__title">
						Explore our<br />
						<span class="main__title-orange">new chocolate</span> first!
					</h3>
				</v-card-text>

				<v-card-actions class="px-4">
					<v-text-field
						type="email"
						density="compact"
						rounded
						variant="outlined"
						placeholder="Enter your email"
						hide-details
					></v-text-field>

					<v-btn
						color="orange text-white px-5 "
						variant="flat"
						height="40px"
						density="compact"
						rounded
						>Subscribe</v-btn
					>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>
