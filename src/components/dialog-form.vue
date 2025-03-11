<template>
	<v-container class="form-container">
		<v-card class="pa-6 bg-mainFon" flat>
			<v-row>
				<v-col cols="12">
					<h3>Personal information</h3>
				</v-col>
				<v-col cols="12" md="6">
					<v-text-field
						hide-details
						single-line
						label="Name"
						variant="outlined"
						density="compact"
					></v-text-field>
				</v-col>
				<v-col cols="12" md="6">
					<v-text-field
						label="Surname"
						variant="outlined"
						density="compact"
						hide-details
						single-line
					></v-text-field>
				</v-col>

				<v-col cols="12">
					<h3>Email</h3>
					<v-text-field
						label="Enter your email"
						variant="outlined"
						density="compact"
						hide-details
						single-line
					></v-text-field>
				</v-col>

				<v-col cols="12">
					<h3>Phone number</h3>
					<v-text-field
						variant="outlined"
						density="compact"
						placeholder="Phone number"
						prefix="+7"
						hide-details
						single-line
					>
						<template v-slot:prepend>
							<v-avatar size="24">
								<img src="https://flagcdn.com/w40/ru.png" alt="russian Flag" />
							</v-avatar>
						</template>
					</v-text-field>
				</v-col>

				<v-col cols="12">
					<h3>Card number</h3>
					<v-text-field
						label="Enter card"
						variant="outlined"
						type="Number"
						hide-spin-buttons
						density="compact"
						append-inner-icon="mdi-credit-card-outline"
						hide-details
						single-line
					>
						<template v-slot:append>
							<v-avatar size="36" class="pa-0">
								<img
									class="myImg"
									src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
									alt="Mastercard Logo"
								/>
							</v-avatar>
						</template>
					</v-text-field>
				</v-col>

				<v-col cols="12">
					<h3>Comment</h3>
					<v-textarea
						label="Enter text"
						variant="outlined"
						density="comfortable"
						hide-details
						single-line
					></v-textarea>
				</v-col>

				<v-col cols="12" class="text-center">
					<v-btn size="large" class="flat text-white bg-orange">Submit</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script setup></script>

<style scoped>
.form-container {
	max-width: 500px;
	margin: auto;
}
h3 {
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 5px;
}
.myImg {
	object-fit: contain !important;
	max-width: 100%;
	min-height: 120px;
}
</style>
