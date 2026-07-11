function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const partI = [
  "Problem statement",
  "Current workflow analysis",
  "Stakeholder ecosystem",
  "Competitor analysis",
  "Key insights",
].map((title) => ({ id: `part1-${slugify(title)}`, title }));

export const partII = [
  "Target Users",
  "Key feature & functionalities",
  "Critical User Flows",
].map((title) => ({ id: `part2-${slugify(title)}`, title }));

export const partIII = [
  "Design principles",
  "Screen 1: Order fulfillment - Allocation Stage",
  "Screen 2: Order fulfillment - Schedule pickup Stage",
  "Screen 3: Order discussion thread",
  "Screen 4: Order fulfillment - Settlement stage",
  "Screen 5: Finance Dashboard",
  "Screen 6: Farmer Dashboard",
  "Screen 7: Inventory Update - Image Capture",
  "Screen 8: Browse Produce - Search & Filter",
  "Screen 9: Browse Produce - Cart",
].map((title) => ({ id: `part3-${slugify(title)}`, title }));

export const navItems = [
  { id: "part-1", label: "Research & Insights", targetId: "part-1" },
  { id: "part-2", label: "Product Requirement Document", targetId: "part-2" },
  { id: "part-3", label: "UI/UX", targetId: "part-3" },
];
