# Unicafe app

## Exercise 1.6: Unicafe step1 ✅

Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web app for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The app must display the total number of collected feedback for each category.

## Exercise 1.7: Unicafe step2 ✅

Expand your app so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

## Exercise 1.8: Unicafe step3 ✅

Refactor your app so that displaying the statistics is extracted into its own Statistics component. The state of the app should remain in the App root component.

## Exercise 1.9: unicafe step4 ✅

Change your application to display statistics only once feedback has been gathered.

## Exercise 1.10: Unicafe step5 ✅

Let's continue refactoring the application. Extract the following two components:

- [x] Button for defining the buttons used for submitting feedback
- [x] StatisticLine for displaying a single statistic, e.g. the average score.

To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics.

## Exercise 1.11: Unicafe step6 ✅

Display the statistics in an HTML table.
