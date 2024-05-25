---
title: "Rustroneer"
layout: layouts/post.njk
order: 2
colorScheme: 2
---

Rustroneer is a 2D planet generator inspired by [Astroneer](https://www.youtube.com/watch?v=0KXQZG7riEs&t=1s), written in Rust using the Bevy game engine. 

<br>

My best guess is that Astroneer's procedural generation pipeline is something like:

<br>

- Generate base planet terrain from voxels using some form of noise, domain warping
- Run post processing of some form to add features, hollow out the cave systems
- Mesh the voxels using marching cubes
- Spawn props such as foliage, decorations (some form of domain meta data must exist so it can determine what to spawn where)

<br>

The nice thing about this is that the underlying voxels can be modified at runtime time somewhat trivially, and the marching cubes algorithm is fast enough to run in real time, therefore allowing the player to deform the planet.

<br>

All of these concepts have 2D equivalents! So I thought I'd have a go at creating a 2D version in the style of my [Space Game](/posts/SpaceGame) prototype.

<br>

In my version, I do the following:

<br>

- Generate base planet with 2D voxels (hereafter referred to as pixels) based on a perlin noise function calculating distance from teh center of tha map, to give me basic surface terrain.
- Run a cellular automata algorithm to generate cave systems.
- Identify each cafe using a flood fill algorithm, which gives me meta data about each cave such as the center of each cave
- Use a MST to generate a tunnel system, and subtract that from the pixel map
- Run image processing (blur, domain warp)
- Mesh using marching squares, also generate colliders
- Render with a simple line shader

<br>

As the underlying map is just an image, this allows the user to modify the terrain like in Astroneer by effectively painting on the image and rerunning the meshing algorithm. Pretty neat!

<br>

There are many things I'd like to add and improve such as

- More sophisticated terrain, with regions like mountain, hill, flat plains, etc
- Vegetation and other props, which respect biomes
- Creatures that can interact with the environment, burrow into the terrain etc
- Water (not sure how...)
- Optimize the meshing so that the whole thing doesn't get re-meshed every time a change happens, which will allow for much bigger and higher detail worlds
- Build for wasm so I can run it here!