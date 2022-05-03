<template>
  <div class="chip" @click="$emit('click')" :class="{ selected: selected }">
    <span class="material-icons-outlined" v-if="icon != 'none'">{{
      icon
    }}</span>
    <div class="text">{{ text }}</div>
  </div>
</template>
  
<style scoped>
.chip {
  display: inline-flex;
  width: max-content;
  height: 1.6rem;
  border-radius: 0.5rem;
  background: var(--bg-1);
  cursor: pointer;
  position: relative;
  transition: all 0.1s;
  border: 1px solid var(--outline);
  color: var(--txt-1);
  padding: 0.1rem 0.3rem;
  font-size: 0.9rem;
  user-select: none;
}

.selected {
  background: var(--bg-2);
  box-shadow: var(--shadow-1);
}

.material-icons-outlined {
  margin-left: 0.25rem;
  transform: translateY(0.25rem);
  font-size: 1rem;
}

.text {
  margin: 0 0.3rem;
}

.text {
  line-height: 1.5rem;
}
</style>

<script>
export default {
  name: "Chip",
  emits: ["click"],
  props: {
    icon: {
      type: String,
      default: "circle",
    },
    text: {
      type: String,
      default: "Chip",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

