---
title: Devices
---

* `mmrc` / **`device ID`**: this is the base topic of a device.
Each device must have a unique device ID which adhere to the [ID format](#topic-ids).

### Device Attributes

* `mmrc` / `device ID` / **`$device-attribute`**:

The following device attributes are mandatory and MUST be send, even if it is just an empty string.

| Topic       | Description                                                               |
|:------------|:--------------------------------------------------------------------------|
| $name       | Friendly name of the device                                               |
| $state      | See [Device Lifecycle](#device-lifecycle)                                 |
| $nodes      | [Nodes](#nodes) the device exposes, separated by `,` for multiple ones.   |

<!--
| $extensions | Supported extensions, separated by `,` for multiple ones.                 |
-->

Optional topics include:

| Topic       | Description                   |
|:------------|:------------------------------|
| $mmrc       | The implemented MMRC convention version                                   |
| $type       | An identifier for the type of device used (example "esp8266" or "Arduino Uno") |

For example, a device with an ID of `super-car` that comprises of a `wheels`, `engine` and a `lights` node would send:

```java
mmrc/super-car/$mmrc → "2.1.0"
mmrc/super-car/$name → "Super car"
mmrc/super-car/$nodes → "wheels,engine,lights[]"
mmrc/super-car/$type → "esp8266"
mmrc/super-car/$state → "ready"
```

### Device Lifecycle

The `$state` device attribute represents the current state of the device.
There are 6 different states:

* **`init`**: this is the state the device is in when it is connected to the MQTT broker, but has not yet sent all MMRC messages and is not yet ready to operate.
This state is optional, and may be sent if the device takes a long time to initialize, but wishes to announce to consumers that it is coming online.
* **`ready`**: this is the state the device is in when it is connected to the MQTT broker, has sent all MMRC messages and is ready to operate. <!-- A MMRC Controller can assume default values for all optional topics. -->
* **`disconnected`**: this is the state the device is in when it is cleanly disconnected from the MQTT broker.
You must send this message before cleanly disconnecting.
* **`sleeping`**: this is the state the device is in when the device is sleeping.
You have to send this message before sleeping.
* **`lost`**: this is the state the device is in when the device has been "badly" disconnected.
You must define this message as LWT (last will).
* **`alert`**: this is the state the device is in when connected to the MQTT broker, but something wrong is happening. E.g. a sensor is not providing data and needs human intervention.
You have to send this message when something is wrong.

