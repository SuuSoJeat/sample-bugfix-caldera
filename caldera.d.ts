import { DefineComponent, Plugin } from 'vue';


declare const Caldera: Exclude<Plugin['install'], undefined>;
export default Caldera;

export const CalderaSample: DefineComponent<{}, {}, any>;
