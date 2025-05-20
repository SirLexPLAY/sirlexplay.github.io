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
* I was a student of the "Kjemi og Biokjemi" program during first 4 semesters, then "Informatikk: programmering og systemarkitektur" (PROSA) for one 2 last semesters. In order to apply for the masters, I had to either have one more year with bachelor subjects to fullfil the requirements to get a bachelor in PROSA (I was missing one mandatory specialization subject), or apply for "Freely Combined Bachelor's Degree", which I did in the end.

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