import Vue from 'vue';
import TemplateDefault from './Default.vue';
import TemplateFullScreen from './FullScreen.vue';

const templates = [
  { label: 'TemplateDefault', component: TemplateDefault },
  { label: 'TemplateFullScreen', component: TemplateFullScreen },
];

templates.forEach((item) => {
  Vue.component(item.label, item.component);
});
