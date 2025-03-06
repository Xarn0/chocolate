<template>
	<v-responsive class="border rounded">
		<v-app class="bg-mainFon">
			<v-app-bar flat class="bg-mainFon" >
				<v-row class="align-center mx-8">
					<v-col cols="3" md="4" lg="5">
						<div class="d-flex ga-1 align-center">
							<h3>SIMPLY CHOCOLATE</h3>
							<span style="height: 25px"
								><svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.95799 15.0568L11.0406 1.9886L11.5206 1.48303L17.6974 5.6014L17.7397 8.08665L19.2472 10.5463L12.5874 21.1038L2.95799 15.0568Z"
										fill="#FCF1E0"
									/>
									<path
										d="M16.2259 17.9097L5.5868 11.2616M8.52069 6.44905L19.1598 13.0971M7.97248 19.3982L16.7742 4.96051M20.3823 11.0919C18.1025 9.6673 17.2071 8.55395 18.674 6.14767L11.4546 1.63647L2.6529 16.0742L13.2921 22.7223L20.3823 11.0919Z"
										stroke="#FD9222"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</div>
					</v-col>
					<v-col cols="9" md="8" lg="7" class="d-flex align-center ">
						<v-list class="d-flex bg-mainFon">
							<v-list-item
								class="cursor-pointer "
								v-for="(i, key) of menuList"
								:key="key"
							>
								<p>{{ i }}</p>
							</v-list-item>
						</v-list>
						<v-spacer></v-spacer>
						<v-btn icon><IconInstagram></IconInstagram></v-btn>
						<v-btn icon><IconTwetter></IconTwetter></v-btn>
					</v-col>
				</v-row>
			</v-app-bar>

			<!-- <v-navigation-drawer class="d-none">
				<v-list>
					<v-list-item title="Navigation drawer"></v-list-item>
				</v-list>
			</v-navigation-drawer> -->

			<v-main>
				<div class="px-8">
					<v-card width="100%" class="my-4 rounded-xl overflow-x-hidden">
						<v-img src="/img/background.jpg" class="d-flex align-end">
							<v-card class="text-while d-flex flex-column ga-8 bg-transparent">
								<v-card-text
									color="primary"
									class="text-white text-h4"
									style="width: 43vw; line-height: 38px"
								>
									Treat yourself or a loved one to our finest ingredients for a
									moment of pure delight!
								</v-card-text>
								<div class="d-flex pb-8 ps-8 pe-8 ga-3">
									<v-btn light class="bg-warning text-white rounded-xl"
										>Buy now</v-btn
									>
									<v-btn
										class="bg-transparent text-white rounded-xl"
										style="border: 1px solid white"
										>How it’s made</v-btn
									>
									<v-spacer></v-spacer>
									<v-btn variant="text" color="white">
										scroll down

										<template #append>
											<v-btn icon size="24" color="white">
												<v-icon size="18"
													><svg
														width="12"
														height="6"
														viewBox="0 0 14 8"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.65076 5.28338C7.56554 5.3693 7.46415 5.43749 7.35245 5.48403C7.24075 5.53057 7.12093 5.55453 6.99992 5.55453C6.87891 5.55453 6.7591 5.53057 6.64739 5.48403C6.53569 5.43749 6.4343 5.3693 6.34909 5.28338L2.15075 1.07588C2.06553 0.989962 1.96415 0.921767 1.85244 0.875229C1.74074 0.828691 1.62092 0.804731 1.49991 0.804731C1.3789 0.804731 1.25909 0.828691 1.14738 0.875229C1.03568 0.921767 0.934296 0.989962 0.84908 1.07588C0.678349 1.24763 0.58252 1.47996 0.58252 1.72213C0.58252 1.9643 0.678349 2.19663 0.84908 2.36838L5.05659 6.57588C5.57221 7.09087 6.27117 7.38013 6.99992 7.38013C7.72867 7.38013 8.42763 7.09087 8.94326 6.57588L13.1508 2.36838C13.3201 2.19764 13.4156 1.96719 13.4166 1.72671C13.4173 1.60607 13.3942 1.48648 13.3486 1.3748C13.3029 1.26311 13.2357 1.16153 13.1508 1.07588C13.0655 0.989962 12.9642 0.921767 12.8525 0.875229C12.7408 0.828691 12.6209 0.804731 12.4999 0.804731C12.3789 0.804731 12.2591 0.828691 12.1474 0.875229C12.0357 0.921767 11.9343 0.989962 11.8491 1.07588L7.65076 5.28338Z"
															fill="#FD9222"
														/>
													</svg>
												</v-icon>
											</v-btn>
										</template>
									</v-btn>
								</div>
							</v-card>
						</v-img>
					</v-card>
				</div>
				<v-row
					class="row pa-5 px-8 mt-13"
					style="background-color: rgba(30, 24, 35, 1)"
				>
					<v-col
						cols="12"
						md="4"
						v-for="(value, key) in listService"
						:key="key"
						class="listService"
					>
						<v-card class="bg-transparent text-white" flat>
							<v-card-title>
								<v-avatar
									color="bg-transparent "
									style="border: rgba(255, 255, 255, 0.5) 1.5px solid"
								>
									<div>
										<v-icon size="20">
											<component :is="getComponent(value.icon)"></component>
										</v-icon>
										<!-- {{ value.icon }} -->
									</div>
								</v-avatar></v-card-title
							>
							<v-card-title class="main__subtitle">{{
								value.title
							}}</v-card-title>
							<v-card-text class="main__text">{{ value.text }} </v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="4"></v-col>
					<v-col cols="12" md="4"></v-col>
				</v-row>
				<v-row>
					<v-col cols="12 pt-8">
						<v-card
							flat
							width="500"
							class="mx-auto d-flex flex-column ga-4 pa-5"
						>
							<h3 class="text-center main__title">
								IT ALL ADDS UP TO ONE EXCEPTIONAL
								<span class="main__title-orange">TASTE</span> SENSATION
							</h3>
							<p class="main__text main__text-black text-center">
								At Simply Chocolate, we believe that the secret to exceptional
								chocolate is in the details. From the sourcing of the finest
								ingredients to the careful crafting of each individual piece,
								every step of our process adds up to one exceptional taste
								sensation.
							</p></v-card
						>
					</v-col>
					<v-col cols="12">
						<v-row class="pa-8 d-flex ga-1">
							<v-col class="taste__item taste__item-bgOrange"
								><img src="/img/chocolate.png"></img>
								<p class="text-md-center text-white">MILK CHOCOLATE</p></v-col
							>
							<v-col class="taste__item"
								><img src="/img/milk.png"></img>
								<p class="text-md-center">Milk</p></v-col
							>
							<v-col class="taste__item taste__item-bgBlack">
								<div class="d-flex justify-center  w-100 align-center">
									<img center src="/img/bar.png"></img>
								</div>
								<p class="text-md-center text-white">nuts</p></v-col
							>
							<v-col class="taste__item"
								><img src="/img/kisspng.png"></img>
								<p class="text-md-center">sEMI - SWEET CHOCOLATE</p></v-col
							>
						</v-row>
					</v-col>
				</v-row>
        <v-row class="mt-13">
          <v-col cols="12">
            <div class="main__title text-uppercase text-center">hOW IT’S <span class="main__title-orange">made?</span></div>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" md="6" class="ps-8" height="500"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/SCIdb5PIodE?si=UyvNJ9X6JcdRofKw&amp;start=480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></v-col>
              <v-col cols="12" md="6" class="pe-8">
                <v-card class="pa-6 px-8">
                <h5 class="text-h6 text-left w-75 mb-6">Try  our chocolates today and discover the perfect balance of flavor</h5>
                <ul class="d-flex flex-column ga-3" style="width: 85%;">
                  <li class="main__text main__text-black">Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.</li>
                  <li class="main__text main__text-black">At the same time, prepare a water bath. Melt the butter on it.</li>
                  <li class="main__text main__text-black">"Mix" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.</li>
                  <li class="main__text main__text-black">Heat the mixture over low heat, letting it barely boil.</li>
                  <li class="main__text main__text-black">Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.</li>
                </ul></v-card>
              </v-col>
            </v-row>
          </v-col>

        </v-row>
        <v-row>
			<v-col cols="12">
				<h3 class="text-center main__title text-uppercase mb-md-6 mt-md-15">
					our 
								<span class="main__title-orange">products</span> 
							</h3>
			</v-col>
			<!-- ! -->
       <v-col cols="12">
  
          
			
				<slider-cho :slidesList="slides" :count="4" v-slot="{slide}">
					<v-hover v-slot="{isHovering,props}">
					<v-card flat class="carousel-card text-center mt-8 mb-8"  :="props" :elevation="isHovering?8:0">
						
				<SliderItem
				
					:title="slide.title"
					:subtitile="'subtitle' in slide?slide.subtitle:''"
					:price="'price' in slide?slide.price:0"
					:img="slide.img"
				>
				</SliderItem>
			</v-card></v-hover>
				</slider-cho>
			</v-col>
        </v-row>
