import { defineStore } from "pinia";
import db from "../firebase.ts";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Beverage type
type Beverage = {
  id?: string;
  name: string;
  temp: string;
  base: any;
  creamer: any;
  syrup: any;
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: ["Hot", "Cold", "Iced"],
    currentTemp: "Cold",
    bases: [] as any[],
    currentBase: null as any,
    creamers: [] as any[],
    currentCreamer: null as any,
    syrups: [] as any[],
    currentSyrup: null as any,
    currentName: "",
    beverages: [] as Beverage[],
  }),
  actions: {
    // Initialize store by loading Firestore collections
    async init() {
      // Load bases
      const basesSnap = await getDocs(collection(db, "bases"));
      this.bases = basesSnap.docs.map(doc => doc.data());

      // Load creamers
      const creamersSnap = await getDocs(collection(db, "creamers"));
      this.creamers = creamersSnap.docs.map(doc => doc.data());

      // Load syrups
      const syrupsSnap = await getDocs(collection(db, "syrups"));
      this.syrups = syrupsSnap.docs.map(doc => doc.data());

      // Load saved beverages
      const beveragesSnap = await getDocs(collection(db, "beverages"));
      this.beverages = beveragesSnap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Beverage)
      }));

      // Set defaults
      if (this.bases.length > 0) this.currentBase = this.bases[0];
      if (this.creamers.length > 0) this.currentCreamer = this.creamers[0];
      if (this.syrups.length > 0) this.currentSyrup = this.syrups[0];
    },

    // Create a new beverage and save it to Firestore
    async makeBeverage() {
      if (!this.currentName.trim()) return;
      if (!this.currentBase || !this.currentCreamer || !this.currentSyrup) return;

      const newBeverage: Beverage = {
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      const docRef = await addDoc(collection(db, "beverages"), newBeverage);
      newBeverage.id = docRef.id;
      this.beverages.push(newBeverage);

      this.currentName = "";
    },

    // Load a saved beverage into current selections
    showBeverage(beverage: Beverage) {
      this.currentName = beverage.name;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
});
