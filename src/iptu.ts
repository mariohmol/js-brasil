import { IPTUVALIDATE } from './iptu_validate';
import { IPTUMASKS } from './iptu_mask';
import { getAllDigits } from './utils';
import { IPTUCREATE } from './iptu_create';

export const create_iptu = (number: string, estado: string | number, cidade: string | number) => {
  if (!IPTUCREATE[estado] || !IPTUCREATE[estado][cidade]) {
    return true;
  }
  number = getAllDigits(number);
  return IPTUCREATE[estado][cidade](number);
};

export const mask_iptu = (number: string, estado: string, cidade: string) => {
  if (!IPTUMASKS[estado] || !IPTUMASKS[estado][cidade]) {
    return number;
  }
  return IPTUMASKS[estado][cidade];
};
export const validate_iptu = (number: string, estado: string | number, cidade: string | number) => {
  if (!IPTUVALIDATE[estado] || !IPTUVALIDATE[estado][cidade]) {
    return true;
  }
  number = getAllDigits(number);
  return IPTUVALIDATE[estado][cidade](number);
};