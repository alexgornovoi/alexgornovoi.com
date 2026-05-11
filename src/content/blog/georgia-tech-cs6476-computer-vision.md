---
title: "Georgia Tech CS 6476: Computer Vision"
id: georgia-tech-cs6476-computer-vision
description: Reflections on CS 6476 Computer Vision at Georgia Institute of Technology, taken in Fall 2025 as part of the OMSCS Machine Learning program.
pubDate: 12/12/2025
related:
  type: education
  id: gatech
---

CS 6476 was my first course in the OMSCS program, taken in Fall 2025. I knew going in that computer vision would be technically challenging, but I didn't fully appreciate how much until the assignments started. Beyond the vision concepts themselves, the course pushed me to sharpen my understanding of linear algebra and think carefully about computational efficiency, both of which came up constantly. It was rigorous and demanding, but also genuinely rewarding.

## Topics Covered

The course moves through a broad range of computer vision topics over the semester:

- **Image fundamentals** — linear image processing, filtering, convolution, edge detection, Hough transforms, Fourier transforms, and aliasing
- **Camera models and geometry** — perspective imaging, stereo geometry, epipolar geometry, camera calibration, homographies, and projective geometry
- **Feature detection and description** — Harris corners, scale invariance, SIFT descriptors, and RANSAC for robust matching
- **Motion and tracking** — optical flow with the Lucas-Kanade method, Kalman filters, Bayes filters, and particle filters
- **Recognition and classification** — generative and discriminative models, PCA, boosting, SVMs, and bag of visual words
- **Advanced topics** — action recognition, hidden Markov models, color spaces, segmentation, 3D perception, and biological vision

## Prerequisites

You only need a basic understanding of Python going in. The boilerplate code handles most of the setup, so you do not need to be an expert, but being comfortable with the fundamentals will go a long way.

## Assignments

There are **six coding assignments** across the semester: Images as Functions, Traffic Lights and Signs, Adventures in AR, Motion Detection, Object Tracking and Pedestrian Detection, and Classification, followed by the final project. The assignments primarily used **OpenCV**, with some pandas and scipy depending on the task. Boilerplate code was provided for each one, which let you focus on the actual computer vision problems rather than spending time on setup. Even so, getting the implementation exactly right was not easy. Some test cases took a long time to pass, and small mistakes in things like coordinate systems or filter boundaries could cascade into completely wrong outputs. I consistently spent **20-30 hours per week**, which made this a serious time commitment on top of everything else.

Working through those problems built real intuition for how vision algorithms behave, something you don't get from just reading about them.

## Final Project

For the final project you choose from several options, write all of the code yourself from scratch, and answer a series of questions supported by figures from your results. There is no boilerplate, so it is a step up from the regular assignments.

> Start early. Getting the core implementation done ahead of time left room to actually understand what was going wrong rather than scrambling at the end.

## Final Exam

The final exam was probably the most approachable part of the course. With solid studying it was very doable and nothing jumped out as a surprise. If you stayed engaged with the material throughout the semester it felt like a natural review rather than a new challenge.

## Grading

Grading was pretty generous. If you get all of the test cases right and write thorough answers to the questions that accompany each coding assignment, you will be in good shape. There were also plenty of extra credit opportunities throughout the semester that were reasonable to complete without adding too much on top of the regular work.

## Overall

CS 6476 is a demanding course but it is worth it. I came out with a much deeper understanding of how visual data is processed computationally. The course counts as an elective toward the **Machine Learning specialization** and also satisfies requirements in several other OMSCS specializations, making it a flexible choice depending on your track. Given the time commitment, I would strongly recommend taking it on its own without any other classes. It is a great course no matter what area of computer science you are interested in.
