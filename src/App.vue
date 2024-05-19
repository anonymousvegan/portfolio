<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const scrollbar = ref(null)
const timeout = ref(null)

function startScrollbarTimeout(){
	if(timeout.value) {
		clearTimeout(timeout.value);
	}

	scrollbar.value.classList.add("visible");

	timeout.value = setTimeout(() => {
		scrollbar.value.classList.remove("visible");
	}, 3000);
}


onMounted(async () => {
	await nextTick();

	scrollbar.value = document.querySelector(".ps");
})
</script>

<template>
	<PerfectScrollbar 
		@ps-scroll-y="startScrollbarTimeout"
	>
		<RouterView />
	</PerfectScrollbar>

</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

*,
*::before,
*::after {
	font-family: "Outfit", sans-serif;
	font-optical-sizing: auto;
	margin: 0;
	padding: 0;
}

#app {
	height: 100dvh;

	.ps {
		height: 100%;
		$anymation-duration: .3s;

		.ps__rail-y{
			opacity: 0;
			-webkit-transform: background-color $anymation-duration linear,opacity $anymation-duration linear;
			transition: background-color $anymation-duration linear,opacity $anymation-duration linear;
		}

		.ps__rail-y:hover{
			opacity: 1;
		}

		&.visible .ps__rail-y { 
			opacity: 1;
		}
	}
}
</style>