<v-row>
	<v-col cols="12">
            <div class="main__title text-uppercase text-center"><span class="main__title-orange">Top</span> Sellers</div>
			</v-col>
	<v-col cols="12 pb-8" >
		<v-row class="px-8">
		<v-col cols="12" sm="6" md="4">
			<v-hover v-slot="{isHovering,props}">
				<v-img :="props" :class="{'boxShadow': isHovering}" class="rounded-xl" src="/img/listimgs/1.png"></v-img></v-hover></v-col>

				<v-col cols="12" sm="6" md="4">
				<v-hover v-slot="{isHovering,props}">
					<v-img :="props" :class="{'boxShadow': isHovering}" class="rounded-xl" src="/img/listimgs/2.png"></v-img>
			</v-hover></v-col>
			
		<v-col class="d-none d-md-block" md="4">
			<v-hover v-slot="{isHovering,props}"><v-img :="props" :class="{'boxShadow': isHovering}" class="rounded-xl" src="/img/listimgs/3.png"></v-img></v-hover></v-col></v-row>
	</v-col>
	<v-col cols="12 px-10"> 
		<v-row class="justify-space-between" >
			<v-col cols="6" md="4"><p class="main__text main__text-black">Crazy enough chocolate originates from a bean just like the coffee bean called Cacao. Cacao has been around for thousands of years and was first discovered by the Native American tribe called the Mayans.</p></v-col>
			<v-col class="d-flex active align-baseline align-self-center" cols="6"><div class="ml-auto">
				<v-dialog max-width="500" >
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
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog></div></v-col>
		</v-row>
	</v-col>
