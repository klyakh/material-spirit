Аналог в Bootstrap - https://getbootstrap.com/docs/5.0/utilities/display/

Использует MDC Web media breakpoints и naming style.
В отличии от Bootstrap, классы с breakpoint не распространяются "вверх" по breakpoints. Они применяются строго для указанного breakpoint.

### CSS Classes

CSS Class | Description
--- | ---
`mdcs-display--<DISPLAY_VALUE>` | DISPLAY_VALUE: none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex.
`mdcs-display--<DISPLAY_VALUE>-<TYPE_OF_DEVICE>` | Применить указанный display value только для указанного TYPE_OF_DEVICE.
