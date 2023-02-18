# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Task 1 Add custom ID field to Agent Table (Backend)

    -   Add a new field `custom_id` in the Agent Table

**Acceptance Criteria**

    - Custom ID is a added tio the Agent table

### Task 2 Update shift retrieval function to Include custom_id (Backend)

    -   Update getShiftByFaclility function to include custom_id from the Agent assigned to each shift.
    -   Add a new parameter to getShiftByFacility function to indicate if we are adding a custom_id or not

**Acceptance Criteria**

    - the getShiftByFacility function is updated to include the custom_id Agent assigned to each Shift
    - A new parameter is added getShiftByFacility to include custom or regular ID
    - Change should be tested

### Task 3 Update the generated Report to use custom_id (Backend)

    - Update the generateReport function to use the custom_id of the Agent in the report
    - Update report template to include the new custom_id field

**Acceptance Criteria**

    - The report template is generated including custom_id
    - Change should be tested

### Task 4 Add custom_id Field in the Interface

    - Add a new input field in the Facilities interface to enter custom_id for each Agent they work with.
    - Display custom_id of Agents in the Report

**Acceptance Criteria**

    - A new input is added to enter custom_id
    - The interface displays custom_id
    - The change is testet

### Task 5 Provide support for existing reports

    -  If a custom_id is not available for an Agent, regular ID should be used in the report

**Acceptance Criteria**

    - If custom ID is not available, Report should display regular ID
    - Should be tested

**Estimation**

Complete Feature might take a week sprint, considering tests and edge cases if found during development
