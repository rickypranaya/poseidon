export interface FilterButton {
  item: { id: string; label: string };
  deleteItem: (arg: string) => void;
}

export interface Filter {
  id: string;
  label: string;
}

export interface RangeFilter {
  open: boolean;
  label: string;
  info: string;
  type: string;
  filterList: Filter[];
  updateFilter: (arg: string, label: string, range: [string, string]) => void;
}
