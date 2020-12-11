Аналог в Bootsrap - https://getbootstrap.com/docs/5.0/utilities/colors/

Классы поддерживают theming via CSS variables - https://material.io/develop/web/docs/theming, Step 4.


В MDC есть несколько классов, которые позволяют задать theme-colors (https://material.io/develop/web/docs/theming):
* mdc-theme--primary
* mdc-theme--primary-bg
* mdc-theme--on-primary
* mdc-theme--secondary
* mdc-theme--secondary-bg
* mdc-theme--on-secondary
* mdc-theme--surface
* mdc-theme--on-surface
* mdc-theme--background

Но не хватает on-* с различными emphasis. В Bootstrap есть text-muted.




.color-on-primary--high
.color-on-primary--medium
.color-on-primary--disabled


.text-on-primary--high
.text-on-primary--medium
.text-on-primary--disabled


.mdcs-color__on-primary
.mdcs-color__on-primary--high
.mdcs-color__on-primary--medium
.mdcs-color__on-primary--disabled


.text-on-secondary--medium
.text-on-surface
.text-on-error