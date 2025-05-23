// Migrating to a standard z-index system https://getbootstrap.com/docs/5.0/layout/z-index/
// Please avoid using deprecated numbers
/** @deprecated - use ui/src/theme/zIndexes */
export enum Z_INDEX {
  deprecated_zero = 0,
  default = 1,
  hover = 2,
  active = 3,
  under_dropdown = 990,
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  modalBackdrop = 1040,
  offcanvas = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
  modalOverTooltip = 1090,
}
