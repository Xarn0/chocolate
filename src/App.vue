<template>
	<v-responsive>
		<v-app class="bg-mainFon">
			<v-app-bar flat class="bg-mainFon">
				<v-row class="align-center mx-8 d-flex">
					<v-col cols="6" md="3" lg="5">
						<div class="d-flex ga-1 align-center">
							<h3 class="text-body-1">SIMPLY CHOCOLATE</h3>
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
					<v-col cols="6" md="9" lg="7" class="d-none d-md-flex align-center">
						<v-spacer></v-spacer>
						<v-list class="d-flex bg-mainFon px-5">
							<template v-for="(i, key) of menuList">
								<v-hover v-slot="{ isHovering, props }">
									<v-list-item
										class="cursor-pointer pa-2 pa-ld-5"
										:="props"
										density="compact"
										:elevation="isHovering ? 2 : 0"
										>{{ i }}</v-list-item
									>
								</v-hover>
							</template>
						</v-list>

						<v-btn icon>
							<v-icon size="24">mdi-instagram</v-icon>
						</v-btn>
						<v-btn icon>
							<v-icon size="24">mdi-twitter</v-icon>
						</v-btn>
					</v-col>
					<v-spacer></v-spacer>
					<v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>
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
									<form-buy></form-buy>

									<leave-pop-up
										:title="'How it’s made'"
										class="bg-transparent text-white borderBtn pa-2 px-4"
									>
									</leave-pop-up>
									<v-spacer></v-spacer>

									<v-menu>
										<template v-slot:activator="{ props }">
											<v-btn variant="text" :="props" color="white">
												scroll down
												<template #append>
													<v-btn icon size="24" color="white">
														<v-icon>mdi-chevron-down</v-icon>
													</v-btn>
												</template>
											</v-btn>
										</template>
										<v-list class="mt-1">
											<v-list-item v-for="item in 4">
												<v-list-item-title>item {{ item }}</v-list-item-title>
											</v-list-item>
										</v-list>
									</v-menu>
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
							class="mx-auto bg-mainFon d-flex flex-column ga-4 pa-5"
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
							</p>
						</v-card>
					</v-col>
					<v-col cols="12"
						><v-row class="pa-8">
							<v-col cols="12" sm="6" md="3" v-for="(item, key) in tasteList">
								<v-hover v-slot="{ isHovering, props }">
									<v-card
										:="props"
										flat
										:key="key"
										class="taste__item d-flex flex-column"
										:class="item.class"
										height="270"
										width="100%"
									>
										<v-img
											height="160"
											width="206"
											class="align-self-center"
											:src="`/img/${item.img}.png`"
										></v-img>
										<p class="text-center pb-7 text-body-1 text-uppercase">
											{{ item.title }}
										</p>
										<v-expand-transition>
											<v-card
												v-if="isHovering"
												class="position-absolute w-100"
												height="100%"
												style="bottom: 0"
											>
												<v-card-text class="d-flex flex-column ga-2">
													<p class="text-h6 pa-0 ma-0 text-uppercase">
														{{ item.title }}
													</p>
													<div>
														<v-chip class="bg-orange text-white me-1">{{
															item.chips[0]
														}}</v-chip>
														<v-chip
															class="bg-white text-black border-opacity-100"
															variant="text"
															border="md solid orange"
															>{{ item.chips[1] }}</v-chip
														>
													</div>
													<p class="main__text main__text-black text-lowercase">
														{{ item.text }}
													</p>
												</v-card-text>
											</v-card>
										</v-expand-transition>
									</v-card></v-hover
								>
							</v-col>
						</v-row>
					</v-col>
				</v-row>

				<v-row class="mt-13">
					<v-col cols="12">
						<div class="main__title text-uppercase text-center">
							hOW IT’S <span class="main__title-orange">made?</span>
						</div>
					</v-col>
					<v-col cols="12"> </v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="12" md="6" class="ps-md-8"
						><iframe
							width="100%"
							height="100%"
							class="video"
							src="https://www.youtube.com/embed/SCIdb5PIodE?si=UyvNJ9X6JcdRofKw&amp;start=480"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe
					></v-col>
					<v-col cols="12" sm="12" md="6" class="pe-md-8 justify-center">
						<v-card class="pa-6 px-8">
							<h5 class="text-h6 text-left w-75 mb-6">
								Try our chocolates today and discover the perfect balance of
								flavor
							</h5>
							<ul
								class="d-flex flex-column justify-center ga-3"
								style="width: 85%"
							>
								<li class="main__text main__text-black">
									Heat the milk in a saucepan without bringing it to a boil. Add
									sugar and cocoa powder.
								</li>
								<li class="main__text main__text-black">
									At the same time, prepare a water bath. Melt the butter on it.
								</li>
								<li class="main__text main__text-black">
									"Mix" the milk mixture and already liquid butter. Mix
									thoroughly with a silicone spatula so that the mass becomes
									uniform and silky.
								</li>
								<li class="main__text main__text-black">
									Heat the mixture over low heat, letting it barely boil.
								</li>
								<li class="main__text main__text-black">
									Pour the chocolate into special containers (can be replaced
									with ice molds). Allow to cool and harden.
								</li>
							</ul>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<h3 class="text-center main__title text-uppercase mb-md-6 mt-md-15">
							our
							<span class="main__title-orange">products</span>
						</h3>
					</v-col>

					<v-col cols="12">
						<slider-cho :slidesList="slides" :count="4" v-slot="{ slide }">
							<v-hover v-slot="{ isHovering, props }">
								<v-card
									flat
									class="carousel-card text-center mt-8 mb-8"
									:="props"
									:elevation="isHovering ? 8 : 0"
								>
									<slider-item
										:title="slide.title"
										:subtitile="'subtitle' in slide ? slide.subtitle : ''"
										:price="'price' in slide ? slide.price : 0"
										:img="slide.img"
									>
									</slider-item> </v-card
							></v-hover>
						</slider-cho>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="main__title text-uppercase text-center">
							<span class="main__title-orange">Top</span> Sellers
						</div>
					</v-col>
					<v-col cols="12 pb-8">
						<v-row class="px-8">
							<v-col cols="12" sm="6" md="4">
								<v-hover v-slot="{ isHovering, props }">
									<v-img
										:="props"
										:class="{ boxShadow: isHovering }"
										class="rounded-xl"
										src="/img/listimgs/1.png"
									></v-img></v-hover
							></v-col>

							<v-col cols="12" sm="6" md="4">
								<v-hover v-slot="{ isHovering, props }">
									<v-img
										:="props"
										:class="{ boxShadow: isHovering }"
										class="rounded-xl"
										src="/img/listimgs/2.png"
									></v-img> </v-hover
							></v-col>

							<v-col class="d-none d-md-block" md="4">
								<v-hover v-slot="{ isHovering, props }"
									><v-img
										:="props"
										:class="{ boxShadow: isHovering }"
										class="rounded-xl"
										src="/img/listimgs/3.png"
									></v-img></v-hover></v-col
						></v-row>
					</v-col>
					<v-col cols="12 px-10">
						<v-row class="justify-space-between">
							<v-col cols="6" md="4">
								<p class="main__text main__text-black">
									Crazy enough chocolate originates from a bean just like the
									coffee bean called Cacao. Cacao has been around for thousands
									of years and was first discovered by the Native American tribe
									called the Mayans.
								</p>
							</v-col>
							<v-col
								class="d-flex active align-baseline align-self-center"
								cols="6"
							>
								<div class="ml-auto">
									<form-buy></form-buy>
								</div>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="main__title text-uppercase text-center">
							<span class="main__title-orange">chocolate </span> is loved
						</div>
					</v-col>
					<v-col>
						<slider-cho :slidesList="slides3" :count="3" v-slot="{ slide }">
							<v-card flat class="bg-transparent">
								<div class="d-flex justify-center">
									<v-avatar size="60" class="avatar">
										<v-img :src="`/img/sliderAdmin/${slide.img}.jpg`"></v-img>
									</v-avatar>
								</div>
								<v-card height="130px" flat class="ma-4 pt-8 boderXL">
									<v-card-title class="text-center">{{
										slide.title
									}}</v-card-title>
									<v-card-text class="text-center main__text main__text-black">
										<p v-if="'text' in slide">{{ slide.text }}</p>
									</v-card-text></v-card
								>
							</v-card>
						</slider-cho>
					</v-col>
					<v-col col="12" class="d-flex justify-center my-2 my-md-8">
						<leave-pop-up :title="'Leave a review'" class="pa-0 pa-md-4">
						</leave-pop-up>
					</v-col>
				</v-row>
			</v-main>

			<v-footer class="pa-0 ma-0" style="background-color: rgba(30, 24, 35, 1)">
				<v-row>
					<v-col cols="12">
						<v-img src="/img/Subcribe.jpg" cover height="100%">
							<v-card
								color="transparent"
								height="100%"
								flat
								class="d-flex justify-center align-center ga-8 text-white flex-column"
							>
								<h4 class="main__title text-uppercase text-center">
									exPLORE OUR NEW<br />
									CHOCOLATE FIRST
								</h4>
								<p class="main__text w-33 text-center">
									From the velvety texture to the rich and complex flavor, our
									New Chocolate is a true indulgence that will leave you craving
									more. Made with only the finest ingredients and handcrafted
									with the utmost care, each piece is a work of art that is sure
									to please.
								</p>
								<subscribe-pop-up></subscribe-pop-up>
							</v-card>
						</v-img>
					</v-col>
					<v-col cols="12" class="px-8">
						<v-row
							><v-col cols="7">
								<h3 class="text-h4 main__title text-white">
									<span class="main__title-orange">Chocolate</span> a
									delicious<br />
									cure for a bad day
								</h3>
							</v-col>
							<v-col cols="4" class="d-flex justify-end pe-5">
								<v-list class="bg-transparent text-white">
									<h6 class="text-body-1 mb-2">Contact us</h6>
									<v-list-item-title>+7 (905) 443-94-26</v-list-item-title
									><br />
									<v-list-item-title>xarn0@gmail.com</v-list-item-title>
								</v-list></v-col
							>
							<!-- <v-spaser></v-spaser> -->
							<v-col cols="1">
								<div class="d-flex">
									<v-btn flat color="transparent" icon>
										<v-icon color="white">mdi-instagram</v-icon>
									</v-btn>
									<v-btn flat color="transparent" icon>
										<v-icon color="white">mdi-twitter</v-icon>
									</v-btn>
								</div>
							</v-col></v-row
						>
					</v-col>
					<v-divider color="white"></v-divider>
					<v-col cols="12" class="mb-7">
						<v-list class="bg-transparent text-white d-flex">
							<template v-for="(i, key) of menuList">
								<v-hover v-slot="{ isHovering, props }">
									<v-list-item
										class="cursor-pointer"
										:="props"
										:elevation="isHovering ? 8 : 0"
										>{{ i }}</v-list-item
									>
								</v-hover>
							</template>
						</v-list>
					</v-col>
				</v-row>
			</v-footer>
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
import SubscribePopUp from "@/components/SubscribePopUp.vue";
import FormBuy from "@/components/FormBuy.vue";
import LeavePopUp from "@/components/LeavePopUp.vue";
const reveal = ref(false);

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
const getComponent = (iconName: any) => {
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
		title: "Victoria Dobrzhanska",
		img: "1",
		text: "I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate."
	},
	{
		title: "Nazar Babenko",
		img: "2",
		text: "This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good."
	},
	{
		title: "Alena Kampusch",
		img: "3",
		text: " Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy."
	},
	{
		title: "Natalia Sus",
		img: "4",
		text: "The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and just right on the sweetness level. "
	},
	{
		title: "Danilo Nottingham",
		img: "5",
		text: "This is delicious. It so rich and flavorful you don’t need to use as many. I love topping an apple with almond butter and these chips for a snack."
	},
	{
		title: "Irina Tydnyuk",
		img: "6",
		text: "This is simply the best chocolate around, and I'm just thrilled to support a local company! Best local chocolate - world class :)"
	}
]);
interface TasteList {
	title: string;
	chips: string[];
	text: string;
	img: string;
	class: string;
}
let tasteList = ref<TasteList[]>([
	{
		title: "Milk chocolate",
		chips: ["chocolate", "the benefits"],
		text: "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe.",
		img: "chocolate",
		class: "taste__item-bgOrange"
	},
	{
		title: "Milk",
		chips: ["milk", "the benefits"],
		text: "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system.",
		img: "milk",
		class: ""
	},
	{
		title: "Nuts",
		chips: ["nuts", "the benefits"],
		text: "Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own.",
		img: "nut",
		class: "taste__item-bgBlack"
	},
	{
		title: "semi - sweet chocolate",
		chips: ["sweet chocolate", "the benefits"],
		text: "Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter and more mellow. ",
		img: "semi",
		class: ""
	}
]);
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

	.v-btn--active {
	}

	.v-btn__content {
		width: 20px !important;
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
	background-color: #e0e0e0;
	/* Серый цвет */
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
}

/* Активная точка (увеличенная и с закруглёнными краями) */
.custom-dot.active {
	width: 32px;
	height: 12px;
	background-color: #ff9800;
	/* Оранжевый цвет */
	border-radius: 6px;
}

.boderXL {
	border: 1.5px solid #1111111a;
	transition: box-shadow 0.5s ease-in-out;
}

.boderXL:hover {
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

.no-scroll {
	scrollbar-width: none;
}

.no-scroll::-webkit-scrollbar {
	display: none;
	/* Chrome, Safari */
}

.boxShadow {
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.8);
	transition: box-shadow 0.5s ease-in-out;
	cursor: pointer;
}

.avatar {
	position: absolute;
	top: 45px;
	z-index: 2;
}

.borderBtn {
	border: 1px solid white !important;
}
</style>
