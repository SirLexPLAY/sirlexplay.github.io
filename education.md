---
layout: post
title: Education
permalink: /education/
---

{% for semester_data in site.data.education_courses %}
  <h4>{{ semester_data.semester }}</h4>
  <ul class="horizontal-list course-card-list"> {# USE ul.horizontal-list and add a specific class if needed #}
    {% for course in semester_data.courses %}
      {% include course_card.html title=course.title code=course.code description=course.description credits=course.credits %}
    {% endfor %}
  </ul>
{% endfor %}