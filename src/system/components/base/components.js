import Vue from 'vue';
import BaseBtn from './BaseBtn.vue';
import BaseSelect from './BaseSelect.vue';
import BaseTextField from './BaseTextField.vue';
import BaseCol from './BaseCol.vue';
import BaseRow from './BaseRow.vue';
import BaseForm from './BaseForm.vue';
import BaseContainer from './BaseContainer.vue';
import BaseCard from './BaseCard.vue';
import BaseCardActions from './BaseCardActions.vue';
import BaseCardSubtitle from './BaseCardSubtitle.vue';
import BaseCardTitle from './BaseCardTitle.vue';

const components = [
  { label: 'BaseBtn', component: BaseBtn },
  { label: 'BaseSelect', component: BaseSelect },
  { label: 'BaseTextField', component: BaseTextField },
  { label: 'BaseCol', component: BaseCol },
  { label: 'BaseRow', component: BaseRow },
  { label: 'BaseForm', component: BaseForm },
  { label: 'BaseContainer', component: BaseContainer },
  { label: 'BaseCard', component: BaseCard },
  { label: 'BaseCardActions', component: BaseCardActions },
  { label: 'BaseCardSubtitle', component: BaseCardSubtitle },
  { label: 'BaseCardTitle', component: BaseCardTitle },
];

components.forEach((item) => {
  Vue.component(item.label, item.component);
});
