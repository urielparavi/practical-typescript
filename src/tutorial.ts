interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(4));

console.log(laptop);
