---
layout: post
title: Education
permalink: /education/
---

## University of Oslo

**Informatics: Programming and Systems Architecture (Masters)** | Aug 2023 - Jun 2025
* Master Thesis Title: "Synthetic LiDAR Data Generation and Evaluation of Geometric Primitive Detection Methods"

#### Taken Subjects:
<ul class="horizontal-list course-card-list">
  {% for course in site.data.education_data.masters_subjects %}
    {% include course_card.html title=course.title description=course.description code=course.code credits=course.credits %}
  {% endfor %}
</ul>


**Freely Combined Bachelor's Degree** | Aug 2020 - Jun 2023

#### Relevant Subjects Included:
<ul class="horizontal-list course-card-list">
  {% for course in site.data.education_data.bachelors_relevant_subjects %}
    {% include course_card.html title=course.title description=course.description code=course.code credits=course.credits %}
  {% endfor %}
</ul>

#### Other Subjects Included:
<ul class="horizontal-list course-card-list">
  {% for course in site.data.education_data.bachelors_other_subjects %}
    {% include course_card.html title=course.title description=course.description code=course.code credits=course.credits %}
  {% endfor %}
</ul>