<template>
  <nav>
    <router-link
      to="/settings"
      class="fab"
      v-if="isAdmin"
      title="Add site"
      @mouseenter="currentIcon = 'add'"
      @mouseleave="currentIcon = 'dash'"
    >
      <transition mode="out-in">
        <span class="material-icons-outlined" v-if="currentIcon == 'dash'"
          >space_dashboard</span
        >
        <span class="material-icons-outlined" v-else>add</span>
      </transition>
    </router-link>
    <router-link to="/" class="fab" v-else>
      <span class="material-icons-outlined">space_dashboard</span>
    </router-link>
    <router-link
      to="/home"
      :class="{ tab: true, selected: currentRoute == '/home' }"
    >
      <span class="material-icons-outlined">home</span><br />
      <span class="label">Home</span>
    </router-link>
    <router-link
      to="/sites"
      :class="{ tab: true, selected: currentRoute == '/sites' }"
    >
      <span class="material-icons-outlined">language</span><br />
      <span class="label">Sites</span>
    </router-link>
    <router-link
      to="/portals"
      :class="{ tab: true, selected: currentRoute == '/portals' }"
    >
      <span class="material-icons-outlined">work_outline</span><br />
      <span class="label">Portals</span>
    </router-link>
    <router-link
      to="/settings"
      :class="{ tab: true, selected: currentRoute == '/settings' }"
    >
      <span class="material-icons-outlined">settings</span><br />
      <span class="label">Settings</span>
    </router-link>
  </nav>
</template>
  
<style scoped>
nav {
  width: 100%;
  height: calc(100% - 2rem);
  padding-top: 2rem;
  text-align: center;
  transition: background 0.2s, box-shadow 0.2s;
}

nav:hover {
  background: var(--bg-2);
  box-shadow: var(--shadow-2);
}
.fab {
  background: var(--a-light);
  color: var(--a-darker);
  border-radius: 1rem;
  height: 4rem;
  width: 4rem;
  display: block;
  margin: auto;
  text-decoration: none;
  box-shadow: var(--shadow-1);
  transition: box-shadow 0.1s;
}

.fab:hover {
  box-shadow: var(--shadow-2);
}

.fab span {
  display: grid;
  align-items: center;
  height: 100%;
  font-size: 1.75rem;
}

.tab {
  display: block;
  text-decoration: none;
  margin-top: 2.25rem;
  color: var(--txt-1);
}

.tab .label {
  font-size: 0.8rem;
}

.tab span:first-child {
  font-size: 1.4rem;
  padding: 0.2rem;
  transition: all 0.2s;
}

.tab.selected span:first-child {
  background: var(--bg-2);
  width: 45%;
  border-radius: calc(1rem + 0.2rem);
}

nav:hover .tab.selected span:first-child {
  background: var(--a-lighter);
  color: var(--bg-1);
  width: 50%;
  border-radius: calc(1rem + 0.2rem);
}

@media only screen and (max-width: 675px) {
  nav {
    padding-top: 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
    height: 100%;
    box-shadow: var(--shadow-1);
  }

  .fab {
    display: none;
  }

  .tab {
    margin-top: 1rem;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      currentRoute: null,
      currentIcon: "dash",
    };
  },
  mounted() {
    this.$router.afterEach(() => {
      this.currentRoute = this.$router.currentRoute._value.fullPath;
      // this.currentRoute = this.currentRoute.slice(1, this.currentRoute.length);
    });
  },
  computed: {
    isAdmin() {
      if (window.localStorage.getItem("admin") == "true") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    switchIcon() {
      if (this.currentIcon == "space_dashboard") {
        this.currentIcon = "add_business";
      } else {
        this.currentIcon = "space_dashboard";
      }
    },
  },
};
</script>

