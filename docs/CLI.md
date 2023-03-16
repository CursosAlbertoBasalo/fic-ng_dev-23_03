# Angular Command Line Interface (CLI) Journal

> Fic Angular Developer 2023-03

## 0 - CLI

```bash
# generate choosing version without global installation
npx -p @angular/cli@15.2.2 ng new fic-ng_dev-23_03
cd fic-ng_dev-23_03
# start development server
npm start
# build deployable app
npm run build
```

### Styles

```bash
# use picocss to style the app
npm install @picocss/pico
# add to angular.json
"node_modules/@picocss/pico/css/pico.min.css",
```

```css
body {
  padding: 0.8rem;
}
:root {
  --form-element-spacing-vertical: 0.25rem;
  --form-element-spacing-horizontal: 0.25rem;
}
span {
  display: inline-block;
  margin-right: 0.5rem;
}
```

## 1 - Components

```bash
# Create header component
ng generate component header
# Create layout module
ng g m layout
# Create footer component in layout module
ng g c layout/footer
# move header to layout module
# Create copyright component
ng g c layout/copy-right
```

- Use {{ }} or [attribute] to evaluate expressions
- Call functions in template for complex expressions
- Use @Input() to pass data from parent to child component
- Use | uppercase to transform data
