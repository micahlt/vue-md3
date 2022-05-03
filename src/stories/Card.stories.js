import Card from "../Card.vue";

export default {
  title: "MD3/Card",
  component: Card,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return {
      args,
    };
  },
  template: `<Card v-bind="args" />`,
});

export const Full = Template.bind({});
Full.args = {
  header: "Card",
  description:
    "This card has a header image and some text as well as a primary and secondary option.  Eventually you'll be able to use a slot to put any kind of content in a card!",
  primaryOpt: "Choice",
  secondaryOpt: "Another",
  imageUrl:
    "url('https://images.unsplash.com/photo-1603976487252-5f1cee35fe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hdGVyaWFsJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
};

export const Minimal = Template.bind({});
Minimal.args = {
  header: "Card",
  description:
    "This card is a bit more simple - just a little bit of text.  It's still useful for presenting information though!",
};
