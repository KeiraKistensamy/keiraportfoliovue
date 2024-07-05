<template>

    <div class="card">
        <div class="card-header">
            <slot class="cardHeader"></slot>
        </div>

        <div class="card-body">
            <slot class="cardBody"></slot>
        </div>
    </div>

</template>

<script>
export default {
    name: "CardComp",
}
</script>

<style>

.card {
    width: 18rem;
    margin: 1rem;
    column-gap: 5rem;
}

</style>