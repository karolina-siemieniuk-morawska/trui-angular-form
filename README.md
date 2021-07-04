# Recruitment Task - Angular form with input validation 

Link to deployed solution: 

To complete this task I used:

* Angular 12.1.1
* Angular Reactive Forms 
* Regular Expressions
* Bootstrap 5.0.2 - https://www.npmjs.com/package/bootstrap
* ValidatePolish - https://www.npmjs.com/package/validate-polish
* Netlify - https://app.netlify.com/

Validation of input fields is mostly done using Angular's Reactive Form Validators - for name, topic and agreements I used just 'Required' or 'RequiredTrue' validator. For NIP, instead of writing the validation logic myself, I created a ValidatorFn in which I reached for an external libriary called 'ValidatePolish' and it's .nip() method. Email is checked by Validators.email. To make sure that provided phone number is correct, I decided to use regular expression that accepts only plus sign (if a user decides to put country code), and a minimum of 8 digits (which I checked is the minimal length of any phone number including country code). Submitting of the form is only possible if all the required inputs are filled and all are in correct format. Values of submitted form are logged in console. To create layout easier, I used Bootstrap.

Mockup: https://www.sketch.com/s/2fe4d6de-2ccc-4cda-8a4e-0b4ea4ca6ce8/a/m1rL0G9#Inspector

[![Netlify Status](https://api.netlify.com/api/v1/badges/fb900c3d-87f9-44cd-9bb4-98fab1e0cf4d/deploy-status)](https://app.netlify.com/sites/trui-task/deploys)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
