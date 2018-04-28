# About

Make web font icons, inline icons and adjust the dimension of it through the css class.

Adjust the width and height of them with css `width` and `height` and not with `font-size`;

This gives makes the web fonts to work as images so you can create graphics in precision.

# Example

```
<DynaFontIcon
  className="my-icon-32"
  fontClassName="fa fa-grav"
>dyna button</DynaFontIcon>
```

_or_

```
<DynaFontIcon
  style={{width: "32px", height: "32px"}}
  fontClassName="fa fa-grav"
>dyna button</DynaFontIcon>
```

# Supported Web Fonts 

Currently only [Font Awesome v4](https://fontawesome.com/v4.7.0/icons/).

In future other also web fonts will be supported with the same logic.

# Load the web fonts css

You should load the icons from their cdn with this code.

```
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
```
