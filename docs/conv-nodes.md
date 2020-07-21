---
title: Nodes
---

* `mmrc` / `device ID` / **`node ID`**: this is the base topic of a node.
Each node must have a unique node ID on a per-device basis which adhere to the [ID format](#topic-ids).

### Node Attributes

* `mmrc` / `device ID` / `node ID` / **`$node-attribute`**:

All listed attributes are **required**. A node attribute MUST be one of these:

| Topic       | Description                                                                               |
|:------------|:------------------------------------------------------------------------------------------|
| $name       | Friendly name of the Node                                                                 |
| $type       | Type of the node                                                                          |
| $properties | Exposed properties, separated by `,` for multiple ones.                                   |

For example, our `engine` node would send:

```java
mmrc/super-car/engine/$name → "Car engine"
mmrc/super-car/engine/$type → "V8"
mmrc/super-car/engine/$properties → "speed,direction,temperature"
```

