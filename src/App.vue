<template>
  <div>
    <!-- Beverage Mug -->
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <!-- Temperature options -->
    <ul>
      <li>
        <label v-for="temp in beverageStore.temps" :key="temp">
          <input
            type="radio"
            name="temperature"
            :value="temp"
            v-model="beverageStore.currentTemp"
          />
          {{ temp }}
        </label>
      </li>
    </ul>

    <!-- Base options -->
    <ul>
      <li>
        <label v-for="base in beverageStore.bases" :key="base.id">
          <input
            type="radio"
            name="base"
            :value="base"
            v-model="beverageStore.currentBase"
          />
          {{ base.name }}
        </label>
      </li>
    </ul>

    <!-- Syrup options -->
    <ul>
      <li>
        <label v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <input
            type="radio"
            name="syrup"
            :value="syrup"
            v-model="beverageStore.currentSyrup"
          />
          {{ syrup.name }}
        </label>
      </li>
    </ul>

    <!-- Creamer options -->
    <ul>
      <li>
        <label v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <input
            type="radio"
            name="creamer"
            :value="creamer"
            v-model="beverageStore.currentCreamer"
          />
          {{ creamer.name }}
        </label>
      </li>
    </ul>

    <!-- Beverage Name and Button -->
    <input
      v-model="beverageStore.currentName"
      type="text"
      placeholder="Beverage Name"
    />
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>

    <!-- Saved Beverages -->
    <div class="saved-beverages">
      <label
        v-for="bev in beverageStore.beverages"
        :key="bev.id || bev.name"
      >
        <input
          type="radio"
          name="saved"
          @click="beverageStore.showBeverage(bev)"
        />
        {{ bev.name }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();

// Initialize Firestore data on load
beverageStore.init();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.saved-beverages {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
</style>
