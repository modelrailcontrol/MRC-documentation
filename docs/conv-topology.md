---
title: Topology
---

## Devices
An instance of a physical piece of hardware is called a *device*.
For example, a car, an Arduino/ESP8266 or a coffee machine.

## Nodes
A *device* can expose multiple *nodes*.
Nodes are independent or logically separable parts of a device.
For example, a car might expose a `wheels` node, an `engine` node and a `lights` node.

<!--
Nodes can be **arrays**.
For example, instead of creating two `lights` node to control front lights and back lights independently, we can set the `lights` node to be an array with two elements.
-->

## Properties
A *node* can have multiple *properties*.
Properties represent basic characteristics of the node/device, often given as numbers or finite states.
For example the `wheels` node might expose an `angle` property.
The `engine` node might expose a `speed`, `direction` and `temperature` property.
The `lights` node might expose an `intensity` and a `color` property.


## Attributes
*Devices, nodes and properties* have specific *attributes* characterizing them.
Attributes are represented by topic identifier starting with `$`.
The precise definition of attributes is important for the automatic discovery of devices following the MMRC convention.

Examples: A device might have an `IP` attribute, a node will have a `name` attribute, and a property will have a `unit` attribute.

## Base Topic

The root topic for this convention is `mmrc/`.
<!--
If this root topic does not suit your needs (in case of, e.g., a public broker or because of branding), you can choose another.
-->

<!--
MMRC controllers must by default perform auto-discovery on the wildcard topic "+/+/$mmrc".
Controllers are free to restrict discovery to a specific root topic, configurable by the user.
-->

## Broadcast Channel

MMRC defines a broadcast channel, so a controller is able to broadcast a message to all MMRC devices:

* `mmrc` / `$broadcast` / **`level`**: `level` is an arbitrary broadcast identifier.
It must adhere to the [ID format](#topic-ids).

For example, you might want to broadcast an `alert` event with the alert reason as the payload.
Devices are then free to react or not.
In our case, every buzzer of your home automation system would start buzzing.

```java
mmrc/$broadcast/alert ← "Intruder detected"
```

Any other topic is not part of the MMRC convention.