---
title: Men
layout: normal
keywords: "Pattern making, custom clothing, clothing, Melbourne, Helen Aldred, design 1920s, 1930s, art deco menswear"

---
<div class="container justify-content-center">
<div class="row">
<div class="col my-3">
<div name="seamstress">
<h2 class="my-4">Men</h2>
{% include custom.md %}
</div><!-- end seamstress section -->

<script src="{{ "assets/js/form.js" | relative_url }}"></script>
</div><!-- end outer col -->
</div><!-- end outer row -->

<div class="row border border-light border-top-0">
{% for item in site.data.clothes %}
{% if item.gender == "men" %}
{% include clothing.html %}
{% endif %}
{% endfor %}
</div><!-- end row-->


</div><!-- end container -->