</v-row>
<v-row>
	<v-col>
		<slider-cho :slidesList="slides3" :count="3" v-slot="{slide}">
			<v-card flat class="bg-transparent">
				<div class="d-flex justify-center">
				<v-avatar size="60" class="avatar">
					<v-img :src="`/img/sliderAdmin/${slide.img}.jpg`"></v-img>
				</v-avatar></div>
				<v-card height="130px" flat class="ma-4 pt-8 boderXL">
				<v-card-title class="text-center">{{ slide.title }}</v-card-title>
				<v-card-text class="text-center main__text main__text-black"><p v-if="'text' in slide">{{ slide.text }}</p></v-card-text></v-card>
			</v-card>


		</slider-cho>
	</v-col>
</v-row>

			</v-main>
		</v-app>
	</v-responsive>
</template>

<script setup lang="ts">
import { markRaw, reactive, ref } from "vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconTwetter from "@/components/icons/IconTwetter.vue";
import IconCho from "@/components/icons/IconCho.vue";
import IconDol from "@/components/icons/IconDol.vue";
import IconLosh from "@/components/icons/IconLosh.vue";
import SliderItem from "@/components/SliderItem.vue";
import SliderCho from "@/components/SliderCho.vue";
import DialogForm from "@/components/dialog-form.vue";


const currentSlide = ref(0);

let slides2= ref<string[]>([
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ])

let colors = ref<string[]>([
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ])


let menuList = ref<String[]>([
	"Home",
	"How it\’s made?",
	"Our products",
	"Top sellers",
	"Chocolate is loved"
]);

let ComponentListService = markRaw<any>({
	IconCho,
	IconDol,
	IconLosh
});
const getComponent = (iconName:any) => {
	return ComponentListService[iconName] || null;
};
interface ListService {
	title: string;
	text: string;
	icon: string;
}

let listService = ref<ListService[]>([
	{
		title: "Unsurpassed taste",
		text: "Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.",
		icon: "IconCho"
	},
	{
		title: "Affordable price",
		text: "Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.",
		icon: "IconDol"
	},
	{
		title: "Own production",
		text: "We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite..",
		icon: "IconLosh"
	}
]);
const slides = ref([
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
const slides3 = ref([
	{
	title:'Victoria Dobrzhanska',
	img:'1',
	text:'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.'
},
	{
	title:'Nazar Babenko',
	img:'2',
	text:'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.'
},
	{
	title:'Alena Kampusch',
	img:'3',
	text:' Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.'
},
	{
	title:'Natalia Sus',
	img:'4',
	text:'The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and just right on the sweetness level. '
},
	{
	title:'Danilo Nottingham',
	img:'5',
	text:'This is delicious. It so rich and flavorful you don’t need to use as many. I love topping an apple with almond butter and these chips for a snack.'
},
	{
	title:'Irina Tydnyuk',
	img:'6',
	text:'This is simply the best chocolate around, and I\'m just thrilled to support a local company! Best local chocolate - world class :)'
},
])
</script>
<style lang="scss">

.listService:nth-child(2) {
	position: relative;
	&::after,
	&::before {
		content: "";
		position: absolute;

		top: 35%;
		width: 1.2px;
		height: 124px;
		background-color: rgba(255, 255, 255, 0.5);
	}
	&::after {
		right: 10px;
	}
	&::before {
		left: 0;
	}
}
.v-carousel__controls {
	gap: 3px;
	.v-btn {
		border-radius: 0;
		width: 10px !important;
	}
	.v-btn--active{
		
		
	}.v-btn__content{
		width: 20px !important	;
	}
	
}

.custom-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: -40px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
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
.boderXL{
	border: 1.5px solid #1111111a	;transition: box-shadow .5s ease-in-out;
}
.boderXL:hover{
	
	box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
}
.no-scroll{
	scrollbar-width: none; 
}
.no-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
.boxShadow{
	
	box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.8);
	transition: box-shadow .5s ease-in-out;
	cursor: pointer;
}
.avatar{
	position: absolute;
	top: 45px;
	z-index: 2;
}
</style>
