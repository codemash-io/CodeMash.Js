---
description: Overview of list paging
---

# Paging

Paging is used for requests where a list of records are returned. Paging consists of two parameters - **pageNumber** and **pageSize**.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| **pageNumber** | integer | Default value is 0. This parameter tells how much records to skip. The number of records skipped are **pageNumber** \* **pageSize**. Records are read and skipped in a way they are sorted. If no sort query is given, records are sorted by their insert date. |
| **pageSize** | integer | Default value is 1000. Amount of records to get. |



