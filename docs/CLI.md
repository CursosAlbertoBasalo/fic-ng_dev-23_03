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

```bash
ng add @angular-eslint/schematics
npm i prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier -D
```

Prettier config

```json
{
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120
}
```

EsLint config

```json
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "prettier/prettier": "warn",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "lab",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "lab",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended", "plugin:@angular-eslint/template/accessibility"],
      "rules": {}
    }
  ]
}
```

### Styles

```bash
# use picocss to style the app
npm install @picocss/pico
# add to angular.json
"node_modules/@picocss/pico/css/pico.min.css",
```

Global styles in `src/styles.css`

```css
body {
  padding: 1rem;
}
span {
  margin-right: 0.5rem;
}

```

## 1 - Components

```bash
# Create header component
ng generate component header
## Alternative using remote execution
npx ng generate component header
## Alternative using remote specific version
npx -p @angular/cli@15.0.0 ng generate component header
```

```bash
# Create layout module
ng g m layout
# Create footer component in layout module
ng g c layout/footer
# export footer component
# move header to layout module and export it
```

- Use `{{ expression }}` or `[attribute]="expression"` to dynamically bind data
- Call functions in template for complex expressions (keep template simple)
- Use `@Input()` to pass data from parent to child component
- Use `| uppercase` (or any other _pipe_) to transform data presentation

### 🫵🏼 Practice

- [ ] Create a copyright component private in the Layout module

```bash
ng g m shared
ng g c shared/activity-item --export
```

## 2 - Templates

Home page with list of published activities

### Models

`src\app\core\models\activity.type.ts`

```typescript
export type Id = string | number;
export type AgeCategory = "adult" | "child" | "family";
export type ActivityStates =
  | "draft"
  | "published"
  | "cancelled"
  | "confirmed"
  | "finished";
export type Activity = {
  ageCategory: AgeCategory;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  state: ActivityStates;
  title: string;
  userId: Id;
};
```

- `*ngFor="let activity of activities"`: iterate over activities
- `*ngIf="activity.price < 100"`: show 🫰🏼 only if price is less than 100
- `{{ activity.price | currency:activity.currency }}`: format price as currency
- `{{ activity.date | date:'mediumDate' }}`: format date as medium date
- `[class]="activity.ageCategory"`: add class to element based on age category
- filter activities by published state
- sort activities by date
- count activities

### 🫵🏼 Practice

- [ ] Extract activity list Item to a component in a Shared module

## 3 - Routes

```bash
# create a home component
ng g c home
# create a about component
ng g c about
# create a lazy module for contact
ng g m contact --routing
# with its component
ng g c contact
# create a lazy module with routing pointing to register
ng g m auth/register --route=auth/register -m=app
```

### 🫵🏼 practice:

- [ ] create a lazy module with routing pointing to login

## 4 - Services

```bash
# create a service
ng g s core/activities
# consume service in home component
# create a lazy module with routing pointing to activities
# consume service in activities component
ng g m activities/new-activity --route=new -m=activities
# create a lazy module with parameters
# consume service in activity component
ng g m activities/detail-activity --route=:slug -m=activities
```

### 🫵🏼 practice

- [ ] create a helper service for parameters (extract common code to a service)

## 5 - Forms

```bash
# register form
# validate register form
```

### 🫵🏼 practice:

- [ ] create the login for with validation and feedback

- [ ] generate a forms service to reuse logic

- [ ] generate a label-control component to reuse presentation

```bash
# refactoring to reuse code
# generate service
ng g s core/forms
# generate form-error component
ng g c shared/label-control --export
```

## 6 - Http

```bash
# create a fake backend
npm install json-server json-server-auth --save-dev
# create a api script
# json-server-auth ./db/db.json -r ./db/rs.json
```

```bash
# import HttpClientModule in shared module
# import { HttpClientModule } from '@angular/common/http';
# use httpClient on activities service

# generate users service
ng g s core/users
# post a new user on register service (use @Output)
npx ng g c register/register-form
```

### 🫵🏼 practice:

- [ ] use httpClient on login service to log in (use @Output)

## 🫵🏼 Final Practice

- [ ] add a new activity

- [ ] create a component for the filter-order-counting of a list

```bash
# route /activities/new
# form to edit an activity
# use httpClient on activities service to post a new activity
# use container - presenter event
```

### Compile to production

```bash
npx ng build --prod
npx lite-server --baseDir="dist/fic-ng_dev-23_03"
```
