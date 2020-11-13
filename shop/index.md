---
title: Clothing for sale
layout: normal
description: "Clothing for sale hand made in Melbourne, Australia"
keywords: "Clothing, for sale, Melbourne, Australia"

---

<style>
.tooltip-wrap {
  position: relative;
}
.tooltip-wrap .tooltip-content {
  display: none;
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  background-color: #fff;
  padding: .5em;
  opacity: 65%;
}
.tooltip-wrap:hover .tooltip-content {
  display: block;
}
</style>

<div class="container mb-4">

<div class="row border border-light border-top-0">
{% for item in site.data.clothes %}
{% if item.section %}
{% include cat-layout.html %}
{% endif %}
{% endfor %}
</div><!-- end row-->


</div><!-- end container -->
