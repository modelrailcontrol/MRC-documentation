---
title: Restrictions
---
MMRC communicates through [MQTT](http://mqtt.org) and is hence based on the basic principles of MQTT topic publication and subscription.

### Topic IDs

An MQTT topic consists of one or more topic levels, separated by the slash character (`/`).
A topic level ID MAY contain lowercase letters from `a` to `z`, numbers from `0` to `9` as well as the hyphen character (`-`).

A topic level ID MUST NOT start or end with a hyphen (`-`).
The special character `$` is used and reserved for MMRC *attributes*.
<!--
The underscore (`_`) is used and reserved for MMRC *node arrays*.
-->

### Payload

- Every MQTT message payload MUST be sent as a UTF-8 encoded string
- The value published as payload MUST be valid for the respective property/attribute type as per the list below

#### String

- String types are limited to 268,435,456 characters
- An empty string ("") is a valid payload

#### Integer

- Integer types are UTF-8 encoded string literal representations of 64-bit signed whole numbers
- Integers range from -9,223,372,036,854,775,808 (-2<sup>63</sup>) to 9,223,372,036,854,775,807 (2<sup>63</sup>-1)
- The payload may only contain whole numbers and the negation character "-". No other characters including spaces (" ") are permitted
- A string with just a negation sign ("-") is not a valid payload
- An empty string ("") is not a valid payload

#### Float

- Float types are UTF-8 encoded string literal representations of 64-bit signed floating point numbers
- Floats range from 2<sup>-1074</sup> to (2-2<sup>-52</sup>)&ast;2<sup>1023</sup>
- The payload may only contain whole numbers, the negation character "-", the exponent character "e" or "E" and the decimal separator ".", no other characters, including spaces (" ") are permitted
- The dot character (".") is the decimal separator (used if necessary) and may only have a single instance present in the payload
- Representations of numeric concepts such as "NaN" (Not a Number) and "Infinity" are not a valid payload
- A string with just a negation sign ("-") is not a valid payload
- An empty string ("") is not a valid payload

#### Boolean

- Booleans must be converted to the string literals "true" or "false"
- Representation is case sensitive, e.g. "TRUE" or "FALSE" are not valid payloads.
- An empty string ("") is not a valid payload

#### Enum

- Enum payloads must be one of the values specified in the format definition of the property
- Enum payloads are case sensitive, e.g. "Car" will not match a format definition of "car"
- Payloads should have leading and trailing whitespace removed
- An empty string ("") is not a valid payload

#### Color

- Color payload validity varies depending on the property format definition of either "rgb" or "hsv"
- Both payload types contain comma separated whole numbers of differing restricted ranges
- The encoded string may only contain whole numbers and the comma character ",", no other characters are permitted, including spaces (" ")
- Payloads for type "rgb" contains 3 comma separated values of numbers with a valid range between 0 and 255. e.g. 100,100,100
- Payloads for type "hsv" contains 3 comma separated values of numbers. The first number has a range of 0 to 360, the second and third numbers have a range of 0 to 100.  e.g. 300,50,75
- An empty string ("") is not a valid payload


### QoS and retained messages

The nature of the MMRC convention makes it safe about duplicate messages, so the recommended QoS for reliability is **QoS 1**.
All messages defined in this convention MUST be sent as **retained**, UNLESS stated otherwise.


### Last will

MQTT only allows one last will message per connection.
MMRC requires a last will for the `mmrc` / `device ID` / `$state` attribute, see [Device Lifecycle](#device-behavior).
As a consequence a new MQTT connection to the broker is required per published device.

