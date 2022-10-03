# ClickHouseSink Application task

## Introduction

### Overview

Please develop a ClickHouse sink application.

Therefore, we will review and consider incomplete implementations. However, in this case we ask that:
* You briefly list all the limitations (such as missing or incomplete functionality) of your solution.

## Task description

Create a Scala application that reads Kafka and produces into ClickHouse table.
The regular ClickHouse HTTP interface should be used to insert records, a third party clickhouse client shouldn't be used.
Source model and the table structure can be arbitrary.

## Optional Tasks

If you are motivated to further showcase your skills you can implement:
* The way the application inserts records is optimal for ClickHouse
* An abstraction that can handle arbitrary input data types
* An abstraction that can handle arbitrary data sources
* The application health check
* The application metrics
* The horizontal scalability

These tasks are fully optional.

### Technologies

It is up to you to choose the technical stack, however we suggest that you use technologies which are relevant
to the position you are interviewing for, and with which you are proficient.

If you chose any technologies or approaches with which you lack experience, feel free to mention this in the
description so that we can keep that in mind when reviewing your solution.

### Documentation

Please including a concise `ReadMe.md` file with the following:
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* How to test and - if applicable - launch the solution (unless it uses the standard approach by the standard
  build tool).

We do not require the documentation to be verbose or lengthy - short descriptions are acceptable, and details
can be discussed on the interview.

### Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository.

If anything in the task description is unclear, please do not hesitate to ask.