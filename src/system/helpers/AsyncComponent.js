const AsyncComponent = (component) => ({
  component: import(component),
});

export default AsyncComponent;
