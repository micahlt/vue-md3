<template>
  <div class="btn-parent">
    <a
      v-if="mode == 'emitter'"
      href="#"
      @click.prevent="$emit('click')"
      :class="type"
      >{{ text }}</a
    >
    <router-link v-if="mode == 'router'" :to="to" :class="type">{{
      text
    }}</router-link>
    <a v-if="mode == 'href'" :href="href" :class="type">{{ text }}</a>
  </div>
</template>
  
<style scoped>
.btn-parent {
  width: max-content;
}

a {
  display: block;
  text-decoration: none;
  width: max-content;
  padding: 0.625rem 1.4rem;
  border-radius: 1.625rem;
  color: var(--a-light);
}

a.primary {
  color: var(--a-darker);
  background: var(--a-light);
  background-position: center;
  box-shadow: var(--shadow-1);
  transition: background 0.65s, box-shadow 0.2s;
}

a.primary:hover {
  box-shadow: var(--shadow-2);
  background: var(--a-lighter)
    radial-gradient(circle, transparent 1%, var(--a-lighter) 1%) center/15000%;
}
a.primary:active {
  background-color: var(--a-light);
  background-size: 100%;
  transition: all 0s;
}

a.outline {
  border: 2px solid var(--outline);
  background-position: center;
  box-shadow: var(--shadow-1);
  transition: background 0.65s, box-shadow 0.2s;
}

a.outline:hover {
  box-shadow: var(--shadow-2);
  background: transparent
    radial-gradient(circle, transparent 1%, var(--bg-1) 1%) center/15000%;
}

a.outline:active {
  background-color: var(--a-lighter);
  background-size: 100%;
  transition: background 0s;
}
</style>

<script>
export default {
  name: "Button",
  emits: ["click"],
  props: {
    text: {
      type: String,
      default: "Button",
    },
    to: {
      type: String,
      default: "/",
    },
    href: {
      type: String,
      default: "#",
    },
    type: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "outline"].includes(value);
      },
      default: "primary",
    },
    mode: {
      type: String,
      validator(value) {
        return ["emitter", "router", "href"].includes(value);
      },
      default: "emitter",
    },
  },
};
</script>

