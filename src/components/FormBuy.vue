<template>
    <v-dialog max-width="500" height="100%" >
				<template v-slot:activator="{ props: activatorProps }">
					<v-btn color="orange"  v-bind="activatorProps"
					text="Open Dialog"
					variant="flat" class=" rounded-xl text-white">Buy now</v-btn>
				</template>

  <template v-slot:default="{ isActive }">
    <v-card class="bg-mainFon pt-8 no-scroll"  >
		<v-card-title class="text-uppercase text-center pb-5"><h3 class="main__title text-uppercase"><span class="main__title-orange">bUY</span> nOW</h3></v-card-title>
     
       <v-card flat min-height="200" class="d-flex justify-center bg-mainFon ga-3 pt-3 pb-3">
		<v-card-item  class="bg-white boderXL cursor-pointer d-flex justify-center rounded-lg flex-column" ><div  class=" d-flex flex-column  ga-5"><v-img width="100"   src="/img/listimgs/21.svg"></v-img><v-btn class="text-lowercase mb-1 ma-auto bg-grey rounded-xl" border="thin solid whiteOpacity"
			>190g</v-btn
		></div></v-card-item class="bg-white">
		<v-card-item  min-height="180" class="boderXL cursor-pointer  bg-white rounded-lg" ><div class="d-flex flex-column  ga-5"><v-img width="100" src="/img/listimgs/22.svg"></v-img><v-btn class="text-lowercase mb-1 ma-auto bg-grey rounded-xl" border="thin solid whiteOpacity"
			>170g</v-btn
		></div></v-card-item  class="bg-white">
		<v-card-item min-height='180' class="bg-white boderXL cursor-pointer rounded-lg" ><div class="d-flex flex-column  ga-5"><v-img width="100" src="/img/listimgs/23.svg"></v-img><v-btn class="text-lowercase mb-1 ma-auto bg-grey rounded-xl" border="thin solid whiteOpacity"
			>200g</v-btn
		></div></v-card-item class="bg-white">
	
	   </v-card>
	<DialogForm></DialogForm>
      
    </v-card>
  </template>
</v-dialog>
</template>
<script setup lang="ts">
import DialogForm from "@/components/dialog-form.vue";</script>