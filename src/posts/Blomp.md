---
title: "Blomp"
layout: layouts/post.njk
order: 4
colorScheme: 4
---

<br>

Blomp is a demo app for a library that allows Unity apps to be controlled by any phone with the companion phone app written in Flutter.

<br>

<img src="{{ site.pathPrefix }}img/blomp/03.gif" alt="Oh No!" class="fixed-width">

<br>

The phone scans a QR code displayed by the Unity app that contains network data.

<br>

<img src="{{ site.pathPrefix }}img/blomp/04.gif" alt="Oh No!" class="fixed-width">

<br>

The phone then negotiates a websocket connection with the Unity app and data can be sent bidirectionally. It can be float, int, string, or binary.

<br>

<img src="{{ site.pathPrefix }}img/blomp/05.gif" alt="Oh No!" class="fixed-width">

<br>

In this example, the phone allows you to take a selfie, which gets transmitted to the Unity app and becomes an entity you can control.
<br>
You can control the size of your face with a slider and trigger a "blomp" with a button.



<br>

<img src="{{ site.pathPrefix }}img/blomp/02.gif" alt="Oh No!" class="fixed-width">





