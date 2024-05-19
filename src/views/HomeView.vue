<template>
	<Nav />
	<div class="columns">

		<div class="column">1</div>
		<div class="column">2</div>
		<div class="column">3</div>
		<div class="column">4</div>

	</div>
</template>


<script setup>
import Nav from "../Components/Nav.vue"

</script>


<style scoped lang="scss">

.columns{
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-template-rows: auto;

	.column{
		background-color: lightcoral;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
}

</style>