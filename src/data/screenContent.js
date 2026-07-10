export const screenContent = {
  "part3-screen-1-order-fulfillment-allocation-stage": {
    layout: "left",
    height: 900,
    images: ["/Images/Screen%201.png"],
    decision: [
      {
        title: "Guided workflow",
        description:
          "Managers complete one allocation stage at a time, reducing decision fatigue during complex multi-farmer orders.",
      },
      {
        title: "Smart allocation",
        description:
          "Farmers are automatically suggested based on quality, availability, and route fit, with manual override always available.",
      },
    ],
    callouts: [
      {
        title: "Progressive disclosure",
        description: "Only the active stage is expanded by default, keeping focus on the task at hand.",
      },
      {
        title: "Grouped based table",
        description: "Farmers are grouped and filtered by crop, making it easy to compare options at a glance.",
      },
      {
        title: "Allocation completion",
        description: "The order only advances once all required quantity has been allocated across farmers.",
      },
    ],
  },
  "part3-screen-2-order-fulfillment-schedule-pickup-stage": {
    layout: "centered",
    images: ["/Images/Screen%202.png"],
    callouts: [
      {
        title: "Driver recommendation",
        description: "The system suggests the best-fit driver based on availability and route history.",
      },
      {
        title: "Interactive Map",
        description: "Pickup locations and routes are visualized on a live map for quick spatial context.",
      },
      {
        title: "Route re-order",
        description: "Managers can drag to reorder pickup stops to optimize the collection route.",
      },
    ],
  },
  "part3-screen-3-order-discussion-thread": {
    layout: "left",
    images: ["/Images/Screen%203.png"],
    decision: [
      {
        title: "Seamless coordination",
        description: "Use case: One of the allocated farmers don't have enough inventory.",
      },
      {
        title: "Role based access control",
        description: "The information is visible only to the manager",
      },
    ],
  },
  "part3-screen-4-order-fulfillment-settlement-stage": {
    layout: "centered",
    images: ["/Images/Screen%204.png"],
    callouts: [
      {
        title: "Overview to instantly know status",
        description: "Order value, delivery status, and payment status are visible at a glance before taking action.",
      },
      {
        title: "Auto-creation of invoice",
        description: "The buyer invoice is generated automatically from the order and delivery details, with manual adjustments available before it's sent.",
      },
      {
        title: "One-click payment",
        description: "Farmer payouts are released in a single action once the invoice is confirmed.",
      },
    ],
  },
  "part3-screen-5-finance-dashboard": {
    layout: "left",
    height: 900,
    images: ["/Images/Screen%205.png"],
    decision: [
      {
        title: "Address core Users Goals",
        description:
          "Consolidates revenue, outstanding invoices, and farmer payouts into one view so managers don't have to cross-reference multiple screens.",
      },
    ],
    callouts: [
      {
        title: "Time period",
        description: "Financials can be filtered by week, month, quarter, or all time.",
      },
      {
        title: "Quick CTAs",
        description: "Remind and Release actions are one click away from every invoice and payout row.",
      },
      {
        title: "Farmer/buyer view",
        description: "To understand revenue per farm and per buyer",
      },
    ],
  },
  "part3-screen-6-farmer-dashboard": {
    layout: "right",
    height: 900,
    images: ["/Images/Screen%206.png"],
    decision: [
      {
        title: "Address core User Goals",
        description: "Surfaces the actions farmers need to take today, alongside upcoming pickups and current inventory.",
      },
      {
        title: "Accessibility",
        description: "Optimized for mobile so farmers can check orders, update inventory, and confirm pickups from the field, not just a desk.",
      },
    ],
    callouts: [
      {
        title: "Action list",
        description: "Time-sensitive tasks like inventory updates and pickup confirmations are surfaced first.",
      },
      {
        title: "Upcoming pickups",
        description: "Farmers see estimated earnings and pickup timing for each scheduled collection.",
      },
      {
        title: "Crop inventory",
        description: "A single table tracks available, committed, and harvest status across all crops.",
      },
    ],
  },
  "part3-screen-7-inventory-update-image-capture": {
    layout: "centered",
    images: ["/Images/Screen%207.png"],
    callouts: [
      {
        title: "Image & voice Capture",
        description: "Farmers can update inventory using photos or a spoken quantity instead of typing.",
      },
      {
        title: "Manual entry",
        description: "A structured form is available for farmers who prefer entering quantity and grade directly.",
      },
      {
        title: "Review section",
        description: "AI-estimated quantity and confidence score are shown before the update is confirmed.",
      },
    ],
  },
  "part3-screen-8-browse-produce-search-filter": {
    layout: "dual",
    images: ["/Images/Screen%208%20a.png", "/Images/Screen%208%20b.png"],
    callouts: [
      {
        title: "Search & Filter",
        description: "Buyers can narrow produce by type, grade, and date to find what they need quickly.",
      },
      {
        title: "Interactive Product cards",
        description: "Selecting a product opens an inline quantity selector without leaving the browse view.",
      },
      {
        title: "Bulk select",
        description: "Buyers can set bulk quantities directly from the product card before adding to cart.",
      },
    ],
  },
  "part3-screen-9-browse-produce-cart": {
    layout: "centered",
    images: ["/Images/Screen%209.png"],
    callouts: [
      {
        title: "Produce cards",
        description: "Each cart item shows grade, harvest date, and an editable quantity.",
      },
      {
        title: "Price breakdown",
        description: "Subtotal, fees, and tax are itemized so buyers know exactly what they're paying for.",
      },
      {
        title: "Earliest delivery",
        description: "The estimated delivery date is shown upfront to set expectations before checkout.",
      },
    ],
  },
};
