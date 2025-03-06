import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Vuetify
// import { createVuetify } from 'vuetify'

const customTheme = {
	dark: false, // Светлая тема
	colors: {
		primary: "#FF5733", // Изменяем основной цвет
		secondary: "#33FF57",
		accent: "#FFC300",
		error: "#FF0000",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FD9222",
		white: "#ffffff",
		grey: "rgba(250, 250, 250, 1)",
		whiteOpacity: "#1111111a",
		mainFon: "#fafafa"
	}
};

export default createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "customTheme",
		themes: {
			customTheme
		}
	},
	ssr: false,
	icons: {
		defaultSet: "mdi" // This is already the default value - only for display purposes
	}
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
