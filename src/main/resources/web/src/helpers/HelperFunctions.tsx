import { SelectOption } from "../types/types";

export function pretvoriUTekst(value: number | undefined, options: SelectOption[]): string {
    const status = options.find(option => option.value === value);
    return status ? status.label : "Unknown";
}

export function getTagColor(value?: number) {
    switch (value) {
        case 1:
          return 'green';
        case 2:
          return 'blue';
        case 3:
          return 'orange';
        case 4:
          return 'red';
        default:
          return 'defaultColor';
      }
}