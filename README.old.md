# intersect.attr
declarative intersection observer

# Ussage

```html
<div u1-intersect id=myEl></div>

<style>
#myEl.u1-intersected { /* triggers by default at threshold of 0 */
    background:green;
}
#myEl {
    --u1-intersect-threshold:0.2;  /* set a custom threshold */
    --u1-intersect-margin:-20%;  /* and a margin */
}
#myEl[u1-intersect~="1"] { /* use a one of the predefined thresholds "0" "0.5" or "1" */
    background:red;
}
</style>
```


## Demos
https://raw.githack.com/u1ui/intersect.attr/main/tests/minimal.html  
https://raw.githack.com/u1ui/intersect.attr/main/tests/test.html  

