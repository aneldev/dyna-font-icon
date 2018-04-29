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

## Font Awesome 4

Load the fonts

```
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
```

[Select Font Awesome v4](https://fontawesome.com/v4.7.0/icons/).

## Font Awesome 5

Load the fonts

```
<link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
```

[Select Font Awesome v5](https://fontawesome.com/icons?d=gallery&m=free).


## Other fonts

In future other also web fonts will be supported with the same logic.

Forks are welcome.


# Change log

# v1

Support Font Awesome v4

# v2

Support Font Awesome v4 & v5

