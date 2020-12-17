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


### CSS Classes

CSS Class | Description
--- | ---
`mdcs-theme--<COLOR_STYLE>-<EMPHASIS>` | COLOR_STYLE: primary, on-primary, secondary, on-secondary, on-surface.<br>EMPHASIS: high, medium, disabled.
