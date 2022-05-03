<template>
  <div class="card">
    <div
      class="image"
      v-if="imageUrl != 'none'"
      :style="{ 'background-image': imageUrl }"
    ></div>
    <div class="content">
      <h2>{{ header }}</h2>
      <p>{{ description }}</p>
      <slot></slot>
      <div class="buttons" v-if="primaryOpt || secondaryOpt">
        <Button
          type="primary"
          @click="$emit('clickPrimary')"
          :text="primaryOpt"
          v-if="primaryOpt"
        />
        <Button
          type="secondary"
          @click="$emit('clickSecondary')"
          :text="secondaryOpt"
          v-if="secondaryOpt"
        />
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.card {
  background: var(--bg-2);
  padding: 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: var(--shadow-1);
  transition: box-shadow 0.2s;
  max-width: 25rem;
  text-align: left;
}

.card:hover {
  box-shadow: var(--shadow-2);
}

.image {
  width: calc(100% + 2em);
  height: 10rem;
  margin: -1rem;
  background-size: cover !important;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
}

div.image ~ .content {
  padding-top: 2rem;
}

p {
  font-size: 0.8rem;
  color: var(--txt-2);
}

.buttons {
  padding-top: 1.2rem;
  display: grid;
  grid-template-columns: auto auto;
  width: max-content;
}
</style>

<script>
import Button from "./Button.vue";
export default {
  name: "Card",
  emits: ["clickPrimary", "clickSecondary"],
  components: {
    Button,
  },
  props: {
    header: String,
    description: String,
    primaryOpt: String,
    secondaryOpt: String,
    imageUrl: {
      type: String,
      default: "none",
    },
  },
};
</script>

