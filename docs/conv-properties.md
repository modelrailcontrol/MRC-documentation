---
title: Properties
---

* `mmrc` / `device ID` / `node ID` / **`property ID`**: this is the base topic of a property.
Each property must have a unique property ID on a per-node basis which adhere to the [ID format](#topic-ids).

* A property payload (e.g. a sensor reading) is directly published to the property topic, e.g.:
  ```java
  mmrc/super-car/engine/temperature → "21.5"
  ```

### Property Attributes

* `mmrc` / `device ID` / `node ID` / `property ID` / **`$property-attribute`**:

The following attributes are required:

| Topic     | Description                                          | Payload type                                |
|:----------|:-----------------------------------------------------|:--------------------------------------------|
| $name     | Friendly name of the property.                       | String                                      |
| $datatype | The data type. See [Payloads](#payloads).            | Enum: \[integer, float, boolean,string, enum, color\] |

The following attributes are optional:

| Topic     | Description                                                                  |  Payload type |
|:----------|:-----------------------------------------------------------------------------|:--------------|
| $format   | Specifies restrictions or options for the given data type                    | See below     |
| $settable | Settable (<code>true</code>). Default is read-only (<code>false</code>)      | Boolean       |
| $retained | Non-retained (<code>false</code>). Default is Retained (<code>true</code>).  | Boolean       |

<!--
| $unit     | Optional unit of this property. See list below.  | String     |
-->

For example, our `temperature` property would send:

```java
mmrc/super-car/engine/temperature/$name → "Engine temperature"
mmrc/super-car/engine/temperature/$settable → "false"
mmrc/super-car/engine/temperature/$unit → "°C"
mmrc/super-car/engine/temperature/$datatype → "float"
mmrc/super-car/engine/temperature/$format → "-20:120"
mmrc/super-car/engine/temperature → "21.5"
```

Settable and retained:

* Properties can be **settable**.
  For example, you don't want your `temperature` property to be settable in case of a temperature sensor
  (like the car example), but to be settable in case of a thermostat.

* Properties can be **retained**.
  A property is retained by default. A non-retained property would be useful for momentary events (door bell pressed).

A combination of those flags compiles into this list:

* **retained + non-settable**: The node publishes a property state (temperature sensor)
* **retained + settable**: The node publishes a property state, and can receive commands for the property (by controller or other party) (lamp power)
* **non-retained + non-settable**: The node publishes momentary events (door bell pressed)
* **non-retained + settable**: The node publishes momentary events, and can receive commands for the property (by controller or other party) (brew coffee)

Format:

* For `integer` and `float`: Describes a range of payloads e.g. `10:15`
* For `enum`: `payload,payload,payload` for enumerating all valid payloads.
* For `color`:
  - `rgb` to provide colors in RGB format e.g. `255,255,0` for yellow.
  - `hsv` to provide colors in HSV format e.g. `60,100,100` for yellow.

<!--
Recommended unit strings:

* `°C`: Degree Celsius
* `°F`: Degree Fahrenheit
* `°`: Degree
* `L`: Liter
* `gal`: Galon
* `V`: Volts
* `W`: Watt
* `A`: Ampere
* `%`: Percent
* `m`: Meter
* `ft`: Feet
* `Pa`: Pascal
* `psi`: PSI
* `#`: Count or Amount

You are not limited to the recommended values, although they are the only well known ones that will have to be recognized by any MMRC consumer.
-->

### Property command topic

* `mmrc` / `device ID` / `node ID` / `property ID` / **`set`**: The device must subscribe to this topic if the property is **settable** (in case of actuators for example).

A MMRC controller publishes to the `set` command topic with non-retained messages only.

The assigned and processed payload must be reflected by the MMRC device in the property topic `mmrc` / `device ID` / `node ID` / `property ID` as soon as possible.
This property state update not only informs other devices about the change but closes the control loop for the commanding controller, important for deterministic interaction with the client device.

To give an example: A `kitchen-light` device exposing the `light` node with a settable `power` property subscribes to the topic `mmrc/kitchen-light/light/power/set` for commands:

```java
mmrc/kitchen-light/light/power/set ← "true"
```

In response the device will turn on the light and upon success update its `power` property state accordingly:

```java
mmrc/kitchen-light/light/power → "true"
```

