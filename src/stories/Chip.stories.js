import Chip from "../Chip.vue";

export default {
  title: "MD3/Chip",
  component: Chip,
};

const Template = (args) => ({
  components: { Chip },
  setup() {
    return {
      args,
    };
  },
  template: `<Chip v-bind="args" />`,
});

export const Normal = Template.bind({});
Normal.args = {
  icon: "none",
  text: "A chip",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "star",
  text: "A chip",
};

export const Selected = Template.bind({});
Selected.args = {
  icon: "radio_button_checked",
  text: "A chip",
  selected: true,
};
