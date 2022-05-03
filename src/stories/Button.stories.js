import Button from "../Button.vue";

export default {
  title: "MD3/Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return {
      args,
    };
  },
  template: `<Button v-bind="args" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  text: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
};